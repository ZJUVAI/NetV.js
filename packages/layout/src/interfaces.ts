/**
 * @author Jiacheng Pan
 * @email panjiacheng@zju.edu.cn
 * @create date 2021-06-08 15:41:13
 * @modify date 2021-06-08 15:41:13
 * @desc [description]
 */

type ID = string | number

interface Node {
    id: ID
    [propName: string]: any
}

interface Link {
    source: ID
    target: ID
    [propName: string]: any
}

interface Data {
    nodes?: Node[]
    links?: Link[]
    [propName: string]: any
}

type Callback = (data: Data) => any

export { ID, Node, Link, Data, Callback }
