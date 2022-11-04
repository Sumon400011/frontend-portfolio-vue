<template>
  <div>
    <MenuComp />
    <main></main>
    <FooterComp />
  </div>
</template>

<script>
import MenuComp from "../components/Laytouts/MenuComp.vue";
import FooterComp from "../components/Laytouts/FooterComp.vue";
export default {
  name: "HomePage",
  components: {
    MenuComp,
    FooterComp,
  },
};
</script>
