<template>
  <div id="crsl">
    <div class="btnContainer">
      <img class="btn btn-left" @click="prev" src="@/images/Rectangle31.png" />

      <img
        @click="next"
        class="btn btn-right"
        src="@/images/Rectangle 32.png"
      />
    </div>
    <div class="slider">
      <div
        class="container-slides"
        :style="{
          transform: `translateX(${index}px)`,
          transition: `${transition}`,
        }"
      >
        <prismic-image
          v-for="item in slice.items"
          :key="item.id"
          class="img-slider"
          :field="item.image"
        />
      </div>
    </div>

    <div class="sliderResponsive">
      <div
        class="container-slidesResponsive"
        v-for="item in slice.items"
        :key="item.id"
        v-bind:style="{
          transform: `translateX(${index}px)`,
          transition: `${transition}`,
        }"
      >
        <prismic-image class="img-sliderResponsive" :field="item.image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slice"],
  name: "CrSl",
  data() {
    return {
      index: 0,
      transition: "transform 5s ease",
      startX: 0,
      endX: 0,
    };
  },
  methods: {
    next() {
      console.log(this.index);
      if (this.index === -2835) {
        this.transition = "transform 2s ease";
        this.index = 0;
      } else {
        this.transition = "transform 2s ease";
        this.index -= 567;
      }
    },
    prev() {
      if (this.index === 0) {
        this.transition = "none";
        this.index = -2835;
      } else {
        this.transition = "transform 2s ease";
        this.index += 567;
      }
    },
    touchmove() {
      const image = document.querySelector(".img-sliderResponsive");
      if (image) {
        image.addEventListener("touchmove", () => {
          if (this.index === -2000) {
            this.transition = "none";
            this.index = 0;
          } else {
            this.transition = "transform 2s ease";
            this.index -= 6.8;
            console.log(this.index);
          }
        });
      }
    },
  },

  async mounted() {
    await this.slice.items;
    console.log(this.slice.items);
    if (this.slice.items !== null) {
      this.touchmove();
    }
  },
};
</script>

<style lang="sass" scoped>
#crsl
  max-width: 100%
  margin: auto
  .btnContainer

    display: flex
    justify-content: space-between
    position: relative
    top: 170px
    width: 660px
    margin: auto
    border: 2px solid red
    .btn
      cursor: pointer

  .slider

    width: 553px
    height: 306px
    margin: auto
    overflow: hidden
    margin-bottom: 18px

    .container-slides
      display: flex
      width: 553px
      height: 306px
      .img-slider
        width: 20px
        height: 2px
  .sliderResponsive

    display: none
    .container-slides
      margin: auto

      width: 567px
      height: 223.49px

      .img-slider
        width: 553px
        height: 306px

@media screen and (min-width: 568px) and (max-width: 1023px)
#crsl

  width: 100%
  margin: auto


  .slider

    .container-slides
      margin: auto

      width: 584px
      height: 340px

      .img-slider
        width: 584px
        height: 340px
  .sliderResponsive
    display: none
    width: 584px
    height: 323px
    overflow: hidden
    margin: auto
    .container-slidesResponsive
      width: 584px
      height: 323px

      .img-slider
        width: 584px
        height: 323px
  .decourirEquipe
    background: #00A0A5
    border-radius: 17.5px
    font-style: normal
    font-weight: 300
    font-size: 20px
    line-height: 25px
    text-align: center
    width: 214px
    height: 36px
    position: absolute
    top: 190%
    left: 35%

    color: #FFFFFF

// // Smartphone en Portrait // // 
@media screen and (min-width: 320px) and (max-width: 426px)
  #crsl

    width: 100%
    margin: auto
    .btnContainer
      display: none
    .slider
      display: none

    .sliderResponsive
      position: relative
      top: 75px
      display: flex
      width: 359px
      height: 168px
      margin-bottom: 105px
      .container-slidesResponsive
        width: 359px
        height: 168px

        .img-sliderResponsive
          width: 293px
          height: 161.39px
          margin-left: 13px
          margin-right: 13px
</style>