import Vue from 'vue';
import App from './App.vue';

var createApp = function() {
    const app = new Vue({
        render: h => h(App)
    });

    return { app };
};

module.exports.createApp = createApp;