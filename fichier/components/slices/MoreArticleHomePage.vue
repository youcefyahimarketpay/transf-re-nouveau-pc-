<template>
  <section class="more-article-home-page">
    <div class="content">
      <div class="item" v-for="item in slice.items" :key="item.id">
        <div class="image">
          <prismic-image :field="item.img_op" />
        </div>
        <div class="text">
          <prismic-rich-text :field="item.title" />
          <prismic-rich-text :field="item.text" />
          <button class="button">
            <prismic-link :field="item.button_link" target="_blank">{{
              $prismic.asText(item.button_label)
            }}</prismic-link>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "more-article-home-page",
  // methods: {
  //   setBlankAttr() {
  //     const blankAttr5 = document.querySelector(".item:nth-child(5) .button a");
  //     const blankAttr6 = document.querySelector(".item:nth-child(6) .button a");
  //     blankAttr5.setAttribute("target", "_blank");
  //     blankAttr6.setAttribute("target", "_blank");
  //   },
  // },
};
</script>

<style lang="sass" scoped>
.more-article-home-page
  padding: 5rem 0 0

.item
  display: flex
  justify-content: space-between
  margin-bottom: 5rem
  background-color: #fff
.item:nth-child(2)
  flex-direction: row-reverse
.item:nth-child(5)
  flex-direction: row-reverse

.image
  width: 55%
  height: 500px
.image::v-deep img
  height: 100%
  width: 100%
  object-fit: cover
  border-radius: 0 50px 50px 0
.item:nth-child(2) .image::v-deep img
  border-radius: 50px 0 0 50px
.item:nth-child(5) .image::v-deep img
  border-radius: 50px 0 0 50px

.text
  width: 40%
.text::v-deep h1
  margin-bottom: 3rem
  padding: 1rem 2rem
  text-transform: uppercase
  font-size: 30px
  font-weight: 400
  color: #fff
  background-color: #272d3d
  border-radius: 20px 0 0 20px
.text::v-deep p
  margin-bottom: 1rem
  padding-right: 2rem
  font-size: 18px
  font-weight: 300
.item:nth-child(2) .text::v-deep h1
  background-color: #46a1a5
  border-radius: 0 20px 20px 0
  padding-left: 10rem
.item:nth-child(2) .text::v-deep p
  padding-left: 3rem
.item:nth-child(3) .text::v-deep h1
  background-color: #98c2c7
.item:nth-child(4) .text
  display: none
.item:nth-child(5) .text::v-deep h1
  background-color: #d33f2a
  border-radius: 0 20px 20px 0
  padding-left: 10rem
.item:nth-child(5) .text::v-deep p
  padding-left: 3rem
.item:nth-child(6) .text::v-deep h1
  background-color: #f4b53f

.button
  float: right
  margin: 5rem 2rem 0 0
  padding: 0.5rem 2rem
  font-size: 20px
  font-weight: 300
  background-color: #272d3d
  border: none
  border-radius: 30px
  outline: none
  cursor: pointer
  transition: background-color 0.4s
  a
    text-decoration: none
    color: #fff
  &:hover
    background-color: #272d3dc4
.item:nth-child(2) .button
  background-color: #46a1a5
  &:hover
    background-color: #008b89
.item:nth-child(3) .button
  background-color: #98c2c7
  &:hover
    background-color: #46a1a5
.item:nth-child(5) .button
  background-color: #d33f2a
  &:hover
    background-color: #b63524
.item:nth-child(6) .button
  background-color: #f4b53f
  &:hover
    background-color: #e0a639

.item:nth-child(4)
  display: flex
  justify-content: center
  align-items: center
  .image
    height: 50px
    width: 50px
    &::v-deep img
      height: 100%
      width: 100%
  &::before
    content: ""
    height: 3px
    width: 50%
    background: linear-gradient(to left, #01a2a6, #fff)
    border-radius: 30px
  &::after
    content: ""
    height: 3px
    width: 50%
    background: linear-gradient(to right, #01a2a6, #fff)
    border-radius: 10px
    &::v-deep img
      height: 50px
      width: 50px
      margin: 0 0.5rem

@media screen and (min-width: 1024px) and (max-width: 1024px)
  .image
    height: 450px

  .text::v-deep h1
    margin-bottom: 2.5rem
    font-size: 25px
  .item:nth-child(2) .text::v-deep h1
    background-color: #46a1a5
    border-radius: 0 20px 20px 0
    padding-left: 8rem

  .button
    float: right
    margin-top: 4rem

@media screen and (min-width: 767px) and (max-width: 1023.5px)
  .image
    height: 400px

  .text::v-deep h1
    margin-bottom: 1.5rem
    padding: 1rem
    font-size: 20px
    font-weight: 400
  .text::v-deep p
    margin-bottom: 0.5rem
    padding-right: 1rem
  .item:nth-child(2) .text::v-deep h1
    padding-left: 5rem

  .button
    margin: 1rem 1rem 0 0
    font-size: 18px
  .item:nth-child(2) .button
    margin-top: 4rem
  .item:nth-child(3) .button
    margin-top: 4rem

@media screen and (min-width: 540px) and (max-width: 767px)
  .more-article-home-page
    padding: 3rem 0 0

  .item
    margin-bottom: 3rem

  .image
    width: 55%
    height: 200px

  .text::v-deep h1
    margin-bottom: 1rem
    padding: 4rem 2rem 5rem
    font-size: 20px
    color: #272d3d
    background-color: #fff
    text-align: center
  .text::v-deep p
    margin: 1rem 1rem 0 -17rem
    padding-right: 3rem
    font-size: 20px
  .item:nth-child(2) .text::v-deep h1
    margin-bottom: 3rem
    padding-left: 4rem
    color: #46a1a5
    background-color: #fff
  .item:nth-child(2) .text::v-deep p
    margin-right: -20rem
    margin-left: 1rem
    padding-left: 3rem
  .item:nth-child(3) .text::v-deep h1
    margin: 1rem 0 2rem
    color: #98c2c7
    background-color: #fff
  .item:nth-child(5) .text::v-deep h1
    margin-bottom: 4rem
    padding-left: 5rem
    color: #f4b53f
    background-color: #fff
  .item:nth-child(5) .text::v-deep p
    margin-right: -20rem
    margin-left: 1rem
    padding-left: 3rem
  .item:nth-child(6) .text::v-deep h1
    margin: 1rem 3rem 3rem 0
    color: #d33f2a
    background-color: #fff

  .button
    float: none
    margin: 2rem 2rem 0 -8rem
  .item:nth-child(2) .button
    margin: 2rem -20rem 0 12.5rem
  .item:nth-child(3) .button
    margin: 2rem 2rem 0 -8rem
  .item:nth-child(5) .button
    margin: 2rem -20rem 0 12.5rem
  .item:nth-child(6) .button
    margin: 2rem 2rem 0 -8rem

@media screen and (max-width: 539.5px)
  .more-article-home-page
    padding: 2rem 0 0

  .item
    margin-bottom: 2rem

  .image
    width: 55%
    height: 200px
  .text
    width: 48%
  .text::v-deep h1
    margin: -1rem 0 1rem 0
    padding: 4rem 2rem 5rem
    font-size: 18px
    color: #272d3d
    background-color: #fff
    text-align: center
  .text::v-deep p
    margin: 1rem 1rem 0 -10rem
    padding-right: 1rem
    font-size: 20px
  .item:nth-child(2) .text::v-deep h1
    margin: 1rem 0 2rem
    padding-left: 2rem
    color: #46a1a5
    background-color: #fff
  .item:nth-child(2) .text::v-deep p
    margin-right: -13rem
    margin-left: 1rem
    padding-left: 2rem
  .item:nth-child(3) .text::v-deep h1
    margin: 1rem 0 2rem
    color: #98c2c7
    background-color: #fff
  .item:nth-child(5) .text::v-deep h1
    margin: 1rem 0 3rem
    padding-left: 2rem
    color: #f4b53f
    background-color: #fff
  .item:nth-child(5) .text::v-deep p
    margin-right: -12rem
    margin-left: 1rem
    padding-left: 2rem
  .item:nth-child(6) .text::v-deep h1
    margin: 1.5rem 2rem 2.5rem 0
    color: #d33f2a
    background-color: #fff

  .button
    float: none
    margin: 2rem 2rem 2rem -5.5rem
  .item:nth-child(2) .button
    margin: 2rem -20rem 2rem 7.5rem
  .item:nth-child(3) .button
    margin: 2rem 2rem 0 -5.5rem
  .item:nth-child(5) .button
    margin: 2rem -20rem 2rem 7.5rem
  .item:nth-child(6) .button
    margin: 2rem 2rem 2rem -4rem
</style>