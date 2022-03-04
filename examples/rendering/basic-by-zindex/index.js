const testData = {
    nodes: [
        {
            id: '0',
            x: 300,
            y: 200,
            style:{r: 11,zindex:10}
        },
        {
            id: '1',
            x: 500,
            y: 200,
            style:{r: 13,zindex:12}
        },
        {
            id: '2',
            x: 400,
            y: 400,
            style:{r: 18,zindex:3}
        }
    ],
    links: [
        {
            source: '0',
            target: '2',
            style:{ zindex:1, strokeWidth: 3}
        },
        {
            source: '1',
            target: '2',
            style:{ zindex:22, strokeWidth: 14}
        }
    ]
}

const netv = new NetV({
    container: document.getElementById('main')
})
netv.data(testData)
netv.addNodes([
    { id: '3', x: 600, y: 400, style:{r: 15, zindex:2}},
    { id: '4', x: 500, y: 500, style:{r: 18, zindex:10}},
])
netv.addNodes([
    { id: '5', x: 200, y: 300, style:{r: 15, zindex:2}},
    { id: '6', x: 300, y: 400},
])
netv.addLinks([
    {
        source: '0',
        target: '3',
        style:{ zindex:18, strokeWidth: 10}
    },
    {
        source: '1',
        target: '3',
        style:{ zindex:14, strokeWidth: 15}
    }
])
netv.draw()
