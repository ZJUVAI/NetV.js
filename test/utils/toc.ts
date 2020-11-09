/**
 * @description: return a tree structure which describe the table of test cases contents
 * @param {string} filePath
 * @returns a ToC structure: {
 *   title: "xxx",
 *   children: [{
 *     title: "xxxx",
 *     children: [...]
 *   },
 *   ...
 * ]}
 */
export function loadTestCasesToC(filePath: string) {
    /**
     * @description: try to retrieve the files contained under the filePath (not recursive)
     * @param {string} filePath
     * @returns files contained in the direct child directory
     */
    function loadDirectory(filePath: string): any[] {
        let result = null
        let xmlhttp = new XMLHttpRequest()
        xmlhttp.open('GET', filePath, false)
        xmlhttp.send()
        if (xmlhttp.status === 200) {
            result = xmlhttp.responseText.match(/<a.*\/a>/g)
        }
        if (result) {
            return result.map((item) => {
                return item
                    .replace(/<a\shref=\".*\">/g, '')
                    .replace(/<\/a>/g, '')
                    .replace(/&amp;/g, '&')
                    .replace(/&nbps;/g, ' ')
            })
        } else {
            return []
        }
    }

    function filterCaseDirectories(paths: string[]): string[] {
        return paths.filter((path: string) => {
            // filter out directory begin with 'case.xxx'
            if (path[path.length - 1] === '/') {
                // means it is a directory
                if (path.slice(0, 5) === 'case.') {
                    return true
                }
            }
            return false
        })
    }
    let caseDirectories = filterCaseDirectories(loadDirectory(filePath))
    return {
        url: filePath,
        children: caseDirectories.map((caseDir) => loadTestCasesToC(filePath + caseDir))
    }
}
