<template>
  <section id="presentation" class="presentation-pbb">
    <div class="container">
      <div class="title">
        <prismic-rich-text :field="slice.primary.title" />
      </div>
      <div class="img-text">
        <div class="image">
          <prismic-image :field="slice.primary.img" />
        </div>
        <prismic-rich-text :field="slice.primary.text" />
      </div>
      <div class="title-vid">
        <prismic-rich-text :field="slice.primary.subtitle" />
        <div class="video">
          <!-- video MarketPay since youtube (english) -->
          <iframe
            width="100%"
            height="637"
            src="https://www.youtube.com/embed/3kjCU9pfnAM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
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
.presentation-pbb
  padding: 100px 0 129px

.container
  max-width: $largeContainer
  margin: 0 auto

.title::v-deep h2
  margin-bottom: 50px
  padding: 0 110px
  text-align: center
  text-transform: uppercase
  font-size: $largeH2Size
  line-height: $largeH2Line
  color: $darkColor
  strong
    color: $greenBrightColor

.img-text
  margin-bottom: 150px
  display: flex
  .image
    width: 627px
    margin-right: 27px
    &::v-deep img
      width: 100%
  &::v-deep p
    width: 625px
    margin-top: 20px
    line-height: $shortLine
    color: $darkColor

.title-vid
  margin: 0 110px
  &::v-deep h3
    margin-bottom: 30px
    text-align: center
    text-transform: uppercase
    font-size: 28px
    line-height: 35.2px
    color: $darkColor
    strong
      color: $greenBrightColor

@media screen and (min-width: 1000px) and (max-width: 1919px)
  .presentation-pbb
    padding: 50px 0 150px

  .container
    max-width: $mediumContainer

  .title::v-deep h2
    font-size: 30px
    line-height: 37.71px

  .img-text
    margin-bottom: 159px
    .image
      width: 440px
    &::v-deep p
      width: 442px
      margin-top: 0

  .title-vid
    margin: 0
    iframe
      height: 542px !important

@media screen and (min-width: 768px) and (max-width: 999px)
  .presentation-pbb
    padding: 40px 0 100px

  .container
    max-width: $shortContainer

  .title::v-deep h2
    font-size: 30px
    line-height: 37.71px

  .img-text
    margin-bottom: 100px
    .image
      width: 440px
      &::v-deep img
        width: 105%
        margin-left: -27px
    &::v-deep p
      width: 324px
      margin-top: 0

  .title-vid
    margin: 0
    &::v-deep h3
      font-size: 24px
    iframe
      height: 402px !important

@media screen and (min-width: 480px) and (max-width: 767px)
  .presentation-pbb
    margin-top: -64px
    padding: 0 0 100px

  .container
    max-width: $tabletContainer

  .title::v-deep h2
    padding: 0
    text-align: initial
    font-size: 30px
    line-height: 37.71px

  .img-text
    margin-bottom: 100px
    flex-direction: column-reverse
    .image
      width: 100%
      &::v-deep img
        width: 100%
        margin-left: 0
    &::v-deep p
      width: 100%
      &:last-child
        margin: 0 0 50px

  .title-vid
    margin: 0
    &::v-deep h3
      margin-bottom: 20px
      text-align: initial
      font-size: 20px
      line-height: 25.14px
    iframe
      height: 250px !important

@media screen and (max-width: 479px)
  .presentation-pbb
    margin-top: -64px
    padding: 0 0 100px

  .container
    max-width: $mobileContainer

  .title::v-deep h2
    padding: 0
    text-align: initial
    font-size: 30px
    line-height: 37.71px

  .img-text
    margin-bottom: 100px
    flex-direction: column-reverse
    .image
      width: 100%
    &::v-deep p
      width: 100%
      &:last-child
        margin: 0 0 27px

  .title-vid
    margin: 0
    &::v-deep h3
      margin-bottom: 30px
      text-align: initial
      font-size: 20px
      line-height: 25.14px
    iframe
      height: 190px !important
</style>
