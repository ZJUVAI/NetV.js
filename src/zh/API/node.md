---
sidebarDepth: 3
---

# Node

[`Node`](node.html)是 _NetV.js_ 的一个基本对象. 它默认被可视化成圆形.

## 操作

### `Node.id()`

`Node.id()`: 返回节点的 ID(一个字符串).

### `Node.x()`

获取或者设置节点的 x 坐标.

-   `Node.x()`: 获取节点的 x 坐标 (一个数字);
-   `Node.x( number )`: 设置节点的 x 坐标;

### `Node.y()`

同 `Node.x()` 一样.

### `Node.position()`

获取或者设置节点的坐标(x 和 y).

-   `Node.position()`: 获取节点的坐标 (`{x: number, y: number}`)

-   `Node.position( {x: number, y: number} )`: 设置节点的坐标(x 和 y). 同时返回当前设置的坐标 (`{x: number, y: number}`).

    ```typescript
    const nodeOne = netV.getNodeById('1')
    nodeOne.position() // 返回: {x: 100, y: 200}
    nodeOne.position({ x: 100, y: 100 })
    netV.draw()
    //  注意只有经过 netV.draw() 后, 可视化才回被刷新
    ```

## Style

```typescript
const node = netV.getNodeById('1')
node.r(10)
node.strokeWidth(2)
node.fill({ r: 0.98, g: 0.69, b: 0.23, a: 1 })
node.strokeColor({ r: 0, g: 0.44, b: 0.74, a: 1 })
netV.draw()
```

### `Node.shape()`

获取或设置节点样式

-   `Node.shape()`: 返回节点形状，类型为`string`
-   `Node.shape( string )`: 设置节点形状，支持`'circle'`, `'rect'`, `'triangle'`和 `'cross'`，各形状对应的样式包括：

    -   `'circle'`: `r`, `fill`, `strokeColor`, `strokeWidth`
    -   `'rect'`: `width`, `height`, `fill`, `strokeColor`, `strokeWidth`
    -   `'triangle'`: `vertexAlpha`, `vertexBeta`, `vertexGamma`, `fill`, `strokeColor`, `strokeWidth`
    -   `'cross'`: `width`, `height`, `innerWidth`, `innerHeight`, `fill`, `strokeColor`, `strokeWidth`

对不同形状的一个默认样式参考示例如下：

```javascript
const netv = new NetV({
    container: div,
    width,
    height,
    node: {
        style: {
            fill: { r: 230 / 255, g: 28 / 255, b: 72 / 255, a: 0.85 },
            strokeColor: { r: 1, g: 1, b: 1, a: 0.85 },
            strokeWidth: 20,
            // circle, the first node
            r: 30,
            // rect and cross, the second node and the forth node
            width: 60,
            height: 60,
            // triangle, the second node
            vertexAlpha: { x: -30, y: 30 },
            vertexBeta: { x: 0, y: -30 },
            vertexGamma: { x: 30, y: 30 },
            // cross, the forth node
            innerWidth: 40,
            innerHeight: 40
        }
    },
    backgroundColor: { r: 0, g: 0, b: 0, a: 0 }
})
```

### 一般样式

### `Node.fill()`

获取或者设置节点的颜色.

-   `Node.fill()`: 获得节点的颜色 (一个 [`Color`](interfaces.html#color) 对象).
-   `Node.fill(`[`Color`](interfaces.html#color)`)`: 设置节点的颜色.

根据 [SVG的相关定义](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Fills_and_Strokes)，我们支持为图形添加边框属性：

<node-shapes/>


### `Node.strokeColor()`

获取或者设置节点的边框颜色.

-   `Node.strokeColor()`: 获取节点的边框颜色 (一个 [`Color`](interfaces.html#color) 对象).
-   `Node.strokeColor(`[`Color`](interfaces.html#color)`)`: 设置节点的边框颜色.

### `Node.strokeWidth()`

获取或者设置节点的边框宽度.

-   `Node.strokeWidth()`: 获取节点的边框宽度(一个数字).
-   `Node.strokeWidth( number )`: 设置节点的边框宽度.

#### `Node.rotate()`

-   `Node.rotate()`: 获取节点的旋转角度，范围为`[-PI, PI]`，值为正表示顺时针旋转
-   `Node.rotate( number )`: 设置节点的旋转角度

### 🟢 `'circle'`形状

#### `Node.r()`

-   `Node.r()`: 获取圆形半径，类型为`number`
-   `Node.r( number )`: 设置圆形半径

<node-circle/>

```javascript
netv.getNodeById('0').r(40)
netv.getNodeById('0').strokeWidth(0)

netv.getNodeById('1').r(20)
netv.getNodeById('1').strokeWidth(40)

netv.getNodeById('2').r(40)
netv.getNodeById('2').strokeWidth(20)

netv.getNodeById('3').r(40)
netv.getNodeById('3').strokeWidth(40)
```

### 🟦 `'rect'`形状

#### `Node.width()`

-   `Node.width()`: 获取矩形宽度，类型为`number`
-   `Node.width( number )`: 设置矩形宽度

#### `Node.height()`

-   `Node.height()`: 获取矩形宽度，类型为`number
-   `Node.height( number )`: 设置矩形宽度

<node-rect/>

```javascript
netv.getNodeById('0').shape('rect')
netv.getNodeById('0').width(60)
netv.getNodeById('0').height(40)
netv.getNodeById('0').strokeWidth(0)

netv.getNodeById('1').shape('rect')
netv.getNodeById('1').width(60)
netv.getNodeById('1').height(40)
netv.getNodeById('1').strokeWidth(20)
```

### 🔺 `'triangle'`形状

#### `Node.vertexAlpha()`

-   `Node.vertexAlpha()`: 返回三角形第一个顶点`vertexAlpha`的位置，类型为[`Position`](interfaces.html#position).
-   `Node.vertexAlpha(`[`Position`](interfaces.html#position)`)`: 设置三角形第一个顶点`vertexAlpha`的位置，类型为[`Position`](interfaces.html#position).

#### `Node.vertexBeta()`

-   `Node.vertexBeta()`: 返回三角形第二个顶点`vertexBeta`的位置，类型为[`Position`](interfaces.html#position).
-   `Node.vertexBeta(`[`Position`](interfaces.html#position)`)`: 设置三角形第二个顶点`vertexBeta`的位置，类型为[`Position`](interfaces.html#position).

#### `Node.vertexGamma()`

-   `Node.vertexGamma()`: 返回三角形第二个顶点`vertexGamma`的位置，类型为[`Position`](interfaces.html#position).
-   `Node.vertexGamma(`[`Position`](interfaces.html#position)`)`: 设置三角形第三个顶点`vertexGamma`的位置，类型为[`Position`](interfaces.html#position).

<node-triangle/>

:::warning
三角形的三个顶点的坐标都是相对于其原点而言的。三角形的原点指的是，它对应的边出发或到达的位置。
:::

```javascript
netv.getNodeById('0').vertexAlpha({ x: 0, y: -40 })
netv.getNodeById('0').vertexBeta({ x: 20 * Math.sqrt(3), y: 20 })
netv.getNodeById('0').vertexGamma({ x: -20 * Math.sqrt(3), y: 20 })
netv.getNodeById('0').strokeWidth(0)

// if set strokeWidth to 20
netv.getNodeById('1').vertexAlpha({ x: 0, y: -40 })
netv.getNodeById('1').vertexBeta({ x: 20 * Math.sqrt(3), y: 20 })
netv.getNodeById('1').vertexGamma({ x: -20 * Math.sqrt(3), y: 20 })
netv.getNodeById('1').strokeWidth(20)
```

### ➕ `'cross'`形状

#### `Node.width()`

-   `Node.width()`: 获取十字架的水平宽度，类型为`number`
-   `Node.width( number )`: 设置十字架的水平宽度

#### `Node.height()`

-   `Node.height()`: 获取十字架的垂直高度，类型为`number`
-   `Node.height( number )`: 设置十字架的垂直高度

#### `Node.innerWidth()`

-   `Node.innerWidth()`: 获取十字架的竖线宽度，类型为`number`
-   `Node.innerWidth( number )`: 设置十字架的竖线宽度

#### `Node.innerHeight()`

-   `Node.innerHeight()`: 获取十字架的横线高度，类型为`number`
-   `Node.innerHeight( number )`: 设置十字架的横线高度

<node-cross/>

```javascript
const node0 = netv.getNodeById('0')
node0.width(80)
node0.height(60)
node0.innerWidth(40)
node0.innerHeight(30)
node0.strokeWidth(0)

// if set strokeWidth to 10
const node1 = netv.getNodeById('1')
node1.width(80)
node1.height(60)
node1.innerWidth(40)
node1.innerHeight(30)
node1.strokeWidth(10)
```

## 交互

### `Node.on()`

`Node.on(eventName: string, callback?: (e:Event) => {})`: 为节点添加交互事件，支持的事件类型包括：`'mousedown'`, `'mouseup'`, `'click'`, `'dragstart'`, `'dragging'`, `'dragend'`, `'mouseover'`, 和 `'mouseout'`.

### `Node.off()`

`Node.off(eventName, callback?: (e:Event) => {})`: 删除绑定在节点上的交互回调函数，如果未指定`callback`，将删除所有对应事件的回调。