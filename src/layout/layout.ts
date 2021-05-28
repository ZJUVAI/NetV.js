import { ILayout } from "./options";
import BaseLayout from "./base";
import NetV from "src";
import { getLayoutByName, registerLayout } from "./registy";

export default class Layout {
    readonly layoutInstance: BaseLayout;
    public type: string;
    public constructor(options: ILayout.LayoutOptions) {
        if(!options || !options.type){
            this.type = "base"
        }
        else this.type = options.type;
        var layoutClass = Layouts[this.type.toString()];
        this.layoutInstance = new layoutClass(options);
    }
    public layout(core:NetV){
        return this.layoutInstance.layout(core);
    };
    updateCfg(cfg: ILayout.LayoutOptions){
        this.layoutInstance.updateCfg(cfg);
    };
    init(core:NetV){
        this.layoutInstance.init(core);
    };
    getDefaultCfg(){
        return this.layoutInstance.getDefaultCfg();
    };
    destroy(){
        return this.layoutInstance.destroy();
    };
}
export const Layouts : {[key: string]: any;} = new Proxy(BaseLayout, {
    get: function (target, propKey) {
        return getLayoutByName(propKey.toString());
    },
    set: function (target, propKey, value) {
        registerLayout(propKey.toString(), value);
        return true;
    }
});
