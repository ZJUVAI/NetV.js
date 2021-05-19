import Link from 'src/elements/link';
import Node from 'src/elements/node';
import { Position} from '../interfaces'
export default class BaseLayout {
    nodes: Node[] | null;
    links: Link[] | null;
    positions: Position[] | null;
    destroyed: boolean;
    onLayoutEnd: () => void;
    public constructor() {
        this.nodes = [];
        this.links = [];
        this.positions = [];
        this.destroyed = false;
        this.onLayoutEnd = function () { };
    }
    public layout(nodes:Node[],links:Link[]) {
        this.init(nodes,links);
        return this.execute(true);
    };
    public init(nodes:Node[],links:Link[]) {
        this.nodes = nodes || [];
        this.links = links || [];
    };
    public execute(reloadData?:boolean) { };
    public executeWithWorker() { };
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