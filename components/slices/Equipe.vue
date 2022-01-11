<template>
  <div id="equipe">
    <div id="menu">
      <ul>
        <li><nuxt-link class="career" to="career">Profil</nuxt-link></li>
        <li><nuxt-link class="equipeMenu" to="equipe">Equipe</nuxt-link></li>
        <li><nuxt-link class="jobs" to="jobs">Jobs</nuxt-link></li>
      </ul>
    </div>
    <div class="equipe" v-for="item in slice.items" :key="item.id">
      <div class="equipePres">
        <prismic-rich-text :field="item.video_title" />
        <prismic-embed :field="item.video" />
      </div>
      <div class="equipeInfo">
        <prismic-rich-text :field="item.description" />
      </div>
    </div>

    <button>A propos de Market Pay</button>
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
    &::v-deep ul
      border-bottom: 2px solid #E5E5E5
      padding-left: 5.375rem
      display: flex

      li
        list-style-type: none
        margin-left: 1.8125rem
        margin-right: 1.8125rem
        margin-bottom: 0.5rem
        cursor: pointer
        width: 2.5625rem
        .career
          text-decoration: none
          padding-bottom: 0.4375rem
          &:hover
            color: #00A0A5
            border-bottom: 2px solid #00A0A5

        .equipeMenu
          text-decoration: none
          padding-bottom: 0.625rem
          color: #00A0A5
          font-style: normal
          font-weight: normal
          font-size: 1.125rem
          line-height: 1.4375rem
          border-bottom: 2px solid #00A0A5

        .jobs
          text-decoration: none
          padding-bottom: 0.625rem
          &:hover
            color: #00A0A5
            border-bottom: 2px solid #00A0A5

  button
    margin-top: 3rem
    padding: 0.5rem 2rem
    font-size: 20px
    font-weight: 300
    background-color: #C2C0C0
    border: none
    border-radius: 17.5px
    outline: none
    cursor: pointer
    transition: background-color 0.4s
    margin-left: 30rem
    margin-bottom: 2.75rem
    &:hover
      background-color: rgba(36,43,64,.6980392156862745)
  .equipe
    margin-left: 10rem
    margin-right: 10rem
    margin-bottom: 2.5rem
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
      &::v-deep p

        width: 28rem
        height: 12.5625rem

@media screen and (max-width: 539.5px)
  #equipe

    #menu

      &::v-deep ul
        padding-left: 0rem
        margin-bottom: 29px

    .equipe

      margin-left: 0rem
      margin-right: 0rem
      display: initial
      .equipePres
        &::v-deep iframe

          width: 85%
          margin: auto
          margin-left: 1.5625rem

      .equipeInfo
        &::v-deep p
          width: 85%
          margin: auto
          box-sizing: content-box
          margin-bottom: 5.625rem
          border: 2px solid red
    button
      width: 296px
      margin-right: 0px
      margin-left: 30px
      color: #FFFFFF
      background-color: #00A0A5
@media screen and (min-width: 540px) and (max-width: 767px)
  #equipe

    #menu
      &::v-deep ul
        padding-left: 0rem
        margin-bottom: 29px

    .equipe
      border: 2px solid blue
      margin-left: 0rem
      margin-right: 0rem
      display: initial
      .equipePres
        &::v-deep iframe
          border: 2px solid yellow
          width: 85%
          margin: auto
          margin-left: 1.5625rem
      .equipeInfo
        &::v-deep p
          width: 85%
          margin: auto
          box-sizing: content-box
          margin-bottom: 5.625rem
    button
      margin-left: 34px
      color: #FFFFFF
      background-color: #00A0A5
      margin-left: 40px
@media screen and (min-width: 767px) and (max-width: 1023.5px)
  #equipe
    #menu
      &::v-deep ul
        padding-left: 0rem
        margin-bottom: 29px
    .equipe
      border: 2px solid blue
      margin-left: 0rem
      margin-right: 0rem
      display: initial
      .equipePres
        &::v-deep iframe
          border: 2px solid green
          width: 36.625rem
          height: 21.875rem
          margin-left: 5.75rem
          margin-right: 5.75rem
      .equipeInfo
        &::v-deep p
          width: 36.4375rem
          height: 11.875rem
          margin: auto
          box-sizing: content-box
          margin-bottom: 5.625rem
    button
      margin-left: 34px
      color: #FFFFFF
      background-color: #00A0A5
      margin-left: 269px
</style>