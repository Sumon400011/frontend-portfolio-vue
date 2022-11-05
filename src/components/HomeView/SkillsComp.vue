<template>
  <!-- Skills -->
  <section id="skill" class="pt-72 pb-72 bg-secondary-100">
    <span class="bg-img"
      ><i class="fa-brands fa-react my-4" aria-hidden="true"></i
    ></span>
    <div class="container">
      <div class="row mb-40">
        <div class="col-12">
          <h2 class="h1 text-styled title">Skills</h2>
        </div>
      </div>
      <SkillCard />
    </div>
  </section>
</template>
<script>
import SkillCard from "../Misc/SkillCard.vue";
export default {
  name: "SkillsComp",
  components: {
    SkillCard,
  },
};
</script>
