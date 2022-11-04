<template>
  <div>
    <MenuComp />
    <HomePage />
    <FooterComp />
    <CopyrightComp />
  </div>
</template>
<script>

import MenuComp from "./components/Laytouts/MenuComp.vue";
import HomePage from "./views/HomePage.vue";
import FooterComp from "./components/Laytouts/FooterComp.vue";
import CopyrightComp from "./components/Laytouts/CopyrightComp.vue";
export default {
  name: "App",
  components: {
    MenuComp,
    HomePage,
    FooterComp,
    CopyrightComp,
  },
};
</script>

<style>
@import "./assets/css/bootstrap0.min.css";
@import "./assets/css/style.min.css";
@import "./assets/css/theme.min.css";
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
