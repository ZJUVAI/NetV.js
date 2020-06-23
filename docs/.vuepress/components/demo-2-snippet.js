export default function demo(id) {
	// #region snippet
	const netv = new NetV({
		container: document.getElementById(id),
	})
	const data = netv.Utils.transformGraphPosition(
		netv.loadDataset('miserables'),
		600,
		400,
		300
	)
	netv.data(data)
	netv.draw()
	// #endregion snippet
}
