<template>
  <div class="row">
    <div class="col-12">
      <div class="owl-carousel owl-theme testimonial-slider">
        <div class="item p-15" v-for="slider in testimonials" :key="slider.id">
          <div class="d-flex align-items-center media bg-white">
            <div
              class="flex-shrink-0 d-flex align-items-center justify-content-center img-container"
            >
              <img :src="slider.img" class="slider-img" :alt="slider.alt" />
            </div>
            <div class="flex-grow-1 media-body ml-sm-24 ml-0">
              <strong class="weight-semi-bold mb-0 text-gray-1">
                {{ slider.name }}
              </strong>
              <p class="text-sm text-gray-2 mb-0">
                {{ slider.position }}
              </p>
              <hr class="w-25" />
              <p class="text-sm text-gray-2 mb-0">
                {{ slider.outline }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TestimonialCarousel",
  data: function () {
    return {
      testimonials: [
        {
          id: 1,
          name: "Anna Smith",
          position: "Chief Technology Officer, Facebook",
          img: "/src/assets/img/avatar1.jpg",
          alt: "avatar1",
          outline:
            "Lorem ipsum dolor sit, amet, consec tetur adipisicing elit. Aperiam maxime quisquam fuga labori osam dolor ibus veniam ducimus volupt atibus volup tatem volup tatum molestiae minima ipsa in qui dolorum, reprehe nderit, quia ab facere, praes entium.",
        },
        {
          id: 2,
          name: "Anna Smith",
          position: "Chief Technology Officer, Facebook",
          img: "/src/assets/img/avatar2.jpg",
          alt: "avatar1",
          outline:
            "Lorem ipsum dolor sit, amet, consec tetur adipisicing elit. Aperiam maxime quisquam fuga labori osam dolor ibus veniam ducimus volupt atibus volup tatem volup tatum molestiae minima ipsa in qui dolorum, reprehe nderit, quia ab facere, praes entium.",
        },
        {
          id: 3,
          name: "Anna Smith",
          position: "Chief Technology Officer, Facebook",
          img: "/src/assets/img/avatar3.jpg",
          alt: "avatar1",
          outline:
            "Lorem ipsum dolor sit, amet, consec tetur adipisicing elit. Aperiam maxime quisquam fuga labori osam dolor ibus veniam ducimus volupt atibus volup tatem volup tatum molestiae minima ipsa in qui dolorum, reprehe nderit, quia ab facere, praes entium.",
        },
      ],
    };
  },
};
</script>
