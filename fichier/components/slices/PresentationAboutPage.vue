<template>
  <section id="presentation" class="presentation presentation-about-page">
    <div class="main-content">
      <div class="item-content">
        <div class="item" v-for="item in slice.items" :key="item.id">
          <div class="text-content">
            <prismic-rich-text :field="item.title" />
            <prismic-rich-text :field="item.text" />
          </div>
          <div class="img-content">
            <div class="img"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "presentation-about-page",
  head: {
    title: "About Us | Discover our story, our values, our offices",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Founded in 2016, Market Pay is a payment fintech providing an international omnichannel platform, knowing the challenges of the retail world.",
      },
    ],
  },

};
</script>

<style lang="sass" scoped>
#presentation
  position: relative
  .main-content
    max-width: 1280px
    margin: 40px auto 0
    background-position: 22% 33%
    padding-bottom: 100px
    .item-content
      padding-top: 10px
      .item
        max-width: 100%
        display: flex
        .text-content
          width: 625px
          &::v-deep h1
            font-style: normal
            font-weight: 700
            font-size: 48px
            line-height: 60px
            display: flex
            align-items: center
            text-transform: uppercase
            margin-bottom: 50px
            color: #373F51
          &::v-deep p
            width: 625px
            margin-bottom: 23px
            font-style: normal
            font-weight: 300
            font-size: 16px
            line-height: 20px
            color: red
            color: #000000
      .item:nth-child(n+2)
        display: none
    .img-content
      width: 680px
      height: 443px
      .img
        width: 680px
        height: 443px
        background: url("@/images/Presentation about page/phone 1920.png")
        img
          width: 680px
          height: 443px

@media screen and (min-width: 1000px) and (max-width: 1919px) // Ecran medium //
  #presentation
    .main-content
      max-width: 900px
      .item-content
        .item
          width: 436px
          display: flex
          margin-right: 16px
          .polygone-container
            display: none
          .text-content
            width: 436px
            height: 251px
            margin: initial
            &::v-deep h1
              font-style: normal
              font-weight: 700
              font-size: 30px
              line-height: 38px
              align-items: center
              text-transform: uppercase
              margin-bottom: 50px
              color: #373F51
            &::v-deep p
              width: 436px
              margin-bottom: 23px
              font-style: normal
              font-weight: 300
              font-size: 16px
              line-height: 20px
              color: #000000
            .polygone3
              display: none
        .item:nth-child(n+2)
          display: none
      .img-content
        width: 441px
        height: 344px
        display: flex
        .img
          width: 441px
          height: 344px
          background: url("@/images/Presentation about page/phone 1000.png")
          img
            width: 441px
            height: 344px
        .second-polygoneContainer
          display: none
          .truc
            width: 59.9px
            height: 59.9px
            position: relative
            left: 96px
            top: 32px
            background-image: url("@/images/polygone/Polygon 13.png")
            background-repeat: no-repeat
          .machin
            width: 112.15px
            height: 112.15px
            position: relative
            top: 209.52px
            background-image: url("@/images/polygone/Polygon final.png")
            background-repeat: no-repeat

@media screen and (min-width: 768px) and (max-width: 999px) // Ecran Tablette //
  #presentation
    .main-content
      max-width: 668px
      margin: auto
      padding-bottom: 0px
      background: none
      .item-content
        padding-top: 10px
        .item
          width: 318px
          height: 448px
          display: flex
          margin-right: 16px
          .polygone-container
            display: none
          .text-content
            width: 318px
            height: 384px
            margin: auto
            &::v-deep h1
              font-style: normal
              font-weight: 700
              font-size: 30px
              line-height: 38px
              align-items: center
              text-transform: uppercase
              margin-bottom: 50px
              color: #373F51
            &::v-deep p
              width: 318px
              margin-bottom: 23px
              font-style: normal
              font-weight: 300
              font-size: 16px
              line-height: 20px
              color: #000000
            .polygone3
              display: none
        .item:nth-child(n+2)
          display: none
      .img-content
        width: 441px
        height: 344px
        display: flex
        margin-top: 60px
        .img
          width: 441px
          height: 344px
          background: url("@/images/Presentation about page/phone 798.png")
          img
            width: 441px
            height: 344px
            margin-top: 12px
        .second-polygoneContainer
          display: none
          .truc
            width: 59.9px
            height: 59.9px
            position: relative
            left: 96px
            top: 32px
            background-image: url("@/images/polygone/Polygon 13.png")
            background-repeat: no-repeat
          .machin
            width: 112.15px
            height: 112.15px
            position: relative
            top: 209.52px
            background-image: url("@/images/polygone/Polygon final.png")
            background-repeat: no-repeat

@media screen and (min-width: 480px) and (max-width: 767px) // Grand Ecran Smartphone//
  #presentation
    .main-content
      max-width: 100%
      margin: 0
      background: none
      .item-content
        width: 100%
        .item
          flex-direction: column
          align-items: center
          .polygone-container
            display: none
          .text-content
            width: 100%
            padding: 0 32px
            &::v-deep h1
              font-size: 30px
              line-height: 38px
            &::v-deep p
              width: 100%
            .polygone3
              display: none
        .item:nth-child(n+2)
          display: none
      .img-content
        width: 416px
        height: 324px
        display: flex
        margin: 0

        .img
          width: 416px
          height: 324px
          margin-left: 0px
          background: url("@/images/Presentation about page/phone 480.png")

          img
            width: 416px
            height: 324px

            margin-top: 12px

        .second-polygoneContainer
          display: none
          .truc
            width: 59.9px
            height: 59.9px
            position: relative
            left: 96px
            top: 32px
            background-image: url("@/images/polygone/Polygon 13.png")

            background-repeat: no-repeat
          .machin
            width: 112.15px
            height: 112.15px
            position: relative

            top: 209.52px
            background-image: url("@/images/polygone/Polygon final.png")

            background-repeat: no-repeat
@media screen and (max-width: 479px) // Ecran Smartphone  //
  #presentation
    .main-content
      max-width: 100%
      margin: 0
      background: none
      .item-content
        width: 100%
        .item
          flex-direction: column
          align-items: center
          .polygone-container
            display: none
          .text-content
            width: 100%
            padding: 0 32px
            &::v-deep h1
              font-size: 30px
              line-height: 38px
            &::v-deep p
              width: 100%
            .polygone3
              display: none

        .item:nth-child(n+2)
          display: none
      .img-content
        max-width: 100%
        margin: auto
        height: 292px
        display: flex
        margin: auto
        position: relative
        right: 15px

        .img
          width: 376px
          height: 292px
          margin-left: 0px
          background: url("@/images/Presentation about page/Image 360.png") no-repeat

          img
            width: 376px
            height: 292px

            margin-top: 12px

        .second-polygoneContainer
          display: none
          .truc
            width: 59.9px
            height: 59.9px
            position: relative
            left: 96px
            top: 32px
            background-image: url("@/images/polygone/Polygon 13.png")

            background-repeat: no-repeat
          .machin
            width: 112.15px
            height: 112.15px
            position: relative

            top: 209.52px
            background-image: url("@/images/polygone/Polygon final.png")

            background-repeat: no-repeat
</style>
