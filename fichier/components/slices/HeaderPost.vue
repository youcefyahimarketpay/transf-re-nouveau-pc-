<template>
  <section class="header-post">
    <div class="content">
      <prismic-image :field="slice.primary.banner" />
      <div class="block-text">
        <prismic-rich-text :field="slice.primary.rubric" />
        <p>{{ formattedDate }}</p>
        <prismic-rich-text :field="slice.primary.title" />
        <prismic-rich-text :field="slice.primary.text" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "header-post",
  props: ["slice"],
  head() {
    return {
      title: "Market Pay | Blog",
    };
  },
  data() {
    return {
      formattedDate: "",
    };
  },
  created() {
    this.formattedDate = Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(new Date(this.slice.primary.date));
  },
};
</script>

<style lang="sass" scoped>
.content
  height: 800px
  padding: 8rem 5rem
  position: relative
  &::v-deep img
    height: 800px
    width: 100%
    position: absolute
    top: 0
    left: 0
    object-fit: cover
    z-index: -1
  .block-text
    padding: 3rem 5rem
    position: absolute
    bottom: 0
    left: 50%
    transform: translateX(-50%)
    background-color: rgba(255, 255, 255, 0.8)
    border-radius: 50px 50px 0 0
    &::v-deep p
      margin-bottom: 0.5rem
      font-size: 20px
      font-weight: 300
      &:first-child
        color: #01a2a6
    &::v-deep h1
      margin-bottom: 2rem
      font-size: 30px
      font-weight: 400
      color: #01a2a6

@media screen and (min-width: 1024px) and (max-width: 1024px)
  .content .block-text
    left: 30%
    transform: translateX(-22.5%)

@media screen and (min-width: 767px) and (max-width: 1023.5px)
  .content
    height: 500px
    &::v-deep img
      height: 500px
    .block-text
      padding: 2rem 3rem
      left: 30%
      transform: translateX(-20%)
      &::v-deep p
        font-size: 18px
      &::v-deep h1
        margin-bottom: 1rem
        font-size: 25px
        font-weight: 400
        color: #01a2a6

@media screen and (min-width: 540px) and (max-width: 767px)
  .content
    height: 500px
    &::v-deep img
      height: 500px
    .block-text
      padding: 2rem 2rem 1rem
      left: 20%
      transform: translateX(-12%)
      &::v-deep p
        font-size: 18px
      &::v-deep h1
        margin-bottom: 1rem
        font-size: 25px
        font-weight: 400
        color: #01a2a6

@media screen and (max-width: 539.5px)
  .content
    height: 400px
    &::v-deep img
      height: 400px
    .block-text
      padding: 1rem 1.5rem
      left: 17%
      transform: translateX(-10%)
      &::v-deep p
        font-size: 16px
      &::v-deep h1
        margin-bottom: 1rem
        font-size: 20px
</style>