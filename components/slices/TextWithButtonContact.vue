<template>
  <section class="text-with-button-contact">
    <div class="content">
      <div class="divider">
        <img src="./../../images/logo.png" />
      </div>
      <prismic-rich-text :field="slice.primary.text" />
      <!-- buttons -->
      <button class="btn">
        <a href="#footer">{{ $prismic.asText(slice.primary.button_label) }}</a>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "text-with-button-contact",
};
</script>

<style lang="sass" scoped>
.text-with-button-contact
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  max-width: 800px
  margin: 0 auto
  text-align: center
  &::v-deep p
    font-size: 20px
    font-weight: 300

.btn
  margin: 1rem 0 3rem
  padding: 0.5rem 1.5rem
  text-transform: uppercase
  font-size: 20px
  font-weight: 300
  color: #fff
  background-color: #242b40
  border-radius: 30px
  outline: none
  cursor: pointer
  transition: background-color 0.4s
  &::v-deep a
    text-decoration: none
    color: #fff
  &:hover
    background-color: #242b40b2

.divider
  display: flex
  justify-content: center
  align-items: center
  padding-bottom: 1.5rem
  &::before
    content: ""
    background: linear-gradient(to left, #01a2a6, #fff)
    height: 3px
    width: 100%
    border-radius: 30px
  &::after
    content: ""
    background: linear-gradient(to right, #01a2a6, #fff)
    height: 3px
    width: 100%
    border-radius: 5px
  &::v-deep img
    height: 50px
    width: 50px
    margin: 0 0.5rem

@media screen and (min-width: 1024px) and (max-width: 1024px)
  .text-with-button-contact
    padding: 2rem 0

@media screen and (min-width: 767px) and (max-width: 1023.5px)
  .text-with-button-contact
    max-width: 600px
    margin: -3rem auto 0
    padding: 2rem 0

@media screen and (min-width: 540px) and (max-width: 767px)
  .text-with-button-contact
    max-width: 100%
    margin: -5rem auto 0
    padding: 2rem 1rem

@media screen and (max-width: 539.5px)
  .text-with-button-contact
    max-width: 100%
    margin: -3rem auto 0
    padding: 2rem 1rem
    font-size: 18px

  .btn
    padding: 0.5rem 1rem
    font-size: 18px
</style>