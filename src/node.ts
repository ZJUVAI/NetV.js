/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide a Node class.
 * @dependences interfaces.ts, utils/is.ts
 */

import * as interfaces from './interfaces'
import { isValidId } from './utils/is'
import NetV from './index'

class Node {
    private $_id = ''
    private $_core: NetV = undefined

    public constructor(core, nodeData: interfaces.NodeData) {
        this.$_core = core
        this.$_setId(nodeData.id) // set id
    }

    /**
     * getter of private property $_id
     * @memberof Node
     */
    public id() {
        return this.$_id
    }

    /**
     * set the id of this node.
     * it is only used for constructor
     * because a node's id is not allowed to be changed.
     * @private
     * @param {string} value
     * @returns nothing
     * @memberof Node
     */
    private $_setId(value: string) {
        if (isValidId(value)) {
            if (this.$_core.$_id2node.has(value)) {
                throw new Error(`Duplicate node (${value}) is not allowed.`)
            }
            if (isValidId(this.$_id)) {
                throw new Error('Can not change the id of an exist node.')
            }
            this.$_core.$_id2node.set(value, this)
            this.$_id = value
        } else {
            throw new Error(`Invalid ID ${value}`)
        }
    }
}

export default Node
