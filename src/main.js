import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

import 'bootstrap';
import 'material-icons/iconfont/material-icons.css';

import titleMixin from './mixin';
import { routes } from './routes.js';

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

createApp(App)
  .use(router)
  .mixin(titleMixin)
  .mount('#app');
