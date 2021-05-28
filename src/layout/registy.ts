import BaseLayout from "./base";

const map = new Map();
export function registerLayout(name: string | symbol, layoutOverride: any){
    if (map.get(name)) {
        console.warn("The layout with the name " + name.toString() + " exists already, it will be overridden");
    }
    if (typeof layoutOverride === "object") {
        // tslint:disable-next-line: max-classes-per-file
        var GLayout = class extends BaseLayout{
            constructor(options?) {
                super();
                var props = {};
                var defaultCfg = this.getDefaultCfg();
                Object.assign(props, defaultCfg, layoutOverride, options);
                Object.keys(props).forEach(function (key) {
                    var value = props[key];
                    self[key] = value;
                });
                return this;
            }
        }
        map.set(name, GLayout);
    }
    else {
        map.set(name, layoutOverride);
    }
};
export function unRegisterLayout (name: string | symbol){
    if (map.has(name)) {
        map.delete(name);
    }
};
export function getLayoutByName (name: string | symbol){
    if (map.has(name)) {
        return map.get(name);
    }
    return null;
};