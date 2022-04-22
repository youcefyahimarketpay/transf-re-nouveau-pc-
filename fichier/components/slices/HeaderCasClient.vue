<template>
  <section class="header-cas-client">
    <div class="blank"></div>
    <div class="content">
      <prismic-rich-text :field="slice.primary.title" />
      <prismic-rich-text :field="slice.primary.text" />
      <a href="#presentation" class="btn">
        {{ $prismic.asText(slice.primary.button_label) }}
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"]
};
</script>

<style lang="sass" scoped>
.header-cas-client
  height: 814px
  background: url("~/images/header-casclient/header_casclient_1920.png") no-repeat
  background-position: 40% 50%

.content
  max-width: $largeContainer
  margin: 3rem auto
  padding-top: 210px
  &::v-deep h1
    text-transform: uppercase
    font-weight: $titleWeight
    color: $darkColor
    &:nth-child(1)
      font-size: $largeH1Size
    &:nth-child(2)
      margin-top: -14px
      font-size: 52px
    strong
      color: $greenBrightColor
  &::v-deep p
    padding: 52px 65% 42px 0
    font-size: $largeParaphSize
    line-height: $largeLine
    color: $darkColor

.btn
  padding: 12px 38px
  text-decoration: none
  font-size: $largeParaphSize
  color: $whiteColor
  background-color: $darkColor
  border: none
  border-radius: 1px
  box-shadow: 0 3px 5px $darkColor
  outline: none
  cursor: pointer

@media screen and (min-width: 1000px) and (max-width: 1919px)
  .header-cas-client
    height: 550px
    background: url("~/images/header-casclient/header_casclient_1000.png") no-repeat
    background-position: 45% 50%

  .content
    max-width: $mediumContainer
    padding-top: 100px
    &::v-deep h1
      &:nth-child(1)
        font-size: $mediumH1Size
      &:nth-child(2)
        font-size: 33px
    &::v-deep p
      padding: 22px 65% 36px 0
      font-size: $paraphSize
      line-height: $shortLine

  .btn
    padding: 8px 32px
    font-size: $paraphSize

@media screen and (min-width: 768px) and (max-width: 999px)
  .header-cas-client
    height: 428px
    background: url("~/images/header-casclient/header_casclient_768.png") no-repeat
    background-position: 40% 50%

  .content
    max-width: $shortContainer
    padding-top: 70px
    &::v-deep h1
      &:nth-child(1)
        font-size: $mediumH1Size
      &:nth-child(2)
        font-size: 33px
    &::v-deep p
      padding: 22px 65% 36px 0
      font-size: $paraphSize
      line-height: $shortLine

  .btn
    padding: 8px 32px
    font-size: $paraphSize

@media screen and (min-width: 480px) and (max-width: 767px)
  .header-cas-client
    height: 100%
    background: none

  .blank
    margin-top: 3rem
    height: 300px
    display: block
    background: url("~/images/header-casclient/header_casclient_480.png") no-repeat
    background-position: 57% 50%

  .content
    max-width: $tabletContainer
    padding: 30px 0 82px
    &::v-deep h1
      &:nth-child(1)
        font-size: $mediumH1Size
      &:nth-child(2)
        font-size: 33px
    &::v-deep p
      padding: 26px 0 34px
      font-size: $paraphSize
      line-height: $shortLine

  .btn
    width: 100%
    padding: 8px 0
    display: block
    text-align: center
    font-size: $paraphSize

@media screen and (max-width: 479px)
  .header-cas-client
    height: 100%
    background: none

  .blank
    margin-top: 3rem
    height: 300px
    display: block
    background: url("~/images/header-casclient/header_casclient_480.png") no-repeat
    background-position: 57% 50%

  .content
    max-width: $mobileContainer
    padding: 30px 0 82px
    &::v-deep h1
      &:nth-child(1)
        font-size: $mediumH1Size
      &:nth-child(2)
        font-size: 33px
    &::v-deep p
      padding: 26px 0 34px
      font-size: $paraphSize
      line-height: $shortLine

  .btn
    width: 100%
    padding: 8px 0
    display: block
    text-align: center
    font-size: $paraphSize
</style>
