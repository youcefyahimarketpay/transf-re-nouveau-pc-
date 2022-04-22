<template>
  <nuxt-link :to="link">
    <div class="client-poste">
      <prismic-rich-text :field="post.data.body[0].primary.title" />
      <prismic-rich-text :field="post.data.body[0].primary.text" />
      <button class="btn">
        {{ $prismic.asText(post.data.body[0].primary.button_label) }}
      </button>
      <div id="desktop">
        <prismic-image :field="post.data.body[0].primary.img_post" />
      </div>
      <div id="tablette">
        <prismic-image :field="post.data.body[0].primary.img_tablette" />
      </div>
      <div id="mobile">
        <prismic-image :field="post.data.body[0].primary.img_mobile" />
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import linkResolver from "~/app/prismic/link-resolver";

export default {
  name: "client-widget",
  props: ["post"],
  data() {
    return {
      link: ""
    };
  },
  created() {
    this.link = linkResolver(this.post);
  }
};
</script>

<style lang="sass" scoped>
#tablette,
#mobile
  display: none

a
  display: block
  text-decoration: none
  color: $darkColor

.client-poste
  position: relative
  &::v-deep img
    width: 100%
  &::v-deep h2
    padding: 0.5rem 1rem
    display: inline
    position: absolute
    top: 1.5rem
    left: -1.5rem
    text-transform: uppercase
    font-size: 20px
    background-color: $whiteColor
    box-shadow: 1px 1px 5px rgba(153, 195, 198, 0.7), -1px -1px 5px rgba(153, 195, 198, 0.7)
  &::v-deep p
    width: 270px
    display: inline
    position: absolute
    top: 5.5rem
    left: 2rem
    line-height: $shortLine

.btn
  padding: 0.5rem 1.5rem
  position: absolute
  bottom: 6rem
  left: 2rem
  color: $whiteColor
  background-color: $greenBrightColor
  border: none
  box-shadow: 1px 1px 5px rgba(153, 195, 198, 0.7), -1px -1px 5px rgba(153, 195, 198, 0.7)
  outline: none
  cursor: pointer

@media screen and (min-width: 1000px) and (max-width: 1919px)
  .client-poste
    &::v-deep h2
      top: 2rem
    &::v-deep p
      width: 300px
      top: 6rem
      font-size: $largeParaphSize
      line-height: $largeLine

  .btn
    bottom: 8rem
    font-size: $largeParaphSize

@media screen and (min-width: 768px) and (max-width: 999px)
  .client-poste
    &::v-deep p
      width: 300px
      top: 6rem
      font-size: $largeParaphSize
      line-height: $largeLine

  .btn
    bottom: 6rem
    font-size: $largeParaphSize

@media screen and (min-width: 480px) and (max-width: 767px)
  .client-poste
    &::v-deep h2
      top: 8px
      left: -16px
      font-size: 18px
    &::v-deep p
      width: 200px
      top: 56px
      left: 16px
      font-size: 14px
    .btn
      bottom: 56px
      left: 16px

@media screen and (max-width: 479px)
  #desktop
    display: none
  #tablette
    display: none
  #mobile
    display: block

  .client-poste
    &::v-deep h2
      top: 16px
      left: 24px
      font-size: 18px
    &::v-deep p
      width: 200px
      top: 72px
      left: 72px
      font-size: 16px
    .btn
      bottom: 240px
      left: 72px
</style>
