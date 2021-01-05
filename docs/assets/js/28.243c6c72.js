(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{845:function(t,s,a){"use strict";a.r(s);var e=a(113),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node"}},[t._v("#")]),t._v(" Node")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/API/node.html"}},[a("code",[t._v("Node")])]),t._v("是 "),a("em",[t._v("NetV.js")]),t._v(" 的一个基本对象. 它默认被可视化成圆形.")],1),t._v(" "),a("h2",{attrs:{id:"操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作"}},[t._v("#")]),t._v(" 操作")]),t._v(" "),a("h3",{attrs:{id:"node-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-id"}},[t._v("#")]),t._v(" "),a("code",[t._v("Node.id()")])]),t._v(" "),a("p",[a("code",[t._v("Node.id()")]),t._v(": 返回节点的 ID(一个字符串).")]),t._v(" "),a("h3",{attrs:{id:"node-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-x"}},[t._v("#")]),t._v(" "),a("code",[t._v("Node.x()")])]),t._v(" "),a("p",[t._v("获取或者设置节点的 x 坐标.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Node.x()")]),t._v(": 获取节点的 x 坐标 (一个数字);")]),t._v(" "),a("li",[a("code",[t._v("Node.x( number )")]),t._v(": 设置节点的 x 坐标;")])]),t._v(" "),a("h3",{attrs:{id:"node-y"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-y"}},[t._v("#")]),t._v(" "),a("code",[t._v("Node.y()")])]),t._v(" "),a("p",[t._v("同 "),a("code",[t._v("Node.x()")]),t._v(" 一样.")]),t._v(" "),a("h3",{attrs:{id:"node-position"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-position"}},[t._v("#")]),t._v(" "),a("code",[t._v("Node.position()")])]),t._v(" "),a("p",[t._v("获取或者设置节点的坐标(x 和 y).")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("Node.position()")]),t._v(": 获取节点的坐标 ("),a("code",[t._v("{x: number, y: number}")]),t._v(")")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Node.position( {x: number, y: number} )")]),t._v(": 设置节点的坐标(x 和 y). 同时返回当前设置的坐标 ("),a("code",[t._v("{x: number, y: number}")]),t._v(").")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" nodeOne "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" netV"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNodeById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnodeOne"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回: {x: 100, y: 200}")]),t._v("\nnodeOne"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnetV"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("draw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  注意只有经过 netV.draw() 后, 可视化才回被刷新")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"style"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#style"}},[t._v("#")]),t._v(" Style")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/node-style.svg"),alt:"node-style"}}),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" netV"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNodeById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("r")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("strokeWidth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.98")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" g"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.69")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.23")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("strokeColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" g"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.44")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.74")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnetV"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("draw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"node-r"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-r"}},[t._v("#")]),t._v(" "),a("code",[t._v("Node.r()")])]),t._v(" "),a("p",[t._v("获取或者设置节点的半径.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Node.r()")]),t._v(": 获取节点的半径 (一个数字).")]),t._v(" "),a("li",[a("code",[t._v("Node.r( number )")]),t._v(": 设置节点的半径.")])]),t._v(" "),a("h3",{attrs:{id:"node-fill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-fill"}},[t._v("#")]),t._v(" "),a("code",[t._v("Node.fill()")])]),t._v(" "),a("p",[t._v("获取或者设置节点的颜色.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Node.fill()")]),t._v(": 获得节点的颜色 (一个 "),a("RouterLink",{attrs:{to:"/zh/API/interfaces.html#color"}},[a("code",[t._v("Color")])]),t._v(" 对象).")],1),t._v(" "),a("li",[a("code",[t._v("Node.fill(")]),a("RouterLink",{attrs:{to:"/zh/API/interfaces.html#color"}},[a("code",[t._v("Color")])]),a("code",[t._v(")")]),t._v(": 设置节点的颜色.")],1)]),t._v(" "),a("h3",{attrs:{id:"node-strokecolor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-strokecolor"}},[t._v("#")]),t._v(" "),a("code",[t._v("Node.strokeColor()")])]),t._v(" "),a("p",[t._v("获取或者设置节点的边框颜色.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Node.strokeColor()")]),t._v(": 获取节点的边框颜色 (一个 "),a("RouterLink",{attrs:{to:"/zh/API/interfaces.html#color"}},[a("code",[t._v("Color")])]),t._v(" 对象).")],1),t._v(" "),a("li",[a("code",[t._v("Node.strokeColor(")]),a("RouterLink",{attrs:{to:"/zh/API/interfaces.html#color"}},[a("code",[t._v("Color")])]),a("code",[t._v(")")]),t._v(": 设置节点的边框颜色.")],1)]),t._v(" "),a("h3",{attrs:{id:"node-strokewidth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-strokewidth"}},[t._v("#")]),t._v(" "),a("code",[t._v("Node.strokeWidth()")])]),t._v(" "),a("p",[t._v("获取或者设置节点的边框宽度.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Node.strokeWidth()")]),t._v(": 获取节点的边框宽度(一个数字).")]),t._v(" "),a("li",[a("code",[t._v("Node.strokeWidth( number )")]),t._v(": 设置节点的边框宽度.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);