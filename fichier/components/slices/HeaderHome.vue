<template>
  <section class="header-home">
    <div class="blank"></div>
    <div class="content">
      <!-- <pre v-html="JSON.stringify(slice, null, 4)"></pre> -->
      <prismic-rich-text :field="slice.primary.title" />
      <prismic-rich-text :field="slice.primary.text" />
      <prismic-link :field="slice.primary.button_link" class="btn">
        {{ $prismic.asText(slice.primary.button_label) }}
      </prismic-link>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"]
};
</script>

<style lang="sass" scoped>
.header-home
  height: 814px
  margin: 3rem auto 0
  display: flex
  justify-content: center
  background: url("~/images/Home_page_elements/1920.png") no-repeat
  background-position: 45% 50%

.blank
  display: none

.content
  max-width: 1280px
  padding-top: 210px
  &::v-deep h1
    text-transform: uppercase
    font-size: 44px
    font-weight: 700
    line-height: 105%
    color: $darkColor
    strong
      color: $greenBrightColor
    &:last-child
        margin-bottom: 16px
  &::v-deep p
    margin-bottom: 40px
    padding-right: 65%
    font-size: 20px
    color: $darkColor

.btn
  padding: 12px 38px
  text-decoration: none
  font-size: 20px
  font-weight: 300
  color: #f1f1f1
  background-color: #373f51
  border: none
  border-radius: 1px
  box-shadow: 0 3px 5px #373f51
  outline: none
  cursor: pointer

@media screen and (min-width: 1000px) and (max-width: 1919px)
  .header-home
    height: 550px
    background: url("~/images/Home_page_elements/1000.png") no-repeat
    background-position: 45% 50%

  .content
    max-width: 900px
    padding: 100px 0 30px
    &::v-deep h1
      font-size: 30px
      &:last-child
        margin-bottom: 16px
    &::v-deep p
      font-size: 16px

  .btn
    padding: 8px 32px
    font-size: 16px

@media screen and (min-width: 768px) and (max-width: 999px)
  .header-home
    height: 428px
    background: url("~/images/Home_page_elements/768.png") no-repeat
    background-position: 40% 50%

  .content
    max-width: 668px
    padding: 50px 0 30px
    &::v-deep h1
      padding-right: 60%
      font-size: 30px
      &:last-child
        margin-bottom: 16px
    &::v-deep p
      padding-right: 60%
      font-size: 16px

  .btn
    padding: 8px 32px
    font-size: 16px

@media screen and (min-width: 480px) and (max-width: 767px)
  .header-home
    height: 100%
    margin: 0
    flex-direction: column
    background: none

  .blank
    margin-top: 3rem
    height: 300px
    display: block
    background: url("~/images/Home_page_elements/480.png") no-repeat
    background-position: center

  .content
    max-width: $tabletContainer
    margin: 0 auto
    padding: 30px 0 82px
    &::v-deep h1
      font-size: 35px
      line-height: 100%
      &:last-child
        margin-bottom: 25px
    &::v-deep p
      margin-bottom: 35px
      padding-right: 0
      font-size: 16px

  .btn
    width: 100%
    padding: 8px 0
    display: block
    text-align: center
    font-size: 16px

@media screen and (max-width: 479px)
  .header-home
    height: 100%
    margin: 0
    flex-direction: column
    background: none

  .blank
    margin-top: 3rem
    height: 300px
    display: block
    background: url("~/images/Home_page_elements/480.png") no-repeat
    background-position: 57% 50%

  .content
    max-width: $mobileContainer
    margin: 0 auto
    padding: 30px 0 82px
    &::v-deep h1
      font-size: 35px
      line-height: 100%
      &:last-child
        margin-bottom: 25px
    &::v-deep p
      margin-bottom: 35px
      padding-right: 0
      font-size: 16px

  .btn
    width: 100%
    padding: 8px 0
    display: block
    text-align: center
    font-size: 16px
</style>
