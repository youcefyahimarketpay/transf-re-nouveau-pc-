<template>
  <div>
    <section class="headline-career">
      <div class="blank"></div>
      <div class="content">
        <prismic-rich-text :field="slice.primary.title" />
        <prismic-rich-text :field="slice.primary.text" />
        <div class="btn-box">
          <div class="btn-container" v-for="item in slice.items" :key="item.id">
            <a class="btn" :href="item.button_link.url">Test</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["slice"],
  name: "headlne-career",
};
</script>

<style lang="sass" scoped>
.headline-career
  height: 814px
  background: url("@/images/header-pos/1920.png") no-repeat center

.blank
  display: none

.content
  max-width: 1280px
  margin: 3rem auto
  padding-top: 210px
  &::v-deep h1
    text-transform: uppercase
    color: #373f51
    &:nth-child(1)
      font-size: 64px
    &:nth-child(2)
      margin-top: -14px
      font-size: 52px
    strong
      color: #01a2a6
  &::v-deep p
    padding: 52px 65% 0 0
    font-size: 20px
    font-weight: 300
    &:last-child
      padding: 0 0 42px
.btn-box
  display: flex
  border: 2px solid red
  .btn-container

    .btn
      // padding: 12px 100px
      margin-right: 10px
      text-decoration: none
      // font-size: 20px
      color: red
      font-weight: 300
      color: #f1f1f1
      background-color: #373f51
      border: none
      border-radius: 1px
      box-shadow: 0 3px 5px #373f51
      outline: none
      cursor: pointer

@media screen and (min-width: 1000px) and (max-width: 1919px)
  .headline-career
    height: 550px
    background: url("~/images/header-pos/1000.png") no-repeat center

  .content
    max-width: 900px
    padding-top: 100px
    &::v-deep h1
      &:nth-child(1)
        font-size: 40px
      &:nth-child(2)
        font-size: 33px
    &::v-deep p
      padding: 22px 65% 0 0
      font-size: 16px

  .btn
    padding: 8px 32px
    font-size: 16px

@media screen and (min-width: 768px) and (max-width: 999px)
  .headline-career
    height: 428px
    background: url("~/images/header-pos/768.png") no-repeat center

  .content
    max-width: 668px
    padding-top: 70px
    &::v-deep h1
      &:nth-child(1)
        font-size: 40px
      &:nth-child(2)
        font-size: 33px
    &::v-deep p
      padding: 22px 60% 0 0
      font-size: 16px

  .btn
    padding: 8px 32px
    font-size: 16px

@media screen and (min-width: 480px) and (max-width: 767px)
  .headline-career
    height: 100%
    background: none

  .blank
    margin-top: 3rem
    height: 300px
    display: block
    background: url("~/images/header-pos/480.png") no-repeat
    background-position: 57% 50%

  .content
    width: 100%
    padding: 30px 32px 82px
    &::v-deep h1
      &:nth-child(1)
        font-size: 40px
      &:nth-child(2)
        font-size: 33px
    &::v-deep p
      padding: 26px 0 0
      font-size: 16px

  .btn
    width: 100%
    padding: 8px 0
    display: block
    text-align: center
    font-size: 16px

@media screen and (max-width: 479px)
  .headline-career
    height: 100%
    background: none

  .blank
    margin-top: 3rem
    height: 300px
    display: block

    background: url("@/images/header-pos/480.png") no-repeat
    background-position: 57% 50%

  .content
    width: 100%
    padding: 30px 32px 82px
    &::v-deep h1
      &:nth-child(1)
        font-size: 40px
      &:nth-child(2)
        font-size: 33px
    &::v-deep p
      padding: 26px 0 0
      font-size: 16px

  .btn
    width: 100%
    padding: 8px 0
    display: block
    text-align: center
    font-size: 16px
</style>