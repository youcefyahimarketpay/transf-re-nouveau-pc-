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

@media screen and (max-width: 539.5px)
  #presentationProfilPage
    width: 100%
    max-width: 100%

    .text-container
      width: 296px
      height: 505px
      &::v-deep h1
        margin-bottom: 10px
    .slider
      width: 360px
      height: 161px
      .container-slides
        width: 360px
        height: 161px
        .img-slider
          width: 293px
          height: 161.39px

@media screen and (max-width: 1023.5px)
  #presentationProfilPage
    width: 100%
    max-width: 100%
    border: 2px solid green
    .text-container
      width: 584px
      height: 306px
      &::v-deep h1
        margin-bottom: 10px

@media screen and (min-width: 540px) and (max-width: 767px)
@media screen and (min-width: 767px) and (max-width: 1023.5px)
</style>