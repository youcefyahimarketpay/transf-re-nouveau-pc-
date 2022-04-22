<template>
  <section class="text-with-divider">
    <div class="content">
      <div class="divider">
        <img src="./../../images/logo.png" />
      </div>
      <div class="content">
        <prismic-rich-text :field="slice.primary.text" class="text" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "text-with-divider",
};
</script>

<style lang="sass" scoped>
.text
  padding: 3rem
  text-align: center
  font-size: 25px
  font-weight: 300
  &::v-deep h2
    margin-bottom: 2rem
  &::v-deep p:nth-child(3)
    margin-bottom: 2rem
  &::v-deep p:nth-child(5)
    margin-bottom: 2rem

.divider
  display: flex
  justify-content: center
  align-items: center
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
</style>