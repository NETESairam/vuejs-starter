import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// jquery
const $ = require('jquery');

window.$ = $;

// bootstrap
import 'bootstrap';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');