<template>
  <div
    class="d-flex align-items-center py-24 px-32 media mb-24 position-relative"
    v-for="cont in Contact"
    :class="cont.name"
    :key="cont.id"
  >
    <div
      class="flex-shrink-0 d-flex align-items-center justify-content-center"
      style="width: 50px"
    >
      <span class="text-primary icon-span" v-html="cont.icon"></span>
    </div>
    <div class="flex-grow-1 ml-24">
      <strong class="weight-semi-bold mb-0">{{ cont.name }}</strong>
      <p class="text-sm text-gray-2 mb-0" v-if="cont.id == 1">
        {{ cont.content }}
      </p>

      <a
        :href="cont.link"
        v-else
        target="_blank"
        class="text-sm text-gray-2 mb-0 d-block stretched-link text-decoration-none add-link"
        >{{ cont.content }}</a
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactAddress",
  data: function () {
    return {
      Contact: [
        {
          id: 1,
          name: "Address",
          icon: "<i class='fa-regular fa-compass'></i>",
          content: "Dhaka, Bangladesh",
          link: "#",
        },
        {
          id: 2,
          name: "Email",
          icon: "<i class='fa-regular fa-envelope'></i>",
          content: "sumonsm89@gmail.com",
          link: "mailto:sumonsm89@gmail.com",
        },
        {
          id: 3,
          name: "Skype",
          icon: "<i class='fa-brands fa-skype'></i>",
          content: "sumon.chondro",
          link: "https://join.skype.com/invite/WvKMJ48Fp2ja",
        },
      ],
    };
  },
};
</script>
<style scoped>
.add-link {
  color: #71717a !important;
}
</style>
