/**
 * @author Jiacheng Pan
 * @email panjiacheng@zju.edu.cn
 * @create date 2021-06-08 15:40:31
 * @modify date 2021-06-08 15:40:31
 * @desc [description]
 */
import { Data, Callback } from '../interfaces'

interface Layout {
    data: (data?: Data) => Data
    start: () => void
    restart: () => void
    parameters: (param?: {}) => {}
    onStop: (callback: Callback) => void

    stop?: () => void
    resume?: () => void
    pause?: () => void
    onEach?: (callback: Callback) => void
}

export default Layout
