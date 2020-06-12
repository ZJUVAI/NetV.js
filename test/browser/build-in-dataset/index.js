/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description test load dataset and build-in transform position function
 *
 * expected: miserables dataset show on center of canvas
 */
const netv = new NetV({
    container: document.getElementById('main')
})
const data = netv.Utils.transformGraphPosition(netv.loadDataset('miserables'), 600, 400, 300)
netv.data(data)
netv.draw()
