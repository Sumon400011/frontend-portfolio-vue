<template>
  <!-- Portfolios -->
  <section id="portfolio" class="pt-72 pb-120">
    <div class="container">
      <div class="row mb-40">
        <div class="col-12">
          <h2 class="h1 text-styled section-title">Portfolios</h2>
        </div>
      </div>
      <portfolioCard />
    </div>
  </section>
</template>
<script>
import portfolioCard from "../Misc/portfolioCard.vue";
export default {
  name: "PortfoliosComp",
  components: {
    portfolioCard,
  },
};
</script>
