<template>
  <section id="presentationProfilPage">
    <div class="text-container">
      <prismic-rich-text :field="slice.primary.text" />
    </div>
  </section>
</template>

<script>
export default {
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
  max-width: 100%
  .text-container

    width: 621px
    margin: auto
    &::v-deep h2
      font-style: normal
      font-weight: 700
      font-size: 25px
      line-height: 31px
      text-transform: uppercase
      margin-bottom: 24px
      color: $darkColor

    &::v-deep p
      font-weight: 300
      font-size: 16px
      line-height: 20px

      color: #000000

    &::v-deep ul

      margin-left: 20px
      margin-top: 5px
      li

@media screen and (min-width: 1000px) and (max-width: 1919px)
  #presentationProfilPage
    .text-container
      width: 594px
@media screen and (min-width: 768px) and (max-width: 999px)
  #presentationProfilPage
    .text-container
      width: $shortContainer
@media screen and (min-width: 480px) and (max-width: 767px)
  #presentationProfilPage
    .text-container
      width: $tabletContainer
@media screen and (max-width: 479px)
  #presentationProfilPage
    .text-container
      width: $mobileContainer
</style>