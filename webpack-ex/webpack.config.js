/**
 * Created by zdluoa on 2017/9/4.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    plugins : [
        //清理包
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: '11Output Management'
        }),
        new UglifyJSPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    //指出报错文件
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {//load css
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {//load img
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }, {//load fonts
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }]
    }
};