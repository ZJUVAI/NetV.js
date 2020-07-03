# Guide

## Introduction

### What Is NetV.js

NetV.js: A Network Visualization Library.
It is a `professional` JavaScript Library for rendering, interaction and visualization in the filed of `Graph Visualization`.
It uses `WebGL` as underlying rendering, and support tens of millions of levels of node and edge rendering, interaction and visualization.
NetV.js is a `Powerful` engine driven by graph visualization and graph visual analysis.

## How It Works

## Features

### Data

-   Graph data
-   Tens of millions of levels of node and edge

### Rendering

-   WebGL-based
-   High-performanes FPS

### Interactions

-   Click
-   Hover
-   Drag
-   Lasso

<!-- ### 布局

-   多种图布局支持
-   服务器端计算

### 可视化

-   可视化组件

### 可视分析

-   可视分析套件 -->

## Why Not

### FPS 测试

<img :src="$withBase('/fps-table.jpg')" alt="fps-table">
<img :src="$withBase('/fps-line.jpg')" alt="fps-line">

### Sigma.js

[Sigma.js](http://sigmajs.org/) is a JavaScript library dedicated to graph drawing
It is almost [Stopped Maintenance](https://github.com/jacomyal/sigma.js/releases/). It does not support the rendering of large-scaled graph data.

### Stardust

[Stardust.js](https://stardustjs.github.io/)Stardust is a JavaScript library for rendering information visualizations with GPU (WebGL).
It only supports rendering, and is not a development driven library for graph data and graph visualization.
It is almost [Stopped Maintenance](https://github.com/stardustjs/)。

### D3.js

[D3.js](https://d3js.org/) is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS.
It does not support the rendering of large-scaled data, and it is not a development driven library for graph data and graph visualization.
However, it is the most widely used visualization tool. We will support the application of our NetV.js engine based on d3.js in the future.

### Cytoscape.js

[Cytoscape.js](https://js.cytoscape.org/) is a graph theory (network) library for visualisation and analysis.
It does not support the rendering of large-scaled Graph data.
