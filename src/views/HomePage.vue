<template>
  <main>
    <BannerComp />
    <AboutmeComp />
    <EducationComp />
  </main>
</template>

<script>
import BannerComp from "../components/HomeView/BannerComp.vue";
import AboutmeComp from "../components/HomeView/AboutmeComp.vue";
import EducationComp from "../components/HomeView/EducationComp.vue";
export default {
  name: "HomePage",
  components: {
    BannerComp,
    AboutmeComp,
    EducationComp,
  },
};
</script>
