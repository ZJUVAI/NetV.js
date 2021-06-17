/* eslint-disable max-depth */
/* eslint-disable complexity */
/**
 * NetV ForceAtlas2 Iteration
 * =================================
 *
 * Function used to perform a single iteration of the algorithm.
 */

/**
 * Function used to perform a single interation of the algorithm.
 */

export default function iterate(options, NodeMatrix: Float32Array, LinkMatrix: Float32Array) {
    /**
     * Matrices properties accessors.
     */
    const NODE_X = 0
    const NODE_Y = 1
    const NODE_DX = 2
    const NODE_DY = 3
    const NODE_OLD_DX = 4
    const NODE_OLD_DY = 5
    const NODE_MASS = 6
    const NODE_CONVERGENCE = 7
    const NODE_SIZE = 8
    const NODE_FIXED = 9

    const EDGE_SOURCE = 0
    const EDGE_TARGET = 1
    const EDGE_WEIGHT = 2

    const REGION_NODE = 0
    const REGION_CENTER_X = 1
    const REGION_CENTER_Y = 2
    const REGION_SIZE = 3
    const REGION_NEXT_SIBLING = 4
    const REGION_FIRST_CHILD = 5
    const REGION_MASS = 6
    const REGION_MASS_CENTER_X = 7
    const REGION_MASS_CENTER_Y = 8

    const SUBDIVISION_ATTEMPTS = 3

    /**
     * Constants.
     */
    const PPN = 10
    const PPE = 3
    const PPR = 9

    const MAX_FORCE = 10

    // Initializing variables
    let l
    let r
    let n
    let n1
    let n2
    let rn
    let e
    let w
    let g
    let s

    let order = NodeMatrix.length
    let size = LinkMatrix?.length

    let adjustSizes = options.adjustSizes

    let thetaSquared = options.barnesHutTheta * options.barnesHutTheta

    let outboundAttCompensation
    let coefficient
    let xDist
    let yDist
    let ewc
    let distance
    let factor

    let RegionMatrix = []

    // 1) Initializing layout data
    // -----------------------------

    // Resetting positions & computing max values
    for (n = 0; n < order; n += PPN) {
        NodeMatrix[n + NODE_OLD_DX] = NodeMatrix[n + NODE_DX]
        NodeMatrix[n + NODE_OLD_DY] = NodeMatrix[n + NODE_DY]
        NodeMatrix[n + NODE_DX] = 0
        NodeMatrix[n + NODE_DY] = 0
    }

    // If outbound attraction distribution, compensate
    if (options.outboundAttractionDistribution) {
        outboundAttCompensation = 0
        for (n = 0; n < order; n += PPN) {
            outboundAttCompensation += NodeMatrix[n + NODE_MASS]
        }

        outboundAttCompensation /= order / PPN
    }

    // 1.bis) Barnes-Hut computation
    // ------------------------------

    if (options.barnesHutOptimize) {
        // Setting up
        let minX = Infinity
        let maxX = -Infinity
        let minY = Infinity
        let maxY = -Infinity
        let q
        let q2
        let subdivisionAttempts

        // Computing min and max values
        for (n = 0; n < order; n += PPN) {
            minX = Math.min(minX, NodeMatrix[n + NODE_X])
            maxX = Math.max(maxX, NodeMatrix[n + NODE_X])
            minY = Math.min(minY, NodeMatrix[n + NODE_Y])
            maxY = Math.max(maxY, NodeMatrix[n + NODE_Y])
        }

        // squarify bounds, it's a quadtree
        let dx = maxX - minX
        let dy = maxY - minY
        if (dx > dy) {
            minY -= (dx - dy) / 2
            maxY = minY + dx
        } else {
            minX -= (dy - dx) / 2
            maxX = minX + dy
        }

        // Build the Barnes Hut root region
        RegionMatrix[0 + REGION_NODE] = -1
        RegionMatrix[0 + REGION_CENTER_X] = (minX + maxX) / 2
        RegionMatrix[0 + REGION_CENTER_Y] = (minY + maxY) / 2
        RegionMatrix[0 + REGION_SIZE] = Math.max(maxX - minX, maxY - minY)
        RegionMatrix[0 + REGION_NEXT_SIBLING] = -1
        RegionMatrix[0 + REGION_FIRST_CHILD] = -1
        RegionMatrix[0 + REGION_MASS] = 0
        RegionMatrix[0 + REGION_MASS_CENTER_X] = 0
        RegionMatrix[0 + REGION_MASS_CENTER_Y] = 0

        // Add each node in the tree
        l = 1
        for (n = 0; n < order; n += PPN) {
            // Current region, starting with root
            r = 0
            subdivisionAttempts = SUBDIVISION_ATTEMPTS

            while (true) {
                // Are there sub-regions?

                // We look at first child index
                if (RegionMatrix[r + REGION_FIRST_CHILD] >= 0) {
                    // There are sub-regions

                    // We just iterate to find a "leaf" of the tree
                    // that is an empty region or a region with a single node
                    // (see next case)

                    // Find the quadrant of n
                    if (NodeMatrix[n + NODE_X] < RegionMatrix[r + REGION_CENTER_X]) {
                        if (NodeMatrix[n + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {
                            // Top Left quarter
                            q = RegionMatrix[r + REGION_FIRST_CHILD]
                        } else {
                            // Bottom Left quarter
                            q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR
                        }
                    } else {
                        if (NodeMatrix[n + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {
                            // Top Right quarter
                            q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 2
                        } else {
                            // Bottom Right quarter
                            q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 3
                        }
                    }

                    // Update center of mass and mass (we only do it for non-leave regions)
                    RegionMatrix[r + REGION_MASS_CENTER_X] =
                        (RegionMatrix[r + REGION_MASS_CENTER_X] * RegionMatrix[r + REGION_MASS] +
                            NodeMatrix[n + NODE_X] * NodeMatrix[n + NODE_MASS]) /
                        (RegionMatrix[r + REGION_MASS] + NodeMatrix[n + NODE_MASS])

                    RegionMatrix[r + REGION_MASS_CENTER_Y] =
                        (RegionMatrix[r + REGION_MASS_CENTER_Y] * RegionMatrix[r + REGION_MASS] +
                            NodeMatrix[n + NODE_Y] * NodeMatrix[n + NODE_MASS]) /
                        (RegionMatrix[r + REGION_MASS] + NodeMatrix[n + NODE_MASS])

                    RegionMatrix[r + REGION_MASS] += NodeMatrix[n + NODE_MASS]

                    // Iterate on the right quadrant
                    r = q
                    continue
                } else {
                    // There are no sub-regions: we are in a "leaf"

                    // Is there a node in this leave?
                    if (RegionMatrix[r + REGION_NODE] < 0) {
                        // There is no node in region:
                        // we record node n and go on
                        RegionMatrix[r + REGION_NODE] = n
                        break
                    } else {
                        // There is a node in this region

                        // We will need to create sub-regions, stick the two
                        // nodes (the old one r[0] and the new one n) in two
                        // subregions. If they fall in the same quadrant,
                        // we will iterate.

                        // Create sub-regions
                        RegionMatrix[r + REGION_FIRST_CHILD] = l * PPR
                        w = RegionMatrix[r + REGION_SIZE] / 2 // new size (half)

                        // NOTE: we use screen coordinates
                        // from Top Left to Bottom Right

                        // Top Left sub-region
                        g = RegionMatrix[r + REGION_FIRST_CHILD]

                        RegionMatrix[g + REGION_NODE] = -1
                        RegionMatrix[g + REGION_CENTER_X] = RegionMatrix[r + REGION_CENTER_X] - w
                        RegionMatrix[g + REGION_CENTER_Y] = RegionMatrix[r + REGION_CENTER_Y] - w
                        RegionMatrix[g + REGION_SIZE] = w
                        RegionMatrix[g + REGION_NEXT_SIBLING] = g + PPR
                        RegionMatrix[g + REGION_FIRST_CHILD] = -1
                        RegionMatrix[g + REGION_MASS] = 0
                        RegionMatrix[g + REGION_MASS_CENTER_X] = 0
                        RegionMatrix[g + REGION_MASS_CENTER_Y] = 0

                        // Bottom Left sub-region
                        g += PPR
                        RegionMatrix[g + REGION_NODE] = -1
                        RegionMatrix[g + REGION_CENTER_X] = RegionMatrix[r + REGION_CENTER_X] - w
                        RegionMatrix[g + REGION_CENTER_Y] = RegionMatrix[r + REGION_CENTER_Y] + w
                        RegionMatrix[g + REGION_SIZE] = w
                        RegionMatrix[g + REGION_NEXT_SIBLING] = g + PPR
                        RegionMatrix[g + REGION_FIRST_CHILD] = -1
                        RegionMatrix[g + REGION_MASS] = 0
                        RegionMatrix[g + REGION_MASS_CENTER_X] = 0
                        RegionMatrix[g + REGION_MASS_CENTER_Y] = 0

                        // Top Right sub-region
                        g += PPR
                        RegionMatrix[g + REGION_NODE] = -1
                        RegionMatrix[g + REGION_CENTER_X] = RegionMatrix[r + REGION_CENTER_X] + w
                        RegionMatrix[g + REGION_CENTER_Y] = RegionMatrix[r + REGION_CENTER_Y] - w
                        RegionMatrix[g + REGION_SIZE] = w
                        RegionMatrix[g + REGION_NEXT_SIBLING] = g + PPR
                        RegionMatrix[g + REGION_FIRST_CHILD] = -1
                        RegionMatrix[g + REGION_MASS] = 0
                        RegionMatrix[g + REGION_MASS_CENTER_X] = 0
                        RegionMatrix[g + REGION_MASS_CENTER_Y] = 0

                        // Bottom Right sub-region
                        g += PPR
                        RegionMatrix[g + REGION_NODE] = -1
                        RegionMatrix[g + REGION_CENTER_X] = RegionMatrix[r + REGION_CENTER_X] + w
                        RegionMatrix[g + REGION_CENTER_Y] = RegionMatrix[r + REGION_CENTER_Y] + w
                        RegionMatrix[g + REGION_SIZE] = w
                        RegionMatrix[g + REGION_NEXT_SIBLING] =
                            RegionMatrix[r + REGION_NEXT_SIBLING]
                        RegionMatrix[g + REGION_FIRST_CHILD] = -1
                        RegionMatrix[g + REGION_MASS] = 0
                        RegionMatrix[g + REGION_MASS_CENTER_X] = 0
                        RegionMatrix[g + REGION_MASS_CENTER_Y] = 0

                        l += 4

                        // Now the goal is to find two different sub-regions
                        // for the two nodes: the one previously recorded (r[0])
                        // and the one we want to add (n)

                        // Find the quadrant of the old node
                        if (
                            NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_X] <
                            RegionMatrix[r + REGION_CENTER_X]
                        ) {
                            if (
                                NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_Y] <
                                RegionMatrix[r + REGION_CENTER_Y]
                            ) {
                                // Top Left quarter
                                q = RegionMatrix[r + REGION_FIRST_CHILD]
                            } else {
                                // Bottom Left quarter
                                q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR
                            }
                        } else {
                            if (
                                NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_Y] <
                                RegionMatrix[r + REGION_CENTER_Y]
                            ) {
                                // Top Right quarter
                                q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 2
                            } else {
                                // Bottom Right quarter
                                q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 3
                            }
                        }

                        // We remove r[0] from the region r, add its mass to r and record it in q
                        RegionMatrix[r + REGION_MASS] =
                            NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_MASS]
                        RegionMatrix[r + REGION_MASS_CENTER_X] =
                            NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_X]
                        RegionMatrix[r + REGION_MASS_CENTER_Y] =
                            NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_Y]

                        RegionMatrix[q + REGION_NODE] = RegionMatrix[r + REGION_NODE]
                        RegionMatrix[r + REGION_NODE] = -1

                        // Find the quadrant of n
                        if (NodeMatrix[n + NODE_X] < RegionMatrix[r + REGION_CENTER_X]) {
                            if (NodeMatrix[n + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {
                                // Top Left quarter
                                q2 = RegionMatrix[r + REGION_FIRST_CHILD]
                            } else {
                                // Bottom Left quarter
                                q2 = RegionMatrix[r + REGION_FIRST_CHILD] + PPR
                            }
                        } else {
                            if (NodeMatrix[n + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {
                                // Top Right quarter
                                q2 = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 2
                            } else {
                                // Bottom Right quarter
                                q2 = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 3
                            }
                        }

                        if (q === q2) {
                            // If both nodes are in the same quadrant,
                            // we have to try it again on this quadrant
                            if (subdivisionAttempts--) {
                                r = q
                                continue // while
                            } else {
                                // we are out of precision here, and we cannot subdivide anymore
                                // but we have to break the loop anyway
                                subdivisionAttempts = SUBDIVISION_ATTEMPTS
                                break // while
                            }
                        }

                        // If both quadrants are different, we record n
                        // in its quadrant
                        RegionMatrix[q2 + REGION_NODE] = n
                        break
                    }
                }
            }
        }
    }

    // 2) Repulsion
    // --------------
    // NOTES: adjustSizes = antiCollision & scalingRatio = coefficient

    if (options.barnesHutOptimize) {
        coefficient = options.scalingRatio

        // Applying repulsion through regions
        for (n = 0; n < order; n += PPN) {
            // Computing leaf quad nodes iteration

            r = 0 // Starting with root region
            while (true) {
                if (RegionMatrix[r + REGION_FIRST_CHILD] >= 0) {
                    // The region has sub-regions

                    // We run the Barnes Hut test to see if we are at the right distance
                    distance =
                        Math.pow(
                            NodeMatrix[n + NODE_X] - RegionMatrix[r + REGION_MASS_CENTER_X],
                            2
                        ) +
                        Math.pow(NodeMatrix[n + NODE_Y] - RegionMatrix[r + REGION_MASS_CENTER_Y], 2)

                    s = RegionMatrix[r + REGION_SIZE]

                    if ((4 * s * s) / distance < thetaSquared) {
                        // We treat the region as a single body, and we repulse

                        xDist = NodeMatrix[n + NODE_X] - RegionMatrix[r + REGION_MASS_CENTER_X]
                        yDist = NodeMatrix[n + NODE_Y] - RegionMatrix[r + REGION_MASS_CENTER_Y]

                        if (adjustSizes === true) {
                            // -- Linear Anti-collision Repulsion
                            if (distance > 0) {
                                factor =
                                    (coefficient *
                                        NodeMatrix[n + NODE_MASS] *
                                        RegionMatrix[r + REGION_MASS]) /
                                    distance

                                NodeMatrix[n + NODE_DX] += xDist * factor
                                NodeMatrix[n + NODE_DY] += yDist * factor
                            } else if (distance < 0) {
                                factor =
                                    (-coefficient *
                                        NodeMatrix[n + NODE_MASS] *
                                        RegionMatrix[r + REGION_MASS]) /
                                    Math.sqrt(distance)

                                NodeMatrix[n + NODE_DX] += xDist * factor
                                NodeMatrix[n + NODE_DY] += yDist * factor
                            }
                        } else {
                            // -- Linear Repulsion
                            if (distance > 0) {
                                factor =
                                    (coefficient *
                                        NodeMatrix[n + NODE_MASS] *
                                        RegionMatrix[r + REGION_MASS]) /
                                    distance

                                NodeMatrix[n + NODE_DX] += xDist * factor
                                NodeMatrix[n + NODE_DY] += yDist * factor
                            }
                        }

                        // When this is done, we iterate. We have to look at the next sibling.
                        r = RegionMatrix[r + REGION_NEXT_SIBLING]
                        if (r < 0) break // No next sibling: we have finished the tree

                        continue
                    } else {
                        // The region is too close and we have to look at sub-regions
                        r = RegionMatrix[r + REGION_FIRST_CHILD]
                        continue
                    }
                } else {
                    // The region has no sub-region
                    // If there is a node r[0] and it is not n, then repulse
                    rn = RegionMatrix[r + REGION_NODE]

                    if (rn >= 0 && rn !== n) {
                        xDist = NodeMatrix[n + NODE_X] - NodeMatrix[rn + NODE_X]
                        yDist = NodeMatrix[n + NODE_Y] - NodeMatrix[rn + NODE_Y]

                        distance = xDist * xDist + yDist * yDist

                        if (adjustSizes === true) {
                            // -- Linear Anti-collision Repulsion
                            if (distance > 0) {
                                factor =
                                    (coefficient *
                                        NodeMatrix[n + NODE_MASS] *
                                        NodeMatrix[rn + NODE_MASS]) /
                                    distance

                                NodeMatrix[n + NODE_DX] += xDist * factor
                                NodeMatrix[n + NODE_DY] += yDist * factor
                            } else if (distance < 0) {
                                factor =
                                    (-coefficient *
                                        NodeMatrix[n + NODE_MASS] *
                                        NodeMatrix[rn + NODE_MASS]) /
                                    Math.sqrt(distance)

                                NodeMatrix[n + NODE_DX] += xDist * factor
                                NodeMatrix[n + NODE_DY] += yDist * factor
                            }
                        } else {
                            // -- Linear Repulsion
                            if (distance > 0) {
                                factor =
                                    (coefficient *
                                        NodeMatrix[n + NODE_MASS] *
                                        NodeMatrix[rn + NODE_MASS]) /
                                    distance

                                NodeMatrix[n + NODE_DX] += xDist * factor
                                NodeMatrix[n + NODE_DY] += yDist * factor
                            }
                        }
                    }

                    // When this is done, we iterate. We have to look at the next sibling.
                    r = RegionMatrix[r + REGION_NEXT_SIBLING]

                    if (r < 0) break // No next sibling: we have finished the tree

                    continue
                }
            }
        }
    } else {
        coefficient = options.scalingRatio

        // Square iteration
        for (n1 = 0; n1 < order; n1 += PPN) {
            for (n2 = 0; n2 < n1; n2 += PPN) {
                // Common to both methods
                xDist = NodeMatrix[n1 + NODE_X] - NodeMatrix[n2 + NODE_X]
                yDist = NodeMatrix[n1 + NODE_Y] - NodeMatrix[n2 + NODE_Y]

                if (adjustSizes === true) {
                    // -- Anticollision Linear Repulsion
                    distance =
                        Math.sqrt(xDist * xDist + yDist * yDist) -
                        NodeMatrix[n1 + NODE_SIZE] -
                        NodeMatrix[n2 + NODE_SIZE]

                    if (distance > 0) {
                        factor =
                            (coefficient *
                                NodeMatrix[n1 + NODE_MASS] *
                                NodeMatrix[n2 + NODE_MASS]) /
                            distance /
                            distance

                        // Updating nodes' dx and dy
                        NodeMatrix[n1 + NODE_DX] += xDist * factor
                        NodeMatrix[n1 + NODE_DY] += yDist * factor

                        NodeMatrix[n2 + NODE_DX] += xDist * factor
                        NodeMatrix[n2 + NODE_DY] += yDist * factor
                    } else if (distance < 0) {
                        factor =
                            100 *
                            coefficient *
                            NodeMatrix[n1 + NODE_MASS] *
                            NodeMatrix[n2 + NODE_MASS]

                        // Updating nodes' dx and dy
                        NodeMatrix[n1 + NODE_DX] += xDist * factor
                        NodeMatrix[n1 + NODE_DY] += yDist * factor

                        NodeMatrix[n2 + NODE_DX] -= xDist * factor
                        NodeMatrix[n2 + NODE_DY] -= yDist * factor
                    }
                } else {
                    // -- Linear Repulsion
                    distance = Math.sqrt(xDist * xDist + yDist * yDist)

                    if (distance > 0) {
                        factor =
                            (coefficient *
                                NodeMatrix[n1 + NODE_MASS] *
                                NodeMatrix[n2 + NODE_MASS]) /
                            distance /
                            distance

                        // Updating nodes' dx and dy
                        NodeMatrix[n1 + NODE_DX] += xDist * factor
                        NodeMatrix[n1 + NODE_DY] += yDist * factor

                        NodeMatrix[n2 + NODE_DX] -= xDist * factor
                        NodeMatrix[n2 + NODE_DY] -= yDist * factor
                    }
                }
            }
        }
    }

    // 3) Gravity
    // ------------
    g = options.gravity / options.scalingRatio
    coefficient = options.scalingRatio
    for (n = 0; n < order; n += PPN) {
        factor = 0

        // Common to both methods
        xDist = NodeMatrix[n + NODE_X]
        yDist = NodeMatrix[n + NODE_Y]
        distance = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))

        if (options.strongGravityMode) {
            // -- Strong gravity
            if (distance > 0) factor = coefficient * NodeMatrix[n + NODE_MASS] * g
        } else {
            // -- Linear Anti-collision Repulsion n
            if (distance > 0) factor = (coefficient * NodeMatrix[n + NODE_MASS] * g) / distance
        }

        // Updating node's dx and dy
        NodeMatrix[n + NODE_DX] -= xDist * factor
        NodeMatrix[n + NODE_DY] -= yDist * factor
    }

    // 4) Attraction
    // ---------------
    coefficient = Number(options.outboundAttractionDistribution ? outboundAttCompensation : 1)

    // TODO: simplify distance
    // TODO: coefficient is always used as -c --> optimize?
    for (e = 0; e < size; e += PPE) {
        n1 = LinkMatrix[e + EDGE_SOURCE]
        n2 = LinkMatrix[e + EDGE_TARGET]
        w = LinkMatrix[e + EDGE_WEIGHT]

        // Edge weight influence
        ewc = Math.pow(w, options.edgeWeightInfluence)

        // Common measures
        xDist = NodeMatrix[n1 + NODE_X] - NodeMatrix[n2 + NODE_X]
        yDist = NodeMatrix[n1 + NODE_Y] - NodeMatrix[n2 + NODE_Y]

        // Applying attraction to nodes
        if (adjustSizes === true) {
            distance = Math.sqrt(
                Math.pow(xDist, 2) +
                    Math.pow(yDist, 2) -
                    NodeMatrix[n1 + NODE_SIZE] -
                    NodeMatrix[n2 + NODE_SIZE]
            )

            if (options.linLogMode) {
                if (options.outboundAttractionDistribution) {
                    // -- LinLog Degree Distributed Anti-collision Attraction
                    if (distance > 0) {
                        factor =
                            (-coefficient * ewc * Math.log(1 + distance)) /
                            distance /
                            NodeMatrix[n1 + NODE_MASS]
                    }
                } else {
                    // -- LinLog Anti-collision Attraction
                    if (distance > 0) {
                        factor = (-coefficient * ewc * Math.log(1 + distance)) / distance
                    }
                }
            } else {
                if (options.outboundAttractionDistribution) {
                    // -- Linear Degree Distributed Anti-collision Attraction
                    if (distance > 0) {
                        factor = (-coefficient * ewc) / NodeMatrix[n1 + NODE_MASS]
                    }
                } else {
                    // -- Linear Anti-collision Attraction
                    if (distance > 0) {
                        factor = -coefficient * ewc
                    }
                }
            }
        } else {
            distance = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))

            if (options.linLogMode) {
                if (options.outboundAttractionDistribution) {
                    // -- LinLog Degree Distributed Attraction
                    if (distance > 0) {
                        factor =
                            (-coefficient * ewc * Math.log(1 + distance)) /
                            distance /
                            NodeMatrix[n1 + NODE_MASS]
                    }
                } else {
                    // -- LinLog Attraction
                    if (distance > 0)
                        factor = (-coefficient * ewc * Math.log(1 + distance)) / distance
                }
            } else {
                if (options.outboundAttractionDistribution) {
                    // -- Linear Attraction Mass Distributed
                    // NOTE: Distance is set to 1 to override next condition
                    distance = 1
                    factor = (-coefficient * ewc) / NodeMatrix[n1 + NODE_MASS]
                } else {
                    // -- Linear Attraction
                    // NOTE: Distance is set to 1 to override next condition
                    distance = 1
                    factor = -coefficient * ewc
                }
            }
        }

        // Updating nodes' dx and dy
        // TODO: if condition or factor = 1?
        if (distance > 0) {
            // Updating nodes' dx and dy
            NodeMatrix[n1 + NODE_DX] += xDist * factor
            NodeMatrix[n1 + NODE_DY] += yDist * factor

            NodeMatrix[n2 + NODE_DX] -= xDist * factor
            NodeMatrix[n2 + NODE_DY] -= yDist * factor
        }
    }

    // 5) Apply Forces
    // -----------------
    let force
    let swinging
    let traction
    let nodespeed
    let newX
    let newY

    // MATH: sqrt and square distances
    if (adjustSizes === true) {
        for (n = 0; n < order; n += PPN) {
            if (NodeMatrix[n + NODE_FIXED] !== 1) {
                force = Math.sqrt(
                    Math.pow(NodeMatrix[n + NODE_DX], 2) + Math.pow(NodeMatrix[n + NODE_DY], 2)
                )

                if (force > MAX_FORCE) {
                    NodeMatrix[n + NODE_DX] = (NodeMatrix[n + NODE_DX] * MAX_FORCE) / force
                    NodeMatrix[n + NODE_DY] = (NodeMatrix[n + NODE_DY] * MAX_FORCE) / force
                }

                swinging =
                    NodeMatrix[n + NODE_MASS] *
                    Math.sqrt(
                        (NodeMatrix[n + NODE_OLD_DX] - NodeMatrix[n + NODE_DX]) *
                            (NodeMatrix[n + NODE_OLD_DX] - NodeMatrix[n + NODE_DX]) +
                            (NodeMatrix[n + NODE_OLD_DY] - NodeMatrix[n + NODE_DY]) *
                                (NodeMatrix[n + NODE_OLD_DY] - NodeMatrix[n + NODE_DY])
                    )

                traction =
                    Math.sqrt(
                        (NodeMatrix[n + NODE_OLD_DX] + NodeMatrix[n + NODE_DX]) *
                            (NodeMatrix[n + NODE_OLD_DX] + NodeMatrix[n + NODE_DX]) +
                            (NodeMatrix[n + NODE_OLD_DY] + NodeMatrix[n + NODE_DY]) *
                                (NodeMatrix[n + NODE_OLD_DY] + NodeMatrix[n + NODE_DY])
                    ) / 2

                nodespeed = (0.1 * Math.log(1 + traction)) / (1 + Math.sqrt(swinging))

                // Updating node's positon
                newX =
                    NodeMatrix[n + NODE_X] +
                    NodeMatrix[n + NODE_DX] * (nodespeed / options.slowDown)
                NodeMatrix[n + NODE_X] = newX

                newY =
                    NodeMatrix[n + NODE_Y] +
                    NodeMatrix[n + NODE_DY] * (nodespeed / options.slowDown)
                NodeMatrix[n + NODE_Y] = newY
            }
        }
    } else {
        for (n = 0; n < order; n += PPN) {
            if (NodeMatrix[n + NODE_FIXED] !== 1) {
                swinging =
                    NodeMatrix[n + NODE_MASS] *
                    Math.sqrt(
                        (NodeMatrix[n + NODE_OLD_DX] - NodeMatrix[n + NODE_DX]) *
                            (NodeMatrix[n + NODE_OLD_DX] - NodeMatrix[n + NODE_DX]) +
                            (NodeMatrix[n + NODE_OLD_DY] - NodeMatrix[n + NODE_DY]) *
                                (NodeMatrix[n + NODE_OLD_DY] - NodeMatrix[n + NODE_DY])
                    )

                traction =
                    Math.sqrt(
                        (NodeMatrix[n + NODE_OLD_DX] + NodeMatrix[n + NODE_DX]) *
                            (NodeMatrix[n + NODE_OLD_DX] + NodeMatrix[n + NODE_DX]) +
                            (NodeMatrix[n + NODE_OLD_DY] + NodeMatrix[n + NODE_DY]) *
                                (NodeMatrix[n + NODE_OLD_DY] + NodeMatrix[n + NODE_DY])
                    ) / 2

                nodespeed =
                    (NodeMatrix[n + NODE_CONVERGENCE] * Math.log(1 + traction)) /
                    (1 + Math.sqrt(swinging))

                // Updating node convergence
                NodeMatrix[n + NODE_CONVERGENCE] = Math.min(
                    1,
                    Math.sqrt(
                        (nodespeed *
                            (Math.pow(NodeMatrix[n + NODE_DX], 2) +
                                Math.pow(NodeMatrix[n + NODE_DY], 2))) /
                            (1 + Math.sqrt(swinging))
                    )
                )

                // Updating node's positon
                newX =
                    NodeMatrix[n + NODE_X] +
                    NodeMatrix[n + NODE_DX] * (nodespeed / options.slowDown)
                NodeMatrix[n + NODE_X] = newX

                newY =
                    NodeMatrix[n + NODE_Y] +
                    NodeMatrix[n + NODE_DY] * (nodespeed / options.slowDown)
                NodeMatrix[n + NODE_Y] = newY
            }
        }
    }

    // We return the information about the layout (no need to return the matrices)
    return {}
}
