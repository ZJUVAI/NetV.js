/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide a Link class.
 * @dependences interfaces.ts, utils/is.ts
 */

import * as interfaces from './interfaces'
import { isValidId } from './utils/is'

enum END {
    source,
    target
}

class Link {
    private $_source: interfaces.Node = undefined
    private $_target: interfaces.Node = undefined
    private $_core: interfaces.Core = undefined

    public constructor(core, linkData: interfaces.LinkData) {
        this.$_core = core
        this.source(linkData.source)
        this.target(linkData.target)
    }

    public source(nodeId?: string) {
        return this.end(END.source, nodeId)
    }
    public target(nodeId?: string) {
        return this.end(END.target, nodeId)
    }

    /**
     * @description setting an end of a link (source or target)
     * @param {endType}
     * @param {endId} the end node's id; Provided?setter:getter
     */
    private end(endType: END, value?: string) {
        if (arguments.length === 1) {
            // getter
            if (endType === END.source) {
                return this.$_source
            } else {
                return this.$_target
            }
        } else {
            // setter
            if (isValidId(value)) {
                const end = this.$_core.$_id2node.get(value)
                if (!end) {
                    // source or target not exist
                    throw new Error(`Link's end: ${value} not exist.`)
                } else {
                    if (this.$_source && this.$_target) {
                        // delete old Map
                        this.$_core.$_ends2link.delete([this.$_source.id, this.$_target.id])
                    }

                    if (endType === END.source) {
                        this.$_source = end
                    } else {
                        this.$_target = end
                    }

                    this.$_core.$_ends2link.set([this.$_source.id, this.$_target.id], this)

                    return this
                }
            } else {
                throw new Error(`Invalid link end id: ${value}.`)
            }
        }
    }
}

export default Link
