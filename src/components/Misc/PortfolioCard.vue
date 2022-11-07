<template>
  <div class="row row-cols-12 row-cols-xl-6">
    <div
      class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-32"
      v-for="portfolio in portfolios"
      :key="portfolio.id"
    >
      <div class="d-flex align-items-stretch border-radius-20 media thrivelab">
        <div
          class="flex-shrink-0 d-flex align-items-center justify-content-center mb-32 mb-xxl-40 ml-32 ml-xxl-40 pt-32 pt-xxl-40 media-text-module"
        >
          <div class="w-100">
            <strong class="media-title h5 weight-bold mb-8 d-block">{{
              portfolio.name
            }}</strong>
            <p class="text-sm text-gray-2 mb-0 media-description">
              {{ portfolio.outline }}
            </p>
            <a
              :href="portfolio.link"
              target="_blank"
              class="secondary-link weight-semi-bold"
            >
              View Project
              <span class="right-arrow">
                <i class="fa-solid fa-arrow-right"></i>
              </span>
            </a>
          </div>
        </div>

        <div
          class="flex-grow-1 ml-8 d-flex align-items-end justify-content-end"
        >
          <img
            :src="portfolio.img"
            :alt="portfolio.alt"
            class="img-fluid mt-40"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "PortfolioCard",
  data: function () {
    return {
      portfolios: [
        {
          id: 1,
          name: "Thrivelab",
          link: "https://www.thrivelab.com/",
          img: "../../src/assets/img/ThriveLab.png",
          alt: "ThriveLab",
          outline:
            "Thrivelab provides evidence-based hormone & testosterone balancing programs and natural bioidentical products to alleviate age-related symptoms.",
        },
        {
          id: 2,
          name: "OTORide",
          link: "https://www.otoride.co/",
          img: "../../src/assets/img/otoride.png",
          alt: "Otoride",
          outline:
            "Meet OTORide, the most advanced Bike, eBike, Scooter Sharing platform.",
        },
        {
          id: 3,
          name: "Seek°XR",
          link: "https://seekxr.com/",
          img: "../../src/assets/img/seekxr.png",
          alt: "Seekxr",
          outline:
            "Seek is the world's first #AugmentedReality community allowing creators to publish and users to discover the latest #AR #MR content.",
        },
        {
          id: 4,
          name: "EnergySage",
          link: "https://news.energysage.stg.bglobal.com/",
          img: "../../src/assets/img/energysage.png",
          alt: "Energysage",
          outline:
            "EnergySage is the leading online marketplace for solar energy systems.",
        },
        {
          id: 5,
          name: "DataSoft NEXT",
          link: "http://demo.datasoft-bd.com/",
          img: "../../src/assets/img/energysage.png",
          alt: "DataSoft NEXT",
          outline:
            "DataSoft Systems Bangladesh Limited A next-gen software, logistics and automation company with more than two decades of experience in large-scale projects.",
        },
        {
          id: 6,
          name: "Conversica",
          link: "https://www.conversica.com/",
          img: "../../src/assets/img/conversica.png",
          alt: "Conversica",
          outline:
            "Conversica is the leading Conversational AI solution, helping attract, acquire and grow customers at scale with AI Assistants using Conversational AI.",
        },
      ],
    };
  },
};
</script>
