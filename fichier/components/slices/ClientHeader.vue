<template>
  <section class="header">
    <div class="blank"></div>
    <div class="content">
      <prismic-rich-text :field="slice.primary.title" />
      <prismic-rich-text :field="slice.primary.text" />
      <!-- <button class="btn">
        {{ $prismic.asText(slice.primary.button_label) }}
      </button> -->
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"]
};
</script>

<style lang="sass" scoped>
.header
  height: 814px
  background: url("~/images/Maty banner.png") no-repeat
  background-position: 60% 50%

.content
  max-width: $largeContainer
  margin: 3rem auto
  padding-top: 210px
  &::v-deep h2
    text-transform: uppercase
    font-size: $largeH1Size
    font-weight: $titleWeight
    color: $darkColor
    strong
      color: $greenBrightColor
  &::v-deep p
    padding: 52px 65% 42px 0
    font-size: $largeParaphSize
    line-height: $largeLine
    color: $darkColor

// .btn
//   padding: 0.5rem 2rem
//   font-size: 20px
//   font-weight: 300
//   color: #f1f1f1
//   background-color: #373f51
//   border: none
//   border-radius: 1px
//   box-shadow: 0 3px 5px #373f51
//   outline: none
//   cursor: pointer

@media screen and (min-width: 1000px) and (max-width: 1919px)
  .header
    height: 550px
    background: url("~/images/Maty banner 1000.png") no-repeat center

  .content
    max-width: $mediumContainer
    padding-top: 100px
    &::v-deep h2
      font-size: $mediumH1Size
    &::v-deep p
      padding: 22px 65% 36px 0
      font-size: $paraphSize
      line-height: $shortLine

@media screen and (min-width: 768px) and (max-width: 999px)
  .header
    height: 428px
    background: url("~/images/Maty banner 768.png") no-repeat center

  .content
    max-width: $shortContainer
    padding-top: 70px
    &::v-deep h2
      font-size: $mediumH1Size
    &::v-deep p
      padding: 22px 65% 36px 0
      font-size: $paraphSize
      line-height: $shortLine

@media screen and (min-width: 480px) and (max-width: 767px)
  .header
    height: 100%
    background: none

  .blank
    margin-top: 3rem
    height: 300px
    display: block
    background: url("~/images/Maty banner 480.png") no-repeat center

  .content
    max-width: $tabletContainer
    padding: 30px 0 82px
    &::v-deep h2
      font-size: $mediumH1Size
    &::v-deep p
      padding: 26px 0 34px
      font-size: $paraphSize
      line-height: $shortLine

@media screen and (max-width: 479px)
  .header
    height: 100%
    background: none

  .blank
    margin-top: 3rem
    height: 300px
    display: block
    background: url("~/images/Maty banner 360.png") no-repeat center

  .content
    max-width: $mobileContainer
    padding: 30px 0 82px
    &::v-deep h2
      font-size: $mediumH1Size
    &::v-deep p
      padding: 26px 0 34px
      font-size: $paraphSize
      line-height: $shortLine
</style>
