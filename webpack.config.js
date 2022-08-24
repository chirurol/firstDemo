const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader');


const config = {
    entry: {
        main: './main'
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // 它会应用到普通的 `.js` 文件
            // 以及 `.vue` 文件中的 `<script>` 块
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            // 它会应用到普通的 `.css` 文件
            // 以及 `.vue` 文件中的 `<style>` 块
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, //
                loader: 'url-loader',
                exclude: /node_modules/,
                options: {
                    limit: 10000000,
                    esModule:false, //默认值true会导致png图片的src中被编译成[Object,Object]
                }
            },
            {
                test: /\.mp4/,
                loader: 'vue-video-player'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("main.css"),
        // new VueLoaderPlugin()
    ],
    // 使支持使用template动态增加vue组件
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
    },
};

module.exports = config;