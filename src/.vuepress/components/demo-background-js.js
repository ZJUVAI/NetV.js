// import data from './background'
export default function demo(id) {
    /**
     * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
     * @description landing page
     */

    // const div = document.getElementById(id)

    // const mousePos = {
    //     x: 1e9,
    //     y: 1e9
    // }

    // div.addEventListener('mousemove', (ev) => {
    //     mousePos.x = ev.offsetX
    //     mousePos.y = ev.offsetY
    // })
    // const width = document.getElementById(id).clientWidth
    // // const titleHeight = document.getElementsByClassName('hero')[0].clientHeight
    // const featuresHeight = document.getElementsByClassName('features')[0].offsetTop
    // const height = featuresHeight
    // // const height = titleHeight+featuresHeight+280+50//280是图片class的max-height
    // console.log(height, width)
    // const configs = {
    //     container: div,
    //     width,
    //     height,
    //     nodeLimit: 1e5,
    //     linkLimit: 1e7,
    //     backgroundColor: { r: 0, g: 0, b: 0, a: 1 },
    //     node: {
    //         strokeWidth: 0,
    //         fill: { r: 0, g: 0.3, b: 0.7, a: 1 }
    //     },
    //     enablePanZoom: false
    // }

    // const data = {
    //     nodes: [],
    //     links: []
    // }

    // let nodeNum = 5000
    // const isMobile = /Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent)
    // if (isMobile) {
    //     nodeNum = 300
    // }

    // // random generate nodes

    // data.nodes = Array(nodeNum)
    //     .fill()
    //     .map((d, i) => {
    //         const x = Math.random() * configs.width
    //         const y = Math.random() * configs.height
    //         return {
    //             id: String(i),
    //             x: x,
    //             y: y,
    //             originX: x,
    //             originY: y,
    //             r: Math.random() * 2
    //         }
    //     })

    // const netv = new NetV(configs)
    // netv.data(data)

    // const mouseMass = 50000000
    // const forceMouseMax = 1000
    // const originK = 10

    // function render() {
    //     data.nodes.forEach((n) => {
    //         const node = netv.getNodeById(n.id)

    //         // calculate movement direction
    //         const lenMouse = Math.sqrt((n.x - mousePos.x) ** 2 + (n.y - mousePos.y) ** 2)
    //         let forceMouse = Math.min(forceMouseMax, mouseMass / lenMouse ** 2)
    //         const lenOrigin = Math.sqrt((n.x - n.originX) ** 2 + (n.y - n.originY) ** 2)
    //         let forceOrigin = originK * lenOrigin
    //         if (isNaN(forceOrigin)) {
    //             forceOrigin = 0
    //         }
    //         if (isNaN(forceMouse)) {
    //             forceMouse = 0
    //         }

    //         const force = {
    //             x: (n.originX - n.x) * originK - ((mousePos.x - n.x) / lenMouse) * forceMouse,
    //             y: (n.originY - n.y) * originK - ((mousePos.y - n.y) / lenMouse) * forceMouse
    //         }

    //         const movement = {
    //             x: force.x * 0.01,
    //             y: force.y * 0.01
    //         }

    //         n.x += movement.x
    //         n.y += movement.y

    //         node.position(n.x, n.y)
    //     })
    //     netv.draw()
    //     requestAnimationFrame(render)
    // }

    // render()

    // const graph = randomGraph(2000, 2100)

    // const div = document.getElementById(id)
    // const width = document.getElementById(id).clientWidth
    // const featuresHeight = document.getElementsByClassName('features')[0].offsetTop
    // const height = featuresHeight
    // const netv = new NetV({
    //     container: div,
    //     width,
    //     height,
    //     nodeLimit: 1e5,
    //     linkLimit: 1e7,
    //     backgroundColor: { r: 0, g: 0, b: 0, a: 1 },
    //     node: {
    //         style: {
    //             strokeWidth: 0,
    //             fill: { r: 0.05, g: 0.6, b: 1, a: 1 },
    //             r: 2
    //         }
    //     },
    //     link: {
    //         style: {
    //             strokeWidth: 0.5,
    //             strokeColor: { r: 0, g: 0.6, b: 1, a: 0.3 }
    //         }
    //     }
    // })

    // fm3Layout(graph, (graph) => {
    //     graph = NetV.Utils.transformGraphPosition(
    //         graph,
    //         Math.min(width, height) * 0.8,
    //         width / 2,
    //         height / 2
    //     )
    //     netv.data(graph)
    //     netv.draw()
    //     const n = netv.nodes().length
    //     const newNodes = netv.addNodes(
    //         d3.range(100).map((id) => ({
    //             id: id + n,
    //             style: {
    //                 fill: { r: 1, g: 0.4, b: 0, a: 1 }
    //             }
    //         }))
    //     )
    //     const interval = 1000
    //     function render() {
    //         newNodes.forEach((node) => {
    //             const initNodeID = Math.floor(Math.random() * n)
    //             const initNode = netv.getNodeById(String(initNodeID))
    //             const neighbors = initNode.neighborNodes()
    //             const initPosition = initNode.position()
    //             node.position(initPosition)
    //             node.sourcePosition = initPosition
    //             node.targetPosition = neighbors[
    //                 Math.floor(Math.random() * neighbors.length)
    //             ].position()
    //         })
    //         const t = 10
    //         let i = 0
    //         const moveInterval = setInterval(function() {
    //             // console.log(newNodes[0].position())
    //             newNodes.forEach((node) => {
    //                 node.position({
    //                     x:
    //                         ((node.targetPosition.x - node.sourcePosition.x) * i) / (interval / t) +
    //                         node.sourcePosition.x,
    //                     y:
    //                         ((node.targetPosition.y - node.sourcePosition.y) * i) / (interval / t) +
    //                         node.sourcePosition.y
    //                 })
    //             })
    //             i += 1
    //             netv.draw()
    //             if (i >= interval / t) {
    //                 clearInterval(moveInterval)
    //                 render()
    //             }
    //         }, t)
    //     }
    //     render()
    // })

    // function randomGraph(n, m) {
    //     //creates a random graph on n nodes and m links
    //     const nodes = d3.range(n).map((id) => ({ id }))
    //     const links = []
    //     const map = {}
    //     for (let i = 1; i < n; i++) {
    //         const link = { source: Math.floor(Math.random() * i), target: i }
    //         links.push(link)
    //         map[`${link.source}<=>${link.target}`] = map[`${link.target}<=>${link.source}`] = true
    //     }
    //     for (let j = links.length; j < m; j++) {
    //         while (true) {
    //             const link = {
    //                 source: Math.floor(Math.random() * n),
    //                 target: Math.floor(Math.random() * n)
    //             }
    //             if (link.source !== link.target && !map[`${link.source}<=>${link.target}`]) {
    //                 map[`${link.source}<=>${link.target}`] = map[
    //                     `${link.target}<=>${link.source}`
    //                 ] = true
    //                 links.push(link)
    //                 break
    //             }
    //         }
    //     }
    //     return {
    //         nodes,
    //         links
    //     }
    // }

    // function fm3Layout(graph, callback) {
    //     const initOGDF = window.initOGDF
    //     initOGDF().then(function(Module) {
    //         const dic = {}
    //         for (let i = 0; i < graph.nodes.length; ++i) {
    //             if (graph.nodes[i]['id'] in dic) {
    //                 console.log('there is a bug')
    //             } else dic[graph.nodes[i]['id']] = i
    //         }
    //         let nodes = graph.nodes.length
    //         let links = graph.links.length
    //         let source = Module._malloc(4 * links)
    //         let target = Module._malloc(4 * links)
    //         for (let i = 0; i < links; ++i) {
    //             Module.HEAP32[source / 4 + i] = dic[graph.links[i].source]
    //             Module.HEAP32[target / 4 + i] = dic[graph.links[i].target]
    //         }
    //         const timeout = setTimeout('$_fm3()', 100) // !NOTE: because the dom is not updated, we need wo setTimeout
    //         window.$_fm3 = function() {
    //             let result = Module._FM3(nodes, links, source, target)

    //             for (let i = 0; i < nodes; ++i) {
    //                 graph.nodes[i]['x'] = Module.HEAPF32[(result >> 2) + i * 2]
    //                 graph.nodes[i]['y'] = Module.HEAPF32[(result >> 2) + i * 2 + 1]
    //             }

    //             Module._free(source)
    //             Module._free(target)
    //             Module._free_buf(result)

    //             callback({ nodes: graph.nodes, links: graph.links })

    //             clearTimeout(timeout)
    //             window.$_fm3 = undefined
    //         }
    //     })
    // }

    fetch('/airlines.json')
        .then((res) => res.json())
        .then((graph) => {
            const div = document.getElementById(id)
            div.style = 'background: black;'
            const width = div.clientWidth
            const height = document.getElementsByClassName('features')[0].offsetTop
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
                backgroundColor: { r: 0, g: 0, b: 0, a: 1 },
                node: {
                    style: {
                        strokeWidth: 0,
                        // fill: { r: 0.05, g: 0.6, b: 1, a: 1 },
                        fill: { r: 0.6, g: 0.6, b: 0.6, a: 1 },
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
                netv.data(data)

                const n = netv.nodes().length
                const m = netv.links().length
                const newNodes = netv.addNodes(
                    d3.range(500).map((id) => ({
                        id: id + n,
                        style: {
                            r: 2,
                            fill: { r: 1, g: 0.4, b: 0, a: 0.2 }
                        }
                    }))
                )

                const mousePos = { x: undefined, y: undefined }
                div.addEventListener('mousemove', (ev) => {
                    mousePos.x = ev.offsetX
                    mousePos.y = ev.offsetY
                })

                const interval = 10
                const groups = []
                const groupSize = 10
                for (let i = 0; i < newNodes.length; i += groupSize) {
                    const group = []
                    for (let j = 0; j < groupSize; j++) {
                        group.push(newNodes[i + j])
                    }
                    const link = reInit(group)
                    group.link = link
                    groups.push(group)
                }
                function reInit(nodes) {
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
                    const link = candidateLinks[Math.floor(Math.random() * candidateLinks.length)]
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
                            group.link.strokeWidth(0)
                            group.link = reInit(group)
                            group.link.strokeWidth(1)
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
            }
        })
}
