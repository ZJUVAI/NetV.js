/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Link used in renderer
 */

import { LinkManagerConfigs, ShaderSeries } from '../interfaces'
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
        shaders: ShaderSeries,
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
        let count = 0 // TODO: useless count
        links.forEach((link, i) => {
            // TODO: consider link and render link attribute mapping
            const sourceName = 'in_source'
            const sourceAttribute = this.attributes.get(sourceName)
            const sourceValue = this.getAttributeByElement(link, sourceName)
            const sourceArray = sourceValue.value as number[]
            sourceAttribute.array[2 * i] = sourceArray[0]
            sourceAttribute.array[2 * i + 1] = sourceArray[1]

            const targetName = 'in_target'
            const targetAttribute = this.attributes.get(targetName)
            const targetValue = this.getAttributeByElement(link, targetName)
            const targetArray = targetValue.value as number[]
            targetAttribute.array[2 * i] = targetArray[0]
            targetAttribute.array[2 * i + 1] = targetArray[1]

            // currently no need for color&renderId change
            /*
            this.attributes[LinkAttrKey.WIDTH].array[this.count + i] =
                link.strokeWidth() * this.pixelRatio

            const color = link.strokeColor()
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i)] = color.r
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i) + 1] = color.g
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i) + 2] = color.b
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i) + 3] = color.a

            const renderIdColor = encodeRenderId(2 * (this.count + i) + 1) // NOTE: link render id, use odd integer
            this.idAttributes.get('in_id').array[4 * (this.count + i)] = renderIdColor.r
            this.idAttributes.get('in_id').array[4 * (this.count + i) + 1] = renderIdColor.g
            this.idAttributes.get('in_id').array[4 * (this.count + i) + 2] = renderIdColor.b
            this.idAttributes.get('in_id').array[4 * (this.count + i) + 3] = renderIdColor.a
            */
        })

        const sourceAttr = this.attributes.get('in_source')
        const targetAttr = this.attributes.get('in_target')

        const arr = [sourceAttr, targetAttr]

        arr.forEach((attr) => {
            if (!attr.isBuildIn) {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer)
                this.gl.bufferSubData(
                    this.gl.ARRAY_BUFFER,
                    attr.size * count * attr.array.BYTES_PER_ELEMENT,
                    attr.array,
                    attr.size * count,
                    attr.size * links.length
                )
            }
        })
    }
}
