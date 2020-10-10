import { isStringSameIgnoreQuotesCase } from '../../utils/is'
import { refresh } from '../../utils/dom'

export default [
    function(container: HTMLElement, NetV: any) {
        let log = ''
        let expected = container.toString()
        let isSame = isStringSameIgnoreQuotesCase
        try {
            refresh(container as HTMLDivElement)
            const netv = new NetV({
                container,
                width: 100,
                height: 100,
                backgroundColor: { r: 0, g: 0, b: 0, a: 1 }
            })
            netv.draw()
            log = '[object HTMLDivElement]'
        } catch (e) {
            log = e.toString()
        }
        return {
            title: 'Container: Mounted &lt;div&gt;',
            container,
            log: log,
            expected: expected,
            isPassed: isSame(log, expected)
        }
    }
]
