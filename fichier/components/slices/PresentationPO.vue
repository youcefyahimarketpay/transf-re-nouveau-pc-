<template>
  <section id="presentation" class="presentation-po">
    <div class="container">
      <div class="img-text-first">
        <div class="image">
          <prismic-image :field="slice.primary.first_img" />
        </div>
        <prismic-rich-text :field="slice.primary.first_text" />
      </div>
      <div class="img-text-second">
        <prismic-rich-text :field="slice.primary.second_text" />
        <div class="image">
          <prismic-image :field="slice.primary.second_img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"]
};
</script>

<style lang="sass" scoped>
.presentation-po
  padding: 100px 0 0

.container
  max-width: $largeContainer
  margin: 0 auto

.img-text-first
  margin-bottom: 150px
  display: flex
  .image
    width: 627px
    margin-right: 24px
    &::v-deep img
      width: 100%
  &::v-deep p
    width: 625px
    margin-top: 8px
    line-height: $shortLine
    color: $darkColor

.img-text-second
  margin-bottom: 100px
  display: flex
  .image
    width: 403px
    margin-left: 157px
    &::v-deep img
      width: 100%
  &::v-deep h2
    margin-bottom: 30px
    text-transform: uppercase
    font-size: 28px
    line-height: 35.2px
    color: $darkColor
    strong
      color: $greenBrightColor
  &::v-deep p
    width: 625px
    margin-top: 8px
    line-height: $shortLine
    color: $darkColor

@media screen and (min-width: 1000px) and (max-width: 1919px)
  .presentation-po
    padding: 50px 0 0

  .container
    max-width: $mediumContainer

  .img-text-first
    margin-bottom: 159px
    .image
      width: 440px
    &::v-deep p
      width: 442px
      margin-top: 0

  .img-text-second::v-deep p
    width: 442px
    margin-top: 0

@media screen and (min-width: 768px) and (max-width: 999px)
  .presentation-po
    padding: 40px 0 0

  .container
    max-width: $shortContainer

  .img-text-first,
  .img-text-second
    margin-bottom: 100px
    .image
      width: 440px
    &::v-deep h2
      margin-bottom: 20px
      font-size: 20px
      line-height: 30.14px
    &::v-deep p
      width: 324px
      margin-top: 0

@media screen and (min-width: 480px) and (max-width: 767px)
  .presentation-po
    margin-top: -3rem
    padding: 0

  .container
    max-width: $tabletContainer

  .img-text-first
    margin-bottom: 100px
    flex-direction: column-reverse
    .image
      width: 100%
    &::v-deep p
      width: 100%
      &:last-child
        margin: 0 0 50px

  .img-text-second
    margin-bottom: 100px
    flex-direction: column
    .image
      width: 100%
      margin-left: 0
    &::v-deep p
      width: 100%
      &:last-child
        margin: 0 0 50px

@media screen and (max-width: 479px)
  .presentation-po
    margin-top: -3rem
    padding: 0

  .container
    max-width: $mobileContainer

  .img-text-first
    margin-bottom: 100px
    flex-direction: column-reverse
    .image
      width: 100%
    &::v-deep p
      width: 100%
      &:last-child
        margin: 0 0 27px

  .img-text-second
    margin-bottom: 100px
    flex-direction: column
    .image
      width: 100%
      margin-left: 0
    &::v-deep p
      width: 100%
      &:last-child
        margin: 0 0 27px
</style>
