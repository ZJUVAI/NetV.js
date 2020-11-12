/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Link used in renderer
 */
import { Transform } from '../../../interfaces';
import { LinkAttr, LinkManagerConfigs } from '../../interfaces';
import Link from '../../../link';
export declare class RenderLinkManager {
    private gl;
    private limit;
    private count;
    private width;
    private height;
    private pixelRatio;
    private program;
    private attributes;
    private idProgram;
    private idAttributes;
    private idTexture;
    private renderIdToIds;
    private idsToIndex;
    /**
     * create render link manager
     * @param gl WebGL context
     * @param params nessesary configs for link manager
     * @param idTexture texture store elements id of each pixel
     */
    constructor(gl: WebGL2RenderingContext, params: LinkManagerConfigs, idTexture: WebGLTexture);
    /**
     * change link's attribute
     * @param link link data
     * @param attribute attribute key to change
     */
    changeAttribute(link: Link, attribute: LinkAttr): void;
    /**
     * refresh all position of edges
     * @param links all link data
     */
    refreshPosition(links: Link[]): void;
    /**
     * clear link data
     * not actually erase data, but reset count
     */
    clearData(): void;
    /**
     * add links data to engine
     * @param links links data
     */
    addData(links: Link[]): void;
    /**
     * set Transform in Render Link
     * @param transform current transform(pan&zoom condition)
     */
    setTransform(transform: Transform): void;
    /**
     * render id to link ids(source and target)
     * @param renderId
     */
    getIdsByRenderId(renderId: number): [string, string];
    /**
     * draw links
     */
    draw(): void;
}
