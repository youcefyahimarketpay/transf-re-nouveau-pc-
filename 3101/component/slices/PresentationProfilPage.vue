<template>
  <section id="presentationProfilPage">
    <div>
      <div class="text-container">
        <prismic-rich-text :field="slice.primary.title" />
        <prismic-rich-text :field="slice.primary.text" class="text" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: {
    title: "un titre",
  },

  props: ["slice"],

  name: "presentation-profil-page",
  data() {
    return {};
  },

  methods: {},
};
</script>
<style lang="sass" scoped>
#presentationProfilPage
  width: 50%
  margin: auto
  .text-container
    width: 556px
    margin: auto
    margin-top: 40px
    &::v-deep p
      margin-bottom: 10px
      line-height: 23px

  &::v-deep img
    margin-top: 2rem
    margin-bottom: 4rem
    margin-left: 5rem
  &::v-deep ul
    li
      margin-top: 1rem
      margin-bottom: 2rem
      margin-left: 2rem
.text
  text-align: left

@media screen and (min-width: 568px) and (max-width: 1023px)
  #presentationProfilPage
    width: 100%
    max-width: 100%
    border: 2px solid green
    .text-container
      width: 584px
      &::v-deep h1
        margin-bottom: 10px

@media screen and (min-width: 320px) and (max-width: 426px)
  #presentationProfilPage
    width: 100%
    max-width: 100%

    .text-container
      width: 85%
      height: 500px

      font-weight: 300
      font-size: 18px
      line-height: 23px

      &::v-deep h1
        font-weight: 600
        font-size: 25px
        line-height: 31px
        margin-bottom: 5px
</style>