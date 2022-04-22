<template>
  <section class="client-quote">
    <div class="content">
      <prismic-rich-text :field="slice.primary.quote" />
    </div>
    <div class="author">
      {{ $prismic.asText(slice.primary.author) }}
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"]
};
</script>

<style lang="sass" scoped>
.client-quote
  max-width: $tabletContainer
  margin: 32px auto

.content
  margin: 16px 0
  padding: 16px 32px
  position: relative
  &::v-deep p
    text-align: center
    font-size: $largeParaphSize
    line-height: $largeLine
    color: $greenBrightColor
    &::before
      content: url('~/images/Commas.png')
      position: absolute
      top: 0
      left: 0
    &::after
      content: url('~/images/Commas.png')
      position: absolute
      bottom: 0
      right: 0

.author
  text-align: center
  font-style: italic
  line-height: $shortLine
  color: $darkColor

@media screen and (max-width: 479px)
  .client-quote
    max-width: $mobileContainer

  .author
    text-align: right
</style>
