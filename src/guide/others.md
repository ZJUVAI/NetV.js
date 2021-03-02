---
sidebarDepth: 3
---

# 相关框架

<!-- ## FPS 测试 -->
<!-- <img :src="$withBase('/fps-table-zh.jpg')" alt="fps-table-zh"> -->
<!-- <img :src="$withBase('/fps-line.jpg')" alt="fps-line"> -->

## Sigma.js

[Sigma.js](http://sigmajs.org/)是一个用于图绘制的 JavaScript 库，它支持通过简单的配置生成图，并可以方便进行拓展。
Sigma.js近乎[停止维护](https://github.com/jacomyal/sigma.js/releases/)，同时在大规图数据下表现不佳。

## Stardust.js

[Stardust.js](https://stardustjs.github.io/)是一个基于 WebGL 用于绘制信息可视化的 JavaScript 库。它通过WebGL加速，对于一般图形的的绘制性能表现优秀。Stardust.js 也可用来绘制简单的图数据。
<!-- 但是它只支持渲染绘制，不是针对于图数据、图可视化的而进行开发驱动的库。 -->
<!-- 同时他近乎[停止维护](https://github.com/stardustjs/)。 -->

<!-- ## D3.js (D3-SVG, D3-Canvas) -->
## D3.js

[D3.js](https://d3js.org/)是一个基于数据操作 DOM 的 JavaScript 库。它的设计精巧的Data-Driven的特性以及便捷的 DOM 操作 API 使它成为可视化可视分析领域中应用最广泛的工具。D3.js 可以和 NetV.js 结合使用，如使用 D3.js 进行布局结合用 NetV.js 进行渲染。
<!-- 在对于图的支持来讲，它并不支持大规模图数据的渲染，并不是为可视分析为最终目的而进行开发驱动的库。 -->
<!-- 但是它是可视化可视分析领域中应用最广泛的工具，我们未来会支持基于 D3.js 来应用我们的 NetV 引擎。 -->

## Cytoscape.js

[Cytoscape.js](https://js.cytoscape.org/)是一个面向图可视化、图可视分析的 JavaScript 库。它有丰富的图数据处理相关接口和完善的示例。