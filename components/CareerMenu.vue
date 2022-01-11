<template>
  <div id="careerMenu">
    <div id="menu">
      <ul>
        <li><nuxt-link class="career" to="career">Profil</nuxt-link></li>
        <li><nuxt-link class="equipe" to="equipe">Equipe</nuxt-link></li>
        <li><nuxt-link class="jobs" to="jobs">Jobs</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slice"],
  name: "career-menu",

  data() {
    return {
      visible: true,
    };
  },

  methods: {
    test() {
      const e = document.querySelector("#equipe");
      e.style.backgroundColor = "red";
    },
  },
};
</script>

<style lang="sass" scoped>
#careerMenu

  &::v-deep ul
    border-bottom: 2px solid #E5E5E5
    padding-left: 86px
    display: flex
    li
      list-style-type: none
      margin-left: 29px
      margin-right: 29px
      margin-bottom: 8px
      cursor: pointer
      width: 41px
      .career
        text-decoration: none
        color: #00A0A5
        font-style: normal
        font-weight: normal
        font-size: 18px
        line-height: 23px
        border-bottom: 2px solid #00A0A5
        padding-bottom: 7px
      .equipe
        text-decoration: none
        padding-bottom: 10px
        &:hover
          color: #00A0A5
          border-bottom: 2px solid #00A0A5
      .jobs
        text-decoration: none
        padding-bottom: 10px

        &:hover
          color: #00A0A5
          border-bottom: 2px solid #00A0A5
@media screen and (min-width: 320px) and (max-width: 425px)
  #careerMenu
  
    &::v-deep ul
      padding-left: 0px
@media screen and (min-width: 568px) and (max-width: 1023px)
  #careerMenu

    &::v-deep ul
      padding-left: 0px
</style>                                                        