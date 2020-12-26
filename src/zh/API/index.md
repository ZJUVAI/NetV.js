---
sidebarDepth: 2
---

# NetV

## Initialization

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

整个初始化配置接口可以在这里获得:[InitializationConfigurations](interfaces.html#InitializationConfigurations)

## 操作

### `NetV.data()`

加入数据到 `NetV`的实例,或者返回已经加入的数据.

-   `NetV.data()`: 返回数据 (a [`NodeLinkData`](interfaces.html#nodelinkdata) object).

-   `NetV.data(`[`NodeLinkData`](interfaces.html#nodelinkdata)`)`: 加入数据到 `NetV` 实例,没有返回值.

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
    fill: { r: 1, g: 0, b: 1, a: 0 },
    r: 10
})
```

### `NetV.addLink()`

`NetV.addLink(`[`LinkData`](interfaces.html#linkdata)`)`: 添加一个新的边和边上的数据 (接口: [`LinkData`](interfaces.html#linkdata)), 同时返回被添加的边对象 [`Link`](link.html).

```typescript
const newLink = netV.addLink({
    source: '0',
    target: '3',
    strokeColor: { r: 1, g: 0, b: 1, a: 0 }
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

`NetV.getLinkByEnds( string[] )`: 通过一条边的两个节点的 ID 来获取这条边的对象,输入参数是一个包含这两个 ID 的数组,顺序无关.返回 [`Link`](link.html) 对象.

```typescript
// 同 getLinkByEnds(['2', '1']) 一样
const linkOneTwo = netV.getLinkByEnds(['1', '2'])
```

### `NetV.getElementByPosition()`

`NetV.getElementByPosition( {x: number, y: number} )`: 通过的 2 维坐标获得当前位置的元素(节点或者边).其中两个数值型参数表示 2 维坐标的 x,y.返回一个对象其中包括了元素的 ID 和对象: `{type: string, element: Node/Link}`

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

`NetV.loadDataset( string )`: 获取整合在 _NetV.js_ 中的数据集,返回一个 [`NodeLinkData`](interfaces.html#nodelinkdata) 对象.数据集如下:

-   `'miserables'`: 它包含维克多·雨果的小说《悲惨世界》中的关系人物.其中有 77 个节点和 254 条边.

```typescript
const miserables = netV.loadDataset('miserables')
netV.data(miserables)
```

## Render

### `NetV.draw()`

`NetV.draw()`: 绘制/刷新当前画布上所有的图.**注意** 可视化结果只会在调用`NetV.draw()`后才会刷新.
