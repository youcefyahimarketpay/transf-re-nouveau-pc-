<template>
  <div id="crsl">
    <div class="container">
      <client-only>
        <carousel
          v-bind="options"
          class="slider"
          :perPageCustom="[
            [320, 1],
            [469, 1],
            [768, 1],
            [1000, 1],
            [1920, 1],
          ]"
        >
          <slide v-for="item in slice.items" :key="item.id">
            <prismic-image class="img-slider" :field="item.image" />
          </slide>
        </carousel>
      </client-only>
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
      options: {
        navigationEnabled: true,
        navigationNextLabel: "",
        navigationPrevLabel: "",
      },
    };
  },
};
</script>

<style lang="scss">
.VueCarousel-navigation-prev {
  transform: rotate(0deg) translateY(0%) translateX(0%) !important;
}
.VueCarousel-navigation-prev {
  width: 29.57px;
  height: 29.57px;
  background-image: url("~/assets/img/Career/Carousel/Rectangle 31.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  color: red;
  position: relative;
  right: 20px;
}

.VueCarousel-navigation-next {
  transform: rotate(0deg) translateY(0%) translateX(0%) !important;

  background-image: url("~/assets/img/Career/Carousel/Rectangle 32.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  color: red;
  position: relative;
  bottom: 200px;
  width: 29.57px;
  height: 29.57px;
}

.VueCarousel-pagination {
  position: relative;
  top: -14px;
  width: 66px;
  // height: 10px;
}
.VueCarousel-dot-container {
  margin-top: 0px !important;
}
.VueCarousel-dot {
  background-color: transparent !important;
  border: 1px solid #bababa !important;
  margin-right: 4px;

  width: 10px;
  height: 10px;
  margin-top: 6px;
  padding: 0px !important;
}
.VueCarousel-dot--active {
  background-color: #00a2a7 !important;

  width: 10px !important;
  height: 10px !important;
  margin-top: 6px;
}

.VueCarousel {
  width: 705px !important;
}

.VueCarousel-navigation-button {
  top: 39% !important;
}

@media screen and (min-width: 1000px) and (max-width: 1919px) {
  .VueCarousel-navigation-button {
    top: 39% !important;
  }
  // .VueCarousel-pagination {
  //   height: 0px;
  // }
}

@media screen and (min-width: 768px) and (max-width: 999px) {
  .VueCarousel-navigation-prev {
    display: none;
  }
  .VueCarousel-navigation-next {
    display: none;
  }
  .VueCarousel {
    width: 768px !important;
  }
  .VueCarousel-pagination {
    height: 0px;
  }
}

@media screen and (min-width: 480px) and (max-width: 767px) {
  .VueCarousel-navigation-prev {
    display: none;
  }
  .VueCarousel-navigation-next {
    display: none;
  }
  .VueCarousel {
    width: 480px !important;
  }
  .VueCarousel-pagination {
    height: 0px;
  }
}

@media screen and (max-width: 479px) {
  .VueCarousel-navigation-prev {
    display: none;
  }
  .VueCarousel-navigation-next {
    display: none;
  }
  .VueCarousel {
    width: 360px !important;
  }
  .VueCarousel .slider {
    height: 243px !important;
  }
  .VueCarousel-pagination {
    height: 0px;
  }
}
</style>
<style lang="scss" scoped>
#crsl {
  max-width: 100%;
  margin-bottom: 24px;
  margin-top: 42px;
  .container {
    width: 705px;
    margin: auto;
    display: flex;
    justify-content: space-between;

    .slider {
      width: 705px;
      height: 393px;
      margin: auto;
      overflow: hidden;

      .img-slider {
        margin-left: 38px;
        width: 621px;
        height: 376px;
      }
    }
  }
}
@media screen and (min-width: 1000px) and (max-width: 1919px) {
  #crsl {
    height: 375px;

    .container {
      width: 675px;
      height: 375px;
      .slider {
        width: 680px;
        height: 360px;
        .img-slider {
          margin-left: 0px;
          width: 594px;
          height: 360px;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 999px) {
  #crsl {
    margin-top: 40px;
    .container {
      width: 100%;
      .slider {
        width: 768px;
        height: 405px;
        overflow: visible;
        .img-slider {
          width: 668px;
          height: 405px;
          margin-right: 16px;
        }
      }
    }
  }
}

@media screen and (min-width: 480px) and (max-width: 767px) {
  #crsl {
    margin-top: 40px;
    .container {
      width: 100%;
      .slider {
        width: 416px;
        height: 252px;
        overflow: visible;
        .img-slider {
          width: 416px;
          height: 252px;
          margin-left: 29px;
        }
      }
    }
  }
}

@media screen and (max-width: 479px) {
  #crsl {
    margin-top: 40px;
    .container {
      width: 100%;
      .slider {
        width: 296px;
        height: 194px;
        overflow: visible;
        .img-slider {
          width: 296px;
          height: 194px;
          margin-left: 29px;
        }
      }
    }
  }
}
</style>


