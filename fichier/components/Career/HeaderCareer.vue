<template>
  <section class="headerPw" :style="headerPw">
    <div class="blank" :style="blank"></div>
    <div class="content">
      <prismic-rich-text :field="heroData.primary.title" />
      <prismic-rich-text :field="heroData.primary.text" />

      <a :href="this.heroData.primary.link.url" class="btn">
        {{ $prismic.asText(heroData.primary.button_label) }}
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice", "heroData"],

  data() {
    return {
      title: this.heroData.primary.meta_title[0].text,
      headerPw: { backgroundImage: `url(${this.heroData.primary.image.url})` },
      blank: { backgroundImage: `url(${this.heroData.primary.image.url}})` },
    };
  },
  head() {
    return {
      title: this.heroData.primary.meta_title[0].text,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.heroData.primary.meta_description[0].text,
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.headerPw
    height: 814px
    background-repeat: no-repeat
    background-position: center
    margin-top: 82px

    // padding-top: 90px

    .blank
        display: none

    .content
        max-width: $largeContainer
        margin: 3rem auto
        padding-top: 107px

        &::v-deep h1
            text-transform: uppercase
            font-size: $largeH1Size
            font-weight: $titleWeight
            line-height: $largeH1Line
            color: $darkColor
            strong
                color: $greenBrightColor
        &::v-deep p
            padding: 52px 65% 42px 0
            font-size: $largeParaphSize
            line-height: $largeLine
            color: $darkColor

        .btn
            padding: 12px 100px
            text-decoration: none
            font-size: $largeParaphSize
            line-height: $largeLine
            color: $whiteColor
            background-color: $darkColor
            border: none
            border-radius: 1px
            box-shadow: 0 3px 5px $darkColor
            outline: none
            cursor: pointer

@media screen and (min-width: 1000px) and (max-width: 1919px)
    .headerPw
        height: 550px

        background-size: cover

        .content
            max-width: $mediumContainer
            padding-top: 90px
            &::v-deep h1
                font-size: $mediumH1Size
                line-height: $mediumH1Line
            &::v-deep p
                padding: 22px 65% 36px 0
                font-size: $paraphSize
                line-height: $shortLine

            .btn
                padding: 8px 78px
                font-size: $paraphSize
                line-height: $shortLine

@media screen and (min-width: 768px) and (max-width: 999px)
    .headerPw
        height: 428px
        background-size: cover

        .content
            max-width: $shortContainer
            padding-top: 54px
            &::v-deep h1
                font-size: $mediumH1Size
                line-height: $mediumH1Line
            &::v-deep p
                padding: 22px 60% 36px 0
                font-size: $paraphSize
                line-height: $shortLine

            .btn
                padding: 8px 78px
                font-size: $paraphSize
                line-height: $shortLine

@media screen and (min-width: 480px) and (max-width: 767px)
    .headerPw
        height: 100%
        background: none
        background-size: 0
        margin-top: 0px

        padding-top: 75px

        .blank
            padding-top: 3rem
            height: 300px
            display: block
            // background: url("~/images/header-pw/480.png") no-repeat
            background-position: 57% 50%
            // background-position: center
            background-size: cover
            background-repeat: no-repeat

        .content
            max-width: $tabletContainer
            margin: 0 auto
            padding: 30px 0 60px
            &::v-deep h1
                font-size: $mediumH1Size
                line-height: $mediumH1Line
            &::v-deep p
                padding: 26px 0 34px
                font-size: $paraphSize
                line-height: $shortLine

            .btn
                width: 100%
                padding: 8px 0
                display: block
                text-align: center
                font-size: $paraphSize
                line-height: $shortLine

@media screen and (max-width: 479px)
    .headerPw
        height: 100%
        background-size: 0
        margin-top: 0px
        padding-top: 75px

        .blank
            padding-top: 3rem
            height: 300px
            display: block
            // background: url("~/images/header-pw/480.png") no-repeat
            background-position: 57% 50%
            // background-position: center
            background-size: cover

        .content
            max-width: $mobileContainer
            margin: 0 auto
            padding: 30px 0 50px
            &::v-deep h1
                font-size: $mediumH1Size
                list-height: $mediumH1Line
            &::v-deep p
                padding: 26px 0 34px
                font-size: $paraphSize
                line-height: $shortLine

            .btn
                width: 100%
                padding: 8px 0
                display: block
                text-align: center
                font-size: $paraphSize
                line-height: $shortLine
</style>
