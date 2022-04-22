<template>
  <section class="headline-about">
    <div class="blank"></div>
    <div class="content">
      <h1>about <span>us</span></h1>
      <prismic-rich-text :field="slice.primary.text" />
      <!-- buttons -->
      <button class="contact-btn">
        <a href="contact-us">{{
          $prismic.asText(slice.items[0].button_label)
        }}</a>
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
  height: 814px
  background: url("@/images/BannerHero.png") no-repeat
  background-position: 45% 50%

.blank
  display: none

.content
  max-width: 1280px
  padding-top: 170px
  margin: 3rem auto
  h1
    margin-bottom: 19px
    text-transform: uppercase
    font-size: 64px
    font-weight: 700
    line-height: 94px
    color: #373F51
    span
      color: #00A2A7
  &::v-deep p
    width: 516px
    margin-bottom: 30px
    font-size: 20px
    font-weight: 300
    line-height: 25px
    color: #373F51
  button
    padding: 8px 32px
  
    background: #373F51

    border: none
    background: linear-gradient(0deg, #373F51, #373F51)
    box-shadow: 0px 3px 6px #58647D
    border-radius: 2px
    a
      text-decoration: none
      color: #fff
      font-size: 20px

@media screen and (min-width: 1000px) and (max-width: 1919px)
  .headline-about
    height: 550px
    background: url("@/images/HeadLine about/Banner 1000.png") no-repeat
    background-position: 70% 50%

  .content
    max-width: 900px
    padding-top: 113px
    h1
      font-size: 40px
      line-height: 48px
    &::v-deep p
      width: 260px
      font-size: 16px
      color: #373F51
      line-height: 20px
    button
      a
        font-size: 16px

@media screen and (min-width: 768px) and (max-width: 999px) // Ecran Tablette //
  .headline-about
    height: 428px
    background: url("@/images/HeadLine about/Banner 768.png") no-repeat
    background-position: 47% 50%

  .content
    max-width: 668px
    padding-top: 93px
    h1
      font-size: 40px
      line-height: 48px
    &::v-deep p
      width: 247px
      font-size: 16px
      color: #373F51
      line-height: 20px
    button
      a
        font-size: 16px

@media screen and (min-width: 480px) and (max-width: 767px)
  .headline-about
    height: 100%
    margin: 0
    background: none

  .blank
    display: block
    margin-top: 3rem
    height: 300px
    background: url("@/images/HeadLine about/Banner 480.png") no-repeat
    background-position: 60% 100%

  .content
    width: 100%
    margin: 0
    padding: 30px 32px 82px
    h1
      font-size: 40px
      line-height: 48px
    &::v-deep p
      width: 100%
      margin-bottom: 32px
      font-size: 16px
      color: #373F51
      line-height: 20px
    button
      width: 100%
      a
        font-size: 16px

@media screen and (max-width: 479px)
  .headline-about
    height: 100%
    margin: 0
    background: none

  .blank
    display: block
    margin-top: 3rem
    height: 300px
    background: url("@/images/HeadLine about/Banner 360.png") no-repeat center
    background-position: 60% 50%

  .content
    width: 100%
    margin: 0
    padding: 30px 32px 82px
    h1
      font-size: 42px
      ine-height: 50px
    &::v-deep p
      width: 100%
      font-size: 16px
      color: #373F51
      line-height: 20px
    button
      width: 100%
      a
        font-size: 16px
</style>
