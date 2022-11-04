<template>
  <main
    data-bs-spy="scroll"
    data-bs-target="#menu"
    data-bs-offset="0"
    tabindex="0"
  >
    <BannerComp />
    <AboutmeComp />
    <EducationComp />
    <SkillsComp />
    <PortfoliosComp />
    <TestimonialsComp />
    <ContactComp />
  </main>
</template>

<script>
import BannerComp from "../components/HomeView/BannerComp.vue";
import AboutmeComp from "../components/HomeView/AboutmeComp.vue";
import EducationComp from "../components/HomeView/EducationComp.vue";
import SkillsComp from "../components/HomeView/SkillsComp.vue";
import PortfoliosComp from "../components/HomeView/PortfoliosComp.vue";
import TestimonialsComp from "../components/HomeView/TestimonialsComp.vue";
import ContactComp from "../components/HomeView/ContactComp.vue";
export default {
  name: "HomePage",
  components: {
    BannerComp,
    AboutmeComp,
    EducationComp,
    SkillsComp,
    PortfoliosComp,
    TestimonialsComp,
    ContactComp,
  },
};
</script>
