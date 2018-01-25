const Vue = require('vue');

module.exports = function createApp(context) {
    return new Vue({
        data: {
            url: context.url
        },
        template: `<h1>The visited URL is: {{ url }}</h1>`
    });
};