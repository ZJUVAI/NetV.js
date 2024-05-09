/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Node using in Renderer
 */
import { NodeManagerConfigs, Shaders } from '../interfaces';
import Node from '../../elements/node';
import { RenderElementManager } from './render-element';
export declare class RenderNodeManager extends RenderElementManager {
    /**
     * create render node manager
     * @param gl WebGL context
     * @param params nessesary configs for node manager
     * @param idTexture texture store elements id of each pixel
     */
    constructor(gl: WebGL2RenderingContext, params: NodeManagerConfigs, shaders: Shaders, idTexture: WebGLTexture);
    /**
     * refresh all nodes position after lazy update
     * @param nodes all node data
     */
    refreshPosition(nodes: Node[]): void;
}
