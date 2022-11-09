import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jQuery from "jquery";
import VueGtag from "vue-gtag";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js";
window.$ = window.jQuery = jQuery;
const app = createApp(App);
app.use(
  VueGtag,
  {
    config: { id: "G-FML00HTN5B" },
  },
  router
);
app.use(store).use(router).mount("#app");
