<template>
  <div class="offers">
    <div
      :class="{
        container: container,
        containerActif: containerActif,
      }"
    >
      <div class="offer-container">
        <div
          :class="{
            allOffers: allOffers,
            allOffersActive: allOffersActive,
            moreOffer: moreOffer,
          }"
          v-for="item in items"
          :key="item.id"
          @click="modaleOfferFunction(item)"
        >
          <div class="header-offer">
            <prismic-rich-text :field="item.title" />
            <prismic-rich-text class="offer-domaine" :field="item.domaine" />
          </div>

          <!-- <prismic-rich-text
            class="offer-description"
            :field="item.description"
          /> -->

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
      </div>

      <div class="back-button" v-if="actifBackButton" @click="modalInitState">
        <img src="@/assets/img/Career/Carousel/Rectangle 31.png" />
        <p>revenir en arriere</p>
      </div>

      <div
        :class="{
          modaleOffer: modaleOffer,
          modaleOfferActive: modaleOfferActive,
        }"
        @click="modaleFocus"
      >
        <div class="modale-offer__container">
          <div class="modal-offer__info-container">
            <prismic-rich-text :field="offerTitle" />
            <prismic-rich-text
              class="modale-offer__domaine"
              :field="offerDomaine"
            />
            <div class="modale-offer__last-section">
              <div class="modale-offer__last-section__info-container">
                <prismic-rich-text
                  class="modale-offer__info__first-list"
                  :field="firstInfo"
                />
                <prismic-rich-text
                  class="modale-offer__info__second-list"
                  :field="secondInfo"
                />
              </div>
              <a :href="this.offerLink" class="candidater">
                <prismic-rich-text
                  class="modale-offer__call-to-action"
                  :field="offerLinkLabel"
                />
              </a>
            </div>
          </div>

          <div class="modale-offer__main-content">
            <prismic-rich-text
              class="modale-offer__offer-title-description"
              :field="offerTitleDescription"
            />
            <prismic-rich-text
              class="modale-offer__offer-main-content"
              :field="offerMainContent"
            />
            <a :href="this.offerLink" class="candidater">
              <prismic-rich-text
                class="candidater-action"
                :field="offerLinkLabel"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="back-button" v-if="actifBackButton" @click="modalInitState">
        <img src="@/assets/img/Career/Carousel/Rectangle 31.png" />
        <p>revenir en arriere</p>
      </div>
    </div>
    <div
      :class="{ charger: charger, chargerActif: chargerActif }"
      @click="showMoreJobs"
    >
      <p>charger plus</p>
      <img src="@/assets/img/Career/Flash (1).png" />
    </div>
  </div>
</template>

<script>
import Search from "~/components/Career/Jobs/Search.vue";
export default {
  props: ["slice", "Search", "items", "modaleActif", "formEnable"],
  name: "Offers",

  data() {
    return {
      allOffers: true,
      allOffersActive: false,
      modaleOffer: false,
      moreOffer: false,
      modaleOfferActive: false,
      container: true,
      charger: true,
      chargerActif: false,
      // // MAODALE DATA // //

      offerTitle: [],
      offerDomaine: [],
      firstInfo: [],
      secondInfo: [],
      offerTitleDescription: [],
      offerMainContent: [],
      offerLinkLabel: [],
      offerLink: [],
      actifBackButton: false,
      containerActif: false,
    };
  },
  components: {
    Search,
  },
  computed: {
    getWidw() {
      //  let x = window.matchMedia("(max-width: 767px)");
      return window.innerHeight;
    },
  },
  methods: {
    modaleOfferFunction(item) {
      this.modaleOffer = true;
      this.offerTitle = [...item.title];
      this.offerDomaine = [...item.domaine];
      this.firstInfo = [...item.info];
      this.secondInfo = [...item.info_plus];
      this.offerLinkLabel = [...item.link_label];
      this.offerTitleDescription = [...item.sous_title];
      this.offerMainContent = [...item.description];
      this.offerLink = item.link_url.url;

      // this.visibleMachin = false

      // // METHODS FOR MOBILE // //

      let x = window.matchMedia("(max-width: 767px)");

      if (x.matches) {
        this.allOffersActive = true;
        this.modaleOfferActive = true;
        this.actifBackButton = true;
        this.containerActif = true;
        this.chargerActif = true;

        this.$emit("actif");
      }
    },

    modaleFocus() {
      let x = window.matchMedia("(max-width: 767px)");
      if (!x.matches) {
        this.allOffersActive = true;
        this.modaleOfferActive = true;
        this.actifBackButton = true;
        this.containerActif = true;
        this.chargerActif = true;
        this.$emit("actif");
      }
    },
    modalInitState() {
      this.allOffersActive = false;
      this.modaleOfferActive = false;
      this.actifBackButton = false;
      this.containerActif = false;
      this.chargerActif = false;

      this.$emit("blabla");
    },

    showMoreJobs() {
      this.moreOffer = true;
    },
    // candidater() {
    //   this.$emit("postulez");
    // },

    textP(item) {
      // let x = window.matchMedia("(max-width: 767px)");
      // if (x.matches) {
      //   return item.description[0].text.slice(0, 150) + "...";
      // }
      // return item.description[0].text.slice(0, 200) + "...";
      // console.log(x);
    },
  },
};
</script>

<style lang="scss" scoped>
.offers {
  .container {
    width: 1280px;
    margin: auto;
    display: flex;

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
      cursor: pointer;
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
              position: relative;
              top: 2px;
              color: transparent;
              height: 12px;
              margin-right: 2px;
              width: 12px;
              background: url("@/assets/img/Career/Logo offre/dashicons_edit-page.svg")
                no-repeat;
            }
          }
          li:nth-child(2) {
            &::before {
              content: "TE";
              position: relative;
              top: 2px;
              color: transparent;
              height: 12px;
              width: 12px;
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
      &:hover {
        border: 1px solid #00a2a7;
      }
    }
    .allOffers:nth-child(n + 5) {
      display: none;
    }
    .moreOffer:nth-child(n + 5) {
      display: flex;
    }

    .allOffersActive {
      display: none;
    }

    .back-button {
      margin-top: 70px;
      margin-bottom: 70px;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      display: flex;

      color: #00a2a7;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
      img {
        height: 14.46px;
        margin-top: 5px;
        margin-right: 4px;
      }
    }

    .modaleOffer {
      border: 2px solid #00a2a7;
      box-sizing: border-box;
      border-radius: 2px;
      width: 845px;
      height: 1144px;
      margin-left: 24px;
      cursor: pointer;

      &:hover {
        transition-duration: 400ms;
        transform: scale(1.05);
      }
      .modale-offer__container {
        box-sizing: border-box;
        border-radius: 2px;
        padding-bottom: 21px;

        .modal-offer__info-container {
          border-bottom: 2px solid #00a2a7;

          padding-top: 20px;
          padding-left: 20px;
          padding-bottom: 21px;
          padding-right: 22.04px;

          &::v-deep h2 {
            color: #373f51;
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 23px;

            text-transform: uppercase;
          }
          .modale-offer__domaine {
            color: #00a0a5;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
            text-transform: uppercase;
            margin: 9px 0px;
          }
          .modale-offer__last-section {
            display: flex;
            justify-content: space-between;

            .modale-offer__last-section__info-container {
              display: flex;
              margin-top: 16px;

              .modale-offer__info__first-list {
                width: 131px;
                &::v-deep ul {
                  width: 173px;
                  list-style-type: none;

                  li {
                    font-style: normal;
                    font-weight: 300;
                    font-size: 12px;
                    line-height: 15px;
                    margin: 0px 2px;
                  }
                  li:nth-child(1) {
                    &::before {
                      content: "TE";

                      color: transparent;
                      height: 12px;
                      margin-right: 2px;
                      position: relative;
                      top: 1px;
                      width: 12px;
                      background: url("@/assets/img/Career/Logo offre/dashicons_edit-page.svg")
                        no-repeat;
                    }
                  }
                  li:nth-child(2) {
                    &::before {
                      content: "TE";

                      color: transparent;
                      position: relative;
                      top: 1px;
                      height: 12px;
                      width: 12px;
                      margin-right: 2px;
                      background: url("@/assets/img/Career/Logo offre/Calender.svg")
                        no-repeat;
                    }
                  }
                  li:nth-child(3) {
                    &::before {
                      content: "TE";
                      position: relative;
                      top: 1px;
                      color: transparent;
                      height: 12px;
                      margin-right: 2px;
                      right: 0px;
                      width: 12px;
                      background: url("@/assets/img/Career/Logo offre/Icone Géolocalisation.svg")
                        no-repeat;
                      position: relative;
                    }
                  }
                }
              }
              .modale-offer__info__second-list {
                &::v-deep ul {
                  width: 158.96px;
                  list-style-type: none;
                  li {
                    font-style: normal;
                    font-weight: 300;
                    font-size: 12px;
                    line-height: 15px;
                  }
                  li:nth-child(1) {
                    &::before {
                      content: "TE";
                      position: relative;
                      bottom: 2px;
                      right: 1px;
                      color: transparent;
                      width: 17px;
                      height: 17px;
                      padding-right: 4px;
                      margin-right: 2px;
                      width: 12px;
                      background: url("@/assets/img/Career/Logo offre/Frame 17.svg")
                        no-repeat;
                    }
                  }
                  li:nth-child(2) {
                    &::before {
                      content: "TE";
                      right: 1px;

                      bottom: 2px;
                      position: relative;
                      color: transparent;
                      height: 12px;
                      width: 12px;
                      margin-right: 4px;
                      padding-right: 3px;
                      background: url("@/assets/img/Career/Logo offre/Frame 18.svg")
                        no-repeat;
                    }
                  }
                  li:nth-child(3) {
                    &::before {
                      content: "TE";
                      padding-right: 2px;
                      color: transparent;
                      height: 12px;

                      margin-right: 4px;

                      bottom: 2px;

                      position: relative;
                      width: 12px;
                      background: url("@/assets/img/Career/Logo offre/Frame 19.svg")
                        no-repeat;
                    }
                  }
                }
              }
            }
            .candidater {
              margin-top: 33px;
              text-decoration: none;

              border: 1px solid #00a2a7;
              box-sizing: border-box;
              border-radius: 2px;
              background-color: white;
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 20px;
              width: 86px;
              height: 30px;
              text-align: center;
              padding-top: 3px;

              color: #00a2a7;
              cursor: pointer;
            }
          }
        }

        .modale-offer__main-content {
          height: 962px;
          padding-left: 20px;
          padding-top: 20px;
          overflow-y: scroll;
          ::-webkit-scrollbar {
            width: 100px;
            border: 5px solid red;
          }

          .modale-offer__offer-title-description {
            font-weight: 700;
            font-size: 14px;
            line-height: 18px;
            text-transform: uppercase;
            color: #373f51;
            margin-bottom: 24px;
          }
          .modale-offer__offer-main-content {
            font-style: normal;
            font-weight: 300;
            font-size: 12px;
            line-height: 15px;

            color: #373f51;
            width: 609px;
          }
          a {
            text-decoration: none;
            .candidater-action {
              text-decoration: none;
              margin: auto;
              margin-top: 40px;
              text-decoration: none;
              text-align: center;
              padding-top: 3px;
              color: white;
              width: 192px;
              height: 28px;
              right: 326px;
              text-align: center;
              background: #00a2a7;
              border-radius: 2px;
            }
          }
        }
      }
    }
    .modaleOfferActive {
      margin: auto;
      height: auto;
      cursor: auto;
      &:hover{
        transform: none;
      }
      .modale-offer__container {
        .modale-offer__main-content {
          height: auto;
        }
      }
    }
  }
  .containerActif {
    display: block;
    margin: auto;
  }
  .charger {
    width: 95px;
    margin: auto;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    margin-top: 90px;

    color: #00a0a5;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
    img {
      margin-left: 36px;
      margin-top: 5px;
    }
  }
  .chargerActif {
    display: none;
  }
}

@media screen and (min-width: 1000px) and (max-width: 1919px) {
  .offers .container {
    width: 900px;
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
    .modaleOffer {
      width: 518px;
      margin-left: 16px;
      .modale-offer__container {
        .modale-offer__main-content {
          .modale-offer__offer-main-content {
            width: 422px;
          }
        }
      }
    }
    .modaleOfferActive {
      margin: auto;
      width: 900px;
      .modale-offer__container {
        .modale-offer__main-content {
          .modale-offer__offer-main-content {
            width: 609px;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 999px) {
  .offers {
    .container {
      width: 668px;
      .allOffers {
        width: 326px;
        height: 256px;
        padding: 20px;

        .offer-description {
          width: 286px;
          height: 60px;
        }
        .header-offer {
          &::v-deep h2 {
            width: 234px;
          }
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
      .back-button {
        margin-bottom: 50px;
        margin-top: 50px;
      }
      .modaleOffer {
        width: 326px;
        .modale-offer__container {
          .modal-offer__info-container {
            .modale-offer__last-section {
              display: initial;

              .modale-offer__last-section__info-container {
                margin-top: 0px;
                width: 286px;
                margin: auto;

                .modale-offer__info__first-list {
                  width: 105px;
                }
                .modale-offer__info__second-list {
                  width: 158.96px;
                }
              }
              button {
                width: 286px;
              }
              .candidater {
                color: #00a2a7;
                border: none;
                .modale-offer__call-to-action {
                  text-align: center;
                  // margin-top: 10.53px;
                  font-size: 14px;
                  border: 1px solid #00a2a7;
                  z-index: 1;
                  position: relative;
                }
              }
            }
          }

          .modale-offer__main-content {
            height: 930px;
            overflow-y: scroll;
            .modale-offer__offer-main-content {
              width: 275px;
            }
          }
        }
      }
      .modaleOfferActive {
        margin: auto;
        width: 668px;
        height: auto;
        .modale-offer__container {
          .modal-offer__info-container {
            .modale-offer__last-section {
              display: flex;

              button {
                border: 5px solid green;
                box-sizing: border-box;
                border-radius: 2px;
                background-color: white;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;

                width: 79px;
                height: 28px;

                cursor: pointer;
                align-items: center;
              }
              .modale-offer__last-section__info-container {
                margin: 0px;
                margin-top: 16px;
              }
              .candidater {
                padding: 0px;
                .modale-offer__call-to-action {
                  text-align: center;
                  // margin-top: 10.53px;
                  font-size: 14px;
                  border: 1px solid #00a2a7;
                  z-index: 1;
                  position: relative;
                  width: 86px;
                  height: 30px;
                  text-align: center;
                  padding-top: 3px;
                }
              }
            }
          }

          .modale-offer__main-content {
            height: auto;
            .modale-offer__offer-main-content {
              width: 609px;
            }
          }
        }
      }
    }
    .charger {
      margin-top: 60px;
    }
  }
}

@media screen and (min-width: 480px) and (max-width: 767px) {
  .offers {
    .container {
      width: 416px;
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
      .allOffersActive {
        display: none;
      }
      .back-button {
        margin-bottom: 50px;
        margin-top: 50px;
      }
      .modaleOffer {
        display: none;
        border: none;
      }
      .modaleOfferActive {
        margin: auto;
        width: 416px;
        height: auto;
        display: initial;

        .modale-offer__container {
          border: 2px solid #00a2a7;
          .modal-offer__info-container {
            .modale-offer__last-section {
              display: block;

              .modale-offer__last-section__info-container {
                justify-content: space-between;
              }
              .candidater {
                border: none;
                text-decoration: none;
                .modale-offer__call-to-action {
                  text-align: center;
                  border: 2px solid #00a2a7;
                  width: 375px;
                  margin: auto;
                  position: relative;
                  z-index: 1;
                }
              }

              button {
              }
            }
          }

          .modale-offer__main-content {
            .modale-offer__offer-main-content {
              width: 365px;
            }
          }
        }
      }
    }
    .charger {
      margin-top: 40px;
    }
  }
}

@media screen and (max-width: 479px) {
  .offers {
    .container {
      width: 296px;
      margin: auto;
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
        .allOffers__last-section {
          width: 256px;
          display: block;
          // position: relative;
          // top: 20px;

          .offer-info {
            // justify-content: space-around;
            margin-bottom: 11px;
            &::v-deep ul {
              justify-content: space-between;
              // margin-bottom: 11px;
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
              height: 30px;
              text-align: center;
              margin-left: -16px;
              width: 256px;
            }
          }
        }
      }
      .back-button {
        margin-bottom: 48px;
        margin-top: 50px;
      }
      .modaleOffer {
        display: none;
        border: none;
      }
      .modaleOfferActive {
        margin: auto;
        width: 296px;
        height: auto;
        display: initial;
        .modale-offer__container {
          border: 2px solid #00a2a7;
          .modal-offer__info-container {
            .modale-offer__last-section {
              display: block;

              .modale-offer__last-section__info-container {
                position: relative;
                justify-content: space-between;
                .modale-offer__info__first-list {
                  width: 97px;
                }
              }
              .candidater {
                border: none;
                text-decoration: none;

                .modale-offer__call-to-action {
                  text-align: center;
                  border: 2px solid #00a2a7;
                  width: 256px;
                  margin: auto;
                  position: relative;
                  z-index: 1;
                }
              }

              button {
              }
            }
          }
          .modale-offer__main-content {
            .modale-offer__offer-main-content {
              width: 245px;
            }
          }
        }
      }
    }
    .charger {
      margin-top: 40px;
    }
  }
}
</style>