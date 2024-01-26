import { createApp } from "vue";
import App from "./App.vue";
import "tailwindcss/tailwind.css";
import router from "./router";
import store from "./store";
import Vue3Toastify from "vue3-toastify";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Vue3Toastify, {
  position: "top-right",
});
app.mount("#app");