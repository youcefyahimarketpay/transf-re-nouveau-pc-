<template>
  <div>
    <div class="btnContainer">
      <button>
        <nuxt-link class="toEquipe" to="equipe">{{
          $prismic.asText(slice.items[0].text)
        }}</nuxt-link>
      </button>
      <button class="toJobsButton">
        <nuxt-link class="toJobs" to="jobs">{{
          $prismic.asText(slice.items[1].text)
        }}</nuxt-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slice"],
  name: "Crb",
};
</script>

<style lang="sass" scoped>
.btnContainer
  width: 556px
  margin: auto
  text-align: center
  margin-bottom: 20px

  button
    border: none
    background: #00A0A5
    border-radius: 17.5px
    width: 214px
    height: 36px
    cursor: pointer
    margin-top: 39px
    margin-right: 4px

    .toEquipe
      text-decoration: none

      font-size: 500px
      font-style: normal
      font-weight: 300
      font-size: 20px
      line-height: 25px
      text-align: center

      color: #FFFFFF
    .toJobs
      text-decoration: none

      font-size: 500px
      font-style: normal
      font-weight: 300
      font-size: 20px
      line-height: 25px
      text-align: center

      margin: 0px 10px

      color: black
  .toJobsButton
    background: #C2C0C0
    border-radius: 17.5px
@media screen and (min-width: 320px) and (max-width: 426px)
  .btnContainer
    width: 100%
    max-width: 100%
    margin: auto
    margin-bottom: 20px
    button
      width: 296px
</style>