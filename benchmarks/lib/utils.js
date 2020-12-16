const IS_REFRESHED_MANUALLY = 'IS_REFRESHED_MANUALLY'
const FRAME_RATE = 'FRAME_RATE'

export function parseBoolean(str) {
    return str === 'true'
}

export function isRefreshedManually() {
    let isRefreshedManually = localStorage.getItem(IS_REFRESHED_MANUALLY)
    return (
        isRefreshedManually === undefined ||
        isRefreshedManually === null ||
        parseBoolean(isRefreshedManually)
    )
}

export function initPage() {
    // Whether the page is refreshed by manual at last time

    if (isRefreshedManually()) {
        // The page will be refreshed for each benchmark test case
        // So we need to distinguish whether the page is refreshed manually or automatically
        // If the page is refreshed manually, we should clear the local storage
        localStorage.clear()
        localStorage.setItem(IS_REFRESHED_MANUALLY, 'true')
    } else {
        // the page is refreshed automatically
        localStorage.setItem(IS_REFRESHED_MANUALLY, 'true')
    }
}

export function getFrameRate() {
    return Math.round(localStorage.getItem(FRAME_RATE))
}

export function reloadPage() {
    localStorage.setItem(IS_REFRESHED_MANUALLY, 'false')
    location.reload()
}

export function download(content, fileName, contentType) {
    const a = document.createElement('a')
    const file = new Blob([content], { type: contentType })
    a.href = URL.createObjectURL(file)
    a.download = fileName
    a.click()
}

export function json2csv(json) {
    const rowHeaders = Object.keys(json)
    if (rowHeaders.length > 0) {
        const columnHeaders = Object.keys(Object.values(json)[0])
        columnHeaders.unshift('Items')
        let csv = columnHeaders.join(',')

        csv += '\r\n'

        csv += Object.values(json)
            .map((row, i) => {
                const cells = Object.values(row)
                cells.unshift(rowHeaders[i])
                return cells.join(',')
            })
            .join('\r\n')

        console.log(csv)
        return csv
    } else {
        return ''
    }
}
