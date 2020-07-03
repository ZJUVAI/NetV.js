---
title: API
sidebar: auto
---

## 主体

### NetV

NetV 可以通过多种方式引入，主体是`Class`，通过`new`的方式来生成实例

-   **参数**: `{container: HTMLDivElement, configs?: Configs}`
    -   `container`: `dom`元素
    -   [configs](#configs): 配置项
        -   [默认值](#configs-default)
-   **示例**

```js
const netv = new NetV({
	container: document.getElementById('main'),
})
```

## 接口

### Configs

`NetV`实例化配置项格式

-   **接口**

```ts
interface Configs {
	node: {
		r: number
		fill: Color
	}
	link: {
		strokeWidth: number
		strokeColor: Color
	}
	nodeLimit: number
	linkLimit: number
	container: {
		width: number
		height: number
		backgroundColor: Color
		enablePanZoom: boolean
	}
}
```

-   **包含接口**
    -   [Color](#color)

### NodeLinkData

图数据格式

-   **接口**

```ts
export interface NodeLinkData {
	nodes: NodeData[] // 点数据、数组形式
	links: LinkData[] // 边数据、数组形式
}
```

-   **包含接口**
    -   **[NodeData](#nodedata)**
    -   **[LinkData](#linkdata)**
-   **示例**

```js
const testData = {
    nodes: [
        {
            id: '0',
            x: 0,
            y: 0,
            r: 10,
            fill: {
                r: 1,
                g: 0,
                b: 0,
                a: 1
            }
        },
        {
            id: '1',
            x: 100,
            y: 500,
            r: 5,
            fill: {
                r: 0,
                g: 1,
                b: 0,
                a: 1
            }
        }
    ],
    links: [
        {
            source: '0',
            target: '1',
            strokeColor: {
                r: 1,
                g: 0,
                b: 0,
                a: 1
            }
    ]
}
```

### NodeData

点数据的格式

-   **接口**

```ts
export interface NodeData {
	id: string // id唯一标识符，必须输入
	x?: number // 点的x坐标位置，可缺省
	y?: number // 点的y坐标位置，可缺省
	r?: number // 点的半径，可缺省
	fill?: Color // 点的颜色，可缺省
	strokeWidth?: number // 点的边宽度，可缺省
	strokeColor?: Color // 点的边颜色，可缺省
}
```

-   **包含接口**
    -   **[Color](#color)**
-   **示例**

```js
const nodeData = {
	id: '0',
	x: 400,
	y: 400,
	r: 20,
	fill: {
		r: 0,
		g: 0,
		b: 1,
		a: 1,
	},
}
```

### LinkData

边数据的格式

-   **接口**

```ts
export interface LinkData {
	source: string // 边的起点的id
	target: string // 边的终点的id
	strokeWidth?: number //边的颜色，可缺省
	strokeColor?: Color //边的宽度，可缺省
}
```

::: danger
:warning: 目前图数据为有向无环图
:::

-   **包含接口**
    -   **[Color](#color)**
-   **示例**

```js
const linkData = {
	source: '0',
	target: '1',
	strokeColor: {
		r: 1,
		g: 0,
		b: 0,
		a: 1,
	},
}
```

### Color

点边颜色的格式

-   **接口**

```ts
export interface Color {
	r: number
	g: number
	b: number
	a: number
}
```

-   **示例**

```js
const fill = {
	r: 1,
	g: 0,
	b: 0,
	a: 1,
}
```

## 默认值

### configs-default

```js
configs = {
    container = {
        width = 800
        height = 600
        backgroundColor = { r: 1, g: 1, b: 1, a: 1 }
        enablePanZoom = true
    }
    nodeLimit = 100
    linkLimit = 1000
}
```

### node-default

```js
node = {
	r: 5,
	fill: { r: 0.3, g: 0.5, b: 0.5, a: 0.5 },
	strokeColor: { r: 0.6, g: 0.6, b: 0.6, a: 0.5 },
	strokeWidth: 1,
}
```

### link-default

```js
link = {
	strokeColor: { r: 0.5, g: 0.5, b: 0.5, a: 0.5 },
	strokeWidth: 2,
}
```

## 函数

### data

输入图数据进行构建，无输入时调用返回已构建的图数据

-   **参数**:`{ nodeLinkData?: NodeLinkData }`
    -   [nodeLinkData](#nodelinkdata): 输入图数据
        -   默认值: `undefined`
-   **返回值**: `{nodeLinkData: NodeLinkData}`
    -   [nodeLinkData](#nodelinkdata)
        -   默认值: `{nodes:[], links:[]}`
-   **示例**

```js
const testData = {
    nodes: [
        {
            id: '0',
            x: 0,
            y: 0,
            r: 10,
            fill: {
                r: 1,
                g: 0,
                b: 0,
                a: 1
            }
        },
        {
            id: '1',
            x: 100,
            y: 500,
            r: 5,
            fill: {
                r: 0,
                g: 1,
                b: 0,
                a: 1
            }
        }
    ],
    links: [
        {
            source: '0',
            target: '1',
            strokeColor: {
                r: 1,
                g: 0,
                b: 0,
                a: 1
            }
    ]
}
netv.data(testData)
```

### addNodes

添加多个节点

-   **参数**: `{nodesDataArr: NodeData[]}`
    -   [nodesDataArr](#nodedata): 节点数组
-   **返回值**: `{nodeLinkData: NodeLinkData}`
    -   [nodeLinkData](#nodelinkdata): 整个图数据
-   **示例**
    ```js
    const nodesDataArr = [
    	{
    		id: '0',
    		x: 0,
    		y: 0,
    		r: 10,
    		fill: {
    			r: 1,
    			g: 0,
    			b: 0,
    			a: 1,
    		},
    	},
    	{
    		id: '1',
    		x: 100,
    		y: 500,
    		r: 5,
    		fill: {
    			r: 0,
    			g: 1,
    			b: 0,
    			a: 1,
    		},
    	},
    ]
    netv.addnodes(nodesDataArr)
    ```

### addLinks

添加多条边
添加多个节点

-   **参数**: `{linksDataArr: LinkData[]}`
    -   [linksDataArr](#linkData): 边数组
-   **返回值**: `{nodeLinkData: NodeLinkData}`
    -   [nodeLinkData](#nodelinkdata): 整个图数据
-   **示例**
    ```js
    const linksDataArr = [
    	{
    		source: '0',
    		target: '1',
    		strokeColor: {
    			r: 1,
    			g: 0,
    			b: 0,
    			a: 1,
    		},
    	},
    	{
    		source: '0',
    		target: '2',
    		strokeColor: {
    			r: 0,
    			g: 1,
    			b: 0,
    			a: 1,
    		},
    	},
    ]
    netv.addlinks(linksDataArr)
    ```

### addNode

添加单个节点

-   **参数**: `{nodeData: NodeData}`
    -   [nodeData](#nodedata): 单个节点
-   **返回值**: `{nodeLinkData: NodeLinkData}`
    -   [nodeLinkData](#nodelinkdata): 整个图数据
-   **示例**
    ```js
    const nodeData = {
    	id: '0',
    	x: 0,
    	y: 0,
    	r: 10,
    	fill: {
    		r: 1,
    		g: 0,
    		b: 0,
    		a: 1,
    	},
    }
    netv.addnode(nodeData)
    ```

### addLink

添加单条边

-   **参数**: `{linkData: LinkData}`
    -   [linkData](#linkData): 单条边
-   **返回值**: `{nodeLinkData: NodeLinkData}`
    -   [nodeLinkData](#nodelinkdata): 整个图数据
-   **示例**
    ```js
    const linkData = {
    	source: '0',
    	target: '1',
    	strokeColor: {
    		r: 1,
    		g: 0,
    		b: 0,
    		a: 1,
    	},
    }
    netv.addlink(linkData)
    ```

### getNodeById

通过`id`获取节点 Node

-   **参数**: `{id: string}`
    -   `id`: 节点 Node 的`id`
-   **返回值**: `{node: NodeData}`
    -   [node](#nodedata): 节点
-   **示例**

```js
let node = netv.getNodeById('0')
```

### getLinksByEnds

通过点的 id 获取连接的 links

-   **参数**: `{id: string}`
    -   `id`: 节点 Node 的`id`
-   **返回值**: `{linksArr: LinkData[]}`
    -   [linksArr](#linkdata): 边数组
-   **示例**

```js
let links = netv.getLinksByEnds('0')
```

### draw

绘制图数据

-   **参数**: 无
-   **返回值**:
-   **示例**

```js
netv.draw()
```
