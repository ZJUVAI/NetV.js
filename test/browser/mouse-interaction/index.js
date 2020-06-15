/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description test mouse click, drag interaction
 *
 * expected: click nodes, change color, drag nodes, change position
 */
const netv = new NetV({
    container: document.getElementById('main'),
})
const data = netv.Utils.transformGraphPosition(netv.loadDataset('miserables'), 600, 400, 300)
netv.data(data)
netv.draw()
