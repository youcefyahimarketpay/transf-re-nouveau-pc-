<template>
  <section id="presentation" class="presentation presentation-pay-online">
    <div class="content">
      <div class="image">
        <prismic-image :field="slice.primary.img_op" />
      </div>
      <div class="text">
        <prismic-rich-text :field="slice.primary.text" />
      </div>
    </div>
    <div class="details">
      <prismic-rich-text :field="slice.primary.details" />
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "presentation-pay-online",

};
</script>

<style lang="sass" scoped>
.content
  padding: 3rem 0
  display: flex
  justify-content: center
  align-items: flex-start

.image
  width: 45%
  display: flex
  justify-content: center
  align-items: center
  &::v-deep img
    width: 100%
    padding-right: 3rem

.text
  width: 45%
  padding-right: 3rem
  &::v-deep p
    margin-bottom: 1rem
    font-size: 25px
    font-weight: 300

.details
  padding: 3rem 10rem
  font-size: 25px
  font-weight: 300

@media screen and (min-width: 1024px) and (max-width: 1024px)
  .content
    padding: 12rem 0 3rem

  .image
    &::v-deep img
      width: 100%
      margin-left: -3rem
      padding-right: 0

  .text
    &::v-deep p
      font-size: 20px

@media screen and (max-width: 1023.5px)
  .content
    padding: 3rem 0
    display: flex
    justify-content: center
    align-items: center
    flex-wrap: wrap

  .image
    width: 100%
    padding: 0 3rem
    margin-bottom: 2rem
    &::v-deep img
      width: 100%
      margin-left: 0
      padding-right: 0

  .text
    width: 100%
    padding: 0 3rem
    &::v-deep p
      font-size: 20px

  .details
    width: 100%
    margin: -2rem 0 3rem
    padding: 0 3rem
    &::v-deep p
      font-size: 18px
</style>