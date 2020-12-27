/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description basic example, draw a simple graph given data, it has least configuration
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
            target: '2'
        },
        {
            source: '1',
            target: '2'
        }
    ]
}

const netv = new NetV({
    container: document.getElementById('main')
})
netv.data(testData)
netv.draw()
