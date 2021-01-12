import * as interfaces from '../../interfaces'
import { RenderAttribute, Shaders } from '../interfaces'
import {
    createProgram,
    createArrayBuffer,
    extractAttributesFromShader,
    encodeRenderId
} from '../utils'
import { Transform } from '../../interfaces'
import Node from '../../elements/node'
import Link from '../../elements/link'

export class RenderElementManager {
    public attributes: Map<string, RenderAttribute>
    public pixelRatio: number

    protected gl: WebGL2RenderingContext
    // the capablity of the render manager,
    // which means how many elements can be rendered
    protected capacity: number
    protected count = 0
    protected width: number
    protected height: number

    protected program: WebGLProgram

    // id shaders are design for mapping canvas pixels to elements
    protected idProgram: WebGLProgram
    protected idAttributes: Map<string, RenderAttribute>
    protected idTexture: WebGLTexture

    protected renderIdToElement: { [key: number]: Node | Link }
    protected elementToRenderId = new Map()

    public constructor(
        gl: WebGL2RenderingContext,
        params: any,
        shaders: Shaders,
        idTexture: WebGLTexture
    ) {
        const { limit, width, height, instanceVerteces } = params
        this.gl = gl
        this.capacity = limit
        this.width = width
        this.height = height
        this.pixelRatio = window.devicePixelRatio || 1

        this.attributes = extractAttributesFromShader(shaders.vertex)
        this.program = createProgram(
            this.gl,
            shaders.vertex.connect(),
            shaders.fragment.connect(),
            this.attributes
        )

        this.idAttributes = extractAttributesFromShader(shaders.idVertex)
        this.idProgram = createProgram(
            this.gl,
            shaders.idVertex.connect(),
            shaders.idFragment.connect(),
            this.idAttributes
        )

        this.idTexture = idTexture

        // initial attributes arrays and buffers
        this.attributes.forEach((attr) => {
            if (!attr.isBuildIn) {
                attr.array = new Float32Array(attr.size * this.capacity)
            } else {
                // build in attribute: veteces positions
                // four verteces of one element (https://panjiacheng.site/wiki/2019/06/06/webGL/WebGL-BatchDraw%E4%BB%A3%E7%A0%81%E9%98%85%E8%AF%BB+%E7%90%86%E8%A7%A3/)
                // prettier-ignore
                attr.array = new Float32Array(instanceVerteces)
            }

            attr.buffer = createArrayBuffer(this.gl, attr.array)
        })

        // init id attributes and buffers
        this.idAttributes.forEach((attr, name) => {
            if (name === 'in_id') {
                // attr: in vec4 inId;
                // TODO: hardcode check, need refactor
                if (!attr.isBuildIn) attr.array = new Float32Array(attr.size * this.capacity)
                attr.buffer = createArrayBuffer(this.gl, attr.array)
            } else {
                this.idAttributes.set(name, this.attributes.get(name))
            }
        })

        // init uniforms
        this.gl.useProgram(this.program)
        // get uniform locations in Memory
        const projectionLocation = this.gl.getUniformLocation(this.program, 'projection')
        const scaleLocation = this.gl.getUniformLocation(this.program, 'scale')
        const translateLocation = this.gl.getUniformLocation(this.program, 'translate')
        const viewportLocation = this.gl.getUniformLocation(this.program, 'viewport')
        const pixelRatioLocation = this.gl.getUniformLocation(this.program, 'pixelRatio')

        // set uniform values
        // prettier-ignore
        const projection = new Float32Array([
            2 / this.width,                0, 0,
                         0, -2 / this.height, 0,
                        -1,                1, 1
        ])
        projectionLocation !== null &&
            this.gl.uniformMatrix3fv(projectionLocation, false, projection)

        const scale = new Float32Array([1, 1])
        scaleLocation !== null && this.gl.uniform2fv(scaleLocation, scale)

        const translate = new Float32Array([0, 0])
        translateLocation !== null && this.gl.uniform2fv(translateLocation, translate)

        const viewport = new Float32Array([this.width, this.height])
        viewportLocation !== null && this.gl.uniform2fv(viewportLocation, viewport)

        pixelRatioLocation !== null && this.gl.uniform1f(pixelRatioLocation, this.pixelRatio)

        // id uniforms, identical to node
        // TODO: need refactor too
        this.gl.useProgram(this.idProgram)
        const idProjectionLocation = this.gl.getUniformLocation(this.idProgram, 'projection')
        const idScaleLocation = this.gl.getUniformLocation(this.idProgram, 'scale')
        const idTranslateLocation = this.gl.getUniformLocation(this.idProgram, 'translate')
        const idViewportLocation = this.gl.getUniformLocation(this.idProgram, 'viewport')
        const idPixelRatioLocation = this.gl.getUniformLocation(this.idProgram, 'pixelRatio')

        idProjectionLocation !== null &&
            this.gl.uniformMatrix3fv(idProjectionLocation, false, projection)
        idScaleLocation !== null && this.gl.uniform2fv(idScaleLocation, scale)
        idTranslateLocation !== null && this.gl.uniform2fv(idTranslateLocation, translate)
        idViewportLocation !== null && this.gl.uniform2fv(idViewportLocation, viewport)
        idPixelRatioLocation !== null && this.gl.uniform1f(idPixelRatioLocation, this.pixelRatio)
    }

    public setRenderIdOf(element: Node | Link, renderId: number) {
        this.renderIdToElement[renderId] = element
        this.elementToRenderId.set(element, renderId)
    }

    public getRenderIdOf(element: Node | Link): number {
        return this.elementToRenderId.get(element)
    }

    /**
     * render id to link ids(source and target)
     * @param renderId
     */
    public getElementByRenderId(renderId: number): Node | Link {
        return this.renderIdToElement[renderId]
    }

    /**
     * set Transform in Render Link
     * @param transform current transform(pan&zoom condition)
     */
    public setTransform(transform: Transform) {
        this.gl.useProgram(this.program)
        const scaleLoc = this.gl.getUniformLocation(this.program, 'scale')
        const translateLoc = this.gl.getUniformLocation(this.program, 'translate')

        const scale = new Float32Array([transform.k, transform.k])
        this.gl.uniform2fv(scaleLoc, scale)

        const translate = new Float32Array([transform.x, transform.y])
        this.gl.uniform2fv(translateLoc, translate)

        // id uniforms, identical to link
        // TODO: need refactor too
        this.gl.useProgram(this.idProgram)
        const idScaleLoc = this.gl.getUniformLocation(this.idProgram, 'scale')
        const idTranslateLoc = this.gl.getUniformLocation(this.idProgram, 'translate')

        this.gl.uniform2fv(idScaleLoc, scale)
        this.gl.uniform2fv(idTranslateLoc, translate)
    }

    public draw() {
        if (this.count > 0) {
            this.gl.enable(this.gl.BLEND)
            this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)

            this.gl.useProgram(this.program)
            this.attributes.forEach((attr) => {
                this.gl.enableVertexAttribArray(attr.location)
            })

            this.attributes.forEach((attr, i) => {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer)
                this.gl.vertexAttribPointer(
                    attr.location,
                    attr.size,
                    this.gl.FLOAT,
                    false,
                    attr.size * attr.array.BYTES_PER_ELEMENT,
                    0
                )
                if (!attr.isBuildIn) this.gl.vertexAttribDivisor(attr.location, 1)
            })

            this.gl.drawArraysInstanced(this.gl.TRIANGLE_STRIP, 0, 4, this.count)

            // draw id
            this.gl.blendFunc(this.gl.ONE, this.gl.ZERO)
            this.gl.useProgram(this.idProgram)
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.idTexture)

            this.idAttributes.forEach((attr) => {
                this.gl.enableVertexAttribArray(attr.location)
            })

            const attr = this.idAttributes.get('in_id') // ! HARDCODE CHECK
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer)
            this.gl.vertexAttribPointer(
                attr.location,
                attr.size,
                this.gl.FLOAT,
                false,
                attr.size * attr.array.BYTES_PER_ELEMENT,
                0
            )
            this.gl.vertexAttribDivisor(attr.location, 1)

            this.gl.drawArraysInstanced(this.gl.TRIANGLE_STRIP, 0, 4, this.count)
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null)

            this.gl.enable(this.gl.BLEND)
            this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
        }
    }

    /**
     * add element data to engine
     * @param elements elements data
     */
    public addData(elements: Node[] | Link[]) {
        // set array
        elements.forEach((element: Node | Link, i) => {
            const index = this.count + i
            // link attribute => webgl attribute
            this.attributes.forEach((attr) => {
                if (!attr.isBuildIn) {
                    // const value = attr.extractAttributeValueFrom(element)
                    const value = this.getAttributeByElement(element, attr.name)
                    const array = value.value as number[]

                    array.forEach((v, j) => {
                        // inject into the Buffer Array
                        attr.array[attr.size * index + j] = v
                    })
                }
            })

            const offset = element.type === 'Node' ? 0 : 1 // NOTE: node render id, use even integer
            const renderId = 2 * index + offset
            const renderIdColor = encodeRenderId(renderId)
            this.idAttributes.get('in_id').array[4 * index] = renderIdColor.r
            this.idAttributes.get('in_id').array[4 * index + 1] = renderIdColor.g
            this.idAttributes.get('in_id').array[4 * index + 2] = renderIdColor.b
            this.idAttributes.get('in_id').array[4 * index + 3] = renderIdColor.a

            this.setRenderIdOf(element, renderId)
        })

        this.attributes.forEach((attr) => {
            if (!attr.isBuildIn) {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer)
                this.gl.bufferSubData(
                    this.gl.ARRAY_BUFFER,
                    attr.size * this.count * attr.array.BYTES_PER_ELEMENT,
                    attr.array,
                    attr.size * this.count,
                    attr.size * elements.length
                )
            }
        })

        // id buffer data
        const attr = this.idAttributes.get('in_id')
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer)
        this.gl.bufferSubData(
            this.gl.ARRAY_BUFFER,
            attr.size * this.count * attr.array.BYTES_PER_ELEMENT,
            attr.array,
            attr.size * this.count,
            attr.size * elements.length
        )

        this.count += elements.length
    }

    /**
     * change an element's attribute
     * @param element link/node data
     * @param attribute attribute key to change
     */
    public changeAttribute(element: Node | Link, attribute: string) {
        const renderId = this.getRenderIdOf(element)
        const index = Math.floor(renderId / 2)
        const shaderAttr = this.getAttributeByElement(element, attribute)
        const shaderVariableName = shaderAttr.name
        const shaderVariableValue = shaderAttr.value as number[]
        const attr = this.attributes.get(shaderVariableName)
        if (attr === undefined) {
            console.error(`Attribute: ${attribute} is not supported in a ${element.type} instance.`)
        }
        // const data = attr.extractAttributeValueFrom(element)
        attr.array.set(shaderVariableValue, attr.size * index)
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer)
        this.gl.bufferSubData(
            this.gl.ARRAY_BUFFER,
            attr.size * index * attr.array.BYTES_PER_ELEMENT,
            attr.array,
            attr.size * index,
            attr.size
        )
    }

    /**
     * clear data
     * not actually erase data, but reset count
     */
    public clearData() {
        this.count = 0
    }

    protected getAttributeByElement(element: Link | Node, attributeName: string) {
        let map
        if (element.type === 'Link') {
            const link = element as Link
            const style = link.$_style as interfaces.LinkStyle

            map = {
                valid: {
                    name: 'in_valid',
                    value: [link.$_valid]
                },
                source: {
                    name: 'in_source',
                    value: [link.$_source.$_position.x, link.$_source.$_position.y]
                },
                target: {
                    name: 'in_target',
                    value: [link.$_target.$_position.x, link.$_target.$_position.y]
                },
                shape: {
                    name: 'in_shape',
                    value: [style.shape === 'dash-line' ? 2 : style.shape === 'curve' ? 1 : 0]
                },
                strokeWidth: {
                    name: 'in_strokeWidth',
                    value: [style.strokeWidth]
                },
                strokeColor: {
                    name: 'in_strokeColor',
                    value: [
                        style.strokeColor.r,
                        style.strokeColor.g,
                        style.strokeColor.b,
                        style.strokeColor.a
                    ]
                },
                curveness: {
                    name: 'in_curveness',
                    value: [style.curveness]
                },
                dashInterval: {
                    name: 'in_dashInterval',
                    value: [style.dashInterval]
                }
            }
        } else {
            const node = element as Node
            const style = node.$_style as interfaces.NodeStyle

            map = {
                valid: {
                    name: 'in_valid',
                    value: [node.$_valid]
                },
                position: {
                    name: 'in_position',
                    value: [node.$_position.x, node.$_position.y]
                },
                shape: {
                    name: 'in_shape',
                    value: [
                        style.shape === 'rect'
                            ? 1
                            : style.shape === 'triangle'
                            ? 2
                            : style.shape === 'cross'
                            ? 3
                            : 0
                    ]
                },
                offset: {
                    name: 'in_offset',
                    value: [style.offset.x, style.offset.y]
                },
                fill: {
                    name: 'in_fill',
                    value: [style.fill.r, style.fill.g, style.fill.b, style.fill.a]
                },
                strokeWidth: {
                    name: 'in_strokeWidth',
                    value: [style.strokeWidth]
                },
                strokeColor: {
                    name: 'in_strokeColor',
                    value: [
                        style.strokeColor.r,
                        style.strokeColor.g,
                        style.strokeColor.b,
                        style.strokeColor.a
                    ]
                },
                rotate: {
                    name: 'in_rotate',
                    value: [style.rotate]
                },
                /* circle */
                r: {
                    name: 'in_r',
                    value: [style.r]
                },
                /* rect */
                width: {
                    name: 'in_size',
                    value: [style.width, style.height]
                },
                height: {
                    name: 'in_size',
                    value: [style.width, style.height]
                },
                /* triangle */
                vertexAlpha: {
                    name: 'in_vertexAlpha',
                    value: [style.vertexAlpha.x, style.vertexAlpha.y]
                },
                vertexBeta: {
                    name: 'in_vertexBeta',
                    value: [style.vertexBeta.x, style.vertexBeta.y]
                },
                vertexGamma: {
                    name: 'in_vertexGamma',
                    value: [style.vertexGamma.x, style.vertexGamma.y]
                },
                /* cross */
                innerWidth: {
                    name: 'in_innerSize',
                    value: [style.innerWidth, style.innerHeight]
                },
                innerHeight: {
                    name: 'in_innerSize',
                    value: [style.innerWidth, style.innerHeight]
                }
            }
        }

        if (attributeName in map) {
            return map[attributeName]
        }

        const reversed_map = {}
        Object.entries(map).forEach(([k, v]) => {
            const value = v as any
            const key = k as string
            reversed_map[value.name] = {
                name: key,
                value: value.value
            }
        })

        return reversed_map[attributeName]
    }
}
