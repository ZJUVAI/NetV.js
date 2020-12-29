---
sidebarDepth: 3
---
# 基本介绍

## NetV.js 是什么

NetV.js: A Network Visualization Library.
是一个面向**图可视化、图可视分**领域的**专业的、深入的**渲染、布局、交互、可视化、可视分析 JavaScript 库。
它使用`WebGL`作为底层渲染，支持千万级别的点边绘制、交互、布局。在浏览器端可以完成大规模图布局。是以图可视化、图可视分析为最终目的驱动引擎。

## 主要特性

### 海量图数据

* 面向节点-链接类型图数据
* 支持百万级元素的绘制和交互

### 高性能渲染

* 运用WebGL加速，可同时绘制上百万元素
* 高效支持多种形状与样式

#### FPS测试


| 节点数量 | 2e3 | 1e4 | 2e4 | 4e4 | 1e5 | 2e5 | 4e5 | 1e6 | 2e6 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
NetV |	119 |	117 |	111 |	107 |	40 |	18 |	7 |	2 | -
Stardust |	118	| 118 |	117 |	115 |	68 |	34 | - | - | -		
D3SVG |	65 |	12 |	6 |	3 | - | - | -	| - | -
D3Canvas |	116 |	117 |	116 |	60 |	23 |	11 |	5 |	2 | -
Cytoscape |	30 |	5 |	2			| - | - | -	| - | -	| -
Sigma.js (WebGL) |	116 |	58 |	29 |	14 |	5 |	2 | - | - | -

（备注：“-” 表示无法进行绘制或绘制时间过长）

<img :src="$withBase('/fps-compare-white.png')" alt="fps-compare">

### 丰富交互

* 支持画布的平移、缩放等多样的视图变换
* 原生支持`mousedown`, `mouseup`, `mouseover`, `click`, `drag`鼠标交互
* 可通过插件支持`lasso`等高级交互

## 拓展功能

NetV的核心渲染引擎相对精简，尽可能保证其高性能渲染特性。同时，NetV支持通过插件拓展其功能。

### Lasso-selection

使NetV支持Lasso圈选交互，能够根据用户全选操作返回所选中的节点集合。

* [GitHub/文档](https://github.com/ZJUVAG/NetV-lasso-selection)
* NPM: `npm i netv-lasso-selection`

### Label

支持显示NetV节点标签，可调整标签样式、内容、位置等。

* [GitHub/文档](https://github.com/ZJUVAG/NetV-label)
* NPM: `npm i netv-label`

<!-- ### 布局

-   多种图布局支持
-   服务器端计算 -->

<!-- ### 可视化

-   可视化组件

### 可视分析

-   可视分析套件 -->