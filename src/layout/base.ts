import NetV from 'src';
import { isCircle, isRect, Link, Node } from './util';
import { Position} from '../interfaces'
export default class BaseLayout {
    nodes: Node[] | null;
    links: Link[] | null;
    core: NetV | null;
    positions: Position[] | number[][] | null;
    destroyed: boolean;
    onLayoutEnd: () => void;
    public constructor() {
        this.nodes = [];
        this.links = [];
        this.positions = [];
        this.destroyed = false;
        this.onLayoutEnd = function () { };
    }
    public layout(core:NetV) {
        this.init(core);
        return this.execute();
    };
    public init(core:NetV) {
        this.core = core;
        this.nodes = core.nodes().map((node,index)=>{
            let res:Node = {
                x: node.x(),
                y:node.y(),
                id:node.id(),
                index:index,
                shape:node.shape(),
                size:isRect(node)?[node.width(),node.height()]:
                     isCircle(node)?[node.r(),node.r()]:[5,5]
            };
            return res;
        }) || [];
        this.links = core.links().map((link,index)=>{
            let res:Link = {
                source:link.source().id(),
                target:link.target().id(),
                width:link.strokeWidth()
            }
            return res;
        }) || [];
    };
    /**
     * @override if you need to interact with core directly (such as some animation interactions), please override this function
     */
    protected execute() { 
        let data = this.process();
            data.nodes.forEach(node=>{
                let element = this.core.getNodeById(node.id);
                element.x(node.x);
                element.y(node.y);
                element.shape(node.shape);
                if(isRect(node.shape)){
                    element.width(node.size[0]);
                    element.height(node.size[1]);
                }
                else if(isCircle(node.shape)){
                    element.r(node.size[0]);
                }
            });
            data.links.forEach(link=>{
                let element = this.core.getLinkByEnds(link.source,link.target);
                element.strokeWidth(link.width);
            })
    };
    /**
     * @override if you need to process the data only once, please override this function
     * @returns node-link data
     */
    protected process() : {nodes:Node[],links:Link[]}{
        return {
            nodes:this.nodes,
            links:this.links
        }
    }
    public getDefaultCfg() {
        return {};
    };
    public updateCfg(cfg?) {
        if (cfg) {
            Object.assign(this, cfg);
        }
    };
    public getType() {
        return 'base';
    };
    public destroy() {
        this.nodes = null;
        this.links = null;
        this.positions = null;
        this.destroyed = true;
    };
}