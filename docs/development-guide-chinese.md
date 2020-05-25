# 开发指南

[English Version](./development-guide.md)

- - 我们希望我们的开发人员和审阅者考虑如何编写漂亮的代码。 它与研究一样重要，因为出色的研究工作需要落地和应用才能使他人受益。 此外，出色的工程能力也有助于我们的职业发展。
  - 研究是科学，而工程更像艺术。 优秀的软件开发工程师应该从可用代码发展为健壮，可靠和宽容的代码。 [推荐阅读:为什么你的前端工作经验不值钱？](https://zhuanlan.zhihu.com/p/25595871)

- 配置
  - 我们使用了[ESLint](https://eslint.org/) 和 [Prettier](https://prettier.io/)来统一代码风格，保证代码质量，但是**我们希望开发者能够理解一些值得注意的规则**。
  - 仍有一些规则不在我们的linter范围内，我们希望开发者和维护者都能努力执行这些规则。我们从[Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)中总结了一些规则如下。



## 1 文件

1. 文件名必须小写，可以包含虚线（`-`），但不要乱加其他标点符号（除非特殊需要）

2. 文件必须包括一个文件信息，包括：作者，描述，用途，文件依赖，示例：

   ```js
   /**
    * @fileoverview Utilities for handling textareas.
    * Provide a series of functions.
    * Based on d3.js, lodash.js.
    * @author Ran Chen <crcrcry.hello@gmail.com>
    */
   ```

3. 在`README.md`中提供组件组织结构。示例：

   ```js
   components/
   |- todolist/
     |- index.vue
     |- todolist-item.vue
     |- todolist-item-button.vue
     |- index.html
     |- README.md
   |- search-bar/
     |- index.vue
     |- search-bar-navigation.vue
     |- search-bar-button.vue
     |- index.html
     |- README.md
   ```

   

## 2 模块

1. 引入模块时，需要有模块的扩展名；

2. 命名引入的模块
   1. 使用`import * as name`时，`name`应该用首字母小写的驼峰规则（lowerCamelCase）对文件名进行重写。
   2. 引入`default`模块时，命名应直接源自原模块，并且应该根据对象类型使命名符合[命名规则](# 4 命名)。
   3. 引入带名字的模块时，应该保持原名。重命名的话需要最好打上警告。

3. 不要循环引用

示例：

```js
import * as fileOne from '../file-one.js'

import MyClass from '../my-class.js'
import SimpleComponent from '../simple-component.vue'
import SearchBar from '../search-bar'

import { addTwoNumbers, mySqrt } from '../my-math.js'
import { SOME_CONSTANT } from '../constant.js'
```



## 3 语言

1. 变量：为结构复杂的变量加上注释；

2. 对象：

   1. 对象的方法最好能够使用shorthand模式，但它并不适用于所有情况；
   2. 在某些情形下可以用一个`const`对象来表达枚举变量

   举例：

   ```js
   const myObject = {
       shorthandMethod() {
           // ...
       },
       // instead of
       // method: function () {
       //   ...
       // }
   }
   
   // Method shorthand is worse herein.
   new Vue({
       render: (h) => h(App),
   }).$mount('#app')
   
   // Enumerations
   const Option = {
       // The option used shall have been the first.
       FIRST_OPTION: 1,
       // The second among two options.
       SECOND_OPTION: 2,
   }
   ```

3. 类型

   1. 私有域应该要以`$_`开头；
   2. 在构造函数`constructor`完成后，不应该再添加或者删除属性；
   3. 不要使用和操作 `prototype`，推荐使用`class`
   4. 不推荐使用`getter`和`setter`，原因很复杂，请使用普通方法；

   举例：

   ```js
   class Foo {
       constructor() {}
   
       // private method
       $_computeBar() {}
   
       // public method
       getBar() {}
   }
   ```

4. 函数
   1. 推荐在大部分情况下使用箭头函数，因为箭头函数更简洁，并且简化了`this`的作用域；
   2. 使用“剩余函数”（rest parameter）而非直接使用`arguments`。剩余函数可以用`...`进行解构。

5. 流程控制

   1. 循环
      1. 推荐使用`forEach`等一系列循环操作；
      2. 需要提升性能时，使用`for ... of`操作是最高效的
      3. `for ... in`循环只能在`dict`这一类的对象上用
   2. 异常（Exception）：自定义异常提供了一种传达其他错误信息的好方法。 应该在原生“错误”类型不足的地方定义和使用它们。



## 4 命名

1. 标识符：ASCII码字母和数字，下划线以及美元符号；
2. 给出一个描述性的名称。不要担心节省水平空间。
3. 不要使用你的项目之外的读者不熟悉的缩写，也不要删除单词中的字母。

举例：

```js
// Bad
n // Meaningless.
nErr // Ambiguous abbreviation.
nCompConns // Ambiguous abbreviation.
wgcConnections // Only your group knows what this stands for.
pcReader // Lots of things can be abbreviated "pc".
cstmrId // Deletes internal letters.
kSecondsPerDay // Do not use Hungarian notation.

// Good
errorCount // No abbreviation.
dnsConnectionIndex // Most people know what "DNS" stands for.
referrerUrl // Ditto for "URL".
customerId // "Id" is both ubiquitous and unlikely to be misunderstood.
```



### 4.1 命名规则

1. 类名：
   1. 首字母大写的驼峰规则
   2. 名称应该用名词或者名词短语
2. 方法名：
   1. 首字母小写的驼峰规则
   2. 名称应该用动词或动词短语
3. 枚举名：
   1. 首字母大写的驼峰规则
   2. 名称应该用单数名词，每个枚举变量中的枚举量应该被命名为这种风格：`CONSTANT_CASE`
4. 常量名：
   1. `CONSTANT_CASE`，单词大写并用下划线分隔
   2. 名称通常为名词，或者名词短语
   3. 深度不变的变量是常量，类似`const array = []` 并不属于常量；
   4. 推荐使用 [immutable-js](https://immutable-js.github.io/immutable-js/)
5. 其他
   1. 首字母小写的驼峰规则
   2. 包括非常量、参数、局部变量等



### 4.2 命名方法

驼峰命名法

1. 先将结果转化成多个词：比如`YouTube`先拆开为`You Tube`
2. 除了第一个词以外，其余每个词的首字母为大写，其他字母都转化为小写。
3. 串联

```js
'XML HTTP request' -> 'XmlHttpRequest', not 'XMLHTTPRequest'
'new customer ID' -> 'newCustomerId', not 'newCustomerID'
'supports IPv6 on iOS' -> 'supportsIpv6OnIos', not 'supportsIPv6OnIOS'
'YouTube importer' -> 'YouTubeImporter', not 'YoutubeImporter'
```



## 5 注释

1. 类/组件的注释风格：

   ```js
   /**
    * Description of class
    * @implements {Iterable<string>}
    */
   class MyFancyTarget extends EventTarget {
       /**
        * @param {string} arg1 An argument that makes this more interesting.
        * @param {Array<number>} arg2 List of numbers to be processed.
        */
       constructor(arg1, arg2) {
           // ...
       }
   }
   ```

   

2. 函数注释风格：

   ```js
   /**
    * Description of function
    * @param {number} arg1 The first argument.
    * @param {number} arg2 The second argument.
    * @param {...number} rest The remainder of arguments are all numbers.
    * @returns {number} The result
    */
   function func(arg1, arg2, ...rest) {
       // ...
   }
   ```

   

3. 块注释风格

   ```js
   // xxx
   // yyy
   // ...
   ```

   

4. 变量注释风格

   ```js
   /**
    * Some description.
    * @type {Array<number>}
    */
   const data = []
   
   /**
    * An enum with two options.
    * @enum {number}
    */
   const Option = {
       FIRST_OPTION: 1,
       SECOND_OPTION: 2
   }
   ```

   

5. 弃用

   1. 弃用的类/接口应该用`@deprecated`进行标注
   2. 弃用评论必须包含简单明了的指导，以便人们修复调用栈。