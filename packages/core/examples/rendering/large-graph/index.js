const netv = new NetV({
    container: document.getElementById('main'),
    nodeLimit: 1e5,
    linkLimit: 1e7,
    node: {
        style: {
            fill: { r: 0.2, g: 0.6, b: 0.2, a: 0.5 },
            r: 1,
            strokeColor: { r: 0.9, g: 0.9, b: 0.9, a: 0.2 },
            strokeWidth: 0
        }
    },
    link: {
        style: {
            strokeWidth: 0.5
        }
    }
})

const LAYOUTED_GRAPH_URLS = {
    bcsstk31:
        'https://raw.githubusercontent.com/jiacheng-pan/datasets/main/layouted-graphs/bcsstk31.json',
    '3elt': 'https://raw.githubusercontent.com/jiacheng-pan/datasets/main/layouted-graphs/3elt.json'
}

fetch(LAYOUTED_GRAPH_URLS['bcsstk31'])
    .then((res) => res.json())
    .then((json) => {
        const data = NetV.Utils.transformGraphPosition(json, 600, 400, 300)
        netv.data(data)
        netv.draw()
    })
    .catch((error) => document.write(error))
