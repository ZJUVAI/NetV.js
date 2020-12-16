<script>
// import '../styles/index.scss'
// import mixin from '../mixin'
// import WIcon from '../demo-block/icon'
import demo from './demo-1-snippet'
const id = 'demo-1'
export default {
	name: id,
	// mixins: [mixin],
	// data() {
	//     return {
	//         codeStr: `
	//         const netv = new NetV({
	//             container: document.getElementById('demo1'),
	//             width: 600,
	//             height: 600
	//         })
	//         const testData = {
	//             nodes: [
	//                 {
	//                     id: '0',
	//                     x: 0,
	//                     y: 0,
	//                     r: 10,
	//                     fill: {
	//                         r: 1,
	//                         g: 0,
	//                         b: 0,
	//                         a: 1
	//                     }
	//                 },
	//                 {
	//                     id: '1',
	//                     x: 100,
	//                     y: 500,
	//                     r: 5,
	//                     fill: {
	//                         r: 0,
	//                         g: 1,
	//                         b: 0,
	//                         a: 1
	//                     }
	//                 },
	//                 {
	//                     id: '2',
	//                     x: 400,
	//                     y: 400,
	//                     r: 20,
	//                     fill: {
	//                         r: 0,
	//                         g: 0,
	//                         b: 1,
	//                         a: 1
	//                     }
	//                 },
	//                 {
	//                     id: '3',
	//                     x: 800,
	//                     y: 600,
	//                     r: 20,
	//                     fill: {
	//                         r: 0,
	//                         g: 0,
	//                         b: 1,
	//                         a: 1
	//                     }
	//                 }
	//             ],
	//             links: [
	//                 {
	//                     source: '0',
	//                     target: '1',
	//                     strokeColor: {
	//                         r: 1,
	//                         g: 0,
	//                         b: 0,
	//                         a: 1
	//                     }
	//                 },
	//                 {
	//                     source: '0',
	//                     target: '2',
	//                     strokeColor: {
	//                         r: 0,
	//                         g: 1,
	//                         b: 0,
	//                         a: 1
	//                     }
	//                 },
	//                 {
	//                     source: '1',
	//                     target: '2',
	//                     strokeColor: {
	//                         r: 0,
	//                         g: 0,
	//                         b: 1,
	//                         a: 1
	//                     }
	//                 }
	//             ]
	//         }
	//         netv.data(testData)
	//         netv.draw()
	//     `
	//             .replace(/^ {8}/gm, '')
	//             .trim()
	//     }
	// },
	// components: {
	// 	WIcon,
	// },
	methods: {
		// demo1() {
		//     demo()
		// }
	},
	data() {
		return {
			id,
		}
	},
	mounted() {
		demo(this.id)
		// this.demo1()
	},
}
</script>
<template>
	<div v-bind:id="id" class="demo"></div>

	<!-- <div class="component-wrapper">
        <div class="component-wrapper-demo">
            <div id="demo1" class="demo"></div>
        </div>
        <div class="code-content" v-highlight style="height: 0;">
            <div class="code-content-height">
                <pre><code>{{ codeStr }}</code></pre>
            </div>
        </div>
        <div class="lock-code" @click="showCode(0)" ref="xxx">
            <w-icon class="icon-down" :name="isShow[0] === false ? 'down' : 'up'"></w-icon>
            <span class="lock-code-word">{{ isShow[0] === false ? '显示代码' : '隐藏代码' }}</span>
        </div>
    </div> -->
</template>
