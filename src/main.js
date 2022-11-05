import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jQuery from "jquery";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js";
window.$ = window.jQuery = jQuery;

const app = createApp(App);

app.use(store).use(router).mount("#app");
