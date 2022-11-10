<template>
  <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
    <div
      id="liveToast"
      class="toast"
      :class="toaster"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div
        class="toast-header flex-column justify-content-center align-items-center"
      >
        <span
          class="d-block text-center my-1 text-primary-700"
          style="font-size: 2rem"
        >
          <i class="fa-regular fa-circle-check"></i>
        </span>
        <h4 class="mx-auto mb-0 py-8 text-700">{{ toastmsg }}</h4>
      </div>
      <div class="toast-body text-center">{{ toastsubmsg }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ToastComp",
  props: {
    toastmsg: String,
    toastsubmsg: String,
    isShow: Boolean,
  },
  computed: {
    toaster: function () {
      return this.isShow ? "show" : "hide";
    },
  },
};
</script>
