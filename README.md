
# NetV.js

> 本分支专为巫英才&陈为老师的可视化课程的课程作业提供。

## 背景

自从`d3.js`的推出，可视化的开发便聚焦在前端开发上了。JavaScript也成了可视化从业者开发可视化时最常用的编程语言。随着数据科学的发展，需要渲染的可视化元素日益增加，需要我们提供更加高效的可视化渲染能力。已经有一些可视化工具使用了前端渲染能力最高效的`WebGL`作为自身的渲染引擎（比如`Sigma.js`，`stardust.js`等），但是图数据可视化领域，缺少相应的高效可视化工具来渲染较大规模的图数据。于是我们便开发了相关的工具，`NetV.js`，该工具提供了一系列接口，来支持图数据在前端的高效渲染。



## 安装使用

准备工作：安装[`git`](https://git-scm.com/)和[`Node.js`](https://nodejs.org/zh-cn/)。

本项目的安装和启动方法：

```bash
git clone https://github.com/ZJUVAG/NetV.js.git
cd NetV.js
npm install
npm run build # or: npm run watch
```

之后你可以打开`examples/index.html`进行预览。



## 作业要求

### 节点形状渲染

下图中，上面三种形状已经被`NetV.js`所支持。需要你实现下面三种元素的形状（从左到右分别叫：`pentagram`，`star`，`cross`）。值得注意的是：圆形节点的半径`r`指定的位置如下图所示。它并非指外圆的半径，也并非是内圆的半径。而是说，半径指定的是一个中心圆的半径，外圆和内圆分别向外和向内延伸`strokeWidth/2`的长度。其他形状也是以此类推的。

![node-style](http://www.cad.zju.edu.cn/home/vagblog/images/photo_bed/2020/11/20/51b2313268311e605e7f4a1be4713a73876a5a3e.jpeg)

一些指导：如何新增一种形状？以我们为节点增加`triangle`形状时所作的工作为例。

1. 首先，你需要修改`src/config.ts`，增加了第30-32行，增加对三角形三个顶点的位置的默认值。
2. 打开`src/interface.ts`，在22行最后增加了`triangle`字符串，使节点的形状能够支持三角形
3. 打开`src/elements/node.ts`，增加了第26-29行，使得调用`NetV.js`的开发者能够指定/获取任意三角形节点的三个顶点
4. 打开`src/renderer/elements/node/render-node.ts`，先增加了第89-90行，使得shape信息能够传递给`WebGL`，然后增加了第95-110行，定义了从节点的属性到`WebGL`属性的转换方式；
5. 然后打开`src/renderer/elements/node/vertex.hlsl`，增加了11-14行，能够读取外部传给shader的三角形三个顶点的属性值。第38-44行，根据三角形的三个顶点，计算了其内心；第46-56行，计算了三角形因为`strokeWidth`引起的内三角形和外三角形相对于没有`strokeWidth`的三角形所需要进行的缩放比例。第108-124，计算了这个三角形的外接长方形。
6. 在`src/renderer/elements/node/fragment.hlsl`，增加了45-64行，计算需要被绘制的片元，是否处于内三角形内部，以及66-88行，计算了片元是否位于外三角形内部，最后第152-156行，对位于内三角形内部的区域绘制`fill`颜色，处于内三角形和外三角形之间的区域绘制`strokeColor`颜色。其他部分则不绘制。



## 贡献

可以随时向我们提issuse或者提交贡献代码，具体细节可以查看 [开发指南](https://github.com/ZJUVAG/NetV.js/blob/dev/docs/development-guide-chinese.md).

