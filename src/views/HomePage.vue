<template>
  <main>
    <BannerComp />
    <AboutmeComp />
    <EducationComp />
    <SkillsComp />
    <PortfoliosComp />
  </main>
</template>

<script>
import BannerComp from "../components/HomeView/BannerComp.vue";
import AboutmeComp from "../components/HomeView/AboutmeComp.vue";
import EducationComp from "../components/HomeView/EducationComp.vue";
import SkillsComp from "../components/HomeView/SkillsComp.vue";
import PortfoliosComp from "../components/HomeView/PortfoliosComp.vue";
export default {
  name: "HomePage",
  components: {
    BannerComp,
    AboutmeComp,
    EducationComp,
    SkillsComp,
    PortfoliosComp,
  },
};
</script>
