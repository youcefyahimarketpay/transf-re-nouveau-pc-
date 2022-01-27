<template>
  <div id="careerMenu">
    <div id="menu">
      <div id="menuContainer">
        <ul id="menuList">
          <li class="menuOption">
            <nuxt-link class="career" to="career">Profil</nuxt-link>
          </li>
          <li class="menuOption">
            <nuxt-link class="equipe" to="equipe">Equipe</nuxt-link>
          </li>
          <li class="menuOption">
            <nuxt-link class="jobs" to="jobs">Jobs</nuxt-link>
          </li>
        </ul>
      </div>
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
  margin-bottom: 41px

#menu

  width: 100%
  margin: auto
  max-width: 100%
  #menuContainer
    border-bottom: 2px solid #E5E5E5
    width: 100%
    margin: auto
    #menuList
      width: 880px

      margin: auto
      display: flex

      .menuOption

        list-style-type: none

        margin-right: 1.8125rem
        margin-bottom: 0.5rem
        cursor: pointer
        width: 2.5625rem
        .career
          text-decoration: none
          padding-bottom: 0.4375rem
          border-bottom: 2px solid #00A0A5
          color: #00A0A5

        .equipe
          text-decoration: none
          padding-bottom: 0.625rem
          color: black
          &:hover
            color: #00A0A5
            border-bottom: 2px solid #00A0A5

        .jobs
          text-decoration: none
          padding-bottom: 0.625rem
          padding-bottom: 0.625rem
          color: black
          font-style: normal
          font-weight: normal
          font-size: 1.125rem
          line-height: 1.4375rem
          &:hover
            color: #00A0A5
            border-bottom: 2px solid #00A0A5

@media screen and (min-width: 320px) and (max-width: 425px)
  #careerMenu

    #menu
      #menuContainer
        #menuList
          margin-left: 34px
@media screen and (min-width: 568px) and (max-width: 1023px)
  #careerMenu

    &::v-deep ul
      padding-left: 0px
</style>                                                        