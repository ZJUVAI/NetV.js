# netv-box-selection

Box selection plugin for NetV.js(http://netv.zjuvag.org/)

![box-selection-demo](https://github.com/ZJUVAI/NetV.js/raw/dev/packages/box-selection/images/box-selection.png)

## API reference

### `boxSelection = new BoxSelection(netv, configs)`

Create boxSelection handler

-   `netv: NetV`: pass core NetV object
-   `configs: {}`: key-value pair configs
    -   `enable: bool`: default enable box-selection or not
    -   `boxStyle: {}`: selection box's style (below is supported attribute and their default value)
        -   `fill`: `rgba(200, 200, 200, 0.2)`,
        -   `stroke`: `black`,
        -   `stroke-width`: `1`,
        -   `stroke-dasharray`: `[]`

### `boxSelection.dispose()`

Dispose boxSelection handler, clean related DOM element

### `boxSelection.enable()`

Manually enable box selection.

### `boxSelection.disable()`

Manually disable box selection.

### `boxSelection.onSelected(callback: (nodes: Node[]) => {})`

Set callback function, the callback can get selected nodes in NetV's Node type.
