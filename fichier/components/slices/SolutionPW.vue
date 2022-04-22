<template>
  <section class="solution-pw">
    <div class="content">
      <div v-for="item in slice.items" :key="item.id" class="container">
        <div class="content-solution">
          <div class="image">
            <prismic-image :field="item.img" />
          </div>
          <div class="text">
            <prismic-rich-text :field="item.title" />
            <prismic-rich-text :field="item.text" />
            <!-- <a href="#" class="btn">
              {{ $prismic.asText(item.button_label) }}
            </a> -->
          </div>
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
.container
  background: linear-gradient(to right, $greenColor 40%, $whiteColor 45%)

  &:nth-child(2n +1)
    .text
      text-align: right
      &::v-deep ul
        list-style: none
        li::before
          content: '•'
          margin-right: 8px
          font-weight: bold
          font-size: 20px

  &:nth-child(2n)
    margin: 100px 0
    background: linear-gradient(to left, $greenColor 40%, $whiteColor 45%)
    .content-solution
      flex-direction: row-reverse
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
      width: 50%
      &::v-deep h2
        margin-bottom: 30px
        text-transform: uppercase
        font-size: $largeH2Size
        line-height: $largeH2Line
        strong
          color: $greenBrightColor
      &::v-deep p
        line-height: $shortLine
        color: $darkColor
        &:last-child
          margin-bottom: 62px
      &::v-deep ul
        margin-top: 8px
        margin-left: 20px
        line-height: $shortLine
        color: $darkColor
        &:last-child
          margin-bottom: 62px
      // .btn
      //   padding: 8px 32px
      //   text-decoration: none
      //   color: #01a2a6
      //   background-color: transparent
      //   border: 1px solid #01a2a6

@media screen and (min-width: 1000px) and (max-width: 1919px)
  .container
    &:nth-child(2n)
      margin: 105px 0
    .content-solution
      max-width: $mediumContainer
      .text
        &::v-deep h2
          font-size: $mediumH2Size
          line-height: $mediumH2Line
        &::v-deep p
          &:last-child
            margin-bottom: 50px
        &::v-deep ul
          &:last-child
            margin-bottom: 50px

@media screen and (min-width: 768px) and (max-width: 999px)
  .container
    .content-solution
      max-width: $shortContainer
      .text
        &::v-deep h2
          font-size: $mediumH2Size
          line-height: $mediumH2Line
        &::v-deep p
          &:last-child
            margin-bottom: 30px
        &::v-deep ul
          &:last-child
            margin-bottom: 30px

@media screen and (min-width: 480px) and (max-width: 767px)
  .container
    background: transparent
    &:nth-child(2n)
      margin: 70px 0
      background: transparent
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
          margin-bottom: 24px
          font-size: $mediumH2Size
          line-height: $mediumH2Line
        &::v-deep p
          &:last-child
            margin-bottom: 24px
        &::v-deep ul
          &:last-child
            margin-bottom: 24px

@media screen and (max-width: 479px)
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
          margin-bottom: 24px
          font-size: $mediumH2Size
          line-height: $mediumH2Line
        &::v-deep p
          &:last-child
            margin-bottom: 24px
        &::v-deep ul
          &:last-child
            margin-bottom: 24px
</style>
