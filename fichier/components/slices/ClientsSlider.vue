<template>
  <section class="clients-slider">
    <prismic-rich-text :field="slice.primary.title" />
    <div class="container">
      <span class="slider s1">
        <div v-for="item in slice.items" :key="item.id">
          <prismic-image :field="item.img_op" />
        </div>
      </span>
      <span class="slider s1">
        <div v-for="item in slice.items" :key="item.id">
          <prismic-image :field="item.img_op" />
        </div>
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: "clients-slider",
  props: ["slice"]
};
</script>

<style lang="sass" scoped>
.clients-slider
  padding: 75px 0
  background-color: $grayColor
  &::v-deep h2
    margin-bottom: 2rem
    text-align: center
    text-transform: uppercase
    font-size: $largeH2Size
    line-height: $largeH2Line
    color: $darkColor
    strong
      color: $greenBrightColor
  .container
    width: 100%
    display: flex
    overflow: hidden
    .slider
      display: flex
      animation: sliderLogo 60s linear infinite
      div
        height: 94px
        margin-right: 36.5px
        img
          height: 100%

@media screen and (max-width: 1919px)
  .clients-slider
    &::v-deep h2
      font-size: 30px

@keyframes sliderLogo
  0%
    transform: translate(0, 0)
  100%
    transform: translate(-100%, 0)
</style>
