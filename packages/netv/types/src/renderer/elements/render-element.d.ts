import { RenderAttribute, Shaders } from '../interfaces';
import { Transform } from '../../interfaces';
import Node from '../../elements/node';
import Link from '../../elements/link';
export declare class RenderElementManager {
    attributes: Map<string, RenderAttribute>;
    pixelRatio: number;
    protected gl: WebGL2RenderingContext;
    protected capacity: number;
    protected count: number;
    protected width: number;
    protected height: number;
    protected program: WebGLProgram;
    protected idProgram: WebGLProgram;
    protected idAttributes: Map<string, RenderAttribute>;
    protected idTexture: WebGLTexture;
    protected renderIdToElement: {
        [key: number]: Node | Link;
    };
    protected elementToRenderId: Map<any, any>;
    constructor(gl: WebGL2RenderingContext, params: any, shaders: Shaders, idTexture: WebGLTexture);
    setRenderIdOf(element: Node | Link, renderId: number): void;
    getRenderIdOf(element: Node | Link): number;
    /**
     * render id to link ids(source and target)
     * @param renderId
     */
    getElementByRenderId(renderId: number): Node | Link;
    /**
     * set Transform in Render Link
     * @param transform current transform(pan&zoom condition)
     */
    setTransform(transform: Transform): void;
    draw(): void;
    /**
     * add element data to engine
     * @param elements elements data
     */
    addData(elements: Node[] | Link[]): void;
    /**
     * change an element's attribute
     * @param element link/node data
     * @param attribute attribute key to change
     */
    changeAttribute(element: Node | Link, attribute: string): void;
    /**
     * clear data
     * not actually erase data, but reset count
     */
    clearData(): void;
    protected getAttributeByElement(element: Link | Node, attributeName: string): any;
}
