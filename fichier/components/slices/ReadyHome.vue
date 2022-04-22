<template>
  <section class="ready-home">
    <div class="content">
      <prismic-image :field="slice.primary.img" />
      <div class="context">
        <div class="head">
          <prismic-rich-text :field="slice.primary.title" />
        </div>
        <div class="body">
          <prismic-rich-text :field="slice.primary.text" />
          <div class="buttons">
            <prismic-link
              :field="slice.primary.link_product"
              class="btn btn-product"
            >
              {{ $prismic.asText(slice.primary.button_product) }}
            </prismic-link>
            <prismic-link
              :field="slice.primary.link_contact"
              class="btn btn-contact"
            >
              {{ $prismic.asText(slice.primary.button_contact) }}
            </prismic-link>
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
.ready-home
  position: relative
  background-color: #6da7ab

.content
  max-width: $largeContainer
  margin: 0 auto
  display: flex
  flex-direction: column
  justify-content: center
  &::v-deep img
    width: 60%
    margin-left: 40%

.context
  position: absolute
  top: 70px

.head
  margin-bottom: 83px
  &::v-deep h2
    width: 130%
    text-align: center
    text-transform: uppercase
    font-size: $largeH2Size
    line-height: $largeH2Line
    color: $darkColor
    strong
      color: $whiteColor

.body
  display: flex
  &::v-deep p
    width: 411px
    margin-right: 55px
    font-weight: 400
    line-height: $shortLine
    color: $whiteColor
    a
      text-decoration: underline
      font-weight: 600
      color: $darkColor
  .buttons
    display: flex
    .btn
      height: max-content
      padding: 12px 39px
      text-decoration: none
      font-size: 20px
      font-weight: 400
      line-height: 19.2px
      color: $whiteColor
    .btn-product
      margin-right: 24px
      background-color: $darkColor
      border: 1px solid $darkColor
      box-shadow: 0px 3px 5px $darkColor
    .btn-contact
      background-color: transparent
      border: 1px solid $whiteColor

@media screen and (min-width: 1000px) and (max-width: 1919px)
  .content
    max-width: $mediumContainer
    &::v-deep img
      width: 70%
      margin-left: 30%

  .context
    top: 54px

  .head
    margin-bottom: 92px
    &::v-deep h2
      font-size: 30px
      line-height: 37.71px

  .body
    &::v-deep p
      width: 368px
      margin-right: 35px
    .buttons
      flex-direction: column
      .btn-product
        margin-right: 0
        margin-bottom: 22px

@media screen and (min-width: 768px) and (max-width: 999px)
  .content
    max-width: $shortContainer
    &::v-deep img
      width: 100%
      margin-left: 0

  .context
    top: 54px

  .head
    margin-bottom: 42px
    &::v-deep h2
      font-size: 30px
      line-height: 37.71px

  .body
    flex-direction: column
    &::v-deep p
      width: 383px
      margin-right: 0
    .buttons
      margin-top: 31px
      .btn
        padding: 8px 28px
        font-size: 16px
      .btn-product
        margin-right: 16px

@media screen and (min-width: 480px) and (max-width: 767px)
  .ready-home
    padding: 50px 0

  .content
    max-width: $tabletContainer
    display: block
    &::v-deep img
      display: none

  .context
    position: static

  .head
    margin-bottom: 42px
    padding: 0
    &::v-deep h2
      width: initial
      font-size: 30px
      line-height: 37.71px

  .body
    flex-direction: column
    &::v-deep p
      width: 100%
      margin-right: 0
      margin-bottom: 31px
    .buttons
      padding: 0
      flex-direction: column
      justify-content: center
      .btn
        text-align: center
        font-size: 16px
      .btn-product
        margin-right: 0
        margin-bottom: 22px

@media screen and (max-width: 479px)
  .ready-home
    padding: 50px 0

  .content
    max-width: $mobileContainer
    display: block
    &::v-deep img
      display: none

  .context
    position: static

  .head
    margin-bottom: 42px
    &::v-deep h2
      width: initial
      text-align: initial
      font-size: 30px
      line-height: 37.71px

  .body
    flex-direction: column
    &::v-deep p
      width: 100%
      margin-right: 0
      margin-bottom: 33px
    .buttons
      flex-direction: column
      .btn
        width: 100%
        padding: 12px 39px
        text-align: center
        font-size: 16px
      .btn-product
        margin-right: 0
        margin-bottom: 22px
</style>
