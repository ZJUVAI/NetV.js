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
        nodes.forEach((node, i) => {
            // TODO: consider node and render node attribute mapping
            const name = 'in_position'
            const attribute = this.attributes.get(name)
            const value = this.getAttributeByElement(node, name)
            const array = value.value as number[]
            attribute.array[2 * i] = array[0]
            attribute.array[2 * i + 1] = array[1]
        })

        this.attributes.forEach((attr) => {
            if (!attr.isBuildIn) {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer)
                this.gl.bufferSubData(
                    this.gl.ARRAY_BUFFER,
                    0,
                    attr.array,
                    0,
                    attr.size * nodes.length
                )
            }
        })
    }
}
