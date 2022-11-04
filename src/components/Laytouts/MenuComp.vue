<template>
  <!-- ===== Menu ===== -->
  <div class="fixed-top section" id="menu">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand weight-semi-bold" href="#">
          <img
            src="/assets/img/Sumon-Mondol-Logo-green.svg"
            alt="brand logo"
            class="mx-auto brand-logo"
          />
        </a>
        <!-- offcanvas button -->
        <button
          class="navbar-toggler"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <span class="fa-solid fa-bars"></span>
        </button>

        <!-- offcanvas Body -->
        <div
          class="offcanvas offcanvas-end sidebar"
          tabindex="-1"
          id="offcanvasRight"
          data-bs-scroll="true"
          aria-labelledby="offcanvasRightLabel"
        >
          <!-- offcanvas header -->
          <div class="offcanvas-header bg-secondary-300 py-8">
            <a
              class="navbar-brand weight-semi-bold"
              href="#"
              id="offcanvasRightLabel"
            >
              <img
                src="/assets/img/Sumon-Mondol-Logo-green.svg"
                alt="brand logo"
                class="brand-logo"
              />
            </a>
            <button
              type="button"
              class="btn-close px-12 me-0"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <!-- offcanvas body -->
          <div class="offcanvas-body">
            <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#body"
                  >Intro</a
                >
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#about">About Me</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#education">Education</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#skill">Skills</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#portfolio">Portfolios</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#testimonial">Testimonials</a>
              </li>

              <li class="nav-item">
                <a class="nav-link me-0" href="#contact">Contact</a>
              </li>
              <li class="nav-item">
                <!-- <a class="btn-right-icon btn-outline-primary" href="#">Download CV</a> -->
                <a
                  class="btn-right-icon btn-outline-primary mt-32 mb-8 mx-12"
                  href="https://gitconnected.com/sumon400011/resume"
                  target="_blank"
                >
                  Download CV
                  <span class="icon ml-8">
                    <i class="fa-solid fa-download"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- navbar items -->
        <div class="collapse navbar-collapse" id="navbarContent">
          <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#intro"
                >Intro</a
              >
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#about">About Me</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#education">Education</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#skill">Skills</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#portfolio">Portfolios</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#testimonial">Testimonials</a>
            </li>

            <li class="nav-item">
              <a class="nav-link me-0" href="#contact">Contact</a>
            </li>
            <li class="nav-item">
              <!-- <a class="btn-right-icon btn-outline-primary" href="#">Download CV</a> -->
              <a
                class="btn-right-icon btn-outline-primary ml-40"
                href="https://gitconnected.com/sumon400011/resume"
                target="_blank"
              >
                Download CV
                <span class="icon ml-8">
                  <i class="fa-solid fa-download"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "MenuComp",
};
</script>
