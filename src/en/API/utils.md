# Utils

Some utilities are provided in _NetV.js_.

## `Utils.transformGraphPosition()`

`Utils.transformGraphPosition(`[`NodeLinkData`](interfaces.html#nodelinkdata)`, number, number, number)`: transform the nodes' positions into a given square area. The first parameter is the data that will be imported into a `NetV` instance. The second parameter defines the length of the square's side. The third and fourth parameters define the center position of the square.

```typescript
const data = {
    nodes: [
        {
            id: '1',
            x: 1,
            y: 1
        },
        {
            id: '2',
            x: 2,
            y: 3
        }
    ],
    links: [{ source: '1', target: '2' }]
}
// transform the data into a square from (0, 0) to (1, 1)
const dataAfterTransform = netV.Utils.transformGraphPosition(data, 1, 0.5, 0.5)
// node with id '1' will be located on (0.25, 0)
// node with id '2' will be located on (0.75, 1)
```
