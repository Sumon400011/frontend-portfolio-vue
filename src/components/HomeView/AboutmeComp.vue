<template>
  <!-- About me -->
  <section id="about" class="py-72">
    <div class="container">
      <div class="row mb-40">
        <div class="col-12">
          <h2 class="display-1 text-center">About Me</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-lg-5 mb-40 mb-lg-0">
          <img
            src="../../assets/img/about-me-img.png"
            alt="person"
            class="about-me-img img-fluid"
          />
        </div>

        <div class="col-12 col-lg-6 offset-lg-1">
          <div class="row mb-32">
            <div class="col-12">
              <h2 class="h1 text-styled title">Biography</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="objective mb-24">
                <!-- <p class="text text-gray-1">I'm a Freelancer <strong>Front-end Developer</strong> with over 3 years of <strong>experience</strong>. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</p> -->

                <p class="text text-gray-1">
                  Creative team player and versatile
                  <strong>Frontend Web Developer</strong> with
                  <strong>3 years</strong> of professional experience and
                  passionate for responsive website design and a firm believer
                  in the mobile-first approach. Specializes in responsive design
                  and ability in writing clean and efficient code, seeks the
                  position of <strong>Frontend Web Developer.</strong>
                </p>
              </div>

              <hr />

              <div
                class="row d-flex flex-wrap flex-column flex-sm-row flex-lg-row justify-content-lg-between text-gray-1 mb-24"
              >
                <div class="col-12 col-sm-6 mb-lg-0">
                  <p><strong>Name:</strong> Sumon Mondol</p>
                  <p><strong>Birthday:</strong> 10th October</p>
                  <!-- <p><strong>Age:</strong> 26 years</p> -->
                  <p><strong>Address:</strong> Dhaka, Bangladesh</p>
                </div>
                <div class="col-12 col-sm-6">
                  <!-- <p><strong>Phone:</strong> (+880) 123 4567890</p> -->
                  <p><strong>Email:</strong> sumonsm89@gmail.com</p>
                  <p><strong>Skype:</strong> sumon.chondro</p>
                  <p><strong>Github:</strong> Sumon400011</p>
                </div>
              </div>

              <div
                class="row d-flex flex-column flex-lg-row justify-content-lg-between text-gray-1 mb-40"
              >
                <div class="col mb-24 mb-lg-0 my-journey">
                  <h4 class="h4 text-gray-1 mb-16">My Journey</h4>

                  <div
                    class="d-flex flex-wrap justify-content-between media-container"
                  >
                    <div class="d-flex align-items-center mb-12 mb-xl-0">
                      <div class="flex-shrink-0">
                        <div
                          class="icon-span d-flex align-items-center justify-content-center"
                        >
                          <i class="fa-solid fa-chart-simple"></i>
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <p class="mb-0 text-xs weight-bold text-gray-1">
                          3 Year Job
                        </p>
                        <p class="mb-0 text-xs weight-bold text-gray-3">
                          Experience
                        </p>
                      </div>
                    </div>

                    <div class="d-flex align-items-center mb-12 mb-xl-0">
                      <div class="flex-shrink-0">
                        <div
                          class="icon-span d-flex align-items-center justify-content-center"
                        >
                          <i class="fa-solid fa-list-check"></i>
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <p class="mb-0 text-xs weight-bold text-gray-1">
                          12+ Projects
                        </p>
                        <p class="mb-0 text-xs weight-bold text-gray-3">
                          Completed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col my-interest">
                  <h4 class="h4 text-gray-1 mb-16">My Interest</h4>

                  <div
                    class="d-flex flex-wrap justify-content-between media-container"
                  >
                    <div class="d-flex align-items-center mb-12 mb-xl-0">
                      <div class="flex-shrink-0">
                        <div
                          class="icon-span d-flex align-items-center justify-content-center"
                        >
                          <i class="fa-solid fa-layer-group"></i>
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <p class="mb-0 text-xs weight-bold text-gray-1">
                          Full Stack
                        </p>
                        <p class="mb-0 text-xs weight-bold text-gray-3">
                          Development
                        </p>
                      </div>
                    </div>

                    <div class="d-flex align-items-center mb-12 mb-xl-0">
                      <div class="flex-shrink-0">
                        <div
                          class="icon-span d-flex align-items-center justify-content-center"
                        >
                          <i class="fa-solid fa-bezier-curve"></i>
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <p class="mb-0 text-xs weight-bold text-gray-1">
                          UI/UX
                        </p>
                        <p class="mb-0 text-xs weight-bold text-gray-3">
                          Development
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-12">
                  <a href="#portfolio" class="button button-primary">
                    See Portfolios
                  </a>
                  <a
                    href="https://gitconnected.com/sumon400011/resume"
                    target="_blank"
                    class="btn-right-icon btn-outline-primary ml-24 ml-sm-32 download-btn"
                  >
                    Download CV
                    <span class="icon ml-8"
                      ><i class="fa-solid fa-download"></i
                    ></span>
                  </a>
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
export default {
  name: "AboutmeComp",
};
</script>
