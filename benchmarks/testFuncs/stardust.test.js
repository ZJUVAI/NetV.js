/**
 * @author Jiacheng Pan<panjiacheng@zju.edu.cn>
 */

import * as Stardust from '../lib/stardust.bundle.min.js'

export default async function test(testCase) {
    const { container, width, height, data } = testCase

    const canvas = document.createElement('canvas')
    container.appendChild(canvas)

    const platform = Stardust.platform('webgl-2d', canvas, width, height)
    platform.pixelRatio = window.devicePixelRatio || 1

    const snodes = Stardust.mark.create(Stardust.mark.circle(8), platform)
    const snodesBG = Stardust.mark.create(Stardust.mark.circle(8), platform)
    const sedges = Stardust.mark.create(Stardust.mark.line(), platform)

    snodes.attr('radius', (d) => (d.r ? d.r : 1)).attr('color', [1, 0, 0, 1])

    snodesBG.attr('radius', (d) => (d.r ? d.r + 1 : 2)).attr('color', [1, 1, 1, 0.5])

    sedges
        .attr('width', (d) => (d.strokeWidth ? d.strokeWidth : 1))
        .attr('color', [0.5, 0.5, 0.5, 0.1])

    const positions = Stardust.array('Vector2')
        .value((d) => [d.x, d.y])
        .data(data.nodes)

    const positionScale = Stardust.scale
        .custom('array(pos, value)')
        .attr('pos', 'Vector2Array', positions)
    snodes.attr(
        'center',
        positionScale((d) => d.id)
    )
    snodesBG.attr(
        'center',
        positionScale((d) => d.id)
    )
    sedges.attr(
        'p1',
        positionScale((d) => d.source)
    )
    sedges.attr(
        'p2',
        positionScale((d) => d.target)
    )

    snodesBG.data(data.nodes)
    snodes.data(data.nodes)
    sedges.data(data.links)

    await testCase.run(() => {
        data.nodes.forEach((n) => {
            n.x = Math.random() * width
            n.y = Math.random() * height
        })
        platform.clear([1, 1, 1, 1])
        sedges.render()
        snodesBG.render()
        snodes.attr('radius', 2)
        snodes.render()
    })
}
