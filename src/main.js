import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import ShaplaSpinner from "@shapla/vue-spinner";

import "bootstrap";
import "material-icons/iconfont/material-icons.css";
import "@shapla/vue-spinner/dist/style.css";
// import es from "vue3-easy-table/src/lang/es";

import titleMixin from "./mixin";
import { routes } from "./routes.js";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

createApp(App)
  .use(router)
  .component("spinner", ShaplaSpinner)
  .mixin(titleMixin)
  .mount("#app");
