<template>
    <div class="row">
        <div
          class="col-12 col-sm-12 col-md-6 col-lg-4 mb-32 mb-lg-0 mb-xl-0"
          v-for="edu in education"
          :key="edu.id"
        >
          <div class="card">
            <img
              src="../../assets/img/circle-secondary-lg.svg"
              alt="circle-secondary-lg"
              class="bg-circle img-fluid"
            />
            <div class="card-body p-24 p-sm-24 p-md-24 p-lg-40">
              <p class="school-year mb-8 text-gray-2 weight-semi-bold">
                {{ edu.start }} - {{ edu.end }}
              </p>
              <h3 class="school-name text-md text-gray-1 weight-bold">
                {{ edu.institute }}
              </h3>
              <p class="school-sub text-gray-1 text-sm">
                {{ edu.subject }}
              </p>
              <div class="school-description mt-16">
                <p class="text-gray-2 text-sm mb-0">
                  {{ edu.outline }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </template>
  <script>
  export default {
    name: "EducationCard",
    data: function() {
      return{
        education: [
          {
            "id": 1,
            "institute": "The International University of Scholars",
            "major": "Bachelor of Science",
            "subject": "Computer Science and Engineering",
            "start": 2015,
            "end": 2019,
            "outline": "The International University of Scholars, popularly known as University of Scholars, has started its journey in 2015 with five departments at the outset."
          },
          {
            "id": 2,
            "institute": "Shaheed Ramiz Uddin Cantonment College",
            "major": "HSC",
            "subject": "Science",
            "start": 2012,
            "end": 2014,
            "outline": "Shaheed Bir Bikrom Ramiz Uddin Cantonment College is a school and college in Dhaka, Bangladesh. It is managed by the Bangladesh Army."
          },
          {
            "id": 3,
            "institute": "Khilbarirtek Islamia High School",
            "major": "SSC",
            "subject": "Science",
            "start": 2002,
            "end": 2012,
            "outline": "Khilbarirtek Islamia High School is one of the popular High School located in Badda, Dhaka."
          }
        ]
      }
    }
  };
  </script>