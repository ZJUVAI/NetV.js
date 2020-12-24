/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Link used in renderer
 */

import * as interfaces from '../../interfaces'
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

        // this.attributes.forEach((attr) => {
        //     if (attr.name === 'in_source') {
        //         attr.extractAttributeValueFrom = (link: Link) => {
        //             const sourcePosition = link.source().position()
        //             return [sourcePosition.x, sourcePosition.y]
        //         }
        //     } else if (attr.name === 'in_target') {
        //         attr.extractAttributeValueFrom = (link: Link) => {
        //             const targetPosition = link.target().position()
        //             return [targetPosition.x, targetPosition.y]
        //         }
        //     } else if (attr.name === 'in_strokeWidth') {
        //         attr.extractAttributeValueFrom = (link: Link) => {
        //             return [link.strokeWidth() * this.pixelRatio]
        //         }
        //     } else if (attr.name === 'in_strokeColor') {
        //         attr.extractAttributeValueFrom = (link: Link) => {
        //             const strokeColor = link.strokeColor()
        //             return [strokeColor.r, strokeColor.g, strokeColor.b, strokeColor.a]
        //         }
        //     } else if (attr.name === 'in_curveness') {
        //         attr.extractAttributeValueFrom = (link: Link) => {
        //             return [link.curveness()]
        //         }
        //     } else if (attr.name === 'in_shape') {
        //         attr.extractAttributeValueFrom = (link: Link) => {
        //             const shape = link.shape()
        //             if (shape === 'curve') {
        //                 return [1]
        //             } else {
        //                 return [0]
        //             }
        //         }
        //     }
        // })
    }

    /**
     * refresh all position of edges
     * @param links all link data
     */
    public refreshPosition(links: Link[]) {
        let count = 0 // TODO: useless count
        links.forEach((link, i) => {
            // TODO: consider link and render link attribute mapping
            const source = link.source()
            const sourcePosition = source.position()
            this.attributes.get('in_source').array[2 * (count + i)] = sourcePosition.x
            this.attributes.get('in_source').array[2 * (count + i) + 1] = sourcePosition.y

            const target = link.target()
            const targetPosition = target.position()
            this.attributes.get('in_target').array[2 * (count + i)] = targetPosition.x
            this.attributes.get('in_target').array[2 * (count + i) + 1] = targetPosition.y

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
