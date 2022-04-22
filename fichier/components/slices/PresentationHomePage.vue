<template>
  <section id="presentation" class="presentation presentation-home-page">
    <div class="container">
      <prismic-rich-text :field="slice.primary.title" />
      <div class="content">
        <div class="item" v-for="item in slice.items" :key="item.id">
          <prismic-image :field="item.img_op" />
          <prismic-rich-text :field="item.title" />
          <prismic-rich-text :field="item.text" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: {
    title: "Market Pay | End-to-end payment solutions",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Market Pay creates and operates end-to-end payment solutions in connection with your needs, to make payment processing the engine of your business growth"
      }
    ]
  },

  props: ["slice"],
  name: "presentation-home-page"
};
</script>

<style lang="sass" scoped>
.presentation-home-page
  padding: 32px 0 124px
  background: url("~/images/Home_page_elements/background_presentation_homepage.png") no-repeat center
  background-color: #6da7ab

.container
  max-width: $largeContainer
  margin: 0 auto
  display: flex
  flex-direction: column
  justify-content: center
  color: $whiteColor
  &::v-deep h2
    margin-bottom: 45px
    text-align: center
    text-transform: uppercase
    font-size: $largeH2Size
    color: $darkColor

.content
  display: flex
  justify-content: space-between
  align-items: flex-start
  flex-wrap: wrap

.item
  width: 160px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  &::v-deep h3
    text-align: center
    font-size: 30px
    font-style: italic
  &::v-deep p
    text-align: center
    color: $darkColor
  &::v-deep img
    height: 100px
    margin-top: 8px

@media screen and (min-width: 1000px) and (max-width: 1919px)
  .container
    max-width: $mediumContainer

@media screen and (min-width: 768px) and (max-width: 999px)
  .container
    max-width: $shortContainer

@media screen and (min-width: 480px) and (max-width: 767px)
  .container
    max-width: $tabletContainer

  .item
    width: 50%

@media screen and (max-width: 479px)
  .container
    max-width: $mobileContainer

  .item
    width: 100%
</style>
