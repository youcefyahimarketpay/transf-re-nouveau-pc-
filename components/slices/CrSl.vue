<template>
  <div id="crsl">
    <div class="slider">
      <button @click="prev" type="button" class="btn btn-left"></button>
      <button @click="next" type="button" class="btn btn-right"></button>
      <div
        class="container-slides"
        v-for="item in slice.items"
        :key="item.id"
        v-bind:style="{
          transform: `translateX(${index}px)`,
          transition: `${transition}`,
        }"
      >
        <prismic-image class="img-slider" :field="item.image" />
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
    };
  },
  methods: {
    next() {
      console.log(this.index);
      if (this.index === -3000) {
        this.transition = "none";
        this.index = 0;
      } else {
        this.transition = "transform 2s ease";
        this.index -= 600;
      }
    },
    prev() {
      if (this.index === 0) {
        this.transition = "none";
        this.index = -2500;
      } else {
        this.transition = "transform 2s ease";
        this.index += 600;
      }
    },
  },
};
</script>

<style lang="sass" scoped>
#crsl
    width: 60%
    margin: auto
    .slider
        width: 554px
        height: 500px
        margin: auto
        overflow: hidden
        position: relative
        .container-slides
            display: flex
            width: 500px
            height: 22309.49px
            .img-slider
                width: 500px
                height: 309.49px

    .btn
        outline: none
        border: none
        width: 50px
        height: 50px
        border-radius: 50%
        display: block
        position: relative
        z-index: 1000
        cursor: pointer
        font-size: 20px
        display: flex
        align-items: center
        border: 2px solid red
        ackground: #00A2A7
        transform: matrix(-0.71, 0.71, 0.71, 0.71, 0, 0)

        .icone
            width: 15px
    .btn-left
        top: 50%
        left: 5px
        transform: translateY(-50%)
    .btn-right
        top: 50%
        left: 95%
        transform: translateY(-50%)

@media screen and (min-width: 1024px) and (max-width: 1024px)

@media screen and (min-width: 767px) and (max-width: 1023.5px)

@media screen and (min-width: 540px) and (max-width: 767px)
    #crsl
        border: 2px solid blue
        width: 60%
        margin: auto
        .slider
            width: 55px
            height: 500px
            margin: auto
            overflow: hidden
            position: relative
@media screen and (max-width: 539.5px)
    #crsl
        border: 2px solid blue
        width:100%
        margin: auto
        .slider
            width: 359px
      
            margin: auto
            overflow: hidden
            position: relative

            .container-slides
                .img-slider
                    width: 297px
                    height: 168.3px
</style>