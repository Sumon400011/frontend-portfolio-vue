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
              <div class="row">
                <div
                  class="col-12 col-sm-12 col-md-6 col-lg-4 mb-32 mb-lg-0 mb-xl-0"
                >
                  <div class="card">
                    <img
                      src="../../assets/img/circle-secondary-lg.svg"
                      alt="circle-secondary-lg"
                      class="bg-circle img-fluid"
                    />
                    <div class="card-body p-24 p-sm-24 p-md-24 p-lg-40">
                      <div
                        class="header d-flex align-items-start justify-content-between"
                      >
                        <div class="left flex-grow-1">
                          <h3
                            class="job-title mb-8 text-md text-gray-1 weight-bold"
                          >
                            Frontend Web Developer
                          </h3>
                          <p
                            class="company-name mb-0 text-gray-3 text-xs weight-semi-bold"
                          >
                            SME Informetics Limited
                          </p>
                        </div>

                        <div class="right flex-shrink-1">
                          <p
                            class="job-year mb-8 text-xs text-gray-2 weight-semi-bold"
                          >
                            2021 - 2022
                          </p>
                          <p
                            class="job-year mb-0 text-xs text-gray-2 weight-semi-bold"
                          >
                            Full Time
                          </p>
                        </div>
                      </div>
                      <hr class="py-16" />
                      <div class="job-description mt-16">
                        <p class="text-gray-2 text-sm mb-0">
                          A full service digital outsourcing agency · Digital
                          Solutions for marketing, IT, sales organizations and
                          start-ups.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-12 col-sm-12 col-md-6 col-lg-4 mb-32 mb-lg-0 mb-xl-0"
                >
                  <div class="card">
                    <img
                      src="../../assets/img/circle-secondary-lg.svg"
                      alt="circle-secondary-lg"
                      class="bg-circle img-fluid"
                    />
                    <div class="card-body p-24 p-sm-24 p-md-24 p-lg-40">
                      <div
                        class="header d-flex align-items-start justify-content-between"
                      >
                        <div class="left flex-grow-1">
                          <h3
                            class="job-title mb-8 text-md text-gray-1 weight-bold"
                          >
                            Jr Web Designer
                          </h3>
                          <p
                            class="company-name mb-0 text-gray-3 text-xs weight-semi-bold"
                          >
                            Parkingkoi inc Limited
                          </p>
                        </div>

                        <div class="right flex-shrink-1">
                          <p
                            class="job-year mb-8 text-xs text-gray-2 weight-semi-bold"
                          >
                            2020 - 2021
                          </p>
                          <p
                            class="job-nature mb-0 text-xs text-gray-2 weight-semi-bold"
                          >
                            Full Time
                          </p>
                        </div>
                      </div>
                      <hr class="py-16" />
                      <div class="job-description mt-16">
                        <p class="text-gray-2 text-sm mb-0">
                          Parkingkoi have allotted monthly parking places for
                          you all over Dhaka, Chiitagong & Sylhet. Parkingkoi
                          maintain strict quality control before we secure a
                          parking place for customer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-12 col-sm-12 col-md-6 col-lg-4 mb-32 mb-lg-0 mb-xl-0"
                >
                  <div class="card">
                    <img
                      src="../../assets/img/circle-secondary-lg.svg"
                      alt="circle-secondary-lg"
                      class="bg-circle img-fluid"
                    />
                    <div class="card-body p-24 p-sm-24 p-md-24 p-lg-40">
                      <div
                        class="header d-flex align-items-start justify-content-between"
                      >
                        <div class="left flex-grow-1">
                          <h3
                            class="job-title mb-8 text-md text-gray-1 weight-bold"
                          >
                            Web Developer
                          </h3>
                          <p
                            class="company-name mb-0 text-gray-3 text-xs weight-semi-bold"
                          >
                            New Horizons CLC
                          </p>
                        </div>

                        <div class="right flex-shrink-1">
                          <p
                            class="job-year mb-8 text-xs text-gray-2 weight-semi-bold"
                          >
                            2019 - 2020
                          </p>
                          <p
                            class="job-nature mb-0 text-xs text-gray-2 weight-semi-bold"
                          >
                            Full Time
                          </p>
                        </div>
                      </div>
                      <hr class="py-16" />
                      <div class="job-description mt-16">
                        <p class="text-gray-2 text-sm mb-0">
                          With 300 centers in 70 countries, New Horizons
                          Computer Learning Center is the largest independent IT
                          Training Provider in the world, delivering more
                          courses
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import EducationCard from '../Misc/EducationCard.vue';
export default {
  name: "EducationComp",
  components: {
    EducationCard
  }
};
</script>
