import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router';

var createApp = function() {
    const router = createRouter();

    const app = new Vue({
        router,
        render: h => h(App)
    });

    return { app };
};

module.exports.createApp = createApp;