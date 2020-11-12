/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Map2 is a Map data structure which maps two keys to one value.
 * @Usage same to Map data structure in ES6.
 * @dependences None
 */
declare class Map2 {
    private map;
    constructor(entries?: Array<Array<any>>);
    get size(): number;
    delete(keys: Array<string>): void;
    set(keys: Array<string>, value: any): this;
    get(keys: Array<string>): any;
    has(keys: Array<string>): boolean;
    forEach(func: Function): void;
    entries(): any[][];
    keys(): any[];
    values(): any[];
}
export default Map2;
