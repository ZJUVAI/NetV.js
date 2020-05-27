/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide a Node class.
 * @dependences interfaces.ts, utils/is.ts
 */

import * as interfaces from './interfaces'
import { isValidId } from './utils/is'

class Node {
    private $_id = ''
    private $_core: interfaces.Core = undefined

    public constructor(core, nodeData: interfaces.NodeData) {
        this.$_core = core
        this.id(nodeData.id) // set id
    }

    /**
     * @description node id getter setter
     * @param value? the node's id, provided?setter:getter;
     */
    public id(value?: string) {
        if (arguments.length === 0) {
            // getter
            return this.$_id
        } else {
            // setter
            if (isValidId(value)) {
                if (isValidId(this.$_id)) {
                    // delete old id from id2node Map
                    this.$_core.$_id2node.delete(this.$_id)
                }
                this.$_core.$_id2node.set(value, this)
                this.$_id = value
                return this
            } else {
                throw new Error(`Invalid ID ${value}`)
            }
        }
    }
}

export default Node
