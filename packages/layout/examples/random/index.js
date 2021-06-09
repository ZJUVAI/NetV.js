const width = 500
const height = 400

// eslint-disable-next-line no-undef
const netv = new NetV({
    container: document.getElementById('main'),
    width,
    height
})

const data = netv.loadDataset('miserables')

// eslint-disable-next-line no-undef
const randomLayout = new Random()
randomLayout.data(data)
randomLayout.onStop((data) => {
    netv.data(
        // eslint-disable-next-line no-undef
        NetV.Utils.transformGraphPosition(
            data,
            Math.min(width, height) * 0.9,
            width / 2,
            height / 2
        )
    )
    netv.draw()
})
randomLayout.start()
