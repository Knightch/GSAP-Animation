const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {
    argv
} = require('process');

const config = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js",
    },
    devServer: {
        port: 3000,
    },
    Plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.pug'
        }),
    ],
    module: {
        rules: [{
            test: /\.pug$/,
            use: ["pug - loader"]
        }, ]
    }
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {}
    if (argv.mode === 'production') {}

    return config;
}