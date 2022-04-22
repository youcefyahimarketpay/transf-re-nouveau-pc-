<template>
  <section id="presentation" class="presentation-pw">
    <div class="container">
      <div class="img-text">
        <div class="image">
          <prismic-image :field="slice.primary.img" />
        </div>
        <prismic-rich-text :field="slice.primary.text" />
      </div>
      <div class="title-vid">
        <prismic-rich-text :field="slice.primary.title" />
        <div class="video">
          <!-- video MarketPay since youtube (english) -->
          <!-- <iframe
            width="100%"
            height="637"
            src="https://www.youtube.com/embed/_KJF9QHueEM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  // head: {
  //   title: "PayWish™ | Contactless payment acceptance application",
  //   meta: [
  //     {
  //       hid: "description",
  //       name: "description",
  //       content:
  //         "Deliver an all-in-one mobile shopping experience at your point of sale with PayWish™, a mobile payment acceptance app."
  //     }
  //   ]
  // }
};
</script>

<style lang="sass" scoped>
.presentation-pw
  margin: 100px 0 129px

.container
  max-width: $largeContainer
  margin: 0 auto

.img-text
  margin-bottom: 150px
  display: flex
  .image
    width: 627px
    &::v-deep img
      width: 100%
  &::v-deep p
    width: 625px
    margin-top: 20px
    font-size: $paraphSize
    line-height: $shortLine
    color: $darkColor

.title-vid
  margin: 0 110px
  &::v-deep h2
    margin-bottom: 30px
    text-align: center
    text-transform: uppercase
    font-size: $mediumH2Size
    line-height: $mediumH2Line
    color: $darkColor
    strong
      color: $greenBrightColor

@media screen and (min-width: 1000px) and (max-width: 1919px)
  .presentation-pw
    margin: 50px 0 150px

  .container
    max-width: $mediumContainer

  .img-text
    margin-bottom: 120px
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
  .presentation-pw
    margin: 40px 0 100px

  .container
    max-width: $shortContainer

  .img-text
    margin-bottom: 100px
    .image
      width: 440px
      &::v-deep img
        width: 160%
        margin-left: -165px
    &::v-deep p
      width: 324px
      margin-top: 0

  .title-vid
    margin: 0
    iframe
      height: 402px !important

@media screen and (min-width: 480px) and (max-width: 767px)
  .presentation-pw
    margin: 0 0 100px

  .container
    max-width: $tabletContainer

  .img-text
    margin-bottom: 100px
    flex-direction: column-reverse
    .image
      width: 100%
      &::v-deep img
        width: 160%
        margin-left: -30%
    &::v-deep p
      width: 100%
      margin: 0 0 50px

  .title-vid
    margin: 0
    &::v-deep h2
      margin-bottom: 20px
      text-align: initial
      font-size: 20px
      line-height: $largeLine
    iframe
      height: 250px !important

@media screen and (max-width: 479px)
  .presentation-pw
    margin: 0 0 100px

  .container
    max-width: $mobileContainer

  .img-text
    margin-bottom: 100px
    flex-direction: column-reverse
    .image
      width: 100%
      &::v-deep img
        width: 160%
        margin-left: -30%
    &::v-deep p
      width: 100%
      margin: 0 0 27px

  .title-vid
    margin: 0
    &::v-deep h2
      margin-bottom: 30px
      text-align: initial
      font-size: 20px
      line-height: $largeLine
    iframe
      height: 190px !important
</style>
