<template>
  <!-- contact -->
  <section id="contact" class="pt-72 pb-120">
    <div class="container">
      <div class="row mb-40">
        <div class="col-12">
          <h2 class="h1 text-gray-1 text-center">Contact</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-5 mb-32 mb-xl-0">
          <h3 class="h3 text-gray-1 mb-0">Get In Touch</h3>
          <p class="text-gray-2 mb-32">Lets Talks About Your Project</p>

          <!-- Address -->
          <div
            class="d-flex align-items-center py-24 px-32 media address mb-24"
          >
            <div
              class="flex-shrink-0 d-flex align-items-center justify-content-center"
              style="width: 50px"
            >
              <span class="text-primary icon-span">
                <i class="fa-regular fa-compass"></i>
              </span>
            </div>
            <div class="flex-grow-1 ml-24">
              <strong class="weight-semi-bold mb-0">Address</strong>
              <p class="text-sm text-gray-2 mb-0">Dhaka, Bangladesh</p>
            </div>
          </div>

          <!-- Email -->
          <div class="d-flex align-items-center py-24 px-32 media email mb-24">
            <div
              class="flex-shrink-0 d-flex align-items-center justify-content-center"
              style="width: 50px"
            >
              <span class="text-primary icon-span">
                <i class="fa-regular fa-envelope"></i>
              </span>
            </div>
            <div class="flex-grow-1 ml-24">
              <strong class="weight-semi-bold mb-0">Email</strong>
              <p class="text-sm text-gray-2 mb-0">sumonsm89@gmail.com</p>
            </div>
          </div>

          <!-- Whatsapp -->
          <div
            class="d-flex align-items-center py-24 px-32 media whatsapp mb-24"
          >
            <div
              class="flex-shrink-0 d-flex align-items-center justify-content-center"
              style="width: 50px"
            >
              <span class="text-primary icon-span">
                <i class="fa-brands fa-whatsapp"></i>
              </span>
            </div>
            <div class="flex-grow-1 ml-24">
              <strong class="weight-semi-bold mb-0">Whatsapp</strong>
              <p class="text-sm text-gray-2 mb-0">+8801234567890</p>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-5">
          <form class="w-100 input-container">
            <div class="row">
              <div class="col-md-6 col-sm-12 col-12">
                <div class="input-group mb-32">
                  <label for="firstname">First Name</label>
                  <input
                    type="text"
                    class="input m-0"
                    placeholder="John"
                    id="firstname"
                  />
                </div>
              </div>
              <div class="col-md-6 col-sm-12 col-12">
                <div class="input-group mb-32">
                  <label for="lastname">Last name</label>
                  <input
                    type="text"
                    class="input m-0"
                    placeholder="Doe"
                    id="lastname"
                  />
                </div>
              </div>
            </div>

            <div class="input-group mb-32">
              <label for="email">Email</label>
              <input
                type="text"
                class="input m-0"
                placeholder="yourmail@gmail.com"
                id="email"
              />
            </div>

            <div class="input-group mb-32">
              <label for="subject">Your Subject</label>
              <input
                type="text"
                class="input m-0"
                placeholder="Discuss About a Project"
                id="subject"
              />
            </div>

            <div class="input-group mb-32">
              <label for="message">Your Subject</label>
              <textarea
                type="text"
                rows="4"
                class="input m-0"
                placeholder="Enter text here.."
                id="message"
              ></textarea>
            </div>

            <button type="submit" class="button button-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "ContactComp",
};
</script>
