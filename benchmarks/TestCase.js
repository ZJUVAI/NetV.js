/**
 * @author Jiacheng Pan <panjiacheng@zju.edu.cn>
 * @description
 */

import Stats from './lib/stats.module'
import * as d3 from './lib/d3.v5.min.js'
import { reloadPage } from './lib/utils'
import { generateRandomGraph } from './lib/graphGenerator'
import { STEP, RESULT, TEST_DURATION_MS } from './configs'

function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}

export class TestCase {
    constructor({ width = 500, height = 500, numbersOfNodes, numbersOfLinks, name }) {
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

        this.numberOfNodesList = numbersOfNodes
        this.numberOfLinksList = numbersOfLinks
        this.numberOfNodes = this.numberOfNodesList[this.step]
        this.numberOfLinks = this.numberOfLinksList[this.step]

        this.data = generateRandomGraph({
            nodeNum: this.numberOfNodes,
            linkNum: this.numberOfLinks,
            width,
            height
        })

        this.name = name

        this.container = document.createElement('div')
        this.container.setAttribute(
            'style',
            `display: inline-block;width:${this.width};height:${this.height}`
        )
        document.body.appendChild(this.container)

        this.reportDiv = document.createElement('div')
        this.reportDiv.setAttribute('style', `display: inline-block; vertical-align: top;`)
        document.body.appendChild(this.reportDiv)

        this.title = document.createElement('h3')
        this.title.textContent = `${name}, #nodes: ${this.numberOfNodes}, #edge: ${this.numberOfLinks}`
        this.reportDiv.appendChild(this.title)

        this.testResult = localStorage.getItem(RESULT)
    }

    async run(update) {
        const refresh = () => {
            this.stats.begin()
            update()
            this.stats.end()
            requestAnimationFrame(refresh)
        }
        refresh(update)
        await sleep(TEST_DURATION_MS)
        const FPSHistory = this.stats.getFPSHistory()
        this.FPS = d3.mean(FPSHistory)
        this.storeFPSResult()
        return this.FPS
    }

    storeFPSResult() {
        if (!this.testResult) {
            this.testResult = {}
        } else {
            this.testResult = JSON.parse(this.testResult)
        }

        if (!(this.name in this.testResult)) {
            this.testResult[this.name] = {}
        }

        this.testResult[this.name][
            `nodes: ${this.numberOfNodes}&links: ${this.numberOfLinks}`
        ] = this.FPS
        localStorage.setItem(RESULT, JSON.stringify(this.testResult))
        console.log(this.testResult)
    }

    finish() {
        localStorage.setItem(STEP, (this.step + 1).toString())

        const canvas = this.container.querySelector('canvas')
        if (canvas) {
            let webgl = canvas.getContext('webgl2') || canvas.getContext('webgl')
            if (webgl) {
                webgl.getExtension('WEBGL_lose_context').loseContext()
            }
        }
        Array.from(this.container.children).forEach((child) =>
            this.container.removeChild.bind(this.container)(child)
        )

        if (this.step + 1 < this.numberOfNodesList.length && this.FPS >= 1) {
            reloadPage()
            return true // is refreshed
        } else {
            localStorage.setItem(STEP, '0')
            return false // not refreshed
        }
    }
}
