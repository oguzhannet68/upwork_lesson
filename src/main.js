import { createApp } from "vue";
import App from "./App.vue";
import "tailwindcss/tailwind.css";
import router from "./router";
import store from "./store";

createApp(App).use(router, store).mount("#app");
