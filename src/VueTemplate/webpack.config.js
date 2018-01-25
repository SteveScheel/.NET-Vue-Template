const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);

    const sharedConfig = {
        output: {
            filename: '[name].js',
            publicPath: '/dist/'
        }
    };

    // TODO: Make these client and server configs
    return [sharedConfig, sharedConfig];
}