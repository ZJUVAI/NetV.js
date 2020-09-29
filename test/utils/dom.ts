export function refresh(div: HTMLDivElement) {
    const canvas = div.querySelector('canvas')
    if (canvas)
        canvas
            .getContext('webgl2')
            .getExtension('WEBGL_lose_context')
            .loseContext()
    Array.from(div.children).forEach((child) => div.removeChild.bind(div)(child))
}

export function loadJS(url, callback) {
    const script = document.createElement('script')
    const fn = callback || function() {}

    script.type = 'text/javascript'

    if (script.readyState) {
        // IE
        script.onreadystatechange = function() {
            if (script.readyState == 'loaded' || script.readyState == 'complete') {
                script.onreadystatechange = null

                fn()
            }
        }
    } else {
        // other browsers
        script.onload = function() {
            fn()
        }
    }

    script.src = url

    document.getElementsByTagName('head')[0].appendChild(script)
}
