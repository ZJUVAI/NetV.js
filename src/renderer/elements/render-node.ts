/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Node using in Renderer
 */

import { NodeManagerConfigs, Shaders } from '../interfaces'
import Node from '../../elements/node'
import { RenderElementManager } from './render-element'
import { Shader } from '../utils'

export class RenderNodeManager extends RenderElementManager {
    // private idToIndex: { [key: string]: number }

    /**
     * create render node manager
     * @param gl WebGL context
     * @param params nessesary configs for node manager
     * @param idTexture texture store elements id of each pixel
     */
    public constructor(
        gl: WebGL2RenderingContext,
        params: NodeManagerConfigs,
        shaders: Shaders,
        // shaders: ShaderSeries,
        idTexture: WebGLTexture
    ) {
        super(
            /* webgl context */ gl,
            // prettier-ignore
            /* parameters */ {...params, instanceVerteces: [
                -0.5, 0.5, 1.0,
                -0.5, -0.5, 1.0,
                0.5, 0.5, 1.0,
                0.5, -0.5, 1.0,
            ]},
            /* shader series */ {
                ...shaders
            },
            /* idTexture */ idTexture
        )
        this.renderIdToElement = {}
    }

    /**
     * refresh all nodes position after lazy update
     * @param nodes all node data
     */
    public refreshPosition(nodes: Node[]) {
        // set array
        const attr = this.attributes.get('in_position')
        nodes.forEach((node, i) => {
            attr.array[2 * i] = node.$_position.x
            attr.array[2 * i + 1] = node.$_position.y
        })

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer)
        this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, attr.array, 0, attr.size * nodes.length)
    }
}
