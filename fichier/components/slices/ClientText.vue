<template>
  <section class="client-text">
    <div class="content">
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
.client-text
  max-width: $shortContainer
  margin: 32px auto

.content
  &::v-deep p
    font-size: $largeParaphSize
    line-height: $largeLine

@media screen and (min-width: 480px) and (max-width: 767px)
  .client-text
    max-width: $tabletContainer

  .content
    &::v-deep p
      font-size: $paraphSize
      line-height: $shortLine

@media screen and (max-width: 479px)
  .client-text
    max-width: $mobileContainer

  .content
    &::v-deep p
      font-size: $paraphSize
      line-height: $shortLine
</style>
