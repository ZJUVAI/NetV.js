---
title: API
sidebar: auto
---

## NetV

### Initialization

`NetV` 是一个类, `NetV` 的实例化可以通过以下几种方式创建:

```typescript
const netV = new NetV({
  /* Configurations */
});
```
一个 `NetV` 的实例化中的配置中,`container`是必须声明的,`Container` 必须是一个 `div` 元素用来挂载.例子如下:

```typescript
const netV = new NetV({
  container: document.createElement("div"),
});
```

整个初始化配置接口可以在这里获得:[InitializationConfigurations](#InitializationConfigurations)

### 操作

#### `NetV.data()`

加入数据到 `NetV`的实例,或者返回已经加入的数据.
- `NetV.data()`: 返回数据 (a [`NodeLinkData`](#nodelinkdata) object).

- `NetV.data(`[`NodeLinkData`](#nodelinkdata)`)`: 加入数据到 `NetV` 实例,没有返回值.

  ```typescript
  netV.data({
    nodes: [
      { id: "0", x: 300, y: 100 },
      { id: "1", x: 500, y: 100 },
      { id: "2", x: 400, y: 400 },
    ],
    links: [
      { source: "0", target: "2" },
      { source: "1", target: "2" },
    ],
  });
  ```

#### `NetV.nodes()`

`NetV.nodes()`: 返回一个 [`Node`](#node)数组,其中包含了所有在 `NetV` 实例中的节点.

#### `NetV.links()`

`NetV.links()`: 返回一个 [`Link`](#link) 数组,其中包含了所有在 `NetV` 实例中的边.

#### `NetV.addNode()`

`NetV.addNode(`[`NodeData`](#nodedata)`)`: 添加一个新的节点和节点上的数据 (接口:[`NodeData`](#nodedata)),同时返回被添加的节点对象 [`Node`](#node).

```typescript
const newNode = netV.addNode({
  id: "3",
  x: 100,
  y: 100,
  fill: { r: 1, g: 0, b: 1, a: 0 },
  r: 10,
});
```

#### `NetV.addLink()`

`NetV.addLink(`[`LinkData`](#linkdata)`)`: 添加一个新的边和边上的数据 (接口: [`LinkData`](#linkdata)), 同时返回被添加的边对象 [`Link`](#link).

```typescript
const newLink = netV.addLink({
  source: "0",
  target: "3",
  strokeColor: { r: 1, g: 0, b: 1, a: 0 },
});
```

#### `NetV.addNodes()`

`NetV.addNodes(`[`NodeData`](#nodedata)`[] )`: 添加一组节点和节点上的数据,没有返回值.


```typescript
netV.addNodes([
  { id: "4", x: 300, y: 100 },
  { id: "5", x: 500, y: 100 },
  { id: "6", x: 400, y: 400 },
]);
```

#### `NetV.addLinks()`

`NetV.addLinks(`[`LinkData`](#linkdata)`[] )`: 添加一组边和边上的数据,没有返回值.

```typescript
netV.addLinks([
  { source: "4", target: "5" },
  { source: "4", target: "6" },
]);
```

#### `NetV.getNodeById()`

`NetV.getNodeById( string )`: 通过节点的ID来获取节点的对象, 返回 [`Node`](#node) 对象.

```typescript
const nodeOne = netV.getNodeById("1");
```

#### `NetV.getLinkByEnds()`

`NetV.getLinkByEnds( string[] )`: 通过一条边的两个节点的ID来获取这条边的对象,输入参数是一个包含这两个ID的数组,顺序无关.返回 [`Link`](#link) 对象.

```typescript
// 同 getLinkByEnds(['2', '1']) 一样
const linkOneTwo = netV.getLinkByEnds(["1", "2"]);
```

#### `NetV.getElementByPosition()`

`NetV.getElementByPosition( number, number )`: 通过的2维坐标获得当前位置的元素(节点或者边).其中两个数值型参数表示2维坐标的x,y.返回一个对象其中包括了元素的ID和对象: `{type: string, element: Node/Link}`


```typescript
const obj = netV.getElementByPosition(/* x= */ 100, /* y= */ 200);
// 返回: {type: 'node', element: Node}

if (!obj) {
  // 没有节点或者边在这个位置上
  console.log("Empyt canvas on this position");
} else {
  if (obj.type === "node") {
    const node = obj.element;
  } else {
    const link = obj.element;
  }
}
```

#### `NetV.wipe()`

`NetV.wipe()`: 清空`NetV`中的所有数据,没有返回值.

#### `NetV.loadDataset()`

`NetV.loadDataset( string )`: 获取整合在 _NetV.js_ 中的数据集,返回一个 [`NodeLinkData`](#nodelinkdata) 对象.数据集如下:

- `'miserables'`: 它包含维克多·雨果的小说《悲惨世界》中的关系人物.其中有77个节点和254条边.

```typescript
const miserables = netV.loadDataset("miserables");
netV.data(miserables);
```

### Render

#### `NetV.draw()`

`NetV.draw()`: 绘制/刷新当前画布上所有的图.**注意** 可视化结果只会在调用`NetV.draw()`后才会刷新.

## Node

[`Node`](#node)是 _NetV.js_ 的一个基本对象. 它默认被可视化成圆形.

### 操作

#### `Node.id()`

`Node.id()`: 返回节点的ID(一个字符串).

#### `Node.x()`

获取或者设置节点的x坐标.

- `Node.x()`: 获取节点的x坐标 (一个数字);
- `Node.x( number )`: 设置节点的x坐标;

#### `Node.y()`

同 `Node.x()` 一样.

#### `Node.position()`
获取或者设置节点的坐标(x和y).

- `Node.position()`: 获取节点的坐标 (`{x: number, y: number}`)

- `Node.position( number, number )`: 设置节点的坐标(x和y). 同时返回当前设置的坐标 (`{x: number, y: number}`).

  ```typescript
  const nodeOne = netV.getNodeById("1");
  nodeOne.position(); // 返回: {x: 100, y: 200}
  nodeOne.position({ x: 100, y: 100 });
  netV.draw();
  //  注意只有经过 netV.draw() 后, 可视化才回被刷新
  ```

### Style

<img :src="$withBase('/node-style.svg')" alt="node-style">

```typescript
const node = netV.getNodeById("1");
node.r(10);
node.strokeWidth(2);
node.fill({ r: 0.98, g: 0.69, b: 0.23, a: 1 });
node.strokeColor({ r: 0, g: 0.44, b: 0.74, a: 1 });
netV.draw();
```

#### `Node.r()`

获取或者设置节点的半径.

- `Node.r()`: 获取节点的半径 (一个数字).
- `Node.r( number )`: 设置节点的半径.

#### `Node.fiil()`

获取或者设置节点的颜色.

- `Node.fill()`: 获得节点的颜色 (一个 [`Color`](#color) 对象).
- `Node.fill(`[`Color`](#color)`)`: 设置节点的颜色.

#### `Node.strokeColor()`

获取或者设置节点的边框颜色.

- `Node.strokeColor()`: 获取节点的边框颜色 (一个 [`Color`](#color) 对象).
- `Node.strokeColor(`[`Color`](#color)`)`: 设置节点的边框颜色.

#### `Node.strokeWidth()`

获取或者设置节点的边框宽度.

- `Node.strokeWidth()`: 获取节点的边框宽度(一个数字).
- `Node.strokeWidth( number )`: 设置节点的边框宽度.

## Link

[`Link`](#link)是 _NetV.js_ 的一个基本对象. 它默认被可视化成一条直线 (没有箭头).

### Manipulation

#### `Link.source()`

获取或者设置边的源头节点.

- `Link.source()`: 获取边的源头节点 (一个 [`Node`](#node) 对象).
- `Link.source(`[`Node`](#node)`)`: 设置边的源头节点.

#### `Link.target()`

同 `Link.source()` 一样.

#### `Link.sourceTarget()`

获取或者设置边的源头节点和目标节点.

- `Link.sourceTarget()`: 返回一个对象,包含了边的源头节点和目标节点 (`{source: Node, target: Node}`).

- `Link.sourceTarget( {source: Node, target: Node} )`: 设置边的源头节点和目标节点.

  ```typescript
  const linkOneTwo = netV.getLinkByEnds(["1", "2"]);
  const nodeOne = netV.getNodeById("1");
  const nodeThree = netV.getNodeById("3");
  linkOneTwo.sourceTarget({
    source: nodeOne,
    target: nodeThree,
  }); // 改变 linkOneTwo's 目标节点到 nodeThree
  ```

### Style

<img :src="$withBase('/link-style.svg')" alt="link-style">

```typescript
const linkOneTwo = netV.getLinkByEnds(["1", "2"]);
link.strokeWidth(4);
link.strokeColor({ r: 0, g: 0.44, b: 0.74, a: 1 });
netV.draw();
```

#### `Link.strokeColor()`

获取或者设置边的颜色.

- `Link.strokeColor()`: 获取边的颜色 (一个 [`Color`](#color) 对象 ).
- `Link.strokeColor(`[`Color`](#color)`)`: 设置边的颜色.

#### `Link.strokeWidth()`

获取或者设置边的宽度.

- `Link.strokeWidth()`: 获取边的宽度 (一个数字).
- `Link.strokeWidth( number )`: 设置边的宽度.

## 工具

*NetV.js* 中提供的工具.

### `Utils.transformGraphPosition()`

`Utils.transformGraphPosition(`[`NodeLinkData`](#nodelinkdata)`, number, number, number)`: 将节点的位置转换为给定的正方形区域. 第一个参数是将被导入到 `NetV` 实例中的数据. 第二个参数定义正方形边的长度. 第三和第四参数定义正方形的中心位置.
```typescript
const data = {
    nodes: [{
        id: '1', x: 1, y: 1,
    }, {
        id: '2', x: 2, y: 3
    }],
    links: [{source: '1', target: '2'}]
}
// transform the data into a square from (0, 0) to (1, 1)
const dataAfterTransform = netV.Utils.transformGraphPosition(data, 1, 0.5, 0.5)
// node with id '1' will be located on (0.25, 0)
// node with id '2' will be located on (0.75, 1)
```





## 接口

### `InitializationConfigurations`

```typescript
interface InitializationConfigurations {
  container: HTMLDivElement;
  node: {
    r: number;
    fill: Color;
    strokeWidth: number;
    strokeColor: Color;
    clickCallback: (node: Node) => {};
  };
  link: {
    strokeWidth: number;
    strokeColor: Color;
    clickCallback: (link: Link) => {};
  };
  width: number;
  height: number;
  backgroundColor: Color;
  nodeLimit: number;
  linkLimit: number;
}
```

 [initializationConfigurations](#initializationconfigurations) 是 `NetV` 初始化配置的接口.

- `container` 用来配置可视化的容器, 它是一个 `<div>` 元素. 可视化和交互都需要容器的参与. 它说 **必须的**.
- `node` 用来配置节点的默认属性和表现. 在_NetV.js_中, 节点被可视化为一个圆.
  - `r` 是一个数字, 用来配置节点的半径. 默认值为 `5`.
  - `fill` 是一个 [Color](#color) 对象, 用来配置节点的颜色. 默认值为 `{r: 0.2, g: 0.6, b: 0.2, a: 0.8}`.
  - `strokeWidth` 是一个数字, 用来配置节点的边框宽度. 默认值为 `2`.
  - `strokeColor` 是一个 [Color](#color) 对象, 用来配置节点的边框颜色. 默认值为 `{ r: 0.9, g: 0.9, b: 0.9, a: 0.6 }`.
  - `clickCallback` 是一个函数. 当节点发生点击事件的时候可以触发回调函数. 默认为一个空的函数: `(node: Node)=>{}`.
- `link` 用来配置边的默认属性和表现. 在_NetV.js_中, 边被可视化为一条直线.
  - `strokeWidth` 是一个数字, 用来配置边的宽度. 默认值为 `2`.
  - `strokeColor` 是一个 [Color](#color) 对象, 用来配置边的颜色. 默认值为 `{ r: 0.4, g: 0.6, b: 0.8, a: 0.5 }`.
  - `clickCallback` 是一个函数. 当边发生点击事件的时候可以触发回调函数. 默认为一个空的函数n: `(link: Link)=>{}`.
- `width` 是一个数字, 用来配置画布的宽度. 默认值为 `800`.
- `height` 是一个数字, 用来配置画布的高度. 默认值为`600`.
- `backgroundColor` 是一个 [Color](#color) 对象. 用来配置画布的背景颜色. 默认值为 `{ r: 1, g: 1, b: 1, a: 1 }` (白色).
- `nodeLimit` 是一个数字. 它用于配置在WebGL中为渲染节点分配固定空间. 建议将其设置为需要加载的节点数的上限. 默认值为100. **请注意**, 如果要加载100个以上的节点, 则需要将其重置.
- `linkLimit` 是一个数字. 它用于配置在WebGL中为渲染边分配固定空间. 建议将其设置为需要加载的边数的上限. 默认值为1000. **请注意**, 如果要加载1000个以上的边, 则需要将其重置.

### `Color`

```typescript
interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}
```

- `r`, `g`, `b`, 和 `a` 是四个RGBA颜色模型的通道, 它们的范围是 `[0, 1]`.

### `NodeData`

```typescript
interface NodeData {
  id: string;
  x?: number;
  y?: number;
  r?: number;
  fill?: Color;
  strokeWidth?: number;
  strokeColor?: Color;
  clickCallback?: (node: Node) => void;
}
```

[`NodeData`](#nodedata) 接口定义了输入节点的数据格式.

- `id` 是一个字符串. 它应该是唯一的, 用于识别不同的节点, 同时是必须的.
- `x` 和 `y` 是数字. 用来配置节点的位置坐标. 它是可选的.
- `fill` 是一个 [Color](#color) 对象. 用来配置节点的颜色. 它是可选的.
- `strokeWidth` 是一个数字. 用来配置节点边框的宽度. 它是可选的.
- `strokeColor` 是一个 [Color](#color) 对象. 用来配置节点边框的颜色. 它是可选的.
- `clickCallback` 是一个函数, 当节点发生点击事件的时候可以触发回调函数. 它是可选的.

### `LinkData`

```typescript
interface LinkData {
  source: string;
  target: string;
  strokeColor?: Color;
  strokeWidth?: number;
  clickCallback?: (link: Link) => void;
}
```

[`LinkData`](#linkdata) 接口定义了输入边的数据格式.

- `source` 和 `target` 是字符串. 它们是这条边的源头节点和目标节点的 `id`. 它们可以唯一确定一条边. 它们是必须的.
- `strokeWidth` 是一个数字. 用来配置边的宽度. 它是可选的.
- `strokeColor` 是一个 [Color](#color) 对象. 用来配置边的颜色. 它是可选的.
- `clickCallback` 是一个函数, 当边发生点击事件的时候可以触发回调函数. 它是可选的.

### `NodeLinkData`

```typescript
interface NodeLinkData {
  nodes: NodeData[];
  links: LinkData[];
}
```

[NodeLinkData](#nodelinkdata) 接口定义了输入的数据格式:

- `nodes` 是一系列 [`NodeData`](#nodedata) 对象.

- `links` 是一系列 [`LinkData`](#linkdata) 对象. `links` 可以为空, 此时节点将会被渲染.
