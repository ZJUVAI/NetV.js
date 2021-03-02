---
sidebarDepth: 2
---

# 接口

## `InitializationConfigurations`

```typescript
interface InitializationConfigurations {
    container: HTMLDivElement
    node: {
        style: {
            shape: string
            fill: Color
            strokeWidth: number
            strokeColor: Color
            rotate: number
            r: number
            width: number
            height: number
            vertexAlpha: Position
            vertexBeta: Position
            vertexGamma: Position
            innerWidth: number
            innerHeight: number
        }
    }
    link: {
        style: {
            shape: string
            strokeWidth: number
            strokeColor: Color
            curveness: number
        }
    }
    width: number
    height: number
    backgroundColor: Color
    nodeLimit: number
    linkLimit: number
}
```

[initializationConfigurations](interfaces.html#initializationconfigurations) 是 `NetV` 初始化配置的接口。

-   `container` 用来配置可视化的容器, 它是一个 `<div>` 元素。可视化和交互都需要容器的参与. 它是 **必须的**。
-   `node` 用来配置节点的默认属性和样式
    -   `style` 点的样式，类型为[`NodeStyle`](interfaces.html#nodestyle) 
-   `link` 用来配置边的默认属性和样式
    -   `style` 边的样式，类型为[`LinkStyle`](interfaces.html#linkstyle) 
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
    style?: NodeStyle
}
```

[`NodeData`](interfaces.html#nodedata) 接口定义了输入节点的数据格式.

-   `id` 是一个字符串. 它应该是唯一的, 用于识别不同的节点, 同时是必须的.
-   `x` 和 `y` 是数字. 用来配置节点的位置坐标. 它是可选的.
-   `style` 节点的样式，类型为[`NodeStyle`]

## `NodeStyle`

```typescript
interface NodeStyle {
    shape?: NodeShape
    offset?: Position
    fill?: Color
    strokeWidth?: number
    strokeColor?: Color
    rotate?: number
    /* circle shape styles */
    r?: number
    /* rect shape styles */
    width?: number
    height?: number
    /* triangle shape styles */
    vertexAlpha?: Position
    vertexBeta?: Position
    vertexGamma?: Position
    /* cross shape styles */
    innerWidth?: number
    innerHeight?: number
}
```

[`NodeStyle`](interfaces.html#nodestyle)定义了节点样式的格式。

-   `shape` string类型，设定节点形状，目前支持：`circle`, `rect`, `triangle`, `cross`，默认为`circle`。
-   `fill` 类型为 [Color](interfaces.html#color) 对象，用来配置节点的颜色. 默认值为 `{r: 0.2, g: 0.6, b: 0.2, a: 1.}`。
-   `strokeWidth` 类型为数字, 用来配置节点的边框宽度. 默认值为 `2`。
-   `strokeColor` 类型为 [Color](interfaces.html#color) 对象，用来配置节点的边框颜色. 默认值为 `{ r: 0.9, g: 0.9, b: 0.9, a: 0.6 }`。
-   `circle`样式
    -   `r` 类型为数字，用来配置节点的半径。默认值为 `5`。
-   `rect`样式
    -   `width` 长方形宽度，默认为`5`
    -   `height` 长方形高度，默认为`5`
    -   `rotate` 旋转角度，范围为`[-PI, PI]`，顺时针为正向
-   `triangle`样式
    -   `vertexAlpha`
    -   `vertexBeta`
    -   `vertexGamma`
    -   `rotate` 旋转角度，范围为`[-PI, PI]`，顺时针为正向
-   `cross`样式
    -   `width` 十字架整体宽度
    -   `height` 十字架整体高度
    -   `innerWidth` 十字架竖线宽度
    -   `innerHeight` 十字架横线高度 
    -   `rotate` 旋转角度，范围为`[-PI, PI]`，顺时针为正向


## `LinkData`

```typescript
interface LinkData {
    source: string
    target: string
    style?: LinkStyle
}
```

[`LinkData`](interfaces.html#linkdata) 接口定义了输入边的数据格式.

-   `source` 和 `target` 是字符串. 它们是这条边的源头节点和目标节点的 `id`. 它们可以唯一确定一条边. 它们是必须的.
-   `style` 边的样式，类型为[`linkStyle`]

## `LinkStyle`

```typescript
interface LinkStyle {
    shape?: LinkShape
    strokeWidth?: number
    strokeColor?: Color
    /* curve shape */
    curveness?: number
}
```

[`LinkStyle`](interfaces.html#linkstyle)定义了边样式的格式。

-   `shape` 边的形状，包括：`line`, `curve`
-   `strokeWidth` 边的宽度. 默认值为 `2`.
-   `strokeColor` 类型为：[Color](interfaces.html#color), 边的颜色。默认值为 `{ r: 0.4, g: 0.6, b: 0.8, a: 0.5 }`.
-   `curve`样式
    -   `curveness` 曲线的弯曲程度，范围为`[-1, 1]`，其中正方向为逆时针的弧线

### `NodeLinkData`

```typescript
interface NodeLinkData {
    nodes: NodeData[]
    links: LinkData[]
}
```

[NodeLinkData](interfaces.html#nodelinkdata) 接口定义了输入的数据格式:

-   `nodes` 是[`NodeData`](interfaces.html#nodedata)数组
-   `links` 是[`LinkData`](interfaces.html#linkdata)数组. `links` 可以为空, 此时只有节点将会被渲染

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
