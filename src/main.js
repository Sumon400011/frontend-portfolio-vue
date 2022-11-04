import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jQuery from "jquery";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js";
window.$ = window.jQuery = jQuery;

// import "./assets/style.min.css";
// import "./assets/theme.min.css";

const app = createApp(App);

app.use(router);

app.use(store).use(router).mount("#app");
