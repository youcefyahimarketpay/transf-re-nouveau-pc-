<template>
  <section id="presentation-cc" class="presentation-cc">
    <div class="content">
      <prismic-rich-text :field="slice.primary.title" />
      <prismic-rich-text :field="slice.primary.text" />
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"]
};
</script>

<style lang="sass" scoped>
.presentation-cc
  padding: 100px 0 50px

.content
  max-width: $largeContainer
  margin: 0 auto
  &::v-deep h2
    margin-bottom: 62px
    text-align: center
    text-transform: uppercase
    font-size: $largeH2Size
    line-height: $largeH2Line
    color: $darkColor
    strong
      color: $greenBrightColor
  &::v-deep p
    margin-bottom: 72px
    line-height: $shortLine
    color: $darkColor

@media screen and (min-width: 1000px) and (max-width: 1919px)
  .presentation-cc
    padding: 50px 0

  .content
    max-width: $mediumContainer

@media screen and (min-width: 768px) and (max-width: 999px)
  .presentation-cc
    padding: 40px 0

  .content
    max-width: $shortContainer

@media screen and (min-width: 480px) and (max-width: 767px)
  .presentation-cc
    margin-top: -64px
    padding: 0 0 40px

  .content
    max-width: $tabletContainer

@media screen and (max-width: 479px)
  .presentation-cc
    margin-top: -64px
    padding: 0 0 40px

  .content
    max-width: $mobileContainer
</style>
