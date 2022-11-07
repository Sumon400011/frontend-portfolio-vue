<template>
  <!-- testimonial -->
  <section
    id="testimonial"
    class="pt-72 pb-72 pb-md-120 bg-primary-100 border-radius-12"
  >
    <img
      src="../../assets/img/testimonial-bg-circle.svg"
      alt="testimonial-bg-circle"
      class="testimonial-bg-circle"
    />
    <div class="container position-relative">
      <div class="row mb-40">
        <div class="col-12">
          <h2 class="h1 text-styled title">Testimonials</h2>
        </div>
      </div>
      <TestimonialCarousel />
    </div>
  </section>
</template>
<script lang="ts">
import TestimonialCarousel from "../Misc/TestimonialCarousel.vue";
export default {
  name: "TestimonialsComp",
  components: {
    TestimonialCarousel,
  },
};
</script>
<style scoped>
#testimonial .container {
  z-index: 10;
}
.testimonial-bg-circle {
  z-index: 1;
}
</style>
