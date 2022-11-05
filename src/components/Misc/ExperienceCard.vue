<template>
  <div class="row">
    <div
      class="col-12 col-sm-12 col-md-6 col-lg-4 mb-32 mb-lg-0 mb-xl-0"
      v-for="exp in experience"
      :key="exp.id"
    >
      <div class="card">
        <img
          src="../../assets/img/circle-secondary-lg.svg"
          alt="circle-secondary-lg"
          class="bg-circle img-fluid"
        />
        <div class="card-body p-24 p-sm-24 p-md-24 p-lg-40">
          <div class="header d-flex align-items-start justify-content-between">
            <div class="left flex-grow-1">
              <h3 class="job-title mb-8 text-md text-gray-1 weight-bold">
                {{ exp.position }}
              </h3>
              <p class="company-name mb-0 text-gray-3 text-xs weight-semi-bold">
                {{ exp.company }}
              </p>
            </div>

            <div class="right flex-shrink-1">
              <p class="job-year mb-8 text-xs text-gray-2 weight-semi-bold">
                {{ exp.start }} - {{ exp.end }}
              </p>
              <p class="job-year mb-0 text-xs text-gray-2 weight-semi-bold">
                {{ exp.nature }}
              </p>
            </div>
          </div>
          <hr class="py-16" />
          <div class="job-description mt-16">
            <p class="text-gray-2 text-sm mb-0">
              {{ exp.outline }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ExperienceCard",
  data: function () {
    return {
      experience: [
        {
          id: 1,
          company: "SME Informetics Limited",
          position: "Frontend Web Developer",
          nature: "Full Time",
          housing: "Hybrid",
          start: 2021,
          end: 2022,
          outline:
            "The International University of Scholars, popularly known as University of Scholars, has started its journey in 2015 with five departments at the outset.",
        },
        {
          id: 2,
          company: "Parkingkoi Inc Limited",
          position: "Frontend Web Developer",
          nature: "Full Time",
          housing: "in House",
          start: 2019,
          end: 2020,
          outline:
            "Parkingkoi have allotted monthly parking places for you all over Dhaka, Chiitagong & Sylhet. Parkingkoi maintain strict quality control before we secure a parking place for customer",
        },
        {
          id: 3,
          company: "New Horizons CLC",
          position: "Web Developer",
          nature: "Full Time",
          housing: "Hybrid",
          start: 2019,
          end: 2019,
          outline:
            "With 300 centers in 70 countries, New Horizons Computer Learning Center is the largest independent IT Training Provider in the world, delivering more courses.",
        },
      ],
    };
  },
};
</script>
