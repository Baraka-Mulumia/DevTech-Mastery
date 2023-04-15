import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./router.js";
import App from "@/App.vue";

const app = createApp(App);

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

app.use(router);
app.mount("#app");
