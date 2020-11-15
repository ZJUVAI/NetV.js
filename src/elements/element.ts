import * as interfaces from '../interfaces'
import NetV from '../index'
import { override } from '../utils/utils'
import { elementReservedKeys } from '../configs'

export default class Element {
    public $_style: interfaces.NodeStyle | interfaces.LinkStyle = {}
    public $_mousedownCallbackSet: Set<(e: any) => void>
    public $_mouseupCallbackSet: Set<(e: any) => void>
    public $_hoverCallbackSet: Set<(e: any) => void>
    public $_dragstartCallbackSet: Set<(e: any) => void>
    public $_draggingCallbackSet: Set<(e: any) => void>
    public $_dragendCallbackSet: Set<(e: any) => void>

    protected $_core: NetV
    protected $_changeRenderAttribute: (element: Element, key: string) => void

    protected $_attributes = {}

    public constructor(core: NetV, data: interfaces.NodeData | interfaces.LinkData) {
        const type = this.constructor.name.toLowerCase()
        this.$_core = core
        const defaultConfigs = this.$_core.$_configs

        // set attributes
        for (const key in data) {
            if (!elementReservedKeys.has(key)) {
                this.$_attributes[key] = data[key]
            }
        }

        // override default style with user specified style in data
        this.$_style = override(defaultConfigs[type].style, data.style)

        const renderManager = this.$_core.$_renderer[`${type}Manager`]
        this.$_changeRenderAttribute = renderManager.changeAttribute.bind(renderManager)

        // generate style methods, e.g.: node.r(), link.strokeWidth()
        Object.keys(this.$_style).forEach((key) => {
            // generate style functions
            this[key] = this.generateElementStyleGetterSetter(key)
        })
    }

    /**
     * @param {string} eventName
     * @param {(e: any) => any} callback
     * @memberof Element
     */
    public on(eventName: string, callback: (e: any) => any) {
        if (
            eventName.slice(0, 4) !== 'drag' ||
            (eventName.slice(0, 4) === 'drag' && this.constructor.name === 'Node') // only node can be dragged
        ) {
            const callbackSetName = `$_${eventName}CallbackSet`
            this[callbackSetName]?.add(callback)
            if (this[callbackSetName]) {
                this.$_core.$_interactionManager.changeMouseEventCallbackCountBy(1)
            }
        }
    }

    /**
     * @param {string} eventName
     * @param {(e: any) => any} callback
     * @memberof Element
     */
    public off(eventName: string, callback: (e: any) => any) {
        if (
            eventName.slice(0, 4) !== 'drag' ||
            (eventName.slice(0, 4) === 'drag' && this.constructor.name === 'Node') // only node can be dragged
        ) {
            const callbackSetName = `$_${eventName}CallbackSet`
            this[callbackSetName]?.delete(callback)
            if (this[callbackSetName]) {
                this.$_core.$_interactionManager.changeMouseEventCallbackCountBy(-1)
            }
        }
    }

    /**
     * get/set custom attributes
     * @param key
     * @param value
     */
    public attr(key: string, value?: any) {
        if (value !== undefined) {
            this.$_attributes[key] = value
        }
        return this.$_attributes[key]
    }

    private generateElementStyleGetterSetter(key: string) {
        return (value?: any) => {
            if (value !== undefined) {
                if (value === Object(value)) {
                    // value is an object
                    this.$_style[key] = override(this.$_style[key], value) // { ...this.$_style[key], ...value }
                } else {
                    this.$_style[key] = value
                }
                this.$_changeRenderAttribute(this, key)
            }
            return this.$_style[key]
        }
    }
}
