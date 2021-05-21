import { Position } from "src/interfaces";

declare type QuadProps = {
    xmid: number;
    ymid: number;
    length: number;
    massCenter?: Position;
    mass?: number;
};
export default class Quad {
    xmid: number;
    ymid: number;
    length: number;
    massCenter: Position;
    mass: number;
    constructor(params: QuadProps){
        /**
         * the center position of this quad
         * @type  {number}
         */
        this.xmid = params.xmid;
        /**
         * the center position of this quad
         * @type  {number}
         */
        this.ymid = params.ymid;
        /**
         * the length of this quad
         * @type  {number}
         */
        this.length = params.length;
        /**
         * the mass center of this quad
         * @type  {number}
         */
        this.massCenter = params.massCenter || {x:0,y:0};
        /**
         * the mass of this quad
         * @type  {number}
         */
        this.mass = params.mass || 1;
    }
    getLength(){
        return this.length;
    };
    contains(x: number, y: number){
        var halfLen = this.length / 2;
        return (x <= this.xmid + halfLen &&
            x >= this.xmid - halfLen &&
            y <= this.ymid + halfLen &&
            y >= this.ymid - halfLen);
    };
    // northwest quadrant
    NW(){
        var x = this.xmid - this.length / 4;
        var y = this.ymid + this.length / 4;
        var len = this.length / 2;
        var params = {
            xmid: x,
            ymid: y,
            length: len
        };
        var NW = new Quad(params);
        return NW;
    };
    // northeast
    NE(){
        var x = this.xmid + this.length / 4;
        var y = this.ymid + this.length / 4;
        var len = this.length / 2;
        var params = {
            xmid: x,
            ymid: y,
            length: len
        };
        var NE = new Quad(params);
        return NE;
    };
    // southwest
    SW(){
        var x = this.xmid - this.length / 4;
        var y = this.ymid - this.length / 4;
        var len = this.length / 2;
        var params = {
            xmid: x,
            ymid: y,
            length: len
        };
        var SW = new Quad(params);
        return SW;
    };
    // southeast
    SE(){
        var x = this.xmid + this.length / 4;
        var y = this.ymid - this.length / 4;
        var len = this.length / 2;
        var params = {
            xmid: x,
            ymid: y,
            length: len
        };
        var SE = new Quad(params);
        return SE;
    };
}