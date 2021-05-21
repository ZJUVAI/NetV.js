import Link from "src/elements/link";
import Node from "src/elements/node";
import { ILayout } from "./options";
import BaseLayout from "./base";
import RandomLayout  from "./random";
import GridLayout from "./grid";
import CircularLayout from "./circular";
import ConcentricLayout from "./concentric";
import FruchtermanLayout from "./fruchterman";
import GForceLayout from "./gForce";
import NetV from "src";
import ForceAtlas2Layout from "./forceAtlas2";

export default class Layout {
    readonly layoutInstance: BaseLayout;
    public type: String;
    public constructor(options: ILayout.LayoutOptions) {
        if(options.type === "none")
            console.warn("You are not using any layout, please make sure that the node location has been accurately defined.");
        this.type = options.type;
        var layoutClass = Layouts[options.type];
        this.layoutInstance = new layoutClass(options);
    }
    public layout(netv:NetV){
        return this.layoutInstance.layout(netv);
    };
    updateCfg(cfg: ILayout.LayoutOptions){
        this.layoutInstance.updateCfg(cfg);
    };
    init(netv:NetV){
        this.layoutInstance.init(netv);
    };
    execute(){
        this.layoutInstance.execute();
    };
    getDefaultCfg(){
        return this.layoutInstance.getDefaultCfg();
    };
    destroy(){
        return this.layoutInstance.destroy();
    };
}
export const Layouts = new Proxy(BaseLayout, {
    get: function (target, propKey) {
        switch(propKey){
            case "grid":return GridLayout;
            case "random":return RandomLayout;
            case "circular":return CircularLayout;
            case "concentric":return ConcentricLayout;
            case "fruchterman":return FruchtermanLayout;
            case "gforce":return GForceLayout;
            case "forceAtlas2":return ForceAtlas2Layout;
            default:return BaseLayout;
        }
    },
});