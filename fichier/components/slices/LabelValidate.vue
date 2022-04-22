<template>
  <section class="validate-contact-form">
    <div class="container">
      <div class="content">
        <div class="text">
          <prismic-rich-text :field="slice.primary.text" />
        </div>
        <div class="other-question">
          <prismic-rich-text :field="slice.primary.other_question" />
          <button class="btn">
            <prismic-link :field="slice.primary.button_link">
              {{ $prismic.asText(slice.primary.button_label) }}
            </prismic-link>
          </button>
        </div>
      </div>
      <div class="image">
        <img src="./../../images/contact/Image du fond (short).png" alt="" />
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
.validate-contact-form
  background-color: #6da7ab

.container
  max-width: 1280px
  margin: 0 auto
  padding: 50px 0
  background: url("~/images/contact/Image du fond.png") no-repeat
  background-position: 65% 100%

.image
  display: none

.content
  width: 303px
  margin-left: 215px
  padding: 0 5px

.text
  margin: 86px 0 59px
  &::v-deep p
    text-align: center
    font-size: 14px
    font-weight: 400
    line-height: 17.6px
    color: #373f51
    &:first-child
      margin-bottom: 8px

.other-question
  display: flex
  flex-direction: column
  justify-content: center
  &::v-deep p
    margin-bottom: 15px
    text-align: center
    font-size: 14px
    font-weight: 600
    line-height: 17.6px
    color: #fff
  .btn
    margin: 0 37px 246px
    padding: 8px 32px
    text-align: center
    font-size: 16px
    font-weight: 400
    line-height: 19.2px
    color: #fff
    background-color: #373f51
    border: 1px solid #373f51
    box-shadow: 0px 1px 5px #373f51
    outline: none
    cursor: pointer
    a
      text-decoration: none
      color: #fff

@media screen and (min-width: 1000px) and (max-width: 1919px)
  .container
    max-width: 900px

  .content
    margin-left: 50px

@media screen and (min-width: 768px) and (max-width: 999px)
  .container
    max-width: 668px
    background-size: 140%

  .content
    margin-left: 0

@media screen and (min-width: 480px) and (max-width: 767px)
  .container
    max-width: 100%
    padding-bottom: 0
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    background: none

  .image
    margin-top: -15rem
    display: block
    img
      width: 100%

  .content
    margin-left: 0
    padding: 0

@media screen and (max-width: 479px)
  .container
    max-width: 100%
    padding-bottom: 0
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    background: none

  .image
    margin-top: -15rem
    display: block
    img
      width: 100%

  .content
    margin-left: 0
    padding: 0
</style>