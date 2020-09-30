/**
 * @author Jiacheng Pan <panjiacheng@zju.edu.cn>
 * @description
 */

import Stats from './lib/stats.module'
import * as d3 from './lib/d3.v5.min.js'
import { getFrameRate, initPage, reloadPage } from './lib/utils'
import { drawLineChart } from './lib/linechart'
import { generateRandomGraph } from './lib/graphGenerator'

const STEP = 'step'

function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}

export class TestCase {
    constructor({ width = 500, height = 500, numbersOfNodes, numbersOfLinks, name }) {
        // does it need to clear local storage?
        initPage()

        // fps stats panel
        this.stats = Stats()
        this.stats.showPanel(0)
        this.stats.dom.setAttribute('class', 'status')
        document.body.appendChild(this.stats.dom)

        // step means the index of numbersOfNodes
        this.step = localStorage.getItem(STEP)
        if (this.step === undefined || this.step === null) {
            this.step = 0
        } else {
            this.step = Number(this.step)
        }

        this.width = width
        this.height = height

        this.NsoNodes = numbersOfNodes
        this.NsoLinks = numbersOfLinks
        this.NoNodes = this.NsoNodes[this.step]
        this.NoLinks = this.NsoLinks[this.step]

        this.data = generateRandomGraph({
            nodeNum: this.NoNodes,
            linkNum: this.NoLinks,
            width,
            height
        })

        this.name = name

        this.container = document.createElement('div')
        this.container.setAttribute('style', `display: inline-block;`)
        document.body.appendChild(this.container)

        this.reportDiv = document.createElement('div')
        this.reportDiv.setAttribute('style', `display: inline-block; vertical-align: top;`)
        document.body.appendChild(this.reportDiv)

        this.title = document.createElement('h1')
        this.title.textContent = `${name}, #nodes: ${this.NoNodes}, #edge: ${this.NoLinks}`
        this.reportDiv.appendChild(this.title)

        this.localStorageName = this.name + '_benchmark_result'
        this.testResult = localStorage.getItem(this.localStorageName)
    }

    async run(update, duration) {
        console.log(getFrameRate())
        const refresh = () => {
            this.stats.begin()
            update()
            this.stats.end()
            requestAnimationFrame(refresh)
        }
        refresh(update)
        await sleep(duration)
        const FPSHistory = this.stats.getFPSHistory()
        this.FPS = d3.mean(FPSHistory)
        this.storeFPSResult()
        return this.FPS
    }

    storeFPSResult() {
        if (!this.testResult) {
            this.testResult = []
        } else {
            this.testResult = JSON.parse(this.testResult)
        }
        this.testResult.push({
            size: this.NoNodes + this.NoLinks,
            value: this.FPS
        })
        localStorage.setItem(this.localStorageName, JSON.stringify(this.testResult))
        console.log(this.testResult)
    }

    finish() {
        localStorage.setItem(STEP, (this.step + 1).toString())

        const canvas = this.container.querySelector('canvas')
        if (canvas)
            canvas
                .getContext('webgl2')
                .getExtension('WEBGL_lose_context')
                .loseContext()
        Array.from(this.container.children).forEach((child) =>
            this.container.removeChild.bind(this.container)(child)
        )

        if (this.step + 1 < this.NsoNodes.length) {
            reloadPage()
        } else {
            drawLineChart(this.reportDiv, this.testResult)
            localStorage.clear()
        }
    }
}
