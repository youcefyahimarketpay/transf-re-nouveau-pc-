<template>
  <section class="headline-with-button">
    <div class="content">
      <prismic-rich-text :field="slice.primary.headline" />
      <prismic-rich-text :field="slice.primary.description" />
      <prismic-image :field="slice.primary.image" />
      <!-- buttons -->
      <button class="contact-btn">
        <a href="#footer">{{ $prismic.asText(slice.items[0].button_label) }}</a>
      </button>
      <button class="about-btn">
        <prismic-link :field="slice.items[1].button_link">{{
          $prismic.asText(slice.items[1].button_label)
        }}</prismic-link>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "headline-with-button",
  head() {
    return {
      title: "Market Pay | End-to-end payment solutions",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Market Pay creates and operates end-to-end payment solutions in connection with your needs, to make payment processing the engine of your business growth",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.headline-with-button
  height: 90vh
  max-width: 55%
  padding: 8rem 5rem 5rem
  &::v-deep h1
    margin-bottom: 2rem
    color: #01a2a6
    font-size: 55px
    font-weight: 400
  &::v-deep p
    color: #444
    font-size: 20px
    font-weight: 300
  &::v-deep img
    position: absolute
    top: 0
    left: 0
    height: 90vh
    width: 100%
    object-fit: cover
    z-index: -1

.contact-btn,
.about-btn
  margin-top: 3rem
  padding: 0.5rem 2rem
  font-size: 20px
  font-weight: 300
  border: none
  border-radius: 20px
  outline: none
  cursor: pointer
  transition: background-color 0.4s
  a
    text-decoration: none

.contact-btn
  margin-right: 1rem
  background-color: #01a2a6
  a
    color: #fff
  &:hover
    background-color: #008b89

.about-btn
  background-color: #dddcdc
  &:hover
    background-color: #c2c0c0
  &::v-deep a
    text-decoration: none
    color: #444

@media screen and (min-width: 1024px) and (max-width: 1024px)
  .headline-with-button
    height: 40vh
    &::v-deep h1
      font-size: 45px
    &::v-deep img
      height: 50vh

@media screen and (min-width: 767px) and (max-width: 1023.5px)
  .headline-with-button
    height: 60vh
    &::v-deep h1
      font-size: 40px
    &::v-deep p
      font-size: 18px
    &::v-deep img
      height: 60vh

  .contact-btn,
  .about-btn
    font-size: 18px

  .about-btn
    margin-top: 1rem

@media screen and (min-width: 540px) and (max-width: 767px)
  .headline-with-button
    height: 100%
    max-width: 100%
    background-color: #f1f1f1
    &::v-deep h1
      font-size: 40px
    &::v-deep img
      display: none

  .contact-btn,
  .about-btn
    font-size: 18px

@media screen and (max-width: 539.5px)
  .headline-with-button
    background-color: #f1f1f1
    height: 100%
    max-width: 100%
    padding: 7rem 2rem 2rem
    &::v-deep h1
      font-size: 40px
    &::v-deep p
      font-size: 20px
    &::v-deep img
      display: none

  .contact-btn,
  .about-btn
    padding: 0.5rem 1rem
    font-size: 18px

  .about-btn
    margin-top: 1rem
</style>
