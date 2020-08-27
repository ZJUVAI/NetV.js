# 快速上手

## 安装

### 兼容性

NetV 不支持 IE，但支持所有[兼容 ECMAScript 5 的浏览器](https://app.grammarly.com/docs/356175252)

### 更新日志

最新稳定版本：1.0
每个版本的更新日志见[GitHub]()

:::danger
当前的版本只有开发版本，并没有屏蔽所有的错误和警告，后续我们会开发生成版本删除警告，减小体积。
:::

### `<script>`

直接下载并用`<scipt>` 标签引用, `NetV`会注册为一个全局`Class`


### CDN

```html
<script src="https://unpkg.com/netv@1.0.1/build/NetV.js"></script>
```

### NPM

在用`NetV`构建大型应用时推荐使用 NPM 安装。NPM 能很好地和诸如 webpack 或 Browserify 模块打包器配合使用。

```shell
$ npm install netv
```
