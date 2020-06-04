/**
 * @description default configurations in NetV
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 */

export const container = {
    width: 800,
    height: 600,
    backgroundColor: { r: 1, g: 1, b: 1, a: 1 },
    enablePanZoom: true
}

export const node = {
    r: 5,
    fill: { r: 0.3, g: 0.5, b: 0.5, a: 0.5 },
    strokeColor: { r: 0.6, g: 0.6, b: 0.6, a: 0.5 },
    storkeWidth: 1
}

export const link = {
    strokeColor: { r: 0.5, g: 0.5, b: 0.5, a: 0.5 },
    storkeWidth: 2
}

export const nodeLimit = 100
export const linkLimit = 1000
