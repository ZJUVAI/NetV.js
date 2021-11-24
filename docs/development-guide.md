# Development Guide

[中文版](./development-guide-chinese.md)

-   Preface
    -   We hope that our developers and reviewers consdier how to write beautiful code. It is as important as research because great research work needs landing and application to benefit others. In addition, excellent engineering ability is helpful for our career development.
    -   Research is science while engineering is more like art. Great SDEs should pursue from usable to robust, reliable and tolerant code. [Recommended reading](https://zhuanlan.zhihu.com/p/25595871).
-   Our configuration
    -   [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) are applied to unified the code format and ensure code quality when developing in our built-in hot-reload server, but **we hope our developers understand which rules need attention**.
    -   Further, some rules are out of the scope of linters but are as important, thus efforts are required from developers and maintainers to enforce them. We derived a set of such rules from [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html), and they are described as follows.

## 1 Files

1. File names must be all lowercase and may include dashes (-), but no additional punctuation (except for `App.vue`).
2. A file must include a top-level file overview consist of authors, description, usage, dependencies of the file.

    Example

    ```js
    /**
     * @fileoverview Utilities for handling textareas.
     * Provide a series of functions.
     * Based on d3.js, lodash.js.
     * @author Ran Chen <crcrcry.hello@gmail.com>
     */
    ```

3. Vue component names should be multi-word or at least very different from native html tags to avoid conflicts. Names of sub-components should be tightly coupled, e.g. properly prefixed.

4. Provide component documents in `README.md` and demos in `index.html`.

Example

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

## 2 Modules

1. File extension must always be included.

-   Note: TypeScript (3.9.3) does not support import files with `.ts` extension yet. Thus please do not add `.ts` extension to the imported TypeScript files.

2. Naming imports
    1. Module import names (`import * as name`) should be lowerCamelCase names derived from the imported file names.
    2. Default import names are derived from the imported file names and follow [the naming rules](#4-naming) based on imported object types.
    3. Named imports should keep the same name. Renaming requires caution.
3. Do not create cycles between ES module.

Example

```js
import * as fileOne from '../file-one.js'

import MyClass from '../my-class.js'
import SimpleComponent from '../simple-component.vue'
import SearchBar from '../search-bar'

import { addTwoNumbers, mySqrt } from '../my-math.js'
import { SOME_CONSTANT } from '../constant.js'
```

## 3 Language

1. Variable: add comments for complex variable structure.
2. Object
    1. Method shorthand is preferred. But it may not be suitable for all situations.
    2. Enumerations are a kind of constant object and are preferred for some situations.

Example

```js
const myObject = {
    shorthandMethod() {
        // ...
    }
    // instead of
    // method: function () {
    //   ...
    // }
}

// Method shorthand is worse herein.
new Vue({
    render: (h) => h(App)
}).$mount('#app')

// Enumerations
const Option = {
    // The option used shall have been the first.
    FIRST_OPTION: 1,
    // The second among two options.
    SECOND_OPTION: 2
}
```

3. Class
    1. Private fields should be started with `$_`.
    2. Properties should never be added or removed after the `constructor` is finished.
    3. Do not manipulate `prototype` directly, manipulate `class` instead.
    4. JavaScript `getter` and `setter` properties are not recommended. They are difficult to reason about. Provide ordinary methods instead.

Example

```js
class Foo {
    constructor() {}

    // private method
    $_computeBar() {}

    // public method
    getBar() {}
}
```

4. Function
    1. Arrow functions are prefered in most situations because they are more concise and simplify scoping `this`.
    2. Use a rest parameter instead of accessing `arguments`. Rest parameters are typed with a `...` prefix in function documents. Meanwhile, spread operator (`...`) is also recommended.
5. Control Structure
    1. Loop
        1. Recommend `forEach` because it can make code more concise and clear.
        2. `for ... of` loop is prefered when performance is important.
        3. `for ... in` loop may only be used on dict-style objects.
    2. Exception: custom exceptions provide a great way to convey additional error information from functions. They should be defined and used wherever the native `Error` type is insufficient.

## 4 Naming

1. Identifiers: ASCII letters and digits, underscores, and dollar signs.
2. Give a descriptive name. Do not worry about saving horizontal space.
3. Do not use abbreviations that are ambiguous or unfamiliar to readers outside your project, and do not abbreviate by deleting letters within a word.

Example

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

### 4.1 Naming Rules

1. Class names:
    1. UpperCamelCase
    2. Names are typically nouns or noun phrases.
2. Method names:
    1. lowerCamelCase
    2. Names are typically verbs or verb phrases.
3. Enum names
    1. UpperCamelCase
    2. Names are typicall singular nouns. Individual items within the enum are named in `CONSTANT_CASE`
4. Constant names
    1. CONSTANT_CASE, all uppercase cases with words separated by underscores.
    2. Names are typically nouns or noun phrases.
    3. Deeply immutable variables are constants. The variable `const array = []` is not a constant.
    4. Recommend [immutable-js](https://immutable-js.github.io/immutable-js/) from Facebook
5. Others
    1. lowerCamelCase
    2. Include non-constant field names, parameter names, local variable names, etc.

### 4.2 Naming Methods

1. Camel naming method
    1. Covert the phrase to plain ASCII.
    2. Divide the result into words.
        - If any word already has a conventional camel case appearance, split it. (e.g., `'YouTube' -> 'You Tube'`)
    3. Then lowercase everything and uppercase only the first character of each word, except for the first word. See examples below.
    4. Finally, join.

Example

```js
'XML HTTP request' -> 'XmlHttpRequest', not 'XMLHTTPRequest'
'new customer ID' -> 'newCustomerId', not 'newCustomerID'
'supports IPv6 on iOS' -> 'supportsIpv6OnIos', not 'supportsIPv6OnIOS'
'YouTube importer' -> 'YouTubeImporter', not 'YoutubeImporter'
```

## 5 Comments

1. Class/component comment style

Example

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

2. Function comment style

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

3. Block comment style

```js
// xxx
// yyy
// ...
```

4. Variable comment style

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

5. Deprecation
    1. Mark deprecated methods, classes or interfaces with @deprecated annotations.
    2. A deprecation comment must include simple, clear directions for people to fix their call sites.

## Pull Requests

When you new a Pull request, you need to describe your pull request follow the template:

```
### This is a ...

- [ ] New feature (addNodes/addLinks)
- [ ] Other (documents)

### Description


### Self check
- [x] Test passed or not need
- [x] Doc is ready or not need
- [x] Demo is provided or not need

### Additional Plan?
> If this PR related with other PR or following info. You can type here.

```

## License

[MIT license](/LICENSE).
