<template>
  <section id="presentation" class="presentation presentation-home-page">
    <div class="content">
      <div class="item" v-for="item in slice.items" :key="item.id">
        <prismic-rich-text :field="item.title" />
        <prismic-rich-text :field="item.text" />
        <prismic-image :field="item.image" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head:{
    title:"Market Pay | End-to-end payment solutions",
  },
  meta:[{
    hid:'description',
    name:'description',
    content:'Market Pay creates and operates end-to-end payment solutions in connection with your needs, to make payment processing the engine of your business growth'
  }],
  
  props: ["slice"],
  name: "presentation-home-page",
};
</script>

<style lang="sass" scoped>
.presentation-home-page
  padding: 3rem
  color: white
  background: linear-gradient(to right, #252B3E, #008081)

.content
  display: flex
  justify-content: space-between
  align-items: center
  flex-wrap: wrap

.item
  width: 22%
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  &::v-deep h1
    text-align: center
    font-size: 30px
    font-weight: 400
    font-style: italic
  &::v-deep p
    text-align: center
    font-weight: 300
  &::v-deep img
    height: 100px
    margin-top: 0.5rem
  &:last-child
    &::v-deep h1
      position: relative

@media screen and (min-width: 540px) and (max-width: 767px)
  .item
    width: 50%
    &:nth-child(4)
      margin-top: 1.5rem

@media screen and (max-width: 539.5px)
  .presentation-home-page
    padding: 1rem
  .item
    width: 100%
    margin: 1rem 0
</style>