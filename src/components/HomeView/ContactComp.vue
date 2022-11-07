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

          <ContactAddress />
        </div>

        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-5">
          <ContactForm class="mt-lg-56 pt-lg-4" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ContactAddress from "../Misc/ContactAddress.vue";
import ContactForm from "../Misc/ContactForm.vue";
export default {
  name: "ContactComp",
  components: {
    ContactAddress,
    ContactForm,
  },
};
</script>
