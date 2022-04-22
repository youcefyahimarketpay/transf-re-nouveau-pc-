<template>
  <section id="presentation" class="presentation-pos">
    <div class="container">
      <div class="img-text">
        <div class="image">
          <prismic-image :field="slice.primary.img" />
        </div>
        <prismic-rich-text :field="slice.primary.text" />
      </div>
      <div class="title-vid">
        <prismic-rich-text :field="slice.primary.title" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  
};
</script>

<style lang="sass" scoped>
.presentation-pos
  padding: 100px 0 0

.container
  max-width: $largeContainer
  margin: 0 auto
  
.img-text
  margin-bottom: 150px
  display: flex
  .image
    width: 627px
    &::v-deep img
      width: 80%
  &::v-deep p
    width: 625px
    margin-top: 8px
    line-height: $shortLine
    color: $darkColor

.title-vid
  margin: 0 110px
  &::v-deep h2
    margin-bottom: 30px
    text-align: center
    text-transform: uppercase
    font-size: 28px
    line-height: 35.2px
    color: $darkColor
    strong
      color: $greenBrightColor

@media screen and (min-width: 1000px) and (max-width: 1919px)
  .presentation-pos
    padding: 50px 0 0

  .container
    max-width: $mediumContainer

  .img-text
    margin-bottom: 159px
    .image
      width: 440px
    &::v-deep p
      width: 442px
      margin-top: 0

  .title-vid
    margin: 0

@media screen and (min-width: 768px) and (max-width: 999px)
  .presentation-pos
    padding: 40px 0 0

  .container
    max-width: $shortContainer

  .img-text
    margin-bottom: 100px
    .image
      width: 440px
    &::v-deep p
      width: 324px
      margin-top: 0

  .title-vid
    margin: 0

@media screen and (min-width: 480px) and (max-width: 767px)
  .presentation-pos
    margin-top: -3rem
    padding: 0

  .container
    max-width: $tabletContainer

  .img-text
    margin-bottom: 100px
    flex-direction: column-reverse
    .image
      width: 100%
    &::v-deep p
      width: 100%
      &:last-child
        margin: 8px 0 50px

  .title-vid
    margin: 0
    &::v-deep h2
      margin-bottom: 20px
      text-align: initial
      font-size: 20px
      line-height: 25.14px

@media screen and (max-width: 479px)
  .presentation-pos
    margin-top: -3rem
    padding: 0

  .container
    max-width: $mobileContainer

  .img-text
    margin-bottom: 100px
    flex-direction: column-reverse
    .image
      width: 100%
    &::v-deep p
      width: 100%
      &:last-child
        margin: 8px 0 27px

  .title-vid
    margin: 0
    &::v-deep h2
      margin-bottom: 30px
      text-align: initial
      font-size: 20px
      line-height: 25.14px
</style>
