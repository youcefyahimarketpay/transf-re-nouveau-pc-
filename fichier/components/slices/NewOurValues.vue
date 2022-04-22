<template>
  <section id="ourValues">
    <div class="bg"></div>
    <div class="main-content">
      <prismic-rich-text :field="slice.primary.title" />*
      <div class="content">
        <div class="item" v-for="item in slice.items" :key="item.id">
          <div class="img-container"><prismic-image :field="item.image" /></div>
          <div class="text-container">
            <prismic-rich-text :field="item.title" />
            <prismic-rich-text :field="item.text" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "new-our-values",
};
</script>

<style lang="sass" scoped>
#ourValues

  width: 100%
  margin: auto

  position: relative
  padding: 20rem 0
  



  .bg

    position: absolute
    width: 6000px
    transform: rotate(-7deg)
    background-image: url("@/images/our value/Fond value.png")
    background-repeat: no-repeat
    left: (-125%)
    height: 926px
    max-width: 6000px
    
 
    
  

  .main-content
    max-width: 1280px
    margin: auto
    text-align: right

    &::v-deep h2
      font-style: normal
      font-weight: bold
      font-size: 48px
      line-height: 60px
      margin-bottom: 55px
      text-transform: uppercase
      color: white
      padding-top: 2px
      z-index: 1
      position: relative
      strong
        color: #373F51
    .content
      display: flex
      width: 1279px
      height: 567px
      margin-top: 0rem
      z-index: 1
      position: relative
      .item
        margin-right: 24px
        text-align: center
        background-color: white
        &::v-deep img
          width: 238px
          height: 238px
          margin-bottom: 10px

        &::v-deep h3

          font-style: normal
          font-weight: 700
          font-size: 24px
          line-height: 30px
          margin-bottom: 8px
          margin-top: 10px
          text-transform: uppercase
          color: #00787D
        &::v-deep p
          width: 149px
          height: 160px
          margin: auto

@media screen and (min-width: 1000px) and (max-width: 1919px) // Ecran medium //
  #ourValues
    background-image: url("@/images/fond vert.png")
    background-repeat: no-repeat

    max-width: 100%
    padding: 21rem 0

    .bg
      display: none
    .main-content
      max-width: 1280px
      margin: auto
      text-align: right
      &::v-deep h2
        font-style: normal
        font-weight: bold
        font-size: 48px
        line-height: 60px
        text-transform: uppercase
        color: white
        margin-right: 30px
        padding-top: 5px
        z-index: initial
        strong
          color: #373F51
      .content
        display: flex
        width: 898px
        height: 470px
        margin: auto
        z-index: initial
        .item
          margin-right: 24px
          text-align: center
          background-color: white
          width: 164px
          height: 467px
          &::v-deep img
            width: 160px
            height: 161px
            margin-bottom: 0px
          &::v-deep h3
            font-style: normal
            font-weight: 700
            font-size: 24px
            line-height: 130%
            margin-bottom: 8px
            text-transform: uppercase
            color: #00787D
          &::v-deep p
            font-size: 16px
            line-height: 20px
            width: 148px
            height: 160px
            margin: auto
@media screen and (min-width: 768px) and (max-width: 999px) // Ecran Tablette //
  #ourValues
    background-image: url("@/images/our value/Rectangle 3 (4).png")
    background-repeat: no-repeat
    background-size: cover
    max-width: 100%
    padding-top: 101px
    padding-bottom: 230px
    .bg
      display: none

      margin-top: 0px
      padding-top: 126px
    .main-content
      max-width: 668px
      margin: auto
      text-align: right

      &::v-deep h2
        font-style: normal
        font-weight: bold
        font-size: 48px
        line-height: 60px
        text-transform: uppercase
        color: white
        margin-right: 30px
        padding-top: 0px
        z-index: initial
        strong
          color: #373F51
      .content
        display: initial
        width: 553px

        margin: auto
        z-index: initial
        .item
          margin-right: 24px
          text-align: left
          background-color: white
          width: 553px
          height: 195px
          display: flex
          margin: auto
          margin-bottom: 20px
          &::v-deep img
            width: 219px
            height: 190px
            margin-bottom: 10px
          &::v-deep h3
            margin-top: 5px
            font-style: normal
            font-weight: 700
            font-size: 24px
            line-height: 130%
            margin-bottom: 8px
            margin-top: 18px
            margin-left: 18px
            text-transform: uppercase
            color: #00787D
          &::v-deep p
            font-size: 16px
            line-height: 20px
            width: 298px
            height: 120px
            margin: auto
            margin-left: 18px
@media screen and (min-width: 480px) and (max-width: 767px) // Grand Ecran Smartphone//
  #ourValues
    background-image: url("@/images/Fond responsive.png")
    background-repeat: no-repeat
    background-size: cover
    max-width: 100%
    padding-top: 101px
    padding-bottom: 120px
    .bg
      display: none

    .main-content
      max-width: 100%
      margin: auto
      text-align: right
      z-index: initial
      &::v-deep h2
        font-style: normal
        font-weight: bold
        font-size: 48px
        line-height: 60px
        padding-top: 40px
        text-transform: uppercase
        color: white
        margin-right: 30px
        z-index: initial
        strong
          color: #373F51
      .content
        display: initial
        width: 414px
        height: 2875px
        z-index: initial
        .item
          text-align: center
          background-color: white
          width: 237px
          height: 553px
          margin: auto
          margin-bottom: 24px
          &::v-deep img
            width: 235px
            height: 238px
            margin-bottom: 0px
          &::v-deep h3
            font-style: normal
            font-weight: 700
            font-size: 24px
            line-height: 130%
            margin-bottom: 8px
            text-transform: uppercase
            color: #00787D
          &::v-deep p
            font-size: 16px
            line-height: 20px
            width: 148px
            height: 160px
            margin: auto
@media screen and (max-width: 479px) // Ecran smartphone
  #ourValues
    background-image: url("@/images/Fond responsive.png")
    background-repeat: no-repeat
    background-size: cover
    max-width: 100%

    margin: auto
    padding-top: 101px
    padding-bottom: 120px
    .bg
      display: none
    .main-content
      max-width: 100%
      margin: auto
      text-align: right
      &::v-deep h2
        font-style: normal
        font-weight: bold
        font-size: 48px
        line-height: 60px
        text-transform: uppercase
        color: white
        margin-right: 30px
        padding-top: 60px
        z-index: initial
        strong
          color: #373F51
      .content
        display: initial
        width: 294px
        height: 3250px
        z-index: initial
        .item
          text-align: center
          background-color: white
          width: 294px
          height: 474px
          margin: auto
          margin-bottom: 24px
          &::v-deep img
            width: 294px
            height: 255px
            margin-bottom: 0px
          &::v-deep h3
            font-style: normal
            font-weight: 700
            font-size: 24px
            line-height: 130%
            margin-bottom: 8px
            text-transform: uppercase
            color: #00787D
          &::v-deep p
            font-size: 16px
            line-height: 20px
            width: 244px
            height: 140px
            margin: auto
</style>