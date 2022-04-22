<template>
  <div class="list">
    <div class="container">
      <h2>{{ this.slice.primary.title[0].text }}</h2>
      <div class="items-container">
        <div class="items" v-for="item in slice.items" :key="item.id">
          <img :src="item.image.url" alt="" />
          <p class="number">{{ item.number[0].text }}</p>
          <p class="text">{{ item.text[0].text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slice"],
  name: "career-numbers-list",
};
</script>

<style lang="sass" scoped>
.list
  background-color: #F3F5F6
  margin-bottom: 24px
  margin-top: 41px
  .container
    width: $largeContainer
    margin: auto
   

    h2
      text-align: center
      font-style: normal
      font-weight: 700
      font-size: 25px
      line-height: 31px
      text-transform: uppercase
      color: #00A2A7
      padding-top: 49px
      margin-bottom: 59px
    .items-container
     
      display: flex

      justify-content: space-between
      width: 1062px

      margin: auto
      padding-bottom: 41px
      .items
       
        text-align: center
        width: 193px
        height: 128px

        .number
          font-style: normal
          font-weight: 900
          font-size: 20px
          line-height: 25px
          text-transform: uppercase
          color: #00A2A7
          margin-top: 16px
        .text
          font-style: normal
          font-weight: 600
          font-size: 18px
          line-height: 23px
          color: #373F51
@media screen and (min-width: 1000px) and (max-width: 1919px)
  .list
    .container
      width: $mediumContainer
      .items-container
        width: 900px
@media screen and (min-width: 768px) and (max-width: 999px)
  .list
    .container
      width: $shortContainer
      .items-container
        width: 728px
@media screen and (min-width: 480px) and (max-width: 767px)
  .list
    .container
      width: 412px
      h2
        width: 416px
      .items-container
        width: 412px
        display: grid
        grid-template-columns: repeat(2, 2fr)
        grid-template-rows: 160px
@media screen and (max-width: 479px)
  .list
    .container
      width: $mobileContainer
      .items-container
        width: $mobileContainer
        display: grid
        grid-template-columns: repeat(2, 2fr)
        grid-template-rows: 160px
        .items
          width: 148px
</style>