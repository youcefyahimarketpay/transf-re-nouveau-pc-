<template>
  <div id="recentOffer">
    <div class="recentOffer-container">
      <a href="#" class="discover"
        ><prismic-rich-text :field="textData.primary.first_button_label"
      /></a>
      <prismic-rich-text :field="textData.primary.title" class="title" />
      <client-only>
        <carousel
          class="offerContainer carousel-inner"
          v-bind="options"
          :perPageCustom="[
            [10, 1],
            [468, 1],
            [768, 2],
            [1000, 2],
            [1920, 3],
          ]"
        >
          <slide class="slide" v-for="(item, i) in slice" :key="i">
            <div class="allOffers">
              <div class="header-offer">
                <prismic-rich-text :field="item.title" />
                <prismic-rich-text
                  class="offer-domaine"
                  :field="item.domaine"
                />
              </div>

              <p class="offer-description">
                {{ item.description[0].text.slice(0, 150) + "..." }}
              </p>
              <div class="allOffers__last-section">
                <prismic-rich-text class="offer-info" :field="item.info" />
                <a :href="item.link_url.url" class="candidater">
                  <prismic-rich-text class="test" :field="item.link_label" />
                </a>
              </div>
            </div>
          </slide>
        </carousel>
      </client-only>
      <nuxt-link to="jobs" class="goToJobs">
        <prismic-rich-text :field="textData.primary.last_button_label" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slice", "textData"],
  name: "recentOffer",
  data() {
    return {
      options: {
        navigationEnabled: true,
        navigationNextLabel: "",
        navigationPrevLabel: "",
        centerMode: true,
      },
    };
  },
};
</script>

<style lang="scss">
// .VueCarousel {
//
//   width: 1363.82px;
//   .VueCarousel-wrapper {
//     .VueCarousel-inner {
//
//     }
//   }
// }
// .test {
//
//   width: 200px;
// }

.offerContainer {
  width: 1363.82px !important;
}

.carousel-inner .VueCarousel-navigation-prev {
  left: -4%;
}

.carousel-inner .VueCarousel-navigation-next {
  left: 102%;
}

.VueCarousel-inner {
  // flex-basis: auto !important;
  // position: absolute;
  // left: 101%;
  // position: relative !important;
  // left: 101% !important;
}

.VueCarousel-navigation-prev {
  position: relative;
  left: -7%;
}

@media screen and (min-width: 1000px) and (max-width: 1919px) {
  .offerContainer {
    width: 900px !important;
  }
  .VueCarousel-slide {
    display: flex !important;
    justify-content: center !important;
  }
  .VueCarousel {
    width: 100% !important;
  }

  .carousel-inner .VueCarousel-navigation-prev {
    left: -5%;
  }

  .carousel-inner .VueCarousel-navigation-next {
    left: 102%;
  }
}

@media screen and (min-width: 768px) and (max-width: 999px) {
  // .offerContainer {
  //   width: 688px !important;
  // }
}
</style>

<style lang="scss" scoped>
#recentOffer {
  width: 100%;

  margin-top: 50px;
}
.recentOffer-container {
  width: 1363.82px;
  margin: auto;
  padding-top: 10px;
}

.discover {
  text-decoration: none;
  color: white;
  text-align: center;
  position: absolute;
  width: 271px;
  height: 44px;
  background: #373f51;
  box-shadow: 0px 3px 6px #58647d;
  border-radius: 2px;
  margin-left: 546px;
  padding: 11px;
}

.title {
  margin-top: 144px;
  margin-bottom: 70px;
  font-style: normal;
  font-weight: 700;
  font-size: 32px !important;
  line-height: 60px;
  text-align: center;
  text-transform: uppercase;
  color: #373f51;
  &::v-deep strong {
    color: #00a2a7;
  }
}

.offerContainer {
  margin-bottom: 50px;

  width: 1280px !important;

  justify-content: space-around;
  display: flex;
  margin: auto;

  .allOffers {
    border: 1px solid #bababa;

    box-sizing: border-box;
    border-radius: 2px;
    width: 411px;
    height: 256px;
    margin-bottom: 40px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto;

    .header-offer {
      margin-bottom: 15px;
      &::v-deep h2 {
        color: #373f51;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        width: 306px;
        // height: 46px;
        text-transform: uppercase;
      }
    }

    .offer-domaine {
      color: #00a0a5;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      text-transform: uppercase;
    }
    .offer-description {
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 20px;

      width: 371px;
      height: 80px;

      color: #373f51;

      overflow: hidden;
    }
    .allOffers__last-section {
      margin-top: auto;
      display: flex;
      justify-content: space-between;
      width: 371px;
      // margin: auto;

      z-index: 1;
      position: static;

      &::v-deep ul {
        display: flex;

        height: 16px;
        list-style-type: none;

        padding-top: 14px;

        li {
          font-style: normal;
          font-weight: 300;
          font-size: 12px;
          line-height: 15px;
          margin-right: 10px;
          color: #373f51;
        }
        li:nth-child(1) {
          &::before {
            content: "TE";

            color: transparent;
            height: 12px;
            margin-right: 2px;
            position: relative;

            top: 2px;
            width: 12px;
            background: url("@/assets/img/Career/Logo offre/dashicons_edit-page.svg")
              no-repeat;
          }
        }
        li:nth-child(2) {
          &::before {
            content: "TE";

            color: transparent;
            height: 12px;
            width: 12px;
            position: relative;

            top: 2px;
            left: 1px;
            margin-right: 2px;
            background: url("@/assets/img/Career/Logo offre/Calender.svg")
              no-repeat;
          }
        }
        li:nth-child(3) {
          &::before {
            content: "TE";

            color: transparent;
            height: 12px;
            margin-right: 2px;
            width: 12px;
            background: url("@/assets/img/Career/Logo offre/Icone Géolocalisation.svg")
              no-repeat;
          }
        }
      }
      .candidater {
        text-decoration: none;

        border: 1px solid #00a2a7;
        box-sizing: border-box;
        border-radius: 2px;
        background-color: white;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        padding: 4px 12px;

        color: #00a2a7;
        cursor: pointer;
      }
    }
  }
}

.goToJobs {
  margin-top: 50px;
  display: block;
  text-align: center;
  margin-left: 585px;
  padding: 8px;
  width: 194px;
  height: 37px;
  background: #00a2a7;
  box-shadow: 0px 3px 6px rgba(0, 120, 125, 0.48);
  border-radius: 2px;
  text-decoration: none;
  color: white;
  margin-bottom: 140px;
}

@media screen and (min-width: 1000px) and (max-width: 1919px) {
  .recentOffer-container {
    width: 900px;
    margin: auto;
    margin-top: 46px;
  }
  .discover {
    margin-left: 314px;
  }
  h2 {
    margin-top: 104px;
    margin-bottom: 50px;
    font-size: 30px;
    line-height: 38px;
  }
  .offerContainer {
    margin-bottom: 40px;
    width: 748px !important;

    .allOffers {
      width: 364px;
      padding: 20px;
      .offer-description {
        width: 324px;
      }
      .allOffers__last-section {
        width: 324px;
      }
    }
  }
  .goToJobs {
    margin-top: 40px;
    margin-left: 353px;
    padding: 8px 32px;
    margin-bottom: 100px;
  }
}

@media screen and (min-width: 768px) and (max-width: 999px) {
  .recentOffer-container {
    width: 668px;
    margin: auto;
    margin-top: 28px;
  }
  .discover {
    margin-left: 198px;
  }
  h2 {
    margin-top: 100px;
    margin-bottom: 50px;
    font-size: 30px;
    line-height: 38px;
  }
  .offerContainer {
    margin-bottom: 50px;

    width: 668px !important;
    margin: auto;

    .allOffers {
      width: 326px;
      height: 229px;
      padding: 20px;
      // margin-right: 16px;

      .offer-description {
        width: 286px;
        height: 60px;
      }
      &::v-deep h2 {
        width: 234px;
      }
      .allOffers__last-section {
        width: 286px;
        .candidater {
          text-decoration: none;
          width: 86px;
          height: 30px;
        }
      }
    }
  }
  .goToJobs {
    margin-left: 240px;
    padding: 8px 32px;
    margin-bottom: 100px;
  }
}

@media screen and (min-width: 480px) and (max-width: 767px) {
  .recentOffer-container {
    width: 416px;
    margin: auto;
    margin-top: 26px;
  }
  .discover {
    margin-left: 0px;
    width: 416px;
    height: 44px;
  }
  h2 {
    margin-top: 100px;
    margin-bottom: 50px;
    font-size: 30px;
    line-height: 38px;
    span {
      display: flex;
      justify-content: center;
    }
  }
  .offerContainer {
    margin-bottom: 50px;
    width: 416px !important;

    margin: auto;
    .allOffers {
      width: 411px;
      padding: 20px;
      .offer-description {
        width: 371px;
        height: 100px;
      }
      .allOffers__last-section {
        width: 371px;
      }
    }
  }
  .goToJobs {
    width: 414px;
    height: 37px;
    padding: 8px 32px;
    margin-left: 0px;
    margin-bottom: 100px;
  }
}

@media screen and (max-width: 479px) {
  .recentOffer-container {
    width: 100%;
    margin: auto;
  }
  .discover {
    margin-left: 33px;
    width: 296px;
    height: 44px;
  }
  h2 {
    margin-top: 104px;
    margin-bottom: 22px;
    margin-bottom: 50px;
    font-size: 30px;
    line-height: 38px;
    span {
      display: flex;
      justify-content: center;
    }
  }
  .offerContainer {
    margin-bottom: 50px;

    width: 296px !important;

    .allOffers {
      width: 296px;
      height: 287px;
      padding: 20px;
      .header-offer {
        &::v-deep h2 {
          width: 204px;
        }
      }

      .offer-description {
        font-size: 14px;
        width: 256px;
        height: 103px;
      }
      .offer-description {
        width: 256px;
        height: 60px;
      }
      .allOffers__last-section {
        width: 256px;
        display: block;
        .offer-info {
          margin-bottom: 11px;
          &::v-deep ul {
            justify-content: space-between;
            padding: 0px;
          }
        }
        .candidater {
          border: none;
          text-decoration: none;
          z-index: -100;
          position: relative;
          display: block;

          .test {
            border: 1px solid #00a2a7;
            text-align: center;

            width: 256px;
            margin: auto;
            position: relative;
            z-index: 1;
            height: 30px;
            text-align: center;
            right: 14px;
          }
        }
      }
    }
  }
  .goToJobs {
    width: 296px;
    height: 37px;
    padding: 8px 32px;
    margin: auto;
    margin-bottom: 100px;
  }
}
</style>