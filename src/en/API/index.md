---
sidebarDepth: 2
sidebar: open
---

# NetV

## Initialization

`NetV` is a class, an instance of `NetV` can be created as follows:

```typescript
const netV = new NetV({
    /* Configurations */
})
```

A `NetV` instance can be initialized without any configuration except `container`. The `container` must be a `div` element. For example:

```typescript
const netV = new NetV({
    container: document.createElement('div')
})
```

The entire initialization configuration interface can be referred in: [InitializationConfigurations](interfaces.html#InitializationConfigurations)

## Manipulation

### `netv.backgroundColor()`

Get/Set NetV's background color.

-   `netv.backgroundColor()`: return NetV's background color in [Color](interfaces.html#color).

-   `netv.backgroundColor(`[`Color`](interfaces.html#color)`)`: set NetV's background color in [Color](interfaces.html#color).

### `netv.dispose()`

Dispose NetV instance. Wipe data and clear all related DOM elements and allocated memory.

### `NetV.data()`

Add data into the `NetV` instance or return added data.

-   `NetV.data()`: return added data (a [`NodeLinkData`](interfaces.html#nodelinkdata) object).

-   `NetV.data(`[`NodeLinkData`](interfaces.html#nodelinkdata)`)`: add data into the `NetV` instance, no return value value.

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

`NetV.nodes()`: return a [`Node`](node.html) array which contains all the nodes in the `NetV` instance.

### `NetV.links()`

`NetV.links()`: return a [`Link`](link.html) array which contains all the links in the `NetV` instance.

### `NetV.addNode()`

`NetV.addNode(`[`NodeData`](interfaces.html#nodedata)`)`: add a new node with its data (Interface: [`NodeData`](interfaces.html#nodedata)), return the added [`Node`](node.html) object.

```typescript
const newNode = netV.addNode({
    id: '3',
    x: 100,
    y: 100,
    style: {
        fill: { r: 1, g: 0, b: 1, a: 0 },
        r: 10
    }
})
```

### `NetV.addLink()`

`NetV.addLink(`[`LinkData`](interfaces.html#linkdata)`)`: add a new link with its data (Interface: [`LinkData`](interfaces.html#linkdata)), return the added [`Link`](link.html) object.

```typescript
const newLink = netV.addLink({
    source: '0',
    target: '3',
    style: {
        strokeColor: { r: 1, g: 0, b: 1, a: 0 }
    }
})
```

### `NetV.addNodes()`

`NetV.addNodes(`[`NodeData`](interfaces.html#nodedata)`[] )`: add a list of new nodes with their data, no return value.

```typescript
netV.addNodes([
    { id: '4', x: 300, y: 100 },
    { id: '5', x: 500, y: 100 },
    { id: '6', x: 400, y: 400 }
])
```

### `NetV.addLinks()`

`NetV.addLinks(`[`LinkData`](interfaces.html#linkdata)`[] )`: add a list of new links with their data, no return value.

```typescript
netV.addLinks([
    { source: '4', target: '5' },
    { source: '4', target: '6' }
])
```

### `NetV.getNodeById()`

`NetV.getNodeById( string )`: get a node from its ID, return a [`Node`](node.html) object.

```typescript
const nodeOne = netV.getNodeById('1')
```

### `NetV.getLinkByEnds()`

`NetV.getLinkByEnds(endId1: stirng, endId2: string)`: get a link from its source node's ID and target node's ID, return a [`Link`](link.html) object. The parameter is an array with two nodes' ID, and their order is no matter.

```typescript
const linkOneTwo = netV.getLinkByEnds('1', '2')
```

### `NetV.getElementByPosition()`

`NetV.getElementByPosition( {x: number, y: number} )`: get an element (node/link) by a 2D position. Two numerical parameters are the 2D position (x and y). Return an object includes the Id
and the object of the element : `{type: string, element: Node/Link}`

```typescript
const obj = netV.getElementByPosition({ x: 100, y: 200 })
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

`NetV.wipe()`: empty all the data in the `NetV` instance, no return value.

### `NetV.loadDataset()`

`NetV.loadDataset( string )`: get an integrated dataset in _NetV.js_, return a [`NodeLinkData`](interfaces.html#nodelinkdata) object. Several datasets are supported:

-   `'miserables'`: it contains co-occurrences of characters in Victor Hugo's novel 'Les Misérables'. There are 77 nodes and 254 links.
-   `'patents'`: it comes from [PatentsView](https://www.patentsview.org/web/#viz/relationships) which describes relationships between patents and companies. There are 352 nodes and 412 links.

```typescript
const miserables = netV.loadDataset('miserables')
netV.data(miserables)
```

## Interactions

### `netv.on()`

Add event listener for NetV. Note that it's bound to whole canvas instead of single element.

`netv.on(eventName: string, callback: (e: Event) => void)`

-   `eventName`: event type, support `zoom`, `pan`, `mousedown`, `mouseup`, `click`
-   `callback`: function to call when trigger corresponding event.

### `netv.off()`

Remove event listener for NetV. Note that it's bound to whole canvas instead of single element.

`netv.on(eventName: string, callback: (e: Event) => void)`

-   `eventName`: event type, support `zoom`, `pan`, `mousedown`, `mouseup`, `click`
-   `callback`: function to call when trigger corresponding event.

### `netv.panBy()`

Manually pan NetV's canvas.

`netv.panBy(x: number, y: number)`: pan by (x, y) offset.

### `netv.zoomBy()`

Manually zoom NetV's canvas.

`netv.zoomBy(k: number, center?: Position)`: zoom by k with `center` as the center. `center` will be canvas middle position if not specified.

### `netv.centerOn()`

manually pan to move node to center.

`netv.centerOn(node: Node)`: pan whole canvas to get given node at center of canvas.

### `netv.transform()`

Get/Set NetV's transform. This can be used for programmatically set canvas's pan offset and zoom factor.

-   `netv.transform()`: return NetV's canvas transform in [Transform](interfaces.html#transform).
-   `netv.transform(value)`: set NetV's transform.

### `netv.transition()`

Easing from current transform to given transforms in array one by one.

`netv.transition(transforms: Transform[], durationMS: number[], callback?:({transform: Transform}) => void)`

-   `transforms`: transforms waiting for changing to, each element is a [Transform](interfaces.html#transform).
-   `durationMS`: duration for each easing.
-   `callback`: _optional_, function to call during each easing step. The callback function can get current transform as parameter: `{ transform: Transform}`

## Render

### `NetV.draw()`

`NetV.draw()`: draw/refresh all graphs on the canvas. **Note that** the visualization result will only be refreshed after calling `NetV.draw()`
