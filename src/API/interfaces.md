---
sidebarDepth: 2
---

# Interfaces

## `InitializationConfigurations`

```typescript
interface InitializationConfigurations {
    container: HTMLDivElement
    node: {
        r: number
        fill: Color
        strokeWidth: number
        strokeColor: Color
        clickCallback: (node: Node) => {}
    }
    link: {
        strokeWidth: number
        strokeColor: Color
        clickCallback: (link: Link) => {}
    }
    width: number
    height: number
    backgroundColor: Color
    nodeLimit: number
    linkLimit: number
}
```

The [initializationConfigurations](interfaces.html#InitializationConfigurations) is the interface of the `NetV` initialization configurations.

-   `container` configures the container of the visualization. It is a `<div>` element. Visualizations and interactions are supported within the container. It is **required**.
-   `node` configures the default node appearance and behaviors. The node is visualized as a circle in _NetV.js_.
    -   `r` is a number. It configures the radius of a node. Its default value is `5`.
    -   `fill` is a [Color](interfaces.html#color) object. It configures the fill color of a node. Its default value is `{r: 0.2, g: 0.6, b: 0.2, a: 0.8}`.
    -   `strokeWidth` is a number. It configures the border width of a node. Its default value is `2`.
    -   `strokeColor` is a [Color](interfaces.html#color) object. It configures the border color of a node. Its default value is `{ r: 0.9, g: 0.9, b: 0.9, a: 0.6 }`.
    -   `clickCallback` is a function. It is the callback function while the cursor clicks on a node. Its default value is a void function: `(node: Node)=>{}`.
-   `link` configures the default link appearance and behaviors. The link is visualized as a straight line in _NetV.js_.
    -   `strokeWidth` is a number. It configures the width of a link. Its default value is `2`.
    -   `strokeColor` is a [Color](interfaces.html#color) object. It configures the color of a link. Its default value is `{ r: 0.4, g: 0.6, b: 0.8, a: 0.5 }`.
    -   `clickCallback` is a function. It is the callback function while the cursor clicks on a link. Its default value is a void function: `(link: Link)=>{}`.
-   `width` is a number. It configures the default container width. Its default value is `800`.
-   `height` is a number. It configures the default container height. Its default value is `600`.
-   `backgroundColor` is a [Color](interfaces.html#color) object. It configures the default container background color. Its default value is `{ r: 1, g: 1, b: 1, a: 1 }` (white).
-   `nodeLimit` is a number. It is used to allocate a fixed space in WebGL for rendering nodes. It is recommended to set to be the upper limit of the number of nodes you need to load. Its default value is `100`. **Note that** you need to reset it if you want to load more than 100 nodes.
-   `linkLimit` is a number. It is used to allocate a fixed space in WebGL for rendering links. It is recommended to set to be the upper limit of the number of links you need to load. Its default value is `1000`. **Note that** you need to reset it if you want to load more than 1000 links.

## `Color`

```typescript
interface Color {
    r: number
    g: number
    b: number
    a: number
}
```

-   `r`, `g`, `b`, and `a` are four channels of the RGBA color model. Their range is `[0, 1]`.

## `NodeData`

```typescript
interface NodeData {
    id: string
    x?: number
    y?: number
    r?: number
    fill?: Color
    strokeWidth?: number
    strokeColor?: Color
    clickCallback?: (node: Node) => void
}
```

The [`NodeData`](interfaces.html#nodedata) interface specifies the data format of the input node.

-   `id` is a string. It is the unique identifier of a node. It is required.
-   `x` and `y` are numbers. They specify the position of a node. They are optional.
-   `fill` is a [Color](interfaces.html#color) object. It configures the fill color of a node. It is optional.
-   `strokeWidth` is a number. It configures the border width of a node. It is optional.
-   `strokeColor` is a [Color](interfaces.html#color) object. It configures the border color of a node. It is optional.
-   `clickCallback` is a function. It is the callback function while the cursor clicks on a node. It is optional.

## `LinkData`

```typescript
interface LinkData {
    source: string
    target: string
    strokeColor?: Color
    strokeWidth?: number
    clickCallback?: (link: Link) => void
}
```

The [`LinkData`](interfaces.html#linkdata) interface specifies the data format of the input link.

-   `source` and `target` are strings. They are the `id` of the source node and the target node of a link. They form the unique identifier of the link. They are both required.
-   `strokeWidth` is a number. It configures the width of a link. It is optional.
-   `strokeColor` is a [Color](interfaces.html#color) object. It configures the color of a link. It is optional.
-   `clickCallback` is a function. It is the callback function while the cursor clicks on a link. It is optional.

## `NodeLinkData`

```typescript
interface NodeLinkData {
    nodes: NodeData[]
    links: LinkData[]
}
```

The [NodeLinkData](interfaces.html#nodelinkdata) interface specifies the data format of the input data. It includes:

-   `nodes` is a list of [`NodeData`](interfaces.html#nodedata) objects.

-   `links` is a list of [`LinkData`](interfaces.html#linkdata) objects. The `links` can be an empty array so that only nodes will be rendered.

## `Position`

```typescript
interface Position {
    x: number
    y: number
}
```

The [Position](interfaces.html#position) represents a 2-dimensional position. For example, a node can have a position `{x: 10, y: 10}`

## `Transform`

```typescript
interface Transform {
    x: number
    y: number
    k: number
}
```

The [Transform](interfaces.html#transform) specifies transformation applied on all positions. For example, a node with position `(px, py)` will be shown on canvas at `(px * k + x, py * k + y)`
