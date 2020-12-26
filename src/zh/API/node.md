---
sidebarDepth: 2
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

<img :src="$withBase('/node-style.svg')" alt="node-style">

```typescript
const node = netV.getNodeById('1')
node.r(10)
node.strokeWidth(2)
node.fill({ r: 0.98, g: 0.69, b: 0.23, a: 1 })
node.strokeColor({ r: 0, g: 0.44, b: 0.74, a: 1 })
netV.draw()
```

### `Node.r()`

获取或者设置节点的半径.

-   `Node.r()`: 获取节点的半径 (一个数字).
-   `Node.r( number )`: 设置节点的半径.

### `Node.fill()`

获取或者设置节点的颜色.

-   `Node.fill()`: 获得节点的颜色 (一个 [`Color`](interfaces.html#color) 对象).
-   `Node.fill(`[`Color`](interfaces.html#color)`)`: 设置节点的颜色.

### `Node.strokeColor()`

获取或者设置节点的边框颜色.

-   `Node.strokeColor()`: 获取节点的边框颜色 (一个 [`Color`](interfaces.html#color) 对象).
-   `Node.strokeColor(`[`Color`](interfaces.html#color)`)`: 设置节点的边框颜色.

### `Node.strokeWidth()`

获取或者设置节点的边框宽度.

-   `Node.strokeWidth()`: 获取节点的边框宽度(一个数字).
-   `Node.strokeWidth( number )`: 设置节点的边框宽度.
