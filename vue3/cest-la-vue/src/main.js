import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./router.js";
import App from "@/App.vue";
import { createPinia } from "pinia";

const app = createApp(App);

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount("#app");
