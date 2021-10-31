function generatePairInRange(a, b) {
    function randRange(a, b) {
        return a + Math.floor(Math.random() * (b - a))
    }
    const x = randRange(a, b)
    let y = randRange(a, b)
    while (y === x) {
        y = randRange(a, b)
    }
    return {
        x: x,
        y: y
    }
}

export function generateRandomGraph({ nodeNum, linkNum, width, height }) {
    const data = {
        nodes: [],
        links: []
    }

    data.nodes = Array(nodeNum)
        .fill()
        .map((v, i) => {
            return {
                id: String(i),
                x: Math.random() * width,
                y: Math.random() * height
            }
        })

    const linkSet = new Set()
    data.links = Array(linkNum)
        .fill()
        .map((v, i) => {
            let pair
            do {
                pair = generatePairInRange(0, nodeNum)
            } while (linkSet.has(`${pair.x}-${pair.y}`))
            linkSet.add(`${pair.x}-${pair.y}`)
            linkSet.add(`${pair.y}-${pair.x}`)

            return {
                source: String(pair.x),
                target: String(pair.y)
            }
        })

    return data
}
