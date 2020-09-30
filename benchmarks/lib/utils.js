export function parseBoolean(str) {
    return str === 'true'
}

// Function that returns a Promise for the FPS
const getFPS = () =>
    new Promise((resolve) => {
        let count = 0
        const total = 10
        let t1
        let t2
        function refresh() {
            if (count === 0) {
                t1 = new Date()
            }
            if (count === total) {
                t2 = new Date()
                resolve((total * 1000) / (t2 - t1))
            } else {
                count++
                requestAnimationFrame(refresh)
            }
        }
        refresh()
    })

const IS_REFRESHED_MANUALLY = 'IS_REFRESHED_MANUALLY'
const FRAME_RATE = 'FRAME_RATE'

export function isRefreshedManually() {
    let isRefreshedManually = localStorage.getItem(IS_REFRESHED_MANUALLY)
    return (
        isRefreshedManually === undefined ||
        isRefreshedManually === null ||
        parseBoolean(isRefreshedManually)
    )
}

export function isFirstTime() {
    return isRefreshedManually() || !localStorage.getItem(FRAME_RATE)
}

export function initPage() {
    // Whether the page is refreshed by manual at last time

    if (isRefreshedManually()) {
        // The page will be refreshed for each benchmark test case
        // So we need to distinguish whether the page is refreshed manually or automatically
        // If the page is refreshed manually, we should clear the local storage
        localStorage.clear()
        localStorage.setItem(IS_REFRESHED_MANUALLY, 'true')

        // Calling the function to get the FPS
        getFPS().then((fps) => {
            console.log(fps)
            localStorage.setItem(FRAME_RATE, fps)
            reloadPage()
        })
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
