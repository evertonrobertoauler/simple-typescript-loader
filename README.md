# Deprecated

Use [typescript-simple-loader](https://www.npmjs.com/package/typescript-simple-loader) instead, it has better support and features.

# simple-typescript-loader

> Simple Webpack Loader for Typescript 1.5

## Install

```
$ npm install --save-dev simple-typescript-loader
```

## Usage

Webpack config: webpack.config.js

```javascript
module.exports = {
    context: __dirname + '/src',
    entry: './index.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.ts/, loader: 'simple-typescript', exclude: /node_modules/}
        ]
    },
    debug: true,
    devtool: '#source-map',
    watchDelay: 200
};
```

create src/greeter.ts

```javascript
module export class Greeter {
  constructor(public greeting: string) { }
  greet() {
    return "<h1>" + this.greeting + "</h1>";
  }
}
```

create src/index.ts

```javascript
var greeter = new Greeter("Hello, world!");
var str = greeter.greet();
console.log(str);
```

and finally run to tranpile your code:

```
$ node node_modules/.bin/webpack
```

## License

MIT © Éverton R. Auler