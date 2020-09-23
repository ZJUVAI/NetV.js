export default function demo(id) {
	// #region snippet
	const netv = new NetV({
		container: document.getElementById(id),
		width: 735,
		height: 735,
	})
	const testData = {
		nodes: [
			{
				id: '0',
				x: 0,
				y: 0,
				r: 10,
				fill: {
					r: 1,
					g: 0,
					b: 0,
					a: 1,
				},
			},
			{
				id: '1',
				x: 100,
				y: 500,
				r: 5,
				fill: {
					r: 0,
					g: 1,
					b: 0,
					a: 1,
				},
			},
			{
				id: '2',
				x: 400,
				y: 400,
				r: 20,
				fill: {
					r: 0,
					g: 0,
					b: 1,
					a: 1,
				},
			},
			{
				id: '3',
				x: 800,
				y: 600,
				r: 20,
				fill: {
					r: 0,
					g: 0,
					b: 1,
					a: 1,
				},
			},
		],
		links: [
			{
				source: '0',
				target: '1',
				strokeColor: {
					r: 1,
					g: 0,
					b: 0,
					a: 1,
				},
			},
			{
				source: '0',
				target: '2',
				strokeColor: {
					r: 0,
					g: 1,
					b: 0,
					a: 1,
				},
			},
			{
				source: '1',
				target: '2',
				strokeColor: {
					r: 0,
					g: 0,
					b: 1,
					a: 1,
				},
			},
		],
	}
	netv.data(testData)
	netv.draw()
	// #endregion snippet
}
