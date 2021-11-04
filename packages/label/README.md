# @netv\label

Label plugin for NetV.js(http://netv.zjuvag.org/)

![label](https://github.com/ZJUVAI/NetV.js/raw/dev/packages/label/images/label.png)

## API reference

### `label = new Label(netv)`

Constructor, create label handler

### `label.dispose()`

Dispose label handler, remove related DOM element

### `getLabel(node: Node)`

Get label for given node.

### `draw(node: Node | Node[], drawFunc?: (node: Node) => HTMLSVGElement)`

Draw label for given node(s).

User can specify custom drawFunc, we provide several build-in drawFuncs:

-   `Label.template.rightText`: label will show at node's right, horizontal center aligned.
-   `Label.template.topText`: label will show at node's top, vertical center aligned.

Default drawFunc is `rightText`.

User can also write customized drawFunc to draw any svg elements, like draw an image:

```js
const element = document.createElementNS('http://www.w3.org/2000/svg', 'image')
element.setAttribute('href', 'http://netv.zjuvag.org/logo.svg')
element.setAttribute('width', '100')
labelManager.draw(node, (node) => {
    return element
})
```

### `updatePosition(node: Node | Node[])`

Update label's position for given node(s).

The label's position will not sync with node when drag or manually change node's position. User may call this function manually.

### `remove(node: Node | Node[])`

Rmove node's label.
