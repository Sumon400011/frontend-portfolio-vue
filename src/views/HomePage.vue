<template>
  <main>
    <BannerComp />
    <AboutmeComp />
  </main>
</template>

<script>
import BannerComp from "../components/HomeView/BannerComp.vue";
import AboutmeComp from "../components/HomeView/AboutmeComp.vue";
export default {
  name: "HomePage",
  components: {
    BannerComp,
    AboutmeComp,
  },
};
</script>
