<template>
  <div id="ourKey">
    <div class="main-content">
      <div class="title-container">
        <prismic-rich-text class="title" :field="slice.primary.title" />
      </div>
      <div class="content">
        <div class="item" v-for="item in slice.items" :key="item.id">
          <prismic-rich-text class="text" :field="item.date" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slice"],
  name: "our-key",
};
</script>

<style lang="sass" scoped>
#ourKey
  margin-top: 32px
  .main-content
    max-width: 1280px
    margin: 0 auto
    padding-bottom: 10rem
    .title-container
      &::v-deep p
        font-weight: bold
        font-size: 48px
        line-height: 60px
        text-transform: uppercase
        margin-bottom: 71px
        strong
          color: #00A2A7
    .content
      display: flex
      background: url("@/images/Our key/Timeline/TimeLine_desktop.png") no-repeat
      z-index: 1

      padding-top: 80px
      .item
        width: 207px
        .text
          width: 200px
          text-align: center
          margin: auto
          margin-top: 230px
          margin-left: 10px
          &::v-deep p
            font-weight: 600
            font-size: 18px
            line-height: 23px
            color: #373F51
            strong
              color: #373F51
              font-weight: 700
              font-size: 20px
              line-height: 25px
      .item:nth-child(1)
        position: relative
        bottom: 80px
      .item:nth-child(2)
        display: flex
        flex-direction: column-reverse
        position: relative
        bottom: 250px
        right: 1px
      .item:nth-child(3)
        position: relative
        right: 0px
        bottom: 80px
      .item:nth-child(4)
        display: flex
        flex-direction: column-reverse
        position: relative
        bottom: 250px
        right: 0px
      .item:nth-child(5)
        position: relative
        right: 0px
        bottom: 80px
      .item:nth-child(6)
        display: flex
        flex-direction: column-reverse
        position: relative
        bottom: 250px
        right: 0px
@media screen and (min-width: 1000px) and (max-width: 1919px) // Ecran medium //
  #ourKey
    .main-content
      max-width: 900px
      .content
        background: url("@/images/Our key/Timeline/TimeLine_desktop-1000.png") no-repeat
        padding-top: 80px
        .item
          .text
            margin-left: -17px
        .item:nth-child(1)
          position: relative
          bottom: 95px
        .item:nth-child(2)
          display: flex
          flex-direction: column-reverse
          position: relative
          bottom: 250px
          right: 50px
        .item:nth-child(3)
          position: relative
          right: 80px
          bottom: 95px
        .item:nth-child(4)
          display: flex
          flex-direction: column-reverse
          position: relative
          bottom: 250px
          right: 120px
        .item:nth-child(5)
          position: relative
          right: 150px
          bottom: 95px
        .item:nth-child(6)
          display: flex
          flex-direction: column-reverse
          position: relative
          bottom: 250px
          right: 180px
@media screen and (min-width: 768px) and (max-width: 999px) // Ecran Tablette //
  #ourKey
    .main-content
      max-width: 668px
      margin: 0 auto
      padding: 0
      background: url("@/images/Our key/Timeline/TimeLine_Tablet_MobileLarge .png") no-repeat
      background-position: center
      .title-container
        &::v-deep p
          font-size: 30px
          line-height: 38px
          margin-bottom: 0
          padding-bottom: 45rem
          strong
            font-size: 30px
            line-height: 38px
      .content
        background: none
        display: flex
        transform: rotate(270deg)
        padding-top: 0px
        .item
          width: 158px
          .text
            width: 200px
            margin-top: 280px
            margin-left: 113px
            transform: rotate(90deg)
            position: relative
            right: -9rem
            &::v-deep p
              color: red
              width: 200px
              font-style: normal
              font-weight: 600
              font-size: 18px
              line-height: 23px
              color: #373F51
              strong
                color: #373F51
                width: 43px
                height: 25px
                font-style: normal
                font-weight: 700
                font-size: 20px
                line-height: 25px
        .item:nth-child(1)
          bottom: 0px
        .item:nth-child(2)
          display: flex
          flex-direction: column-reverse
          position: relative
          bottom: 280px
          right: 12px
        .item:nth-child(3)
          position: relative
          right: 31px
          bottom: 0px
        .item:nth-child(4)
          display: flex
          flex-direction: column-reverse
          position: relative
          bottom: 280px
          right: 45px
        .item:nth-child(5)
          position: relative
          right: 55px
          top: 10px
        .item:nth-child(6)
          display: flex
          flex-direction: column-reverse
          position: relative
          bottom: 280px
          right: 60px
@media screen and (min-width: 480px) and (max-width: 767px) // Ecran Smartphone large //
  #ourKey
    .main-content
      max-width: 460px
      margin: 0 auto
      padding: 0 32px
      background: url("@/images/Our key/Timeline/TimeLine_Tablet_MobileLarge .png") no-repeat
      background-position: center
      .title-container
        &::v-deep p
          font-size: 30px
          line-height: 38px
          margin-bottom: 0
          padding-bottom: 45rem
          strong
            font-size: 30px
            line-height: 38px
      .content
        background: none
        display: flex
        transform: rotate(270deg)
        padding-top: 0px
        .item
          width: 158px
          .text
            width: 180px
            margin-top: 280px
            margin-left: 120px
            transform: rotate(90deg)
            position: relative
            right: -2rem
            &::v-deep p
              width: 200px
              font-style: normal
              font-weight: 600
              font-size: 18px
              line-height: 23px
              color: #373F51
              strong
                color: #373F51
                width: 43px
                height: 25px
                font-style: normal
                font-weight: 700
                font-size: 20px
                line-height: 25px
        .item:nth-child(1)
          bottom: 40px
        .item:nth-child(2)
          display: flex
          flex-direction: column-reverse
          position: relative
          bottom: 280px
          right: 20px
        .item:nth-child(3)
          position: relative
          right: 30px
          bottom: 40px
        .item:nth-child(4)
          display: flex
          flex-direction: column-reverse
          position: relative
          bottom: 280px
          right: 40px
        .item:nth-child(5)
          position: relative
          right: 60px
          bottom: 20px
        .item:nth-child(6)
          display: flex
          flex-direction: column-reverse
          position: relative
          bottom: 280px
          right: 65px
@media screen and (max-width: 479px) // Ecran Smartphone  //
  #ourKey
    .main-content
      max-width: 360px
      margin: 0 auto
      background: url("@/images/Our key/Timeline/TimeLine_Tablet_MobileLarge .png") no-repeat
      background-position: center
      .title-container
        &::v-deep p
          font-size: 30px
          line-height: 38px
          margin-bottom: 0
          padding: 3rem 0 35rem
          strong
            font-size: 30px
            line-height: 38px
      .content
        background: none
        display: flex
        transform: rotate(270deg)
        padding-top: 0px
        .item
          width: 158px
          .text
            width: 172px
            margin-top: 280px
            margin-left: 80px
            transform: rotate(90deg)
            position: relative
            right: 6rem
            &::v-deep p
              width: 127px
              font-style: normal
              font-weight: 600
              font-size: 16px
              line-height: 20px
              color: #373F51
              strong
                color: #373F51
                width: 43px
                height: 25px
                font-style: normal
                font-weight: 700
                font-size: 18px
                line-height: 23px
        .item:nth-child(1)
          position: relative
          bottom: 0
        .item:nth-child(2)
          display: flex
          flex-direction: column-reverse
          position: relative
          bottom: 13rem
        .item:nth-child(3)
          position: relative
          bottom: 0
          right: 20px
        .item:nth-child(4)
          display: flex
          flex-direction: column-reverse
          position: relative
          bottom: 13rem
          right: 35px
        .item:nth-child(5)
          position: relative
          bottom: 0
          right: 25px
        .item:nth-child(6)
          display: flex
          flex-direction: column-reverse
          position: relative
          bottom: 13rem
          right: 30px
</style>