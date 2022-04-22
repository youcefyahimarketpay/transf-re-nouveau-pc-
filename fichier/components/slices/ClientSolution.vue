<template>
  <section class="client-solution">
    <div class="container">
      <div class="content">
        <prismic-rich-text :field="slice.primary.title" />
        <div class="img-text">
          <div class="img">
            <prismic-image :field="slice.primary.image" />
          </div>
          <div class="text">
            <prismic-rich-text :field="slice.primary.text" />
            <nuxt-link to="/en-us/paywish" class="btn">
              {{ $prismic.asText(slice.primary.button_label) }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- <pre v-html="JSON.stringify(slice, null, 4)"></pre> -->
  </section>
</template>

<script>
export default {
  props: ["slice"]
};
</script>

<style lang="sass" scoped>
.client-solution
  padding: 48px 0
  background-color: #ddd

.container
  max-width: $largeContainer
  margin: 0 auto

.content
  &::v-deep h2
    text-align: center
    text-transform: uppercase
    font-size: $largeH2Size
    font-weight: $titleWeight
    line-height: $largeH2Line
    color: $darkColor
    strong
      color: $greenBrightColor
  .img-text
    margin-top: 32px
    display: flex
    justify-content: space-between
    .text
      width: 55%
      &::v-deep p
        margin-bottom: 32px
        font-size: $largeParaphSize
        line-height: $largeLine
        color: $darkColor
      &::v-deep ul
        margin-bottom: 70px
        list-style: none
        font-size: $largeParaphSize
        line-height: $largeLine
        color: $darkColor
        li
          margin-bottom: 16px
          &::before
            content: url("~/images/Checkbox.png")
            margin-right: 16px
            vertical-align: middle
      .btn
        width: fit-content
        margin: 0 auto
        padding: 8px 32px
        display: block
        text-decoration: none
        font-size: $largeParaphSize
        color: $whiteColor
        background-color: $darkColor
        border: none
        border-radius: 1px
        box-shadow: 0 3px 5px $darkColor
        outline: none
        cursor: pointer
    .img
      width: 35%
      &::v-deep img
        width: 100%

@media screen and (min-width: 1000px) and (max-width: 1919px)
  .container
    max-width: $mediumContainer

  .content
    &::v-deep h2
      font-size: $mediumH2Size
      line-height: $mediumH2Line
    .img-text
      .text
        width: 60%
        &::v-deep p,
        &::v-deep ul
          font-size: $paraphSize
          line-height: $shortLine

@media screen and (min-width: 768px) and (max-width: 999px)
  .container
    max-width: $shortContainer

  .content
    &::v-deep h2
      font-size: $mediumH2Size
      line-height: $mediumH2Line
    .img-text
      .text
        width: 60%
        &::v-deep p,
        &::v-deep ul
          font-size: $paraphSize
          line-height: $shortLine

@media screen and (min-width: 480px) and (max-width: 767px)
  .container
    max-width: $tabletContainer

  .content
    &::v-deep h2
      font-size: $mediumH2Size
      line-height: $mediumH2Line
    .img-text
      flex-direction: column
      align-items: center
      .text
        width: 100%
        &::v-deep p,
        &::v-deep ul
          font-size: $paraphSize
          line-height: $shortLine
      .img
        width: 60%
        margin-bottom: 32px

@media screen and (max-width: 479px)
  .container
    max-width: $mobileContainer

  .content
    &::v-deep h2
      font-size: $mediumH2Size
      line-height: $mediumH2Line
    .img-text
      flex-direction: column
      align-items: center
      .text
        width: 100%
        &::v-deep p,
        &::v-deep ul
          font-size: $paraphSize
          line-height: $shortLine
      .img
        width: 60%
        margin-bottom: 32px
</style>
