<template>
  <section class="our-values">
    <div class="content">
      <div class="banner-value">
        <prismic-rich-text :field="slice.primary.title" />
        <prismic-image :field="slice.primary.image" />
      </div>
      <div id="our-values">
        <div class="item" v-for="item in slice.items" :key="item.id">
          <div>
            <prismic-rich-text :field="item.title" />
            <prismic-rich-text :field="item.text" />
          </div>
          <div><prismic-image :field="item.image" /></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "our-values",
};
</script>

<style lang="sass" scoped>
.banner-value
  position: relative
  &::v-deep img
    height: 100%
    width: 100%
  &::v-deep h1
    color: #fff
    position: absolute
    top: 40%
    left: 3rem
    font-size: 50px
    font-weight: 400

#our-values
  padding: 3rem 13rem

.item
  display: flex
  justify-content: space-between
  align-items: center
  margin: 1rem 0
  &::v-deep h1
    font-size: 50px
    font-weight: 400
    font-style: italic
    color: #d4d4d4
    margin-bottom: 5px
  &::v-deep p
    font-size: 20px
    font-weight: 300
  &::v-deep img
    height: 200px
    width: 200px
    margin-left: 3rem

@media screen and (min-width: 767px) and (max-width: 1023.5px)
  .banner-value
    &::v-deep h1
      top: 25%

  #our-values
    padding: 3rem

@media screen and (min-width: 540px) and (max-width: 767px)
  .banner-value
    &::v-deep h1
      font-size: 35px
      top: 25%

  #our-values
    padding: 1rem 2rem 4rem

  .item
    &::v-deep h1
      font-size: 35px
    &::v-deep p
      text-align: justify
      font-size: 18px
    &::v-deep img
      height: 150px
      width: 150px
      margin-top: 2rem
      margin-left: 1rem

@media screen and (max-width: 539.5px)
  .banner-value
    &::v-deep h1
      font-size: 25px
      top: 25%

  #our-values
    padding: 1rem 1rem 3rem

  .item
    &::v-deep h1
      font-size: 30px
    &::v-deep p
      text-align: justify
      font-size: 18px
    &::v-deep img
      height: 125px
      width: 125px
      margin-top: 1rem
      margin-left: 1rem
</style>