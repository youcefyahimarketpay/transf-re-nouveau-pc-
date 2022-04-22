<template>
  <section class="client-title">
    <div class="content">
      <prismic-rich-text :field="slice.primary.title" />
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"]
};
</script>

<style lang="sass" scoped>
.client-title
  max-width: $largeContainer
  margin: 32px auto

.content
  text-align: center
  &::v-deep h2
    text-transform: uppercase
    font-size: $largeH2Size
    font-weight: $titleWeight
    line-height: $largeH2Line
    color: $darkColor
    strong
      color: $greenBrightColor

@media screen and (min-width: 1000px) and (max-width: 1919px)
  .client-title
    max-width: $mediumContainer

  .content
    &::v-deep h2
      font-size: $mediumH2Size
      line-height: $mediumH2Line

@media screen and (min-width: 768px) and (max-width: 999px)
  .client-title
    max-width: $shortContainer

  .content
    &::v-deep h2
      font-size: $mediumH2Size
      line-height: $mediumH2Line

@media screen and (min-width: 480px) and (max-width: 767px)
  .client-title
    max-width: $tabletContainer

  .content
    text-align: initial
    &::v-deep h2
      font-size: $mediumH2Size
      line-height: $mediumH2Line

@media screen and (max-width: 479px)
  .client-title
    max-width: $mobileContainer

  .content
    text-align: initial
    &::v-deep h2
      font-size: $mediumH2Size
      line-height: $mediumH2Line
</style>
