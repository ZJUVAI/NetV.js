import NetV from 'src';
import Link from 'src/elements/link';
import Node from 'src/elements/node';
import { Position} from '../interfaces'
export default class BaseLayout {
    nodes: Node[] | null;
    links: Link[] | null;
    netv: NetV | null;
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
    public layout(netv:NetV) {
        this.init(netv);
        return this.execute(true);
    };
    public init(netv:NetV) {
        this.netv = netv;
        this.nodes = netv.nodes() || [];
        this.links = netv.links() || [];
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