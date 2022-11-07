<template>
  <!-- ===== Banner section ===== -->
  <section class="bg-primary-100" id="intro">
    <div class="container position-relative">
      <div class="row d-flex align-items-stretch">
        <div
          class="col-xxl-5 col-xl-6 col-lg-6 col-md-12 d-flex align-items-center"
        >
          <div class="w-100 text-module">
            <h5 class="gray-3 h4 weight-semi-bold">Hello, I am</h5>
            <h1 class="display-1 mb-8">Sumon Mondol</h1>
            <h4 class="h4 text-secondary">Frontend Web Developer</h4>
            <p class="text-gray-2 weight-semi-bold text-lg description mb-0">
              An enthusiastic frontend web developer, having expertise in web
              development. I design and develop services for customers of all
              sizes, specializing in creating stylish, modern websites, web
              services and online stores.
            </p>
            <a href="#portfolio" class="button button-primary mt-40">
              See Portfolios
            </a>
          </div>
        </div>
        <div
          class="col-xxl-5 col-xl-5 col-lg-6 col-md-12 offset-xxl-1 offset-xl-0 offset-lg-0 d-flex align-items-end position-relative justify-content-center"
        >
          <img
            src="../../assets/img/person.png"
            alt="person"
            class="mx-auto d-block img-fluid banner-img"
          />
          <img
            src="../../assets/img/banner-big-circle.svg"
            alt="banner-big-circle"
            class="position-absolute bottom-0 circle-svg"
          />
        </div>
      </div>
      <!-- svg bg styles -->
      <!-- <img src="../../assets/img/dotted-secondary.svg" alt="dotted-bg" class=" dotted-svg" /> -->

      <!-- <img src="../../assets/img/dotted-secondary.svg" alt="dotted-bg" class=" dotted-secondary-svg2" /> -->

      <!-- <img src="../../assets/img/dotted-primary.svg" alt="dotted-primary-bg" class=" dotted-primary-svg" /> -->

      <img
        src="../../assets/img/plus-secondary-500.svg"
        alt="plus seconday spinner"
        class="plus-secondary-svg spinner"
      />

      <img
        src="../../assets/img/plus-primary.svg"
        alt="plus primary spinner"
        class="plus-primary-svg spinner"
      />

      <!-- <img src="../../assets/img/circle-primary-sm.svg" alt="circle primary" class=" circle-primary-sm-svg" /> -->

      <img
        src="../../assets/img/circle-outline-secondary.svg"
        alt="circle outline"
        class="circle-outline-secondary-svg"
      />

      <img
        src="../../assets/img/circle-outline-secondary.svg"
        alt="circle outline"
        class="circle-outline-secondary-svg2"
      />

      <img
        src="../../assets/img/rect-outline-secondary.svg"
        alt="rect outline"
        class="rect-outline-secondary-svg spinner"
      />

      <img
        src="../../assets/img/rect-outline-secondary.svg"
        alt="rect outline"
        class="rect-outline-secondary-svg2 spinner"
      />

      <img
        src="../../assets/img/rect-outline-primary.svg"
        alt="rect outline"
        class="rect-outline-primary-svg spinner"
      />
    </div>
  </section>
</template>
<script lang="ts">
export default {
  name: "BannerComp",
};
</script>
