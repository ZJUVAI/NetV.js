import { loadJS } from './utils/dom'
import { loadTestCasesToC } from './utils/toc'

document.write(`<h1>Test Report of NetV.js@v1.0</h1>`)

const toc = loadTestCasesToC('./')

// generate table of contents
let result = ''

result += `<ul>`
writeChildren(toc.children)
result += `</ul>`

document.write(result)

function writeChildren(children) {
    children.forEach((child) => {
        const title = child.url.replace(/.*\./, '')
        result += `<li><a href="${child.url}" id="${title}">${title}</a>`
        if (child.children.length > 0) {
            result += `<ul>`
            writeChildren(child.children)
            result += `</ul>`
        }
        result += `</li>`
    })
}

// import test cases dynamically
function loadChildrenJS(children) {
    children.forEach((child) => {
        // loadChildrenJS()
    })
}
