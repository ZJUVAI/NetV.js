const netV = new NetV({
    container: document.getElementById('main'),
    width: 500,
    height: 500
})

const miserables = netV.loadDataset('miserables')
netV.data(miserables)

const radialTree = new NetV.Layouts.RadialTree(miserables, {
    rootID: 'Myriel',
    centerX: 250,
    centerY: 250,
    radius: 200
})

radialTree.onTick(() => {
    radialTree.graph.nodes.forEach((node) => {
        netV.getNodeById(node.id).position({
            x: node.x,
            y: node.y
        })
    })
    netV.draw()
})

radialTree.start()

netV.on('pan', () => {})
netV.on('zoom', () => {})
