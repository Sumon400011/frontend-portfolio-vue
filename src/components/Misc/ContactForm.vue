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
            :class="{ 'border-danger': fnameIsActive }"
          />
          <small class="text-danger text-xs weight-semibold ms-1 mt-1">{{
            errors.fname
          }}</small>
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
            :class="{ 'border-danger': lnameIsActive }"
          />
          <small class="text-danger text-xs weight-semibold ms-1 mt-1">{{
            errors.lname
          }}</small>
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
        :class="{ 'border-danger': emailIsActive }"
      />
      <small class="text-danger text-xs weight-semibold ms-1 mt-1">{{
        errors.errEmail
      }}</small>
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
        :class="{ 'border-danger': messageIsActive }"
      ></textarea>
      <small class="text-danger text-xs weight-semibold ms-1 mt-1">{{
        errors.errMessage
      }}</small>
    </div>

    <button type="submit" class="button button-primary">Send Message</button>
  </form>
</template>
<script>
import emailjs from "@emailjs/browser";
export default {
  name: "ContactForm",
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
      errors: {
        fname: null,
        lname: null,
        errEmail: null,
        errMessage: null,
      },
      fnameIsActive: false,
      lnameIsActive: false,
      emailIsActive: false,
      messageIsActive: false,

      emailConfig: {
        serviceID: "service_zqjljym",
        templateID: "template_8yadg98",
        pubKey: "Etz-WI4fbnNg3ImAK",
      },
    };
  },
  methods: {
    handleSubmit: function () {
      this.attemptSubmit = true;
      if (
        this.form.firstname != null &&
        this.form.firstname != "" &&
        this.form.lastname != null &&
        this.form.lastname != "" &&
        this.form.email != null &&
        this.form.email != "" &&
        this.form.message != null &&
        this.form.message != ""
      ) {
        this.sendEmail();
      } else {
        this.firstnameCheck();
        this.lastnameCheck();
        this.emailCheck();
        this.msgCheck();
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
            this.makeDangersNone();
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
    firstnameCheck: function () {
      if (this.form.firstname == null || this.form.firstname == "") {
        this.errors.fname = "First name required.";
        this.fnameIsActive = true;
      } else {
        this.errors.fname = null;
        this.fnameIsActive = false;
      }
    },
    lastnameCheck: function () {
      if (this.form.lastname == null || this.form.firstname == "") {
        this.errors.lname = "Last name required.";
        this.lnameIsActive = true;
      } else {
        this.errors.lname = null;
        this.lnameIsActive = false;
      }
    },
    emailCheck: function () {
      if (this.form.email == null || this.form.email == "") {
        this.errors.errEmail = "Email address is required";
        this.emailIsActive = true;
      } else if (!this.validEmail(this.form.email)) {
        this.errors.errEmail = "please enter a valid email";
        this.emailIsActive = true;
      } else {
        this.errors.errEmail = null;
        this.emailIsActive = false;
      }
    },
    msgCheck: function () {
      if (this.form.message == null || this.form.message == "") {
        this.errors.errMessage = "Please write a message";
        this.messageIsActive = true;
      } else {
        this.errors.errMessage = null;
        this.messageIsActive = false;
      }
    },
    makeFormEmpty: function () {
      this.form.firstname = null;
      this.form.lastname = null;
      this.form.email = null;
      this.form.message = null;
    },
    makeDangersNone: function () {
      this.errors.errEmail = null;
      this.emailIsActive = false;
      this.errors.errMessage = null;
      this.messageIsActive = false;
      this.errors.errEmail = null;
      this.emailIsActive = false;
      this.errors.lname = null;
      this.lnameIsActive = false;
      this.errors.fname = null;
      this.fnameIsActive = false;
    },
  },
  computed: {
    user_name: function () {
      return `${this.form.firstname} ${this.form.lastname}`;
    },
  },
};
</script>
