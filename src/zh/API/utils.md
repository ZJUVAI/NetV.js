---
sidebarDepth: 2
---

# 工具

_NetV.js_ 中提供的工具.

## `Utils.transformGraphPosition()`

`Utils.transformGraphPosition(`[`NodeLinkData`](interfaces.html#nodelinkdata)`, number, number, number)`: 将节点的位置转换为给定的正方形区域. 第一个参数是将被导入到 `NetV` 实例中的数据. 第二个参数定义正方形边的长度. 第三和第四参数定义正方形的中心位置.

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
