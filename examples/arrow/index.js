/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description arrow example
 */
const testData = {
    nodes: [
        {
            id: '0',
            x: 300,
            y: 100
        },
        {
            id: '1',
            x: 500,
            y: 100
        },
        {
            id: '2',
            x: 400,
            y: 400
        }
    ],
    links: [
        {
            source: '0',
            target: '2',
            style: {
                arrowType: '->',
            }
        },
        {
            source: '1',
            target: '2',
            style: {
                arrowType: '<-',
                arrowOffset: 15,
                arrowSize: 5,
                arrowColor: { r: 0.8, g: 0.5, b: 0.2, a: 1 }
            }
        }
    ]
}

const netv = new NetV({
    container: document.getElementById('main')
})
netv.data(testData)
netv.draw()
