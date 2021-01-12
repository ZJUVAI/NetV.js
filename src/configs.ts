/**
 * @description default configurations in NetV
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 */
export const width = 800
export const height = 600
export const backgroundColor = { r: 1, g: 1, b: 1, a: 1 }
export const enablePanZoom = true
export const nodeLimit = 100
export const linkLimit = 1000

export const node = {
    style: {
        shape: 'circle', // default shape
        offset: { x: 0, y: 0 },
        fill: { r: 0.2, g: 0.6, b: 0.2, a: 1 },
        strokeColor: { r: 0.9, g: 0.9, b: 0.9, a: 0.6 },
        strokeWidth: 2,
        /* circle shape styles */
        r: 10,
        /* rect shape styles */
        width: 5,
        height: 5,
        innerWidth: 5,
        innerHeight: 5,
        rotate: 0, // -pi to +pi, positive value means clockwise
        /* triangle shape styles */
        vertexAlpha: { x: 0, y: -4 },
        vertexBeta: { x: -2 * Math.sqrt(3), y: 2 },
        vertexGamma: { x: 2 * Math.sqrt(3), y: 2 }
    }
}

export const link = {
    style: {
        shape: 'line',
        strokeColor: { r: 0.4, g: 0.6, b: 0.8, a: 0.5 },
        strokeWidth: 2,
        /* curve shape style */
        curveness: 0.2,
        dashInterval: 5
    }
}
