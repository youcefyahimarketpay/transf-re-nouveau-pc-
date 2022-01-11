<template>
  <section id="presentation" class="presentation presentation-about-page">
    <div class="content">
      <div class="item" v-for="item in slice.items" :key="item.id">
        <div class="text">
          <prismic-rich-text :field="item.title" />
          <prismic-rich-text :field="item.text" />
        </div>
        <div class="image"><prismic-image :field="item.image" /></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
   head:{
    title:"About Us | Discover our story, our values, our offices",
  },
  meta:[{
    hid:'description',
    name:'description',
    content:'Founded in 2016, Market Pay is a payment fintech providing an international omnichannel platform, knowing the challenges of the retail world.'
  }],
  props: ["slice"],
  name: "presentation-about-page",
};
</script>

<style lang="sass" scoped>
.content
  margin: 3rem 0

.item:nth-child(1)
  &::v-deep h1
    display: flex
    justify-content: flex-end
    align-items: center
    width: 40%
    padding: 1rem 2rem
    margin-bottom: 2rem
    color: white
    background-color: #242b40
    border-radius: 0 20px 20px 0
    text-transform: uppercase
    font-weight: 400
  &::v-deep p
    padding: 1rem 5rem
    text-align: center
    font-size: 20px
    font-weight: 300

.item:nth-child(2)
  display: flex
  flex-direction: row-reverse
  justify-content: space-between
  aligh-items: center
  margin: 3rem 0
  .image
    height: 400px
    width: 60%
    display: flex
    justify-content: flex-end
    align-items: center
    &::v-deep img
      height: 400px
      width: 400px
  .text
    height: 400px
    width: 40%
    padding-left: 2rem
    &::v-deep h1
      background-color: #2c8489
      color: white
      margin-bottom: 1rem
      padding: 1rem
      border-radius: 20px 0 0 20px
      text-transform: uppercase
      font-weight: 400
    &::v-deep p
      font-weight: 300
      line-height: 2rem
      font-size: 20px

.item:nth-child(3)
  padding: 3rem 0
  &::v-deep h1
    width: 40%
    padding: 1rem
    display: flex
    justify-content: flex-end
    text-transform: uppercase
    font-weight: 400
    color: white
    background-color: #76a6aa
    border-radius: 0 20px 20px 0
  &::v-deep ul
    list-style: none
    padding-top: 3rem
    position: relative
    display: flex
    justify-content: space-around
    align-items: center
    font-size: 18px
    font-weight: 300
    
    li::after
      content: ""
      height: 15px
      width: 15px
      margin-left: 0.6rem
      position: absolute
      top: 4.8rem
      display: flex
      justify-content: space-around
      align-items: center
      color: #eb4034
      background-color: #2c8489
      border-radius: 50%
      z-index: 1
  &::v-deep ol
    list-style: none
    padding-top: 3rem
    position: relative
    display: flex
    justify-content: space-around
    align-items: center
    font-size: 18px
    font-weight: 300
    &::before
      content: ""
      height: 5px
      width: 95%
      position: absolute
      top: 0.8rem
      background-color: #444
    li
      padding: 0 2rem
      text-align: center

@media screen and (min-width: 767px) and (max-width: 1023.5px)
  .item:nth-child(3)
    .text
      margin-bottom: -25rem
    &::v-deep ul
      padding-left: 3rem
      flex-direction: column
      align-items: flex-start
      li
        margin-bottom: 1rem
        &::after
          margin-left: 0.6rem
          position: relative
          top: -1.2rem
          left: 3rem
    &::v-deep ol
      padding-top: 0
      top: -20.1rem
      left: 9rem
      flex-direction: column
      align-items: flex-start
      &::before
        display: none
      li
        margin-bottom: 1.95rem
        padding: 0
        text-align: center

@media screen and (min-width: 540px) and (max-width: 767px)
  .item:nth-child(1)
    &::v-deep h1
      width: 60%
    &::v-deep p
      padding: 1rem 3rem

  .item:nth-child(2)
    .image
      &::v-deep img
        height: 290px
        width: 290px
    .text
      width: 60%
      padding-left: 1rem

  .item:nth-child(3)
    .text
      margin-bottom: -25rem
    &::v-deep h1
      width: 60%
    &::v-deep ul
      padding-left: 3rem
      flex-direction: column
      align-items: flex-start
      li
        margin-bottom: 1rem
        &::after
          margin-left: 0.6rem
          position: relative
          top: -1.2rem
          left: 3rem
    &::v-deep ol
      padding-top: 0
      top: -20.1rem
      left: 9rem
      flex-direction: column
      align-items: flex-start
      &::before
        display: none
      li
        margin-bottom: 1.95rem
        padding: 0
        text-align: center

@media screen and (max-width: 539.5px)

  .item:nth-child(1)
    &::v-deep h1
      width: 100%
      margin-bottom: 1rem
      padding: 0
      justify-content: center
      color: #242b40
      background-color: #fff
      border-radius: 0
    &::v-deep p
      padding: 1rem
      &:nth-child(2)
        padding-top: 0

  .item:nth-child(2)
    flex-direction: column
    margin: 1rem 0
    .image
      height: 100%
      width: 100%
      padding: 1rem
      justify-content: center
      &::v-deep img
        height: 100%
        width: 100%
    .text
      height: 100%
      width: 100%
      padding: 1rem 0
      text-align: center
      &::v-deep h1
        background-color: #fff
        color: #2c8489
        padding: 0
        border-radius: 0
      &::v-deep p
        font-size: 18px

  .item:nth-child(3)
    padding: 1rem 0
    .text
      margin-bottom: -22rem
    &::v-deep h1
      width: 100%
      padding: 0
      justify-content: center
      color: #76a6aa
      background-color: #fff
      border-radius: 0
    &::v-deep ul
      padding-left: 1rem
      flex-direction: column
      align-items: flex-start
      li
        margin-bottom: 1rem
        &::after
          margin-left: 0
          position: relative
          top: -1.2rem
          left: 3rem
    &::v-deep ol
      width: 70%
      padding-top: 0
      top: -20.2rem
      left: 5.5rem
      flex-direction: column
      align-items: flex-start
      &::before
        display: none
      li
        margin-bottom: 0.5rem
        padding: 0
        text-align: start
        &:nth-child(3)
          margin-bottom: 2.1rem
        &:nth-child(5)
          margin-bottom: 2rem
</style>