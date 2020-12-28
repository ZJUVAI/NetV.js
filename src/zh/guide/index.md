---
sidebarDepth: 3
---
# 指南

## 介绍

### NetV.js 是什么

NetV.js: A Network Visualization Library.
是一个面向**图可视化、图可视分**领域的**专业的、深入的**渲染、布局、交互、可视化、可视分析 JavaScript 库。
它使用`WebGL`作为底层渲染，支持千万级别的点边绘制、交互、布局。在浏览器端可以完成大规模图布局。是以图可视化、图可视分析为最终目的驱动引擎。

## 特性

### 数据

-   面向图数据
-   支持千万点边数量级

### 渲染

-   基于 WebGL
-   高效 FPS

### 交互

-   Click
-   Hover
-   Drag
-   Lasso

<!-- ### 布局

-   多种图布局支持
-   服务器端计算 -->

<!-- ### 可视化

-   可视化组件

### 可视分析

-   可视分析套件 -->

## 为什么选择 NetV.js？

### FPS 测试

| 节点数量 | 2e3 | 1e4 | 2e4 | 4e4 | 1e5 | 2e5 | 4e5 | 1e6 | 2e6 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
NetV |	119 |	117 |	111 |	107 |	40 |	18 |	7 |	2 | -
Stardust |	118	| 118 |	117 |	115 |	68 |	34 | - | - | -		
D3SVG |	65 |	12 |	6 |	3 | - | - | -	| - | -
D3Canvas |	116 |	117 |	116 |	60 |	23 |	11 |	5 |	2 | -
Cytoscape |	30 |	5 |	2			| - | - | -	| - | -	| -
Sigma.js (WebGL) |	116 |	58 |	29 |	14 |	5 |	2 | - | - | -


<img :src="$withBase('/fps-compare-white.png')" alt="fps-compare">

<!-- <img :src="$withBase('/fps-table-zh.jpg')" alt="fps-table-zh"> -->
<!-- <img :src="$withBase('/fps-line.jpg')" alt="fps-line"> -->

### Sigma.js

[Sigma.js](http://sigmajs.org/)是一个用于图绘制的 JavaScript 库。
但是它近乎[停止维护](https://github.com/jacomyal/sigma.js/releases/)，并且并不支持大规模图数据的绘制。

### Stardust.js

[Stardust.js](https://stardustjs.github.io/)是一个基于 WebGL 用于绘制信息可视化的 JavaScript 库。
但是它只支持渲染绘制，不是针对于图数据、图可视化的而进行开发驱动的库。
同时他近乎[停止维护](https://github.com/stardustjs/)。

### D3.js (D3-SVG, D3-Canvas)

[D3.js](https://d3js.org/)是一个基于数据操作`dom`的 JavaScript 库。
在对于图的支持来讲，它并不支持大规模图数据的渲染，并不是为可视分析为最终目的而进行开发驱动的库。
但是它是可视化可视分析领域中应用最广泛的工具，我们未来会支持基于 D3.js 来应用我们的 NetV 引擎。

### Cytoscape.js

[Cytoscape.js](https://js.cytoscape.org/)是一个面向图可视化、图可视分析的 JavaScript 库。
