---
sidebarDepth: 2
---

# 接口

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

[initializationConfigurations](interfaces.html#InitializationConfigurations) 是 `NetV` 初始化配置的接口.

-   `container` 用来配置可视化的容器, 它是一个 `<div>` 元素. 可视化和交互都需要容器的参与. 它说 **必须的**.
-   `node` 用来配置节点的默认属性和表现. 在*NetV.js*中, 节点被可视化为一个圆.
    -   `r` 是一个数字, 用来配置节点的半径. 默认值为 `5`.
    -   `fill` 是一个 [Color](interfaces.html#color) 对象, 用来配置节点的颜色. 默认值为 `{r: 0.2, g: 0.6, b: 0.2, a: 0.8}`.
    -   `strokeWidth` 是一个数字, 用来配置节点的边框宽度. 默认值为 `2`.
    -   `strokeColor` 是一个 [Color](interfaces.html#color) 对象, 用来配置节点的边框颜色. 默认值为 `{ r: 0.9, g: 0.9, b: 0.9, a: 0.6 }`.
    -   `clickCallback` 是一个函数. 当节点发生点击事件的时候可以触发回调函数. 默认为一个空的函数: `(node: Node)=>{}`.
-   `link` 用来配置边的默认属性和表现. 在*NetV.js*中, 边被可视化为一条直线.
    -   `strokeWidth` 是一个数字, 用来配置边的宽度. 默认值为 `2`.
    -   `strokeColor` 是一个 [Color](interfaces.html#color) 对象, 用来配置边的颜色. 默认值为 `{ r: 0.4, g: 0.6, b: 0.8, a: 0.5 }`.
    -   `clickCallback` 是一个函数. 当边发生点击事件的时候可以触发回调函数. 默认为一个空的函数 n: `(link: Link)=>{}`.
-   `width` 是一个数字, 用来配置画布的宽度. 默认值为 `800`.
-   `height` 是一个数字, 用来配置画布的高度. 默认值为`600`.
-   `backgroundColor` 是一个 [Color](interfaces.html#color) 对象. 用来配置画布的背景颜色. 默认值为 `{ r: 1, g: 1, b: 1, a: 1 }` (白色).
-   `nodeLimit` 是一个数字. 它用于配置在 WebGL 中为渲染节点分配固定空间. 建议将其设置为需要加载的节点数的上限. 默认值为 100. **请注意**, 如果要加载 100 个以上的节点, 则需要将其重置.
-   `linkLimit` 是一个数字. 它用于配置在 WebGL 中为渲染边分配固定空间. 建议将其设置为需要加载的边数的上限. 默认值为 1000. **请注意**, 如果要加载 1000 个以上的边, 则需要将其重置.

## `Color`

```typescript
interface Color {
    r: number
    g: number
    b: number
    a: number
}
```

-   `r`, `g`, `b`, 和 `a` 是四个 RGBA 颜色模型的通道, 它们的范围是 `[0, 1]`.

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

[`NodeData`](interfaces.html#nodedata) 接口定义了输入节点的数据格式.

-   `id` 是一个字符串. 它应该是唯一的, 用于识别不同的节点, 同时是必须的.
-   `x` 和 `y` 是数字. 用来配置节点的位置坐标. 它是可选的.
-   `fill` 是一个 [Color](interfaces.html#color) 对象. 用来配置节点的颜色. 它是可选的.
-   `strokeWidth` 是一个数字. 用来配置节点边框的宽度. 它是可选的.
-   `strokeColor` 是一个 [Color](interfaces.html#color) 对象. 用来配置节点边框的颜色. 它是可选的.
-   `clickCallback` 是一个函数, 当节点发生点击事件的时候可以触发回调函数. 它是可选的.

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

[`LinkData`](interfaces.html#linkdata) 接口定义了输入边的数据格式.

-   `source` 和 `target` 是字符串. 它们是这条边的源头节点和目标节点的 `id`. 它们可以唯一确定一条边. 它们是必须的.
-   `strokeWidth` 是一个数字. 用来配置边的宽度. 它是可选的.
-   `strokeColor` 是一个 [Color](interfaces.html#color) 对象. 用来配置边的颜色. 它是可选的.
-   `clickCallback` 是一个函数, 当边发生点击事件的时候可以触发回调函数. 它是可选的.

### `NodeLinkData`

```typescript
interface NodeLinkData {
    nodes: NodeData[]
    links: LinkData[]
}
```

[NodeLinkData](interfaces.html#nodelinkdata) 接口定义了输入的数据格式:

-   `nodes` 是一系列 [`NodeData`](interfaces.html#nodedata) 对象.

-   `links` 是一系列 [`LinkData`](interfaces.html#linkdata) 对象. `links` 可以为空, 此时节点将会被渲染.

## `Position`

```typescript
interface Position {
    x: number
    y: number
}
```

[Position](interfaces.html#position) 表示一个 2 维平面坐标. 比如，一个节点可以有一个位置：`{x: 10, y: 10}`。

## `Transform`

```typescript
interface Transform {
    x: number
    y: number
    k: number
}
```

[Transform](interfaces.html#transform) 指定了一次针对针对所有坐标的变换。比如，一个坐标为`(px, py)`的节点会被变换到`(px * k + x, py * k + y)`的位置。
