---
sidebarDepth: 2
---

# Link

[`Link`](link.html) is a basic element in _NetV.js_. It is visualized as a straight line (without an arrow) in default.

## Manipulation

### `Link.source()`

Get or set the source node of the link.

-   `Link.source()`: return the source node (a [`Node`](node.html) object).
-   `Link.source(`[`Node`](node.html)`)`: set the source node of the link.

### `Link.target()`

Same to `Link.source()`

### `Link.sourceTarget()`

Get or set both the source and the target nodes of the link.

-   `Link.sourceTarget()`: return an object with the source and the target nodes (`{source: Node, target: Node}`).

-   `Link.sourceTarget( {source: Node, target: Node} )`: set the source and the target nodes of the link.

    ```typescript
    const linkOneTwo = netV.getLinkByEnds(['1', '2'])
    const nodeOne = netV.getNodeById('1')
    const nodeThree = netV.getNodeById('3')
    linkOneTwo.sourceTarget({
        source: nodeOne,
        target: nodeThree
    }) // change linkOneTwo's target into nodeThree
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

Get or set the color of the link.

-   `Link.strokeColor()`: return the color of the link (a [`Color`](interfaces.html#color) object ).
-   `Link.strokeColor(`[`Color`](interfaces.html#color)`)`: set the color of the link.

### `Link.strokeWidth()`

Get or set the width of the link

-   `Link.strokeWidth()`: return the width of the link (a number).
-   `Link.strokeWidth( number )`: set the width of the link.
