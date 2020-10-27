import * as interfaces from '../interfaces'
import { NetV } from '../index'
import { override } from '../utils/utils'
import { RenderLinkManager } from 'src/renderer/elements/link/render-link'
import { RenderNodeManager } from 'src/renderer/elements/node/render-node'

export class Element {
    public $_style: interfaces.NodeStyle = {}
    protected $_core: NetV
    protected $_changeRenderAttribute: (element: Element, key: string) => void
    public constructor(core: NetV) {
        this.$_core = core
    }

    /**
     *
     * @param defaultStyle: the default style configs imported from Netv default configs and user default configs
     * @param individualStyle: the individual element style
     */
    public overrideDefaultStyle(
        defaultStyle,
        individualStyle: interfaces.NodeStyle | interfaces.LinkStyle
    ) {
        let style: any
        let shape = individualStyle?.shape || defaultStyle.shape
        // add default link style
        if (!individualStyle) {
            style = defaultStyle[defaultStyle.shape]
        } else {
            style = override(defaultStyle[shape], individualStyle)
        }
        style.shape = shape
        return style
    }

    public generateElementStyleGetterSetter(key: string) {
        return (value?: any) => {
            if (value !== undefined) {
                if (value === Object(value)) {
                    // value is an object
                    this.$_style[key] = { ...value, ...this.$_style[key] }
                } else {
                    this.$_style[key] = value
                }
                this.$_changeRenderAttribute(this, key)
            }
            return this.$_style[key]
        }
    }
}
