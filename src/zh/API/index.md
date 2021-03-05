---
sidebarDepth: 2
sidebar: open
---

# NetV

## 初始化

`NetV` 是一个类, `NetV` 的实例化可以通过以下几种方式创建:

```typescript
const netV = new NetV({
    /* Configurations */
})
```

一个 `NetV` 的实例化中的配置中,`container`是必须声明的,`container` 必须是一个 `div` 元素用来挂载.例子如下:

```typescript
const netV = new NetV({
    container: document.createElement('div')
})
```

一个简单的 demo：

<initialization-demo/>

```javascript
const div = document.getElementById(id)
const width = div.clientWidth
const height = 300
const testData = {
    nodes: [
        { id: '0', x: width / 4, y: height / 3 },
        { id: '1', x: (width / 4) * 3, y: height / 3 },
        { id: '2', x: width / 2, y: (height * 2) / 3 }
    ],
    links: [
        { source: '0', target: '2' },
        { source: '1', target: '2' }
    ]
}
const netv = new NetV({
    container: div,
    width,
    height
})
netv.data(testData)
netv.draw()
```

整个初始化配置接口可以在这里获得:[InitializationConfigurations](interfaces.html#InitializationConfigurations)

## 操作

### `netv.backgroundColor()`

设置/获取 NetV 的画布背景颜色。

-   `netv.backgroundColor()`: 返回 NetV 的背景颜色，类型为：[Color](interfaces.html#color).

-   `netv.backgroundColor(`[`Color`](interfaces.html#color)`)`: 设置 NetV 的画布背景颜色。

<backgroundColor-demo/>

```javascript
// 延续上面初始化的demo
netv.backgroundColor({ r: 174 / 255, g: 129 / 255, b: 255 / 255, a: 1 })
netv.draw()
```

### `netv.dispose()`

销毁 NetV 对象，清除其中的数据，释放分配的内存并删除创建的 DOM 元素。

### `NetV.data()`

设置/获取 NetV 绑定的图数据。

-   `NetV.data()`: 返回图数据，类型为：[`NodeLinkData`](interfaces.html#nodelinkdata)。

-   `NetV.data(`[`NodeLinkData`](interfaces.html#nodelinkdata)`)`: 设定 NetV 的图数据。

    ```typescript
    netV.data({
        nodes: [
            { id: '0', x: 300, y: 100 },
            { id: '1', x: 500, y: 100 },
            { id: '2', x: 400, y: 400 }
        ],
        links: [
            { source: '0', target: '2' },
            { source: '1', target: '2' }
        ]
    })
    ```

### `NetV.nodes()`

`NetV.nodes()`: 返回一个 [`Node`](node.html)数组,其中包含了所有在 `NetV` 实例中的节点.

### `NetV.links()`

`NetV.links()`: 返回一个 [`Link`](link.html) 数组,其中包含了所有在 `NetV` 实例中的边.

### `NetV.addNode()`

`NetV.addNode(`[`NodeData`](interfaces.html#nodedata)`)`: 添加一个新的节点和节点上的数据 (接口:[`NodeData`](interfaces.html#nodedata)),同时返回被添加的节点对象 [`Node`](node.html).

```typescript
const newNode = netV.addNode({
    id: '3',
    x: 100,
    y: 100,
    style: {
        fill: { r: 1, g: 0, b: 1, a: 0 },
        r: 10
    }
})
```

### `NetV.addLink()`

`NetV.addLink(`[`LinkData`](interfaces.html#linkdata)`)`: 添加一个新的边和边上的数据 (接口: [`LinkData`](interfaces.html#linkdata)), 同时返回被添加的边对象 [`Link`](link.html).

```typescript
const newLink = netV.addLink({
    source: '0',
    target: '3',
    style: {
        strokeColor: { r: 1, g: 0, b: 1, a: 0 }
    }
})
```

### `NetV.addNodes()`

`NetV.addNodes(`[`NodeData`](interfaces.html#nodedata)`[] )`: 添加一组节点和节点上的数据,没有返回值.

```typescript
netV.addNodes([
    { id: '4', x: 300, y: 100 },
    { id: '5', x: 500, y: 100 },
    { id: '6', x: 400, y: 400 }
])
```

### `NetV.addLinks()`

`NetV.addLinks(`[`LinkData`](interfaces.html#linkdata)`[] )`: 添加一组边和边上的数据,没有返回值.

```typescript
netV.addLinks([
    { source: '4', target: '5' },
    { source: '4', target: '6' }
])
```

### `NetV.getNodeById()`

`NetV.getNodeById( string )`: 通过节点的 ID 来获取节点的对象, 返回 [`Node`](node.html) 对象.

```typescript
const nodeOne = netV.getNodeById('1')
```

### `NetV.getLinkByEnds()`

`NetV.getLinkByEnds( id1, id2 )`: 通过一条边的两个节点的 ID 来获取这条边的对象,输入参数是两个端点，顺序无关.返回 [`Link`](link.html) 对象.

```typescript
// 同 getLinkByEnds('2', '1') 一样
const linkOneTwo = netV.getLinkByEnds('1', '2')
```

### `NetV.getElementByPosition()`

`NetV.getElementByPosition(`[`Position`](interfaces.html#position)`)`: 通过的 2 维坐标获得当前位置的元素(节点或者边)。返回一个对象其中包括了元素的类型和对象: `{type: 'node' | link, element: Node | Link}`

```typescript
const obj = netV.getElementByPosition({ x: 100, y: 200 })
// 返回: {type: 'node', element: Node}

if (!obj) {
    // 没有节点或者边在这个位置上
    console.log('Empyt canvas on this position')
} else {
    if (obj.type === 'node') {
        const node = obj.element
    } else {
        const link = obj.element
    }
}
```

### `NetV.wipe()`

`NetV.wipe()`: 清空`NetV`中的所有数据,没有返回值.

### `NetV.loadDataset()`

`NetV.loadDataset( string )`: 获取整合在 NetV 中的数据集,返回一个 [`NodeLinkData`](interfaces.html#nodelinkdata) 对象.数据集如下:

-   `'miserables'`: 它包含维克多·雨果的小说《悲惨世界》中的关系人物。其中有 77 个节点和 254 条边。
-   `'patent'`: 包含近年专利申请公司，发明人与专利的相互关系，包含 352 个节点和 412 条边。

```typescript
const miserables = netV.loadDataset('miserables')
netV.data(miserables)
```

## 交互

### `netv.on()`

为 NetV 添加监听事件。注意此处添加的监听事件是绑定在整个画布上的。

`netv.on(eventName: string, callback: (e: Event) => void)`

-   `eventName`: 事件类型，包括：`zoom`, `pan`, `mousedown`, `mouseup`, `click`
-   `callback`: 事件触发时将执行的回调函数

### `netv.off()`

删除添加在 NetV 上的监听事件。

`netv.on(eventName: string, callback: (e: Event) => void)`

-   `eventName`: 事件类型，包括：`zoom`, `pan`, `mousedown`, `mouseup`, `click`
-   `callback`: 事件触发时将执行的回调函数

### `netv.panBy()`

平移 NetV 画布。

`netv.panBy(x: number, y: number)`: 在水平和竖直方向上各平移`x`与`y`长度。

### `netv.zoomBy()`

缩放 NetV 画布。

`netv.zoomBy(k: number, center?: Position)`: 以`center`为中心，将画布缩放`k`倍，如果未指定`center`，将以画面中央为中心缩放。

### `netv.centerOn()`

平移画布使特定节点居中。

`netv.centerOn(node: Node)`: 通过平移画布，将`node`元素置于画布中央。

### `netv.transform()`

获取 NetV 的当前 transform，以及不通过鼠标交互或调用`panBy`和`zoomBy`函数直接改动画面的 transform。

-   `netv.transform()`: 返回 transform，类型为 [Transform](interfaces.html#transform).
-   `netv.transform(value: Transform)`: 设定 transform， 类型为 [Transform](interfaces.html#transform).

### `netv.transition()`

给定若干不同的 transform，NetV 可逐一过渡到对应 transform。

`netv.transition(transforms: Transform[], durationMS: number[], callback?:({transform: Transform}) => void)`

-   `transforms`: 待过渡的 transform，类型为：[Transform](interfaces.html#transform).
-   `durationMS`: 每个过渡的持续时间。
-   `callback`: _可选_, 过渡时执行的回调函数，该回调函数接收一个内含当前 transform 的对象：`{ transform: Transform}`

## 绘制

### `NetV.draw()`

`NetV.draw()`: 绘制/刷新当前画布上所有的图.**注意** 可视化结果只会在调用`NetV.draw()`后才会刷新.
