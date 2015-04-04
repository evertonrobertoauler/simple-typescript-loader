
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
