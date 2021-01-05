const div = document.getElementById('main')

function IsPC() {
    var userAgentInfo = navigator.userAgent
    var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
    var flag = true
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false
            break
        }
    }
    return flag
}
if (IsPC()) {
    fetch('./airlines.json')
        .then((res) => res.json())
        .then((graph) => {
            const width = div.clientWidth
            const height = div.clientHeight
            const data = graph
            graph.nodes.forEach((node) => {
                node.x *= Math.min(width / 360, height / 180) * 0.8
                node.y *= Math.min(width / 360, height / 180) * 0.8
                node.x += width / 2
                node.y += (height * 7) / 10
            })
            const netv = new NetV({
                container: div,
                width,
                height,
                link: {
                    style: {
                        strokeWidth: 1
                    }
                },
                nodeLimit: 1e5,
                linkLimit: 1e7,
                backgroundColor: { r: 0.063, g: 0.063, b: 0.063, a: 1 },
                node: {
                    style: {
                        strokeWidth: 0,
                        // fill: { r: 0.05, g: 0.6, b: 1, a: 1 },
                        fill: { r: 1, g: 1, b: 1, a: 1 },
                        r: 1
                    }
                },
                link: {
                    style: {
                        strokeWidth: 0,
                        strokeColor: { r: 1, g: 0.4, b: 0, a: 0.2 } // { r: 0, g: 0.6, b: 1, a: 1 }
                    }
                }
            })
            netv.data(data)

            const n = netv.nodes().length
            const newNodes = netv.addNodes(
                d3.range(1000).map((id) => ({
                    id: id + n,
                    style: {
                        r: 2,
                        fill: { r: 1, g: 0.4, b: 0, a: 0.2 }
                    }
                }))
            )
            // const newLinks = netv.addLinks()

            const mousePos = { x: undefined, y: undefined }
            div.addEventListener('mousemove', (ev) => {
                mousePos.x = ev.offsetX
                mousePos.y = ev.offsetY
            })

            const interval = 10
            const groups = []
            const groupSize = 20
            for (let i = 0; i < newNodes.length; i += groupSize) {
                const group = []
                for (let j = 0; j < groupSize; j++) {
                    group.push(newNodes[i + j])
                }
                const link = reInit(group)
                group.link = link
                group.links = [link]
                group.index = 0
                groups.push(group)
            }
            function reInit(nodes, link) {
                if (!link) {
                    let candidateLinks = netv.links()
                    if (mousePos.x && mousePos.y) {
                        const radius = 10
                        candidateLinks = []
                        netv.nodes().some((node) => {
                            const position = node.position()
                            if (
                                position.x < mousePos.x + radius &&
                                position.x > mousePos.x - radius &&
                                position.y < mousePos.y + radius &&
                                position.y > mousePos.y - radius
                            ) {
                                if (candidateLinks.length <= nodes.length) {
                                    candidateLinks = candidateLinks.concat(node.neighborLinks())
                                    return false
                                } else {
                                    return true
                                }
                            }
                            return false
                        })
                        if (candidateLinks.length <= 0) {
                            candidateLinks = netv.links()
                        }
                    }

                    link = candidateLinks[Math.floor(Math.random() * candidateLinks.length)]
                }
                const MAX_DURATION = 1000 * Math.random()
                const MIN_DURATION = 500 * Math.random()
                const scale = d3
                    .scaleLinear()
                    .domain([0, nodes.length])
                    .range([MIN_DURATION, MAX_DURATION])
                nodes.forEach((node, i) => {
                    node.sourcePosition = link.source().position()
                    node.targetPosition = link.target().position()
                    node.duration = scale(i)
                    node.time = 0
                })
                return link
            }
            setInterval(function() {
                // console.log(newNodes[0].position())
                groups.forEach((group) => {
                    if (group.every((node) => node.time >= node.duration)) {
                        if (group.index < 10) {
                            group.link.strokeWidth(0)
                            group.link = reInit(group)
                            group.links.push(group.link)
                            group.link.strokeWidth(1)
                        } else {
                            group.link.strokeWidth(0)
                            reInit(group, group.links[index % 10])
                            group.link.strokeWidth(1)
                            // group.link.strokeWidth(0)
                            // group.forEach((node) => {
                            //     node.r(0)
                            // })
                        }
                    }
                })
                newNodes.forEach((node) => {
                    if (node.time < node.duration)
                        node.position({
                            x:
                                ((node.targetPosition.x - node.sourcePosition.x) * node.time) /
                                    node.duration +
                                node.sourcePosition.x,
                            y:
                                ((node.targetPosition.y - node.sourcePosition.y) * node.time) /
                                    node.duration +
                                node.sourcePosition.y
                        })
                    node.time += interval
                })
                netv.draw()
            }, interval)
        })
}
