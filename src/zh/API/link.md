---
sidebarDepth: 2
---

# Link

[`Link`](link.html)是 _NetV.js_ 的一个基本对象. 它默认被可视化成一条直线 (没有箭头).

## Manipulation

### `Link.source()`

获取或者设置边的源头节点.

-   `Link.source()`: 获取边的源头节点 (一个 [`Node`](node.html) 对象).
-   `Link.source(`[`Node`](node.html)`)`: 设置边的源头节点.

### `Link.target()`

同 `Link.source()` 一样.

### `Link.sourceTarget()`

获取或者设置边的源头节点和目标节点.

-   `Link.sourceTarget()`: 返回一个对象,包含了边的源头节点和目标节点 (`{source: Node, target: Node}`).

-   `Link.sourceTarget( {source: Node, target: Node} )`: 设置边的源头节点和目标节点.

    ```typescript
    const linkOneTwo = netV.getLinkByEnds(['1', '2'])
    const nodeOne = netV.getNodeById('1')
    const nodeThree = netV.getNodeById('3')
    linkOneTwo.sourceTarget({
        source: nodeOne,
        target: nodeThree
    }) // 改变 linkOneTwo's 目标节点到 nodeThree
    ```

## Style

<img :src="$withBase('/link-style.svg')" alt="link-style">

```typescript
const linkOneTwo = netV.getLinkByEnds(['1', '2'])
link.strokeWidth(4)
link.strokeColor({ r: 0, g: 0.44, b: 0.74, a: 1 })
netV.draw()
```

### `Link.strokeColor()`

获取或者设置边的颜色.

-   `Link.strokeColor()`: 获取边的颜色 (一个 [`Color`](interfaces.html#color) 对象 ).
-   `Link.strokeColor(`[`Color`](interfaces.html#color)`)`: 设置边的颜色.

### `Link.strokeWidth()`

获取或者设置边的宽度.

-   `Link.strokeWidth()`: 获取边的宽度 (一个数字).
-   `Link.strokeWidth( number )`: 设置边的宽度.
