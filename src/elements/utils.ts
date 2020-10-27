import { override } from '../utils/utils'
import { NodeStyle, LinkStyle } from '../interfaces'

/**
 *
 * @param defaultStyle: the default style configs imported from Netv default configs and user default configs
 * @param individualStyle: the individual element style
 */
export function overrideDefaultStyle(defaultStyle, individualStyle: NodeStyle | LinkStyle) {
    let style: any
    // add default link style
    if (!individualStyle) {
        style = defaultStyle[defaultStyle.shape]
    } else {
        let shape = individualStyle?.shape || defaultStyle.shape
        style = override(defaultStyle[shape], individualStyle)
        style.shape = shape
    }
    return style
}
