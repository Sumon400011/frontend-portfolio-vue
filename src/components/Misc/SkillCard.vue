<template>
  <div class="row">
    <div
      class="col-12 col-sm-12 col-md-6 col-lg-4 mb-32"
      v-for="skill in skills"
      :key="skill.id"
    >
      <div class="card">
        <div class="view">
          <span v-html="skill.icon"></span>
          <p class="card-title text-md weight-bold">
            <strong>{{ skill.name }}</strong>
          </p>
        </div>
        <div class="card-body">
          <ul class="mb-0">
            <li v-for="(set, index) in skill.sets" :key="index">
              {{ set.name }}
            </li>
          </ul>
        </div>
        <div class="card-footer">&nbsp;</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SkillCard",
  data: function () {
    return {
      skills: [
        {
          id: 1,
          name: "Front-End Development",
          icon: "<i class='fa-brands fa-react fa-6x my-4' aria-hidden='true'></i>",
          sets: [
            { name: "HTML, CSS, JavaScript & JQuery" },
            { name: "Vue.js" },
            { name: "CSS Preprocessor - Sass" },
            { name: "Wordpress - DIVI" },
            { name: "Webflow" },
            { name: "CSS Frameworks (Bootstrap)" },
            { name: "Responsive Web Design" },
            { name: "Nuxt.js (Beginner)" },
          ],
        },
        {
          id: 2,
          name: "Graphics & UI Design",
          icon: "<i class='fa-solid fa-brush fa-6x my-4' aria-hidden='true'></i>",
          sets: [
            { name: "Photoshop" },
            { name: "Illustrator" },
            { name: "Adobe Xd / Figma" },
            { name: "Web UI design" },
            { name: "Logo Design" },
            { name: "Banner Design" },
            { name: "Business Card Design" },
            { name: "More" },
          ],
        },
        {
          id: 3,
          name: "Others",
          icon: "<i class='fa-solid fa-shapes fa-6x my-4' aria-hidden='true'></i>",
          sets: [
            { name: "Git / Github" },
            { name: "Email Marketing (Mailchimp)" },
            { name: "Project Management with Redmine / Jira" },
            { name: "Finding Bug and Fixing" },
            { name: "Node js (Beginner)" },
            { name: "React js (Beginner)" },
            { name: "Css Frameworks - Tailwind / Materialize css" },
          ],
        },
      ],
    };
  },
};
</script>
