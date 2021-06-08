/**
 * @author Jiacheng Pan
 * @email panjiacheng@zju.edu.cn
 * @create date 2021-06-08 15:41:13
 * @modify date 2021-06-08 15:41:13
 * @desc [description]
 */
interface Node {
    id: string | number
    [propName: string]: any
}

interface Link {
    source: string | number
    target: string | number
    [propName: string]: any
}

interface Data {
    nodes?: Node[]
    links?: Link[]
    [propName: string]: any
}

type Callback = (data: Data) => any

export { Node, Link, Data, Callback }
