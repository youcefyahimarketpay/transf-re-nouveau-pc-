<template>
  <section class="payment-method" id="payment-method">
    <div class="content">
      <prismic-rich-text :field="slice.primary.title" />
      <div class="images">
        <picture class="icon" v-for="item in slice.items" :key="item.id">
          <prismic-image :field="item.icon" />
        </picture>
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
.payment-method
  margin: 135px 0 0
  background-color: $grayColor

.content
  max-width: 1280px
  margin: 0 auto
  padding: 55px 0 105px
  &::v-deep h2
    margin-bottom: 70px
    text-align: center
    text-transform: uppercase
    font-weight: 700
    font-size: 48px
    line-height: 60px
    strong
      color: #00A2A7

.images
  // padding: 0 50px
  display: flex
  // justify-content: space-between
  align-items: center
  flex-wrap: wrap

.icon
  height: 85px
  width: 213px
  display: flex
  justify-content: center
  align-items: center

@media screen and (min-width: 1000px) and (max-width: 1919px)
  .payment-method
    margin: 100px 0 0

  .content
    max-width: 900px
    padding: 50px 0
    &::v-deep h2
      margin-bottom: 50px
      font-size: 30px
      line-height: 38px

  .icon
    width: 150px

@media screen and (min-width: 768px) and (max-width: 999px)
  .payment-method
    margin: 100px 0 0

  .content
    max-width: 668px
    padding: 50px 0
    &::v-deep h2
      margin-bottom: 50px
      font-size: 30px
      line-height: 38px

  .icon
    width: 110px

@media screen and (min-width: 480px) and (max-width: 767px)
  .payment-method
    margin: 100px 0 0

  .content
    max-width: 416px
    padding: 50px 0
    &::v-deep h2
      margin-bottom: 50px
      font-size: 30px
      line-height: 38px

  .icon
    width: 85px

@media screen and (max-width: 479px)
  .payment-method
    margin: 60px 0 0

  .content
    max-width: 296px
    padding: 50px 0
    &::v-deep h2
      margin-bottom: 50px
      font-size: 30px
      line-height: 38px

  .icon
    width: 75px
</style>
