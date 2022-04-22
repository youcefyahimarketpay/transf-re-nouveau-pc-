<template>
  <section class="why-home">
    <div class="content">
      <div class="head">
        <prismic-rich-text :field="slice.primary.title" />
      </div>
      <div class="body">
        <ul class="first-list">
          <li class="item">
            <!-- <prismic-rich-text :field="slice.items[0].number" /> -->
            <span>{{ $prismic.asText(slice.items[0].number) }}</span>
            <prismic-rich-text :field="slice.items[0].text" />
          </li>
          <li class="item">
            <span>{{ $prismic.asText(slice.items[1].number) }}</span>
            <prismic-rich-text :field="slice.items[1].text" />
          </li>
          <li class="item">
            <span>{{ $prismic.asText(slice.items[2].number) }}</span>
            <prismic-rich-text :field="slice.items[2].text" />
          </li>
        </ul>
        <ul class="second-list">
          <li class="item">
            <span>{{ $prismic.asText(slice.items[3].number) }}</span>
            <prismic-rich-text :field="slice.items[3].text" />
          </li>
          <li class="item">
            <span>{{ $prismic.asText(slice.items[4].number) }}</span>
            <prismic-rich-text :field="slice.items[4].text" />
          </li>
        </ul>
      </div>
    </div>
    <!-- <pre v-html="JSON.stringify(slice, null, 4)"></pre> -->
  </section>
</template>

<script>
export default {
  props: ["slice"]
};
</script>

<style lang="sass" scoped>
.why-home
  max-width: $largeContainer
  margin: 75px auto
  display: flex
  justify-content: center

.head
  margin-bottom: 26px
  &::v-deep h2
    text-align: center
    text-transform: u ppercase
    font-size: $largeH2Size
    color: $darkColor
    strong
      color: $greenBrightColor

.body
  padding-top: 29px
  display: flex
  flex-direction: column

.first-list
  margin-bottom: 70px
  display: flex
  list-style: none
  .item
    display: flex
    span
      margin-right: 20px
      display: block
      font-family: "arial"
      font-size: 250px
      font-weight: $titleWeight
      line-height: 190px
      color: $lightGreenColor
      -webkit-text-stroke: 3px $lightGreenColor
    &::v-deep h3
      margin-bottom: 24px
      font-size: 24px
      line-height: 30.17px
      color: $darkColor
    &::v-deep p
      font-size: 16px
      line-height: 20.11px
      color: $darkColor
    &:nth-child(2)
      margin: 100px 24px 0

.second-list
  padding: 0 153px
  display: flex
  list-style: none
  .item
    display: flex
    span
      margin-right: 20px
      display: block
      font-family: "arial"
      font-size: 250px
      font-weight: $titleWeight
      line-height: 190px
      color: $lightGreenColor
      -webkit-text-stroke: 3px $lightGreenColor
    &::v-deep h3
      margin-bottom: 24px
      font-size: 24px
      line-height: 30.17px
    &::v-deep p
      font-size: 16px
      line-height: 20.11px
    &:first-child
      margin-right: 153px

@media screen and (min-width: 1000px) and (max-width: 1919px)
  .why-home
    max-width: $mediumContainer
    margin: 50px auto

  .head
    margin-bottom: 59px
    &::v-deep h2
      font-size: 30px
      line-height: 37.71px

  .body
    padding-top: 31px

  .first-list
    margin-bottom: 0
    flex-direction: column
    .item
      width: 430px
      span
        margin-right: 16px
        font-size: 246px
      &::v-deep h3
        font-size: 18px
        line-height: 22.63px
      &:nth-child(2)
        align-self: flex-end
        margin: -155px 0 0
      &:nth-child(3)
        margin-top: 20px
        margin-left: 70px

  .second-list
    padding: 0
    flex-direction: row-reverse
    .item
      width: 430px
      span
        margin-right: 16px
        font-size: 246px
      &::v-deep h3
        margin-bottom: 24px
        font-size: 18px
        line-height: 22.63px
      &:first-child
        margin: 0
        margin-left: 30px
      &:last-child
        margin: 70px 0 0 0

@media screen and (min-width: 768px) and (max-width: 999px)
  .why-home
    max-width: $shortContainer
    margin: 50px auto 100px
    display: block

  .head
    margin-bottom: 59px
    &::v-deep h2
      font-size: 30px
      line-height: 37.71px

  .first-list
    margin-bottom: 0
    flex-direction: column
    .item
      width: 440px
      span
        margin-right: 16px
        font-size: 246px
      &::v-deep h3
        font-size: 18px
        line-height: 22.63px
      &:nth-child(2)
        align-self: flex-end
        margin: 30px 0

  .second-list
    padding: 0
    flex-direction: column
    .item
      width: 440px
      span
        margin-right: 16px
        font-size: 246px
      &::v-deep h3
        font-size: 18px
        line-height: 22.63px
      &:first-child
        align-self: flex-end
        margin: 30px 0

@media screen and (min-width: 480px) and (max-width: 767px)
  .why-home
    max-width: $tabletContainer
    margin: 90px auto 100px
    display: block

  .head
    margin-bottom: 59px
    &::v-deep h2
      font-size: 30px
      line-height: 37.71px

  .first-list
    margin: 0 auto
    padding: 0 32px
    flex-direction: column
    justify-content: center
    .item
      width: 410px
      span
        margin-right: 16px
        font-size: 246px
      &::v-deep h3
        font-size: 18px
        line-height: 22.63px
      &:nth-child(2)
        margin: 30px 0

  .second-list
    margin: 0 auto
    padding: 0 32px
    flex-direction: column
    justify-content: center
    .item
      width: 410px
      span
        margin-right: 16px
        font-size: 246px
      &::v-deep h3
        font-size: 18px
        line-height: 22.63px
      &:first-child
        margin: 30px 0

@media screen and (max-width: 479px)
  .why-home
    max-width: mobileContainer
    margin: 90px auto 100px
    display: block

  .head
    margin-bottom: 59px
    &::v-deep h2
      font-size: 30px
      line-height: 37.71px

  .first-list
    margin: 0 auto
    padding: 0 25px
    flex-direction: column
    justify-content: center
    .item
      width: 295px
      span
        margin-right: 16px
        font-size: 150px
        line-height: 125px
      &::v-deep h3
        font-size: 18px
        line-height: 22.63px
      &:nth-child(2)
        margin: 30px 0

  .second-list
    margin: 0 auto
    padding: 0 25px
    flex-direction: column
    justify-content: center
    .item
      width: 295px
      span
        margin-right: 16px
        font-size: 150px
        line-height: 125px
      &::v-deep h3
        font-size: 18px
        line-height: 22.63px
      &:first-child
        margin: 30px 0
</style>
