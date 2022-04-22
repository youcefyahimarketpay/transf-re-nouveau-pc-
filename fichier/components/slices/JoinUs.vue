<template>
  <section class="contact-text">
    <div class="container">
      <prismic-image :field="slice.primary.img" />
      <prismic-image :field="slice.primary.img_mobile" />
      <div class="content">
        <prismic-rich-text :field="slice.primary.text" />
        <prismic-link :field="slice.primary.link_contact">
          {{ $prismic.asText(slice.primary.button_contact) }}
        </prismic-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
};
</script>

<style lang="sass" scoped>
.contact-text
  margin-top: 100px
  background-color: #e7ecf4

.container
  max-width: 1280px
  margin: 0 auto
  position: relative
  &::v-deep img
    width: 100%
    &:nth-child(2)
      display: none

.content
  position: absolute
  top: 350px
  &::v-deep p
    width: 700px
    margin-bottom: 8px
    font-size: 24px
    font-weight: 300
    line-height: 30.17px
    strong
      color: #01a2a6
  a
    margin-top: 1rem
    padding: 8px 75px
    position: absolute
    text-decoration: none
    color: #fff
    background-color: #373f51
    box-shadow: 0 1px 5px #373f51
    right: 0
    border: none
    outline: none

@media screen and (min-width: 1000px) and (max-width: 1919px)
  .container
    max-width: 900px

  .content
    top: 200px
    &::v-deep p
      width: 500px
      font-size: 20px
      line-height: 25.14px

@media screen and (min-width: 768px) and (max-width: 999px)
  .container
    max-width: 668px

  .content
    top: 50px
    &::v-deep p
      width: 380px
      font-size: 20px
      line-height: 25.14px

@media screen and (min-width: 480px) and (max-width: 767px)
  .contact-text
    padding: 32px 32px 0

  .container
    max-width: 480px
    margin: 0 auto

  .content
    position: absolute
    top: 0
    &::v-deep p
      width: 250px
      font-size: 16px
      line-height: 20.11px
    a
      margin-top: 0.5rem
      padding: 8px 50px
      font-size: 14px
      right: 3rem

@media screen and (max-width: 479px)
  .contact-text
    margin-top: 70px
    padding: 132px 32px 0

  .container
    max-width: 100%
    margin: 0
    &::v-deep img
      width: 100%
      &:nth-child(1)
        display: none
      &:nth-child(2)
        display: block

  .content
    top: -100px
    &::v-deep p
      width: 100%
      font-size: 20px
      font-weight: 300
      line-height: 25.17px
      strong
        color: #01a2a6
    a
      text-align: center
      left: 0
</style>