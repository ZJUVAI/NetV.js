/**
 * @author Jiacheng Pan <panjiacheng@zju.edu.cn>
 * @description
 */

import Stats from './lib/stats.module'
import * as d3 from './lib/d3.v4.min.js'
import { parseBoolean } from './lib/utils'
import { drawLineChart } from './lib/linechart'
import { generateRandomGraph } from './lib/graphGenerator'

const IS_REFRESHED_MANUALLY = 'isRefreshedManually'
const STEP = 'step'

function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}

export class TestCase {
    constructor({ width = 500, height = 500, numbersOfNodes, numbersOfLinks, name }) {
        // does it need to clear local storage?
        this.judgeAndClearLocalStorage()

        this.stats = Stats()
        this.stats.showPanel(0)
        this.stats.dom.setAttribute('class', 'status')
        document.body.appendChild(this.stats.dom)

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

        this.title = document.createElement('h1')
        this.title.textContent = `#nodes: ${this.NoNodes}, #edge: ${this.NoLinks}`
        document.body.appendChild(this.title)

        this.container = document.createElement('div')
        document.body.appendChild(this.container)

        this.localStorageName = this.name + '_benchmark_result'
        this.testResult = localStorage.getItem(this.localStorageName)
    }

    judgeAndClearLocalStorage() {
        // Whether the page is refreshed by manual at last time
        let isRefreshedManually = localStorage.getItem(IS_REFRESHED_MANUALLY)
        if (
            isRefreshedManually === undefined ||
            isRefreshedManually === null ||
            parseBoolean(isRefreshedManually)
        ) {
            // The page will be refreshed for each benchmark test case
            // So we need to distinguish whether the page is refreshed manually or automatically
            // If the page is refreshed manually, we should clear the local storage
            localStorage.clear()
        } else {
            // the page is refreshed automatically
            localStorage.setItem(IS_REFRESHED_MANUALLY, 'true')
        }
    }

    async run(update, duration) {
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
    }

    finish() {
        localStorage.setItem(STEP, (this.step + 1).toString())

        if (this.step + 1 < this.NsoNodes.length) {
            localStorage.setItem(IS_REFRESHED_MANUALLY, 'false')
            location.reload()
        } else {
            drawLineChart(this.testResult)
            localStorage.clear()
        }
    }
}
