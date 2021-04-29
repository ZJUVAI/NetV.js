/**
 * @author NinaAnn
 * @address https://github.com/NinaAnn/ForceAtlas2
 */

/**
 * Create a node class representing a node in the layout
 * @param {String} id
 * @param {Number} x
 * @param {Number} y
 * @param {[type]} neighbors
 * Create class node,containing:
 * id: identific node id
 * coordinate: x, y
 * connected neighbors: neighbors
 *   type: array
 *   content: neighbor id
 * degree: deg
 * weight: m, default = 1.0
 * velocity: v
 * accelerate: acc
 * move direction: dir
 */
let node = function(id, x, y, neighbors) {
    this.id = id
    this.x = x
    this.y = y
    this.neighbors = neighbors
    this.deg = neighbors.length
    this.m = 1.0
    this.v = [0, 0]
    this.acc = 0
    this.dir = [0, 0]
}

/**
 * Create class BHNode, which means a node in the Barnes-Hut Tree
 * @param {[]} width [x region]
 * @param {[]} height [y region]
 * @param {BHNode} parent
 * @param {[]} nodes [the force-directed nodes contained in this node]
 * x, y: gravity center
 * m: total mass
 * neighbors: total neighbors
 * leftUp, leftDown, rightUp, rightDown: four sub-regions
 */
let BHNode = function(width, height, parent, nodes) {
    this.parent = parent
    this.content = nodes
    this.dx = width
    this.dy = height
    this.decideRegion = function(node) {
        if (node.x >= this.dx[0] && node.x < (this.dx[0] + this.dx[1]) * 0.5) {
            if (node.y >= this.dy[0] && node.y < (this.dy[0] + this.dy[1]) * 0.5) {
                return 2
            } else {
                return 3
            }
        } else {
            if (node.y >= this.dy[0] && node.y < (this.dy[0] + this.dy[1]) * 0.5) {
                return 1
            } else {
                return 4
            }
        }
    }

    // decide content value: gravity center, total mass, total neighbors.
    this.x = 0
    this.y = 0
    this.m = 0
    this.neighbors = []

    if (this.content.length == 1) {
        this.isleaf = true
    } else {
        this.isleaf = false
        let LU = []
        let RU = []
        let LD = []
        let RD = []
        this.content.forEach((element) => {
            this.m += element.m
            this.neighbors = this.neighbors.concat(element.neighbors)
            this.x += element.x * element.m
            this.y += element.y * element.m

            switch (this.decideRegion(element)) {
                case 1:
                    RU.push(element)
                    break
                case 2:
                    LU.push(element)
                    break
                case 3:
                    LD.push(element)
                    break
                case 4:
                    RD.push(element)
                    break
            }
        })
        this.x = this.x / this.m
        this.y = this.y / this.m
        if (LU.length != 0)
            this.leftUp = new BHNode(
                [this.dx[0], (this.dx[0] + this.dx[1]) * 0.5],
                [this.dy[0], (this.dy[0] + this.dy[1]) * 0.5],
                this,
                LU
            )
        if (RU.length != 0)
            this.rightUp = new BHNode(
                [(this.dx[0] + this.dx[1]) * 0.5, this.dx[1]],
                [this.dy[0], (this.dy[0] + this.dy[1]) * 0.5],
                this,
                RU
            )
        if (LD.length != 0)
            this.leftDown = new BHNode(
                [this.dx[0], (this.dx[0] + this.dx[1]) * 0.5],
                [(this.dy[0] + this.dy[1]) * 0.5, this.dy[1]],
                this,
                LD
            )
        if (RD.length != 0)
            this.rightDown = new BHNode(
                [(this.dx[0] + this.dx[1]) * 0.5, this.dx[1]],
                [(this.dy[0] + this.dy[1]) * 0.5, this.dy[1]],
                this,
                RD
            )
    }
}

//Global Variances:
/**
 * 1. Can be changed by users:
 *  k_g: parameter of gravity, default 1
 *  k_r: parameter of repulsion,default 0.5
 *  ips_w: parameter of edge weight, default 0.5
 *  tick: get new position value from this function every x minute
 *  viscous: parameter of resistance
 *  olradius: when the distance of two nodes < olradius, think them as overlapped
 *  maxVelocity: set maximum to velocity
 *
 *  width: width of the total layout
 *  height: height of the total layout
 *
 *  linlog: boolean, switch to linlog mode or not, default false
 *  DissuadeHubs: boolean, switch to dissuade hubs mode or not, default false
 *  BarnesHut: boolean, use barnes hut algorithm, default true
 *
 * 2. can't get changed by users:
 *  Nodes: array of all object node
 *  nodeNumber: total number of nodes
 */
class forceLayout {
    constructor(options) {
        this.options = {
            k_g: 1,
            k_r: 2,
            ips_w: 0.5,
            tick: 0.1,
            olradius: 2,
            viscous: 0.9,
            maxVelocity: 1000,
            width: 100,
            height: 100,
            linlog: false,
            DissuadeHubs: false,
            BarnesHut: true
        }
        this.Nodes = []
        this.nodeNumber = 0
        this.energy = 0
    }

    /**
     * calculate norm of a vector
     * @param {[]} vec
     */
    calVecNorm(vec) {
        return Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1])
    }

    /**
     * calculate distance between two nodes
     * @param {node} A
     * @param {node} B
     */
    distance(A, B) {
        return Math.sqrt((A.x - B.x) * (A.x - B.x) + (A.y - B.y) * (A.y - B.y))
    }

    /**
     * Direction of force given from B to A
     * @param {node} A
     * @param {node} B
     * @return {[]} an normalized vector: [x, y]
     */
    direction(A, B) {
        let dx = B.x - A.x
        let dy = B.y - A.y
        let dis = this.distance(A, B)
        if (dis != 0) {
            return [dx / dis, dy / dis]
        } else {
            return [0, 0]
        }
    }

    /**
     * Calculate the direction of a node towards center -> calculate gravity direction
     * @param {node} A
     */
    dir2Center(A) {
        let cx = this.options.width / 2
        let cy = this.options.height / 2
        let dx = cx - A.x
        let dy = cy - A.y
        let dis = this.calVecNorm([dx, dy])
        if (dis != 0) {
            return [dx / dis, dy / dis]
        } else {
            return [0, 0]
        }
    }

    /**
     * Calculate the attraction that node B gives to node A, there exists three modes:
     * normal
     * linlog
     * dissuade hubs: in this mode the attraction of A->B is different from B->A.
     * @param {node} A
     * @param {node} B
     * @param {Number} w [weight of edge between A, B];
     */
    attraction(A, B, w) {
        let dis = this.distance(A, B) - this.options.olradius
        if (this.options.linlog == true) {
            return Math.pow(w, this.options.ips_w) * Math.log(1 + dis)
        } else if (this.options.DissuadeHubs == true) {
            return dis / (A.deg + 1)
        } else {
            return Math.pow(w, this.options.ips_w) * dis
        }
    }

    /**
     * calculate repulsion between two nodes
     * @param {node} A
     * @param {node} B
     * @param {boolean} olmode [weather two nodes are overlapped]
     */
    repulsion(A, B, olmode) {
        let kr
        if (olmode == false) {
            kr = this.options.k_r
        } else {
            kr = this.options.k_r * 2
        }
        return (kr * (A.deg + 1) * (B.deg + 1)) / this.distance(A, B)
    }

    /**
     * get gravity value of a node
     * @param {node} node
     */
    getGravity(node) {
        return this.options.k_g * (node.deg + 1)
    }

    /**
     * set gravity value of edge between A and B
     * @param {node} A
     * @param {node} B
     */
    setEdgeGravity(A, B) {
        if (A.neighbors.indexOf(B.id) == -1) {
            return 0
        } else {
            let w = 0
            let i = 0
            for (i = 0; i < A.neighbors.length; i++) {
                if (A.neighbors[i] == B.id) {
                    w++
                }
            }
            return w
        }
    }

    /**
     * Calculate the undirected force between two nodes
     * @param {node} A
     * @param {node} B
     */
    calEdgeForce(A, B) {
        let w = this.setEdgeGravity(A, B)
        let dis = this.distance(A, B)
        if (dis > this.options.olradius) {
            return this.attraction(A, B, w) - this.repulsion(A, B, false)
        } else if (dis == this.options.olradius) {
            return 0
        } else {
            return 0 - this.repulsion(A, B, true)
        }
    }

    /**
     * Calculate the directed force between two nodes
     * @param {node} A
     * @param {node} B
     */
    calDirForce(A, B) {
        let dirForceA = [0, 0]
        let dirBA = this.direction(A, B)
        let forceBA = this.calEdgeForce(A, B)
        dirForceA[0] = forceBA * dirBA[0]
        dirForceA[1] = forceBA * dirBA[1]
        return dirForceA
    }

    /**
     * Calculate the total undirected force of a node
     * two different methods given: Normal & Barnes
     * @param {*} A
     * @return {Number} unDirFA
     */
    calNodeForce(A) {
        let forceA = [0, 0]
        if (this.options.BarnesHut == false) {
            forceA = this.Normal(A)
        } else {
            forceA = this.Barnes(A)
        }

        // add gravity
        let gravdir = this.dir2Center(A)
        let grav = this.getGravity(A)
        forceA[0] += grav * gravdir[0]
        forceA[1] += grav * gravdir[1]

        // get force norm
        let unDirFA = this.calVecNorm(forceA)
        if (unDirFA != 0) {
            A.dir = [forceA[0] / unDirFA, forceA[1] / unDirFA]
        } else {
            A.dir = [0, 0]
        }
        return unDirFA
    }

    /**
     * Calculate total force that node A suffers by using normal traversal of all other nodes
     * @param {node} A
     */
    Normal(A) {
        let forceA = [0, 0]
        let i = 0
        for (i = 0; i < this.nodeNumber; i++) {
            let dirForceA = [0, 0]
            if (this.Nodes[i].id != A.id) {
                dirForceA = this.calDirForce(A, this.Nodes[i])
                forceA[0] += dirForceA[0]
                forceA[1] += dirForceA[1]
            }
        }
        return forceA
    }

    //functions of Barnes-hut algorithm

    /**
     * Calculate total force that node A suffers by using Barnes-hut algorithm
     * @param {*} A
     */
    Barnes(A) {
        let forceA = [0, 0]
        forceA = this.TraversalBHTree(A, this.BHroot)
        return forceA
    }

    /**
     * calculate s/d value
     * s = surface of region BHNode, d = distance between A and  BHNode's quantity center
     * @param {node} A
     * @param {BHNode} BHnode
     * @return {number} sd
     */
    calSDValue(A, BHnode) {
        let s = (BHnode.dx[1] - BHnode.dx[0]) * (BHnode.dy[1] - BHnode.dy[0])
        let d = this.calVecNorm([BHnode.x - A.x, BHnode.y - A.y])
        let sd = s / d
        return sd
    }

    /**
     * traversal of Barnes-Hut tree
     * @param {node} A
     * @param {BHNode} BHnode
     */
    TraversalBHTree(A, BHnode) {
        if (BHnode == undefined) {
            return [0, 0]
        }
        let sdmax = 0.01
        let forceA = [0, 0]
        if (!BHnode.isleaf) {
            if (this.calSDValue(A, BHnode) < sdmax) {
                let BHtmpNode = new node('BH', BHnode.x, BHnode.y, BHnode.neighbors)
                let dirForceA = [0, 0]
                dirForceA = this.calDirForce(A, BHtmpNode)
                forceA[0] += dirForceA[0]
                forceA[1] += dirForceA[1]
            } else {
                let forceLU = this.TraversalBHTree(A, BHnode.leftUp)
                let forceRU = this.TraversalBHTree(A, BHnode.rightUp)
                let forceLD = this.TraversalBHTree(A, BHnode.leftDown)
                let forceRD = this.TraversalBHTree(A, BHnode.rightDown)
                forceA[0] = forceLU[0] + forceRU[0] + forceLD[0] + forceRD[0]
                forceA[1] = forceLU[1] + forceRU[1] + forceLD[1] + forceRD[1]
            }
        } else {
            if (BHnode.content[0].id == A.id) {
                return [0, 0]
            } else {
                let dirForceA = [0, 0]
                dirForceA = this.calDirForce(A, BHnode.content[0])
                forceA[0] += dirForceA[0]
                forceA[1] += dirForceA[1]
            }
        }
        return forceA
    }

    // functions applied to the whole layout
    /**
     * get real border of the whole layout
     */
    Borders() {
        let minW = 50
        let maxW = 50
        let minH = 50
        let maxH = 50
        this.Nodes.forEach((element) => {
            if (element.x < minW) {
                minW = element.x
            } else if (element.x > maxW) {
                maxW = element.x
            }
            if (element.y < minH) {
                minH = element.y
            } else if (element.y > maxH) {
                maxH = element.y
            }
        })
        return [
            [minW, maxW],
            [minH, maxH]
        ]
    }

    /**
     * creation & update of the Barnes-Hut tree
     */
    CreateBHTree() {
        let [dx, dy] = this.Borders()
        this.BHroot = new BHNode(dx, dy, null, this.Nodes)
    }

    /**
     * a test function used to do traversal to the Barnes Hut tree.
     * @param {BHNode} BHnode
     */
    // TraversalBHTree(BHnode){
    //     if(BHnode != undefined){
    //         if(BHnode.isleaf == true){
    //             console.log(BHnode.content[0]);
    //         }
    //         else{
    //             this.TraversalBHTree(BHnode.leftUp);
    //             this.TraversalBHTree(BHnode.rightUp);
    //             this.TraversalBHTree(BHnode.leftDown);
    //             this.TraversalBHTree(BHnode.rightDown);
    //         }
    //     }
    // }

    /**
     * add new nodes to the whole layout
     * @param {String} id
     * @param {[type]} neighbors
     */
    addNode(id, neighbors) {
        let initSize = 30
        let x = this.options.width * 0.5 + initSize * (Math.random() - 0.5)
        let y = this.options.height * 0.5 + initSize * (Math.random() - 0.5)
        let newNode = new node(id, x, y, neighbors)
        this.nodeNumber += 1
        this.Nodes.push(newNode)
    }

    /**
     * add new link
     * @param {String} source [source id]
     * @param {String} dest [destination id]
     */
    addLink(source, dest) {
        let tag = 0
        this.Nodes.forEach((element) => {
            if (element.id == source) {
                element.neighbors.push(dest)
                tag = 1
            }
        })
        if (tag == 0) {
            this.addNode(source, [dest])
        }
    }

    /**
     * remove disappeared nodes
     */
    removeNodes() {
        let i = 0
        let removes = []
        for (i = 0; i < this.nodeNumber; i++) {
            if (this.Nodes[i].neighbors.length == 0) {
                removes.push(i)
            }
        }
        while (removes.length > 0) {
            let e = removes.pop()
            this.Nodes.splice(e, 1)
            this.nodeNumber--
        }
    }

    /**
     * When data updated, update nodes' layout at the same time
     * @param {*} data
     */
    updateNodes(data) {
        this.Nodes.forEach((element) => {
            element.neighbors = []
        })
        data.edges.forEach((element) => {
            // important: should be adapted to the right discription of data
            this.addLink(element.source, element.target)
            this.addLink(element.target, element.source)
        })
        this.removeNodes()
    }

    /**
     * Calculate total energy of the layout
     */
    calTotalEnergy() {
        this.energy = 0
        this.Nodes.forEach((element) => {
            this.energy += Math.pow(this.calVecNorm(element.v), 2) * 0.5 * element.m
        })
    }

    /**
     * update each node's acceleration
     * @param {node} element
     */
    updateAcc(element) {
        let forceA = this.calNodeForce(element)
        element.acc = forceA / element.m
    }

    /**
     * update each node's velocity
     * @param {node} element
     */
    updateVel(element) {
        element.v[0] =
            (element.v[0] + element.acc * element.dir[0] * this.options.tick) * this.options.viscous
        element.v[1] =
            (element.v[1] + element.acc * element.dir[1] * this.options.tick) * this.options.viscous
        if (element.v[0] > this.options.maxVelocity) {
            element.v[0] = this.options.maxVelocity
        }
        if (element.v[1] > this.options.maxVelocity) {
            element.v[1] = this.options.maxVelocity
        }
    }

    /**
     * update each node's position
     * @param {node} element
     */
    updatePosition(element) {
        element.x = element.x + element.v[0] * this.options.tick
        element.y = element.y + element.v[1] * this.options.tick
    }

    /**
     * update the whole layout's position
     */
    updateLayout() {
        this.Nodes.forEach((element) => {
            this.updateAcc(element)
            this.updateVel(element)
        })

        this.Nodes.forEach((element) => {
            this.updatePosition(element)
        })

        this.calTotalEnergy()
        if (this.options.BarnesHut == true) {
            this.CreateBHTree()
        }
    }

    /**
     * print each node's position(just used for visually checking)
     */
    printPosition() {
        this.Nodes.forEach((element) => {
            console.log(element.id, element.x, element.y)
        })
    }
}
