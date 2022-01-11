<template>
  <section class="headline-about">
    <div class="content">
      <prismic-rich-text :field="slice.primary.title" />
      <prismic-rich-text :field="slice.primary.text" />
      <prismic-image :field="slice.primary.banner" />
      <!-- buttons -->
      <button class="contact-btn">
        <a href="#footer">{{ $prismic.asText(slice.items[0].button_label) }}</a>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "headline-about",
  head() {
    return {
      title: "About us | Discover our history",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Founded in 2016, Market Pay is a payment fintech providing an international omnichannel platform, knowing the challenges of the retail world.",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.headline-about
  height: 90vh
  max-width: 55%
  padding: 8rem 5rem 5rem
  &::v-deep h1
    margin-bottom: 2rem
    color: #252b40
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

.contact-btn
  margin-top: 3rem
  padding: 0.5rem 2rem
  font-size: 20px
  font-weight: 300
  background-color: #252b40
  border: none
  border-radius: 20px
  outline: none
  cursor: pointer
  transition: background-color 0.4s
  a
    text-decoration: none
    color: #fff
  &:hover
    background-color: rgba(36,43,64,.6980392156862745)

@media screen and (min-width: 1024px) and (max-width: 1024px)
  .headline-about
    height: 40vh
    &::v-deep h1
      font-size: 45px
    &::v-deep img
      height: 40vh

@media screen and (min-width: 767px) and (max-width: 1023.5px)
  .headline-about
    height: 50vh
    &::v-deep h1
      font-size: 40px
    &::v-deep p
      font-size: 18px
    &::v-deep img
      height: 50vh

  .contact-btn
    font-size: 18px

@media screen and (min-width: 540px) and (max-width: 767px)
  .headline-about
    height: 100%
    max-width: 100%
    background-color: #f1f1f1
    &::v-deep h1
      font-size: 40px
    &::v-deep img
      display: none

  .contact-btn
    font-size: 18px

@media screen and (max-width: 539.5px)
  .headline-about
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

  .contact-btn
    padding: 0.5rem 1rem
    font-size: 18px
</style>