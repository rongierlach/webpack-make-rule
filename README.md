# Webpack Make Rule 👑

Intended to support your basic use cases,  
a simple little helper function for building [rule](https://webpack.js.org/configuration/module/#rule) config objects in [Webpack 2](https://webpack.js.org/).  

## Installation

`$ npm install --save-dev webpack-make-rule`  

Or if `yarn` is more your fancy...  
`$ yarn add --dev webpack-make-rule`

## Usage

In file `webpack.config.babel.js`

```javascript
import makeRule from 'webpack-make-rule'

/* Having installed all of:
 * - json-loader
 * - babel-loader
 * - standard-loader
 * - web3-loader
 * - solc-loader
 */

export default {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'index.js'
  },
  module: {
    rules: [
      makeRule('json'),
      makeRule(/\.jsx?$/, 'babel-loader'),
      makeRule(/\.jsx?$/, {'loader': 'standard-loader'}, 'pre'),
      makeRule(/\.sol$/, ['web3', 'solc'], undefined, /node_modules/)
    ]
  }
}
```

## Documentation

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### makeRule

Returns a Webpack rule configuration object

**Parameters**

-   `ext` **([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object))**
-   `loader` **([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object))>)**
-   `enforce` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**
-   `exclude` **([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object))>)**
-   `include` **([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object))>)**