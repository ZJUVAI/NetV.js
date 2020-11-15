import * as interfaces from '../interfaces'
import NetV from '../index'
import { override } from '../utils/utils'
import { elementReservedKeys } from '../configs'

export default class Element {
    public $_style: interfaces.NodeStyle | interfaces.LinkStyle = {}
    public $_clickCallback: (element: Element) => void
    public $_hoverCallback: (element: Element) => void

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

        // TODO this.onClick(data?.clickCallback || defaultConfigs[type].clickCallback)
        // TODO this.onHover(data?.hoverCallback || defaultConfigs[type].hoverCallback)

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
        if (eventName === 'click') {
            this.$_core.$_interactionManager.clickListenedElementsCount += 1
            // TODO this.$_clickCallback = callback
        } else if (eventName === 'hover') {
            this.$_core.$_interactionManager.hoverListenedElementsCount += 1
            // TODO this.$_hoverCallback = callback
        } else if (eventName === 'drag') {
            if (this.constructor.name === 'Node') {
                // only node can be dragged
                this.$_core.$_interactionManager.dragListenedElementsCount += 1
                // TODO  this.$_hoverCallback = callback
            }
        }
    }

    /**
     * @param {string} eventName
     * @param {(e: any) => any} callback
     * @memberof Element
     */
    public off(eventName: string, callback: (e: any) => any) {
        if (eventName === 'click') {
            this.$_core.$_interactionManager.clickListenedElementsCount -= 1
            // TODO this.$_clickCallback = callback
        } else if (eventName === 'hover') {
            this.$_core.$_interactionManager.hoverListenedElementsCount -= 1
            // TODO this.$_hoverCallback = callback
        } else if (eventName === 'drag') {
            if (this.constructor.name === 'Node') {
                // only node can be dragged
                this.$_core.$_interactionManager.dragListenedElementsCount -= 1
                // TODO this.$_hoverCallback = callback
            }
        }
    }

    // /**
    //  * set hover callback function
    //  * @param callback hover callback function
    //  */
    // public onHover(callback: (element: Element) => void) {
    //     this.$_hoverCallback = callback
    // }

    // /**
    //  * set click callback function
    //  * @param callback click callback function
    //  */
    // public onClick(callback: (element: Element) => void) {
    //     this.$_clickCallback = callback
    // }

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
