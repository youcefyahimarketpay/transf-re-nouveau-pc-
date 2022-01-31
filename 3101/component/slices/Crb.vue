<template>
  <div>
    <div class="btnContainer">
      <button>
        <nuxt-link class="toEquipe" to="equipe"
          ><prismic-rich-text :field="slice.primary.text"
        /></nuxt-link>
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
  button
    border: none
    background: #00A0A5
    border-radius: 17.5px
    width: 214px
    height: 36px
    cursor: pointer
    margin-bottom: 74px

    .toEquipe
      text-decoration: none

      font-size: 500px
      font-style: normal
      font-weight: 300
      font-size: 20px
      line-height: 25px
      text-align: center

      color: #FFFFFF
@media screen and (min-width: 320px) and (max-width: 426px)
  .btnContainer
    width: 100%
    max-width: 100%
    margin: auto
    button
      width: 296px
</style>