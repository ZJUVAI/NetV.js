---
title: API
sidebar: auto
---



# Core

## Initialization

`NetV` is a class, an instance of `NetV` can be created as follows:

```typescript
const netV = new NetV({
	/* Configurations */
})
```

A `NetV` instance can be initialized without any configuration except `container`. `Container` must be a `div` element. For example:

```typescript
const netV = new NetV({
	container: document.createElement('div'),
})
```

The entire initialization configuration interface can be referred in: [InitializationConfigurations](#InitializationConfigurations)

## Manipulation

### `NetV.data()`

Insert data into the `NetV` instance or return the data inserted.

-   `NetV.data()`: return the data (a [`NodeLinkData`](#nodelinkdata) object).

-   `NetV.data(`[`NodeLinkData`](#nodelinkdata)`)`: insert data into the `NetV` instance, no return.

    ```typescript
    netV.data({
    	nodes: [
    		{ id: '0', x: 300, y: 100 },
    		{ id: '1', x: 500, y: 100 },
    		{ id: '2', x: 400, y: 400 },
    	],
    	links: [
    		{ source: '0', target: '2' },
    		{ source: '1', target: '2' },
    	],
    })
    ```

### `NetV.addNode()`

`NetV.addNode( `[`NodeData`](#nodedata)` )`: Add a new node with its data (Interface: [`NodeData`](#nodedata)), return the added [`Node`](#node) object.

```typescript
const newNode = netV.addNode({
	id: '3',
	x: 100,
	y: 100,
	fill: { r: 1, g: 0, b: 1, a: 0 },
	r: 10,
})
```

### `NetV.addLink()`

`NetV.addLink( `[`LinkData`](#linkdata)` )`: Add a new link with its data (Interface: [`LinkData`](#linkdata)), return the added [`Link`](#link) object.

```typescript
const newLink = netV.addLink({
	source: '0',
	target: '3',
	strokeColor: { r: 1, g: 0, b: 1, a: 0 },
})
```

### `NetV.addNodes()`

`NetV.addNodes( `[`NodeData`](#nodedata)`[] )`: Add a list of new nodes with their data, no return.

```typescript
netV.addNodes([
	{ id: '4', x: 300, y: 100 },
	{ id: '5', x: 500, y: 100 },
	{ id: '6', x: 400, y: 400 },
])
```

### `NetV.addLinks()`

`NetV.addLinks( `[`LinkData`](#linkdata)`[] )`: Add a list of new links with their data, no return.

```typescript
netV.addLinks([
	{ source: '4', target: '5' },
	{ source: '4', target: '6' },
])
```

### `NetV.getNodeById()`

`NetV.getNodeById( string )`: Get a node from its ID, return a [`Node`](#node) element.

```typescript
const nodeOne = netV.getNodeById('1')
```

### `NetV.getLinkByEnds()`

`NetV.getLinkByEnds( string[] )`: Get a link from its source node's id and target node's id, return a [`Link`](#link) element. The parameter is an array with two node id, their order is no matter.

```typescript
const linkOneTwo = netV.getLinkByEnds(['1', '2']) // it is same to getLinkByEnds(['2', '1'])
```

### `NetV.getElementByPosition()`

`NetV.getElementByPosition( number, number )`: Get an element (node/link) by a 2D position. Two numerical parameters are the 2D position (x and y). Return an object looks like: `{type: string, element: Node/Link}`

```typescript
const obj = netV.getElementByPosition(/* x= */ 100, /* y= */ 200)
// example return: {type: 'node', element: Node}

if (!obj) {
	// no node/link on this position
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

`NetV.wipe()`: Empty all the data in the `NetV` instance, no return.

### `NetV.loadDataset()`

`NetV.loadDataset( string )`: Get an integrated dataset in _NetV.js_, return a [`NodeLinkData`](#nodelinkdata) object. Several datasets are supported:

-   `'miserables'`: it contains co-occurrences of characters in Victor Hugo's novel 'Les Misérables'. There are 77 nodes and 254 links.

```typescript
const miserables = netV.loadDataset('miserables')
netV.data(miserables)
```

## Render

### `NetV.draw()`

`NetV.draw()`: Draw/refresh all the graph on the canvas. **Note that** the visualization result will only be refreshed after calling `NetV.draw()`

# Node

[`Node`](#node) is a basic element in _NetV.js_. It is visualized as a circle in default.

## Manipulation

### `Node.id()`

`Node.id()`: return the id of the node (a string).

### `Node.x()`

Get the x position of the node or set it.

-   `Node.x()`: return the x position (a number) of the node;
-   `Node.x( number )`: set the x position of the node;

### `Node.y()`

Same to `Node.x()`

### `Node.position()`

Get the position (x and y) of the node or set it.

-   `Node.position()`: return an object (`{x: number, y: number}`)

-   `Node.position( number, number )`: set the position of the node. Two numerical parameters are the 2D position (x and y). Return the position (`{x: number, y: number}`).

    ```typescript
    const nodeOne = netV.getNodeById('1')
    nodeOne.position() // example return: {x: 100, y: 200}
    nodeOne.position({ x: 100, y: 100 })
    netV.draw() // note that only after calling draw, the visualization will be refreshed
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

Get or set the radius of the node.

-   `Node.r()`: return the radius of the node (a number).
-   `Node.r( number )`: set the radius of the node.

### `Node.fiil()`

Get or set the fill color of the node.

-   `Node.fill()`: return the fill color of the node (a [`Color`](#color) object)
-   `Node.fill(`[`Color`](#color)`)`: set the the fill color of the node.

### `Node.strokeColor()`

Get or set the border color of the node.

-   `Node.strokeColor()`: return the border color of the node (a [`Color`](#color) object)
-   `Node.strokeColor(`[`Color`](#color)`)`: set the the border color of the node.

### `Node.strokeWidth()`

Get or set the border width of the node.

-   `Node.strokeWidth()`: return the border width of the node (a number).
-   `Node.strokeWidth( number )`: set the border width of the node.

# Link

## Manipulation

### `Link.source()`

Get or set the source node of the link.

-   `Link.source()`: return the source node (a [`Node`](#node) object).
-   `Link.source(`[`Node`](#node)`)`: set the source node of the link.

### `Link.target()`

Same to `Link.source()`

### `Link.sourceTarget()`

Get or set both the source and the target nodes of the link.

-   `Link.sourceTarget()`: return an object (`{source: Node, target: Node}`).

-   `Link.sourceTarget( {source: Node, target: Node} )`: set the source and the target nodes of the link.

    ```typescript
    
    ```

## Style

### `Link.strokeColor()`

### `Link.strokeWidth()`

# Events

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

The [initializationConfigurations](#initializationconfigurations) is the interface of the `NetV` initialization configurations.

-   `container` configures the container of the visualization. It is a `<div>` element. Visualizations and interactions are supported within the container. It is **required**.
-   `node` configures the default node appearance and behaviors. The node is visualized as a circle in _NetV.js_.
    -   `r` is a number. It configures the radius of a node. Its default value is `5`.
    -   `fill` is a [Color](#color) object. It configures the fill color of a node. Its default value is `{r: 0.2, g: 0.6, b: 0.2, a: 0.8}`.
    -   `strokeWidth` is a number. It configures the border width of a node. Its default value is `2`.
    -   `strokeColor` is a [Color](#color) object. It configures the border color of a node. Its default value is `{ r: 0.9, g: 0.9, b: 0.9, a: 0.6 }`.
    -   `clickCallback` is a function. It is the call back function while the cursor clicks on a node. Its default value is a void function: `(node: Node)=>{}`.
-   `link` configures the default link appearance and behaviors. The link is visualized as a straight line in _NetV.js_.
    -   `strokeWidth` is a number. It configures the width of a link. Its default value is `2`.
    -   `strokeColor` is a [Color](#color) object. It configures the color of a link. Its default value is `{ r: 0.4, g: 0.6, b: 0.8, a: 0.5 }`.
    -   `clickCallback` is a function. It is the call back function while the cursor clicks on a link. Its default value is a void function: `(link: Link)=>{}`.
-   `width` is a number. It configures the default container width. Its default value is `800`.
-   `height` is a number. It configures the default container height. Its default value is `600`.
-   `backgroundColor` is a [Color](#color) object. It configures the default container background color. Its default value is `{ r: 1, g: 1, b: 1, a: 1 }` (white).
-   `nodeLimit` is a number. It is used to allocate a fixed space in WebGL for rendering nodes. It is recommended to set to be the upper limit of the number of nodes you need to load. Its default value is `100`. **Note that** you need to reset it if you want to load more than 100 nodes.
-   `linkLimit` is a number. It is used to allocate a fixed space in WebGL for rendering links. It is recommended to set to be the upper limit of the number of links you need to load. Its default value is `1000`. **Note that** you need to reset it if you want to load more than 100 links.

## `Color`

```typescript
interface Color {
	r: number
	g: number
	b: number
	a: number
}
```

-   `r`, `g`, `b`, and `a` are four channels of the RGBA color model. Their range are `[0, 1]`.

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

The [`NodeData`](#nodedata) interface specifies the data format of the input node.

-   `id` is a string. It is the unique identifier of a node. It is required.
-   `x` and `y` are numbers. They specify the position of a node. They are optional.
-   `fill` is a [Color](#color) object. It configures the fill color of a node. It is optional.
-   `strokeWidth` is a number. It configures the border width of a node. It is optional.
-   `strokeColor` is a [Color](#color) object. It configures the border color of a node. It is optional.
-   ~~`clickCallback` is a function. It is the call back function while the cursor clicks on a node. It is optional.~~

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

The [`LinkData`](#linkdata) interface specifies the data format of the input link.

-   `source` and `target` are strings. They are the `id` of the source node and the target node of a link. They form the unique identifier of the link. They are both required.
-   `strokeWidth` is a number. It configures the width of a link. It is optional.
-   `strokeColor` is a [Color](#color) object. It configures the color of a link. It is optional.
-   `clickCallback` is a function. It is the call back function while the cursor clicks on a link. It is optional.

## `NodeLinkData`

```typescript
interface NodeLinkData {
	nodes: NodeData[]
	links: LinkData[]
}
```

The [NodeLinkData](#nodelinkdata) interface specifies the data format of the input data. It includes:

-   `nodes` is a list of [`NodeData`](#nodedata) objects.

-   `links` is a list of [`LinkData`](#linkdata) objects. The `links` can be an empty array so that only nodes will be rendered.
