import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../components/HomePage.vue';
import CounterPage from '../components/CounterPage.vue';
import FetchDataPage from '../components/FetchDataPage';

Vue.use(Router);

var createRouter = function() {
    return new Router({
        mode: 'history',
        routes: [
            { path: '/', name: 'home', component: HomePage },
            { path: '/counter', name: 'counter', component: CounterPage },
            { path: '/fetchData', name: 'fetchData', component: FetchDataPage }
        ],
        linkActiveClass: 'active',
        linkExactActiveClass: 'active'
    });
}

module.exports.createRouter = createRouter;