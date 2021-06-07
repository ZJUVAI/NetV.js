import * as interfaces from '../interfaces'
import NetV from '../index'
import { override } from '../utils/utils'
import { EMPTY_FUNCTION } from '../utils/const'

export default class Element {
    public readonly type: string
    public $_style: interfaces.NodeStyle | interfaces.LinkStyle = {}
    public $_mousedownCallbackSet: Set<(e: any) => void> = new Set()
    public $_mouseupCallbackSet: Set<(e: any) => void> = new Set()
    public $_mouseoverCallbackSet: Set<(e: any) => void> = new Set()
    public $_mouseoutCallbackSet: Set<(e: any) => void> = new Set()
    public $_mousemoveCallbackSet: Set<(e: any) => void> = new Set()
    public $_clickCallbackSet: Set<(e: any) => void> = new Set()

    protected $_core: NetV
    protected $_changeRenderAttribute: (element: Element, key: string) => void

    protected $_attributes = {}

    public constructor(
        core: NetV,
        data: interfaces.NodeData | interfaces.LinkData,
        type: 'Node' | 'Link'
    ) {
        this.$_core = core
        this.type = type
        const defaultConfigs = this.$_core.$_configs

        // override default style with user specified style in data
        // this.$_style = override(defaultConfigs[type].style, data.style)
        this.$_style = JSON.parse(JSON.stringify(defaultConfigs[this.type.toLowerCase()].style))
        if ('style' in data) {
            Object.entries(data.style).forEach(([key, value]) => {
                const style = value
                const name = key
                if (style !== Object(style)) {
                    // style is not an object
                    this.$_style[name] = style
                } else {
                    // ! if the depth of style is more than one, it can cause bugs
                    // ! e.g. style = { xx: {...}, yy: ... }
                    this.$_style[name] = {
                        ...this.$_style[name],
                        ...style
                    }
                }
            })
        }

        const renderManager = this.$_core.$_renderer[`${this.type.toLowerCase()}Manager`]
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
    public on(eventName: string, callback?: (e: any) => any) {
        if (
            eventName.slice(0, 4) !== 'drag' ||
            (eventName.slice(0, 4) === 'drag' && this.type === 'Node') // only node can be dragged
        ) {
            const callbackSetName = `$_${eventName}CallbackSet`
            this[callbackSetName]?.add(callback ? callback : EMPTY_FUNCTION)
            if (this[callbackSetName]) {
                this.$_core.$_interactionManager.increaseMouseEventCallbackCountBy(1)
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
            (eventName.slice(0, 4) === 'drag' && this.type === 'Node') // only node can be dragged
        ) {
            const callbackSetName = `$_${eventName}CallbackSet`
            this[callbackSetName]?.delete(callback ? callback : EMPTY_FUNCTION)
            if (this[callbackSetName]) {
                this.$_core.$_interactionManager.decreaseMouseEventCallbackCountBy(1)
            }
        }
    }

    /**
     * get/set custom attributes
     * @param key
     * @param value
     */
    public attr(key: string, value?: any) {
        if (arguments.length === 2) {
            this.$_attributes[key] = value
        } else if (arguments.length === 1) {
            return this.$_attributes[key]
        } else if (arguments.length === 0) {
            return JSON.parse(JSON.stringify(this.$_attributes))
        }
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
