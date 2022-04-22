<template>
  <section class="solution-home">
    <div class="content">
      <div class="head">
        <prismic-rich-text :field="slice.primary.title" />
        <prismic-rich-text :field="slice.primary.text" />
      </div>
      <div class="body">
        <div v-for="item in slice.items" :key="item.id" class="container">
          <div class="content-solution">
            <div class="image">
              <prismic-image :field="item.img" />
            </div>
            <div class="text">
              <prismic-rich-text :field="item.title_solution" />
              <prismic-rich-text :field="item.text_solution" />
              <prismic-link :field="item.button_link" class="btn">
                {{ $prismic.asText(item.button_label) }}
              </prismic-link>
            </div>
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
.solution-home
  margin: 110px 0

.head
  max-width: $largeContainer
  margin: 0 auto 100px
  &::v-deep h2
    text-align: center
    text-transform: uppercase
    font-size: $largeH2Size
    line-height: $largeH2Line
    color: $darkColor
    &:last-child
      margin-bottom: 50px
    strong
      color: $greenBrightColor
  &::v-deep p
    line-height: $shortLine
    color: $darkColor

.container
  background: linear-gradient(to right, $greenColor 40%, $whiteColor 50%)
  &:nth-child(2n +1) .text
    text-align: right
  &:nth-child(2n)
    margin: 100px 0
    background: linear-gradient(to left, $greenColor 40%, $whiteColor 50%)
    .content-solution
      flex-direction: row-reverse
      .text
        .btn
          right: initial
          left: 0
  .content-solution
    max-width: $largeContainer
    margin: 0 auto
    display: flex
    .image
      width: 50%
      &::v-deep img
        height: 100%
        width: 100%
    .text
      position: relative
      width: 50%
      &::v-deep h2
        margin-bottom: 12px
        text-transform: uppercase
        font-size: $largeH3Size
        line-height: $largeH4Line
        color: $darkColor
        strong
          color: $greenBrightColor
      &::v-deep h3
        margin-bottom: 30px
        font-size: $largeH4Size
        line-height: 22.63px
        color: $greenBrightColor
      &::v-deep p
        line-height: $shortLine
        color: $darkColor
        &:last-child
          margin-bottom: 30px
      .btn
        padding: 8px 32px
        position: absolute
        right: 0
        bottom: 0
        text-decoration: none
        color: $greenBrightColor
        background-color: transparent
        border: 1px solid $greenBrightColor

@media screen and (min-width: 1000px) and (max-width: 1919px)
  .solution-home
    margin: 50px 0

  .head
    max-width: $mediumContainer
    margin-bottom: 79px
    &::v-deep h2
      font-size: 30px
      line-height: $mediumH2Line
      &:last-child
        margin-bottom: 30px

  .container
    &:nth-child(2n)
      margin: 118px 0
    .content-solution
      max-width: $mediumContainer
      .text
        &::v-deep h2
          font-size: 24px
        &::v-deep h3
          margin-bottom: 25px
          font-size: 18px
        &::v-deep p
          &:last-child
            margin-bottom: 25px

@media screen and (min-width: 768px) and (max-width: 999px)
  .solution-home
    margin: 40px 0

  .head
    max-width: $shortContainer
    margin-bottom: 79px
    &::v-deep h2
      font-size: 30px
      line-height: $mediumH2Line
      &:last-child
        margin-bottom: 30px

  .container
    &:nth-child(2n)
      margin: 118px 0
    .content-solution
      max-width: $shortContainer
      .text
        &::v-deep h2
          font-size: 24px
        &::v-deep h3
          margin-bottom: 25px
          font-size: 18px
        &::v-deep p
          &:last-child
            margin-bottom: 25px
        .btn
          position: initial

@media screen and (min-width: 480px) and (max-width: 767px)
  .solution-home
    margin: 44px 0

  .head
    max-width: $tabletContainer
    margin-bottom: 30px
    &::v-deep h2
      font-size: 30px
      line-height: $mediumH2Line
      &:last-child
        margin-bottom: 25px

  .container
    background: transparent
    &:nth-child(2n)
      margin: 70px 0
      background: transparent
      .content-solution
        flex-direction: column
    &:nth-child(2n + 1)
      .content-solution
        flex-direction: column
    .content-solution
      max-width: $tabletContainer
      flex-direction: column
      .image
        width: 100%
        margin-bottom: 20px
      .text
        width: 100%
        &::v-deep h2
          font-size: 24px
        &::v-deep h3
          margin-bottom: 25px
          font-size: 18px
        &::v-deep p
          &:last-child
            margin-bottom: 25px
        .btn
          position: initial

@media screen and (max-width: 479px)
  .solution-home
    margin: 58px 0

  .head
    max-width: $mobileContainer
    margin-bottom: 28px
    &::v-deep h2
      font-size: 30px
      line-height: $mediumH2Line
      &:last-child
        margin-bottom: 19px

  .container
    background: transparent
    &:nth-child(2n)
      margin: 70px 0
      background: transparent
      .content-solution
        flex-direction: column
    .content-solution
      max-width: $mobileContainer
      flex-direction: column
      .image
        width: 100%
        margin-bottom: 20px
      .text
        width: 100%
        &::v-deep h2
          font-size: 24px
        &::v-deep h3
          margin-bottom: 25px
          font-size: 18px
        &::v-deep p
          &:last-child
            margin-bottom: 25px
        .btn
          position: initial
</style>
