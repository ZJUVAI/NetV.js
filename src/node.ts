/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide a Node class.
 * @dependences No dependeces yet.
 */

import * as interfaces from './interfaces'

class Node {
    private $_id = ''
    private $_core: interfaces.Core = undefined

    public constructor(core, nodeData: interfaces.NodeData) {
        this.$_core = core
        this.id(nodeData.id) // set id
    }

    /**
     * @description node id getter setter
     * @param {value?} the node's id, provided?setter:getter;
     */
    public id(value?: string) {
        if (value && value.length > 0) {
            if (this.$_core.getNodeById(value)) {
                throw new Error('Duplicated ID for nodes.')
            } else {
                this.$_core.$_id2node.set(value, this)
                this.$_id = value
            }
        } else {
            return this.$_id
        }
    }
}

export default Node
