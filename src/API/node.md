---
sidebarDepth: 3
---

# Node

[`Node`](node.html) is a basic element in _NetV.js_. It is visualized as a circle in default.

## Manipulation

### `Node.id()`

`Node.id()`: return the ID of the node (a string).

### `Node.x()`

Get the x position of the node or set it.

-   `Node.x()`: return the x position (a number) of the node;
-   `Node.x( number )`: set the x position of the node;

### `Node.y()`

Same to `Node.x()`

### `Node.position()`

Get the position (x and y) of the node or set it.

-   `Node.position()`: return an object (`{x: number, y: number}`)

-   `Node.position( {x: number, y: number} )`: set the position of the node. Two numerical parameters are the 2D position (x and y). Return the position (`{x: number, y: number}`).

    ```typescript
    const nodeOne = netV.getNodeById('1')
    nodeOne.position() // example return: {x: 100, y: 200}
    nodeOne.position({ x: 100, y: 100 })
    netV.draw()
    // note that only after netV.draw(), the visualization will be refreshed
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

Get or set the shape of the node.

-   `Node.shape()`: return the shape ofthe node (a string).
-   `Node.shape( string )`: set the shape of the node.

    `'circle'`, `'rect'`, `'triangle'`, and `'cross'` are supported now. Their corresponding style configurations are :

    -   `'circle'`: `r`, `fill`, `strokeColor`, `strokeWidth`
    -   `'rect'`: `width`, `height`, `fill`, `strokeColor`, `strokeWidth`
    -   `'triangle'`: `vertexAlpha`, `vertexBeta`, `vertexGamma`, `fill`, `strokeColor`, `strokeWidth`
    -   `'cross'`: `width`, `height`, `innerWidth`, `innerHeight`, `fill`, `strokeColor`, `strokeWidth`

### General Styles

Following [the idea of SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Fills_and_Strokes), we draw the stroke centered around the shape:

<node-shapes/>

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

#### `Node.fill()`

-   `Node.fill()`: return the fill color of the node (a [`Color`](interfaces.html#color) object)
-   `Node.fill(`[`Color`](interfaces.html#color)`)`: set the the fill color of the node.

#### `Node.strokeColor()`

-   `Node.strokeColor()`: return the border color of the node (a [`Color`](interfaces.html#color) object)
-   `Node.strokeColor(`[`Color`](interfaces.html#color)`)`: set the the border color of the node.

#### `Node.strokeWidth()`

-   `Node.strokeWidth()`: return the border width of the node (a number).
-   `Node.strokeWidth( number )`: set the border width of the node.

### Shape: `'circle'`

#### `Node.r()`

-   `Node.r()`: return the radius of the circle (a number).
-   `Node.r( number )`: set the radius of the circle.

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

### Shape: `'rect'`

#### `Node.width()`

-   `Node.width()`: return the width of the rectangle (a number).
-   `Node.width( number )`: set the width of the rectangle.

#### `Node.height()`

-   `Node.height()`: return the height of the rectangle (a number).
-   `Node.height( number )`: set the height of the rectangle.

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

### Shape: `'triangle'`

#### `Node.vertexAlpha()`

-   `Node.vertexAlpha()`: return the alpha vertex of the triangle (a [`Position`](interfaces.html#position)).
-   `Node.vertexAlpha(`[`Position`](interfaces.html#position)`)`: set the alpha vertex of the triangle with a [`Position`](interfaces.html#position).

#### `Node.vertexBeta()`

-   `Node.vertexBeta()`: return the beta vertex of the triangle (a [`Position`](interfaces.html#position)).
-   `Node.vertexBeta(`[`Position`](interfaces.html#position)`)`: set the beta vertex of the triangle with a [`Position`](interfaces.html#position).

#### `Node.vertexGamma()`

-   `Node.vertexGamma()`: return the gamma vertex of the triangle (a [`Position`](interfaces.html#position)).
-   `Node.vertexGamma(`[`Position`](interfaces.html#position)`)`: set the gamma vertex of the triangle with a [`Position`](interfaces.html#position).

### Shape: `'cross'`

#### `Node.width()`

-   `Node.width()`: return the horizonal width of the rectangle (a number).
-   `Node.width( number )`: set the horizonal width of the rectangle.

#### `Node.height()`

-   `Node.height()`: return the vertical height of the rectangle (a number).
-   `Node.height( number )`: set the vertical height of the rectangle.

#### `Node.innerWidth()`

-   `Node.innerWidth()`: return the horizonal thickness of the rectangle (a number).
-   `Node.innerWidth( number )`: set the horizonal thickness of the rectangle.

#### `Node.innerHeight()`

-   `Node.innerHeight()`: return the vertical thickness of the rectangle (a number).
-   `Node.innerHeight( number )`: set the vertical thickness of the rectangle.
