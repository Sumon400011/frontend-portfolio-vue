<template>
  <!-- Education & Experience -->
  <section id="education" class="pt-72 pb-72 bg-secondary-100">
    <div class="container">
      <div class="row mb-40">
        <div class="col-12">
          <h2 class="h1 text-styled title">Education & Experience</h2>
        </div>
      </div>

      <!-- tab menus -->
      <div class="row">
        <div class="col-12">
          <!-- pills -->
          <ul class="nav nav-pills mb-40" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="button-lg button-outline-primary weight-semi-bold"
                id="educations-tab"
                data-bs-toggle="pill"
                data-bs-target="#educations"
                type="button"
                role="tab"
                aria-controls="educations"
                aria-selected="true"
              >
                Education
              </button>
            </li>

            <li class="nav-item ml-24 ml-sm-32" role="presentation">
              <button
                class="button-lg button-outline-primary weight-semi-bold active"
                id="experiences-tab"
                data-bs-toggle="pill"
                data-bs-target="#experiences"
                type="button"
                role="tab"
                aria-controls="experiences"
                aria-selected="false"
              >
                Experience
              </button>
            </li>
          </ul>

          <!-- Contents -->
          <div class="tab-content" id="tabContent">
            <!-- Education -->
            <div
              class="tab-pane fade education-content"
              id="educations"
              role="tabpanel"
              aria-labelledby="educations-tab"
            >
              <EducationCard />
            </div>

            <!-- Experience -->
            <div
              class="tab-pane fade show active experiences-content"
              id="experiences"
              role="tabpanel"
              aria-labelledby="experiences-tab"
            >
              <ExperienceCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import EducationCard from "../Misc/EducationCard.vue";
import ExperienceCard from "../Misc/ExperienceCard.vue";
export default {
  name: "EducationComp",
  components: {
    EducationCard,
    ExperienceCard,
  },
};
</script>
