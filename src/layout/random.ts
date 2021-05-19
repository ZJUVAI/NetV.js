import { Position } from 'src/interfaces';
import {RandomLayoutOptions} from './options'
import BaseLayout from './base'
import Node from 'src/elements/node';
import Link from 'src/elements/link';
export default class RandomLayout extends BaseLayout {
    /** 布局中心 */
    center: Position;
    /** 宽度 */
    width: number;
    /** 高度 */
    height: number;
    nodes: Node[];
    links: Link[];
    /** 迭代结束的回调函数 */
    onLayoutEnd: () => void;
    public constructor(options?: RandomLayoutOptions){
        super();
        this.center = {x:0,y:0};
        /** 宽度 */
        this.width = 500;
        /** 高度 */
        this.height = 500;
        this.nodes = [];
        this.links = [];
        /** 迭代结束的回调函数 */
        this.onLayoutEnd = function () { };
        this.updateCfg(options);
        return this;
    }
    public getDefaultCfg() {
        return {
            center: {x:0,y:0},
            width: 500,
            height: 500
        };
    };
    /**
     * 执行布局
     */
    execute(){
        var self = this;
        var nodes = self.nodes;
        var layoutScale = 0.9;
        var center = self.center;
        if (!self.width && typeof window !== "undefined") {
            self.width = window.innerWidth;
        }
        if (!self.height && typeof window !== "undefined") {
            self.height = window.innerHeight;
        }
        if (nodes) {
            nodes.forEach(function (node) {
                node.x((Math.random() - 0.5) * layoutScale * self.width + center.x);
                node.y((Math.random() - 0.5) * layoutScale * self.height + center.y);
            });
        }
        if (self.onLayoutEnd)
            self.onLayoutEnd();
        return {
            nodes: nodes,
            links: this.links
        };
    };
    getType(){
        return "random";
    };
}
