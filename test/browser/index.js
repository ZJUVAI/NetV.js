const netv = new NetV(document.getElementById('main'))
const testData = [
    {
        id: '0',
        x: 10,
        y: 10,
        r: 10,
        fill: {
            r: 1,
            g: 0,
            b: 0,
            a: 1
        }
    },
    {
        id: '1',
        x: 30,
        y: 50,
        r: 5,
        fill: {
            r: 0,
            g: 1,
            b: 0,
            a: 1
        }
    }
]

netv.$_renderer.nodeManager.addData(testData)
