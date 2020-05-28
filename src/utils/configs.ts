import { Color } from 'src/interfaces'

export const defaultConfigs = {
    width: 800,
    height: 600,
    backgroundColor: { r: 1, g: 1, b: 1, a: 1 } as Color,
    enablePanZoom: true,
    defaultStyle: {
        node: {
            r: 5,
            fill: { r: 0.3, g: 0.5, b: 0.5, a: 0.5 } as Color,
            strokeColor: { r: 0.6, g: 0.6, b: 0.6, a: 0.5 } as Color,
            storkeWidth: 1
        },
        link: {
            strokeColor: { r: 0.5, g: 0.5, b: 0.5, a: 0.5 } as Color,
            storkeWidth: 2
        }
    }
}
