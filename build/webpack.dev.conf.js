const utils = require('./utils');
const path = require('path');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const debug = require('debug')('app:config:dev');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const zcyHtmlBaseData = require('@zcy/html-base-data');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

debug(`合并webpack ${config.dev.env.NODE_ENV} 环境配置`);

let HTMLPlugins = [];
let Entries = {}

config.HTMLDirs.forEach((page,index) => {
    const htmlPlugin = new HtmlWebpackPlugin({
        filename: `${page}.html`,
        template: `./src/page/${page}.html`,
        inject: true,
        chunks: [`${page}`, 'vendor', 'manifest'],
    });

    HTMLPlugins.push(htmlPlugin);
    Entries[page] = `./src/js/${page}.js`;
})

const devWebpackConfig = merge(baseWebpackConfig, {
    entry: Entries,
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.dev.cssSourceMap,
            usePostCSS: true,
        }),
    },
    devtool: config.dev.devtool,
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env,
            __DEV__: true,
        }),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks(module) {
                // any required modules inside node_modules are extracted to vendor
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                );
            },
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity,
        }),

        ...HTMLPlugins,
    ],
});

if (config.dev.bundleAnalyzerReport) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    devWebpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

debug(`合并webpack ${config.dev.env.NODE_ENV} 环境配置成功`);
module.exports = devWebpackConfig;
