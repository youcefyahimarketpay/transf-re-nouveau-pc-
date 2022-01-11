<template>
  <section class="more-article-page">
    <div class="content">
      <div class="item" v-for="item in slice.items" :key="item.id">
        <div class="text">
          <prismic-rich-text :field="item.title" />
          <prismic-rich-text :field="item.text" />
        </div>
        <div class="image">
          <prismic-image :field="item.image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "more-article-page",
};
</script>

<style lang="sass" scoped>
.more-article-page
  padding-top: 1rem

.item
  margin-bottom: 3rem
  display: flex
  justify-content: space-between
  align-items: flex-start
  &:nth-child(2)
    flex-direction: row-reverse

.image
  width: 40%
  &::v-deep img
    object-fit: cover
    width: 100%
    border-radius: 50px 0 0 50px
.item:nth-child(2) .image::v-deep img
  object-fit: cover
  width: 100%
  border-radius: 0 50px 50px 0

.text
  width: 55%
  &::v-deep h1
    width: 65%
    padding: 1rem 2rem
    margin-bottom: 2rem
    display: flex
    justify-content: flex-end
    align-content: center
    text-transform: uppercase
    font-weight: 400
    color: #fff
    background-color: #252a40
    border-radius: 0 20px 20px 0
  &::v-deep p
    width: 90%
    font-size: 20px
    padding-left: 5rem
    font-weight: 300
  &::v-deep ul
    margin-top: 1rem
    width: 90%
    font-size: 20px
    padding-left: 6rem
    font-weight: 300
.item:nth-child(2)
  .text::v-deep h1
    display: flex
    justify-content: flex-start
    align-items: center
    float: right
    width: 65%
    color: #fff
    background-color: #2d8488
    padding: 1rem 2rem
    margin-top: 0
    border-radius: 20px 0 0 20px
    text-transform: uppercase
    font-weight: 400
  &::v-deep p
    font-size: 20px
    padding: 6rem 0 1rem 3.5rem
    font-weight: 300
    &:nth-child(2)
      padding-top: 0
  &::v-deep ul
    font-weight: 300
    font-size: 20px
    padding-left: 5rem
.item:nth-child(3)
  .text::v-deep h1
    background-color: #77a7aa
  &::v-deep p
    width: 90%
    font-size: 20px
    padding-left: 5rem
    margin-bottom: 1rem
    font-weight: 300
  &::v-deep ul
    width: 90%
    font-size: 20px
    padding-left: 6rem
    font-weight: 300

@media screen and (min-width: 767px) and (max-width: 1023.5px)
  .image
    height: 300px
    &::v-deep img
      height: 100%

  .text
    &::v-deep h1
      width: 75%
      font-size: 20px
    &::v-deep p
      font-size: 18px
      padding-left: 3rem
    &::v-deep ul
      font-size: 18px
      padding-left: 4rem
      margin-top: 0.5rem
      font-size: 18px

  .item:nth-child(2)
    .text::v-deep h1
      width: 75%
    &::v-deep p
      font-size: 18px
    &::v-deep ul
      padding-bottom: 2rem
      font-size: 18px

  .item:nth-child(3)
    &::v-deep p
      font-size: 18px
      padding-left: 3rem
    &::v-deep ul
      font-size: 18px
      padding-left: 4rem

@media screen and (min-width: 540px) and (max-width: 767px)
  .image
    height: 400px
    width: 50%
    &::v-deep img
      height: 50%

  .text
    &::v-deep h1
      width: 85%
      margin: 4rem 0 7rem
      font-size: 20px
      color: #252a40
      background-color: #fff
    &::v-deep p
      width: 200%
      padding: 0 2rem
    &::v-deep ul
      width: 200%
      padding: 0 3rem
      margin-top: 0.5rem
      font-size: 18px

  .item:nth-child(2)
    .text::v-deep h1
      float: none
      width: 85%
      margin: 4rem 1rem 7rem
      font-size: 20px
      text-align: center
      color: #2d8488
      background-color: #fff
    &::v-deep p
      margin-left: -14rem
      padding: 0
      font-size: 18px
    &::v-deep ul
      margin-left: -18rem
      padding-bottom: 2rem
      font-size: 18px

  .item:nth-child(3)
    .text::v-deep h1
      width: 85%
      margin: 4rem 1rem 5rem
      font-size: 20px
      text-align: center
      color: #77a7aa
      background-color: #fff
    &::v-deep p
      width: 200%
      padding: 0 2rem
      font-size: 18px
      &:nth-child(2)
        padding-top: 2rem
    &::v-deep ul
      width: 200%
      padding: 0 3rem
      margin-top: 0.5rem
      font-size: 18px

@media screen and (max-width: 539.5px)
  .image
    width: 50%

  .text
    &::v-deep h1
      width: 100%
      margin: 1rem 0.5rem 4rem
      text-align: center
      font-size: 20px
      color: #252a40
      background-color: #fff
    &::v-deep p
      width: 190%
      padding: 0 2rem
    &::v-deep ul
      width: 190%
      padding: 0 3rem
      margin-top: 0.5rem
      font-size: 18px

  .item:nth-child(2)
    .text::v-deep h1
      float: none
      width: 85%
      margin: 1rem 1rem 4rem
      font-size: 20px
      text-align: center
      color: #2d8488
      background-color: #fff
    &::v-deep p
      margin-left: -10rem
      padding: 0 1.5rem 0
      font-size: 18px

    &::v-deep ul
      margin-left: -12rem
      padding-bottom: 2rem
      font-size: 18px

  .item:nth-child(3)
    .text::v-deep h1
      width: 100%
      margin: 1rem 1rem 3rem
      font-size: 20px
      text-align: center
      color: #77a7aa
      background-color: #fff
    &::v-deep p
      width: 190%
      padding: 0 2rem
      font-size: 18px
      &:nth-child(2)
        padding-top: 2rem
    &::v-deep ul
      width: 190%
      padding: 0 3rem
      margin-top: 0.5rem
      font-size: 18px
</style>