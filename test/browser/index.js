const netv = new NetV(document.getElementById('main'))
const testData = [
    {
        id: '0',
        x: 400,
        y: 100,
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
        x: 100,
        y: 500,
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
