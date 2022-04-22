<template>
  <section class="contact-text">
    <div class="container">
      <prismic-image :field="slice.primary.img" />
      <prismic-image :field="slice.primary.img_mobile" />
      <div class="content">
        <prismic-rich-text :field="slice.primary.text" />
        <prismic-link :field="slice.primary.link_contact">
          {{ $prismic.asText(slice.primary.button_contact) }}
        </prismic-link>
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
.contact-text
  margin-top: 0px
  background-color: $grayColor

.container
  max-width: $largeContainer
  margin: 0 auto
  position: relative
  &::v-deep img
    width: 100%
    &:nth-child(2)
      display: none

.content
  position: absolute
  top: 350px
  &::v-deep p
    width: 700px
    margin-bottom: 8px
    font-size: $largeParaphSize
    line-height: $largeLine
    strong
      color: $greenBrightColor
  a
    margin-top: 1rem
    padding: 8px 75px
    position: absolute
    right: 0
    text-decoration: none
    font-size: $largeParaphSize
    line-height: $largeLine
    color: $whiteColor
    background-color: $darkColor
    box-shadow: 0 1px 5px $darkColor
    border: none
    outline: none

@media screen and (min-width: 1000px) and (max-width: 1919px)
  .container
    max-width: $mediumContainer

  .content
    top: 200px
    &::v-deep p
      width: 500px

@media screen and (min-width: 768px) and (max-width: 999px)
  .container
    max-width: $shortContainer

  .content
    top: 50px
    &::v-deep p
      width: 380px

@media screen and (min-width: 480px) and (max-width: 767px)
  .contact-text
    padding: 32px 32px 0

  .container
    max-width: $tabletContainer
    &::v-deep img
      width: 140%
      position: relative
      right: 125px

  .content
    position: absolute
    top: 0
    &::v-deep p
      width: 250px
      font-size: 16px
      line-height: 20.11px
    a
      margin-top: 32px
      padding: 8px 50px
      font-size: 14px
      right: 64px

@media screen and (max-width: 479px)
  .contact-text
    margin-top: 70px
    padding: 132px 32px 0

  .container
    max-width: $mobileContainer
    &::v-deep img
      width: 100%
      &:nth-child(1)
        display: none
      &:nth-child(2)
        padding-top: 64px
        display: block

  .content
    top: -100px
    &::v-deep p
      width: 100%
      font-size: 20px
      line-height: 25.17px
    a
      text-align: center
      left: 0
</style>
