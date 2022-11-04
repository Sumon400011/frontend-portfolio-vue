<template>
  <div>
    <!-- <HeaderComp /> -->
    <Homepage />
    <!-- <router-view /> -->
    <!-- <FooterComp /> -->
  </div>
</template>
<script>
import Homepage from "./views/HomePage.vue";
// import HeaderComp from "./components/HeaderComp";
// import FooterComp from "./components/FooterComp";
export default {
  name: "App",
  components: {
    // HeaderComp,
    Homepage,
    // FooterComp,
  },
};
</script>

<style>
@import "./assets/css/theme.min.css";
@import "./assets/css/style.min.css";
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
