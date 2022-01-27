<template>
  <div id="equipe">
    <div id="menu">
      <div id="menuContainer">
        <ul id="menuList">
          <li class="menuOption">
            <nuxt-link class="career" to="career">Profil</nuxt-link>
          </li>
          <li class="menuOption">
            <nuxt-link class="equipeMenu" to="equipe">Equipe</nuxt-link>
          </li>
          <li class="menuOption">
            <nuxt-link class="jobs" to="jobs">Jobs</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div id="equipeContainer">
      <div class="equipe" v-for="item in slice.items" :key="item.id">
        <div class="equipePres">
          <prismic-rich-text :field="item.video_title" />
          <prismic-embed :field="item.video" />
        </div>
        <div class="equipeInfo">
          <prismic-rich-text :field="item.description" />
        </div>
      </div>
      <div class="btnContainer">
        <button>A propos de Market Pay</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slice"],
  name: "emploie",

  data() {
    return {
      checked: [],
    };
  },

  methods: {},
};
</script>

<style lang="sass" scoped>
#equipe
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

          .equipeMenu
            text-decoration: none
            padding-bottom: 0.625rem
            color: #00A0A5
            font-style: normal
            font-weight: normal
            font-size: 1.125rem
            line-height: 1.4375rem
            border-bottom: 2px solid #00A0A5
          .career
            text-decoration: none
            padding-bottom: 0.625rem
            color: black

          .jobs
            text-decoration: none
            padding-bottom: 0.625rem
            color: black

            &:hover
              color: #00A0A5
              border-bottom: 2px solid #00A0A5

  #equipeContainer

    width: 704px
    margin: auto
    .btnContainer

      text-align: center
      button
        padding: 0.5rem 2rem
        font-size: 20px
        font-weight: 300
        background-color: #C2C0C0
        border: none
        border-radius: 17.5px
        outline: none
        cursor: pointer
        transition: background-color 0.4s
        margin: auto
        margin-bottom: 2.75rem
        margin-top: 30px
        &:hover
          background-color: rgba(36,43,64,.6980392156862745)
    .equipe

      margin: auto
      margin-top: 50px
      display: flex

      .equipePres
        &::v-deep iframe
          width: 20.9375rem
          height: 12.5rem
          margin-right: 1.9375rem

          &::v-deep p
            color: red
            position: relative
      .equipeInfo
        margin-left: 0px
        width: 100%
        &::v-deep p
          font-style: normal
          font-weight: 300
          font-size: 14px
          line-height: 18px

          margin-left: 0px

          width: 100%

@media screen and (min-width: 320px) and (max-width: 426px)
  #equipe

    #menu
      margin-bottom: 22px
      #menuContainer
        #menuList
          padding-left: 0rem
          margin-left: 34px

      &::v-deep ul
        padding-left: 0rem
        margin-bottom: 29px

    #equipeContainer
      width: 87%
      margin: auto
      box-sizing: content-box
      .equipe

        display: initial

        .equipePres
          width: 99%
          height: 197px
          margin: auto

          &::v-deep iframe
            width: 99%

        .equipeInfo
          width: 100%

          margin: auto
          margin-bottom: 0px

          &::v-deep p
            width: 100%

            margin: auto
            margin-top: 17px
            box-sizing: content-box
            margin-bottom: 1px

            font-style: normal
            font-weight: 300
            font-size: 16px
            line-height: 20px
  

    button
      width: 296px
      margin-right: 0px
      margin-left: 30px
      color: #FFFFFF
      background-color: #00A0A5

@media screen and (min-width: 568px) and (max-width: 1023px)
  #equipe
    #menu
      &::v-deep ul
        padding-left: 0rem
        margin-bottom: 29px
    #equipeContainer
      width: 585px
      margin: auto
      .equipe

        margin-left: 0rem
        margin-right: 0rem

        display: initial
        .equipePres

          &::v-deep iframe

            width: 36.625rem
            height: 21.875rem

        .equipeInfo

          width: 36.4375rem
          height: 139px
          margin: auto

          &::v-deep p
            width: 36.4375rem
            height: 11.875rem
            box-sizing: content-box
            margin-bottom: 0rem
            font-style: normal
            font-weight: 300
            font-size: 18px
            line-height: 23px
            margin-top: 17px
      .equipe:nth-child(1)

        .equipeInfo
          margin-bottom: 50px
      .equipe:nth-child(2)

        .equipeInfo
          margin-bottom: 10px
      .equipe:nth-child(3)

        .equipeInfo
          margin-bottom: 10px
      .equipe:nth-child(4)

        .equipeInfo
          margin-bottom: 60px

    button
      margin-left: 34px
      color: #FFFFFF
      background-color: #00A0A5
      margin-left: 269px
</style>