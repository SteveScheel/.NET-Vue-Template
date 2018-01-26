const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);

    const sharedConfig = () => ({
        stats: { modules: false },
        resolve: { extensions: ['.js', '.vue'] },
        output: {
            filename: '[name].js',
            publicPath: '/dist/'
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        hotReload: true
                    }
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    include: __dirname,
                    exclude: /node_modules/ 
                },
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader'
                },
                {
                    test: /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: "url-loader?limit=80000"
                }
            ]
        }
    });

    const clientBundleOutputDir = './wwwroot/dist';
    const clientBundleConfig = merge(sharedConfig(), {
        entry: { 'boot-client': './ClientApp/client.js' },
        output: {
            path: path.join(__dirname, clientBundleOutputDir)
        }
    });

    const serverBundleConfig = merge(sharedConfig(), {
        target: 'node',
        entry: { 'main-server': './ClientApp/server.js' },
        output: {
            libraryTarget: 'commonjs2',
            path: path.join(__dirname, 'wwwroot/dist')
        },

        module: {
            rules: [
                {
                    test: /\.json$/,
                    loader: 'json-loader'
                }
            ]
        },
    });

    return [clientBundleConfig, serverBundleConfig];
}