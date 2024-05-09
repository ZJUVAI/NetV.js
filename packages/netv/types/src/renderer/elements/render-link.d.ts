/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Link used in renderer
 */
import { LinkManagerConfigs, Shaders } from '../interfaces';
import Link from '../../elements/link';
import { RenderElementManager } from './render-element';
export declare class RenderLinkManager extends RenderElementManager {
    /**
     * create render link manager
     * @param gl WebGL context
     * @param params nessesary configs for link manager
     * @param idTexture texture store elements id of each pixel
     */
    constructor(gl: WebGL2RenderingContext, params: LinkManagerConfigs, shaders: Shaders, idTexture: WebGLTexture);
    /**
     * refresh all position of edges
     * @param links all link data
     */
    refreshPosition(links: Link[]): void;
}
