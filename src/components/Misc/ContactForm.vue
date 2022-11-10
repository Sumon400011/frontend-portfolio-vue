<template>
  <form ref="form" class="w-100 input-container" @submit.prevent="handleSubmit">
    <div class="row">
      <div class="col-md-6 col-sm-12 col-12">
        <div class="input-group mb-32">
          <label for="firstname">First Name</label>
          <input
            type="text"
            class="input m-0"
            placeholder="John"
            id="firstname"
            v-model="form.firstname"
            :class="{ 'border-danger': firstnameC && attemptSubmit }"
          />
          <small
            class="text-danger text-xs weight-semibold ms-1 mt-1"
            v-if="firstnameC && attemptSubmit"
          >
            First name is required.
          </small>
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
            v-model="form.lastname"
            :class="{ 'border-danger': lastnameC && attemptSubmit }"
          />
          <small
            class="text-danger text-xs weight-semibold ms-1 mt-1"
            v-if="lastnameC && attemptSubmit"
          >
            Last name is required.
          </small>
        </div>
      </div>
    </div>
    <input
      type="hidden"
      class="input m-0"
      id="user_name"
      name="user_name"
      v-model="user_name"
    />

    <div class="input-group mb-32">
      <label for="email">Email</label>
      <input
        type="text"
        name="user_email"
        class="input m-0"
        placeholder="yourmail@gmail.com"
        id="email"
        v-model="form.email"
        :class="{ 'border-danger': emailC && attemptSubmit }"
      />
      <small
        class="text-danger text-xs weight-semibold ms-1 mt-1"
        v-if="emailC && attemptSubmit"
      >
        Please enter a email address is required
      </small>
    </div>

    <div class="input-group mb-32">
      <label for="message">Your Message</label>
      <textarea
        type="text"
        name="message"
        rows="4"
        class="input m-0"
        placeholder="Enter text here.."
        id="message"
        v-model="form.message"
        :class="{ 'border-danger': msgC && attemptSubmit }"
      ></textarea>
      <small
        class="text-danger text-xs weight-semibold ms-1 mt-1"
        v-if="msgC && attemptSubmit"
      >
        Please write a message
      </small>
    </div>

    <button type="submit" class="button button-primary">Send Message</button>

    <ToastComp
      toastmsg="Awesome"
      toastsubmsg="Your Message has been submited succefully"
      :isShow="isShow"
    />
  </form>
</template>
<script>
import emailjs from "@emailjs/browser";
import ToastComp from "./ToastComp.vue";
export default {
  name: "ContactForm",
  components: {
    ToastComp,
  },
  data: function () {
    return {
      attemptSubmit: false,
      form: {
        firstname: null,
        lastname: null,
        user_name: null,
        email: null,
        message: null,
      },
      emailConfig: {
        serviceID: "service_zqjljym",
        templateID: "template_8yadg98",
        pubKey: "Etz-WI4fbnNg3ImAK",
      },
      isShow: null,
    };
  },
  methods: {
    handleSubmit: function () {
      this.attemptSubmit = true;
      if (!this.firstnameC && !this.lastnameC && !this.emailC && !this.msgC) {
        this.sendEmail();
      } else {
        this.firstnameC;
        this.lastnameC;
        this.emailC;
        this.msgC;
      }
    },
    sendEmail: function () {
      emailjs
        .sendForm(
          this.emailConfig.serviceID,
          this.emailConfig.templateID,
          this.$refs.form,
          this.emailConfig.pubKey
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            this.makeFormEmpty();
            this.attemptSubmit = false;
            this.toastAction();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },

    validEmail: function (email) {
      let re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    makeFormEmpty: function () {
      this.form.firstname = null;
      this.form.lastname = null;
      this.form.email = null;
      this.form.message = null;
    },
    toastAction: function () {
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
      }, 4000);
    },
  },
  computed: {
    user_name: function () {
      return `${this.form.firstname} ${this.form.lastname}`;
    },
    firstnameC: function () {
      return this.form.firstname == null || this.form.firstname == "";
    },
    lastnameC: function () {
      return this.form.lastname == null || this.form.lastname == "";
    },
    emailC: function () {
      return (
        this.validEmail(this.form.email) == null ||
        this.validEmail(this.form.email) == ""
      );
    },
    msgC: function () {
      return this.form.message == null || this.form.message == "";
    },
  },
};
</script>
