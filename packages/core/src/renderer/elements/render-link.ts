/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Link used in renderer
 */

import { LinkManagerConfigs, Shaders } from '../interfaces'
import Link from '../../elements/link'
import { RenderElementManager } from './render-element'

export class RenderLinkManager extends RenderElementManager {
    /**
     * create render link manager
     * @param gl WebGL context
     * @param params nessesary configs for link manager
     * @param idTexture texture store elements id of each pixel
     */
    public constructor(
        gl: WebGL2RenderingContext,
        params: LinkManagerConfigs,
        shaders: Shaders,
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
     * refresh all position of edges
     * @param links all link data
     */
    public refreshPosition(links: Link[]) {
        const sourceAttribute = this.attributes.get('in_source')
        const targetAttribute = this.attributes.get('in_target')

        links.forEach((link, i) => {
            sourceAttribute.array[2 * i] = link.$_source.$_position.x
            sourceAttribute.array[2 * i + 1] = link.$_source.$_position.y

            targetAttribute.array[2 * i] = link.$_target.$_position.x
            targetAttribute.array[2 * i + 1] = link.$_target.$_position.y
        })

        const arr = [sourceAttribute, targetAttribute]
        arr.forEach((attr) => {
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer)
            this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, attr.array, 0, attr.size * links.length)
        })
    }
}
