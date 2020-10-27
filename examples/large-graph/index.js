/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description draw large graph
 */
const netv = new NetV({
    container: document.getElementById('main'),
    nodeLimit: 1e5,
    linkLimit: 1e7,
    node: {
        style: {
            circle: {
                fill: { r: 0.2, g: 0.6, b: 0.2, a: 0.5 },
                r: 1,
                strokeColor: { r: 0.9, g: 0.9, b: 0.9, a: 0.2 },
                strokeWidth: 0
            }
        }
    },
    link: {
        style: {
            line: {
                strokeWidth: 0.5
            }
        }
    }
})

const LAYOUTED_GRAPH_URLS = {
    bcsstk31:
        'https://uc1ac81c4f62c8f90f4037ed2c1f.dl.dropboxusercontent.com/cd/0/get/BCAskZv_wKJbKXBfnrD6FLdWmR0vBlxx013Uln51ECS3kwcIncDpWBEtPAr7nU43igEzZCZFNhz8Kg9qRbxvp0uMBfRjMrTFx6ANYyUoKh17HHKKlG4VqQdk1-0OZxfjSSE/file?dl=1#',
    '3elt':
        'https://uca135b6ffd9e00ec034c38adf8c.dl.dropboxusercontent.com/cd/0/get/BCD_I9LvWNnHFVgdkFCDE7v8UWHE3sO4gMbgF36sNMyDZp01tt9dzXYEBqXFLW5E_S-oPNnCsbXdEt4ccDj0xsxuF-ievCmDmI0933UPCACFTaBftH7hVxsklpbUo3WT3so/file?dl=1#'
}

fetch(LAYOUTED_GRAPH_URLS['bcsstk31'])
    .then((res) => res.json())
    .then((json) => {
        const data = netv.Utils.transformGraphPosition(json, 600, 400, 300)
        netv.data(data)
        netv.draw()
    })
