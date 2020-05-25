/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide a Link class.
 * @dependences No dependeces yet.
 */

import * as interfaces from './interfaces'

enum END {
    source,
    target
}

class Link {
    private $_source = ''
    private $_target = ''
    private $_core: interfaces.Core = undefined

    public constructor(core, linkData: interfaces.LinkData) {
        this.$_core = core
    }

    public source(nodeId?: string) {
        this.end(END.source, nodeId)
    }
    public target(nodeId?: string) {
        this.end(END.target, nodeId)
    }

    /**
     * @description setting an end of a link (source or target)
     * @param endId: the end node's id; Provided?setter:getter
     */
    private end(endType: END, endId?: string) {}
}

export default Link
