<template>
  <div>
    <!-- Vue tag to add header component -->
    <header-prismic
      :menuBody="menuBody"
      :links="links"
      :menuLinks="menuLinks"
      :menuTextProducts="menuTextProducts"
      :menuTextButton="menuTextButton"
      :altLangs="altLangs"
    />

    <HeaderCareer :heroData="heroData"></HeaderCareer>
    <CareerMenu :menuData="slices[1]"></CareerMenu>
    <Equipe :slice="slices[2]"></Equipe>

       <RecentOffer :slice="offerData" :textData="textData" />

   

    <!-- FooterPrismic component -->
    <footer-prismic-vue
      :footerBody="footerBody"
      :textCopyright="textCopyright"
      :textJurisdiction="textJurisdiction"
    />
    <!-- modale components -->
    <div class="modale">
      <div class="container">
        <div class="modale-nav">
          <ul>
            <li id="legal-notice" @click="toggelModale">
              <prismic-rich-text :field="textJurisdiction" />
            </li>
            <span>•</span>
            <li id="privacy-policy" @click="toggelModalePolicy">
              <prismic-rich-text :field="textJurisdiction" />
            </li>
            <span>•</span>
            <li id="cookies" @click="toggelModaleCooky">
              <prismic-rich-text :field="textJurisdiction" />
            </li>
          </ul>
        </div>
        <div class="copyright">
          {{ $prismic.asText(textCopyright) }}
          <!-- <prismic-rich-text :field="textCopyright" /> -->
        </div>
      </div>
    </div>
    <!-- Modale -->
    <!-- <modale-legal-notice
      :titleModaleLN="titleModaleLN"
      :textModaleLN="textModaleLN"
      :revele="revele"
      :toggelModale="toggelModale"
    />
    <modale-policy
      :titleModalePP="titleModalePP"
      :textModalePP="textModalePP"
      :revelePolicy="revelePolicy"
      :toggelModalePolicy="toggelModalePolicy"
    />
    <modale-cookies
      :titleModaleC="titleModaleC"
      :textModaleC="textModaleC"
      :reveleCooky="reveleCooky"
      :toggelModaleCooky="toggelModaleCooky"
    /> -->
  </div>
</template>

<script>
// Imports for all components
import HeaderPrismic from "~/components/HeaderPrismic.vue";
import SlicesBlock from "~/components/SlicesBlock.vue";
import FooterPrismicVue from "~/components/FooterPrismic.vue";
import ModaleLegalNotice from "~/components/ModaleLegalNotice.vue";
import ModalePolicy from "~/components/ModalePolicy.vue";
import ModaleCookies from "~/components/ModaleCookies.vue";
import HeaderPage from "~/components/slices/HeaderPage.vue";
import CareerMenu from "~/components/CareerMenu";
import Equipe from "~/components/Career/Equipe/Equipe.vue";
import RecentOffer from "~/components/Career/RecentOffer.vue";
import HeaderCareer from "~/components/Career/HeaderCareer.vue";

export default {
  name: "Career",
  components: {
    HeaderPrismic,
    SlicesBlock,
    FooterPrismicVue,
    ModaleLegalNotice,
    ModalePolicy,
    ModaleCookies,
    HeaderPage,
    CareerMenu,
    Equipe,
    RecentOffer,
    HeaderCareer,
  },
  data() {
    return {
      // initialize revele modale
      revele: false,
      revelePolicy: false,
      reveleCooky: false,
    };
  },
  methods: {
    // toggle method modale legal notice
    toggelModale() {
      this.revele = !this.revele;
    },
    // toggle method modale privacy policy
    toggelModalePolicy() {
      this.revelePolicy = !this.revelePolicy;
    },
    // toggle method modale cookies
    toggelModaleCooky() {
      this.reveleCooky = !this.reveleCooky;
    },
  },
  async asyncData({ $prismic, params, error }) {
    try {
      // Languages from API response
      let languages = $prismic.api.data.languages;
      // Setting Master language as default language option
      let lang = { lang: languages[0].id };
      // If there is a langauge code in the URL set this as language option
      if (params.lang !== undefined || null) {
        lang = { lang: params.lang };
      }

      // Query to get the home page content
      const result = await $prismic.api.getSingle("team", lang);
      const menuContent = (await $prismic.api.getSingle("top_menu", lang)).data;
      const footerContent = (await $prismic.api.getSingle("footer", lang)).data;
      // const modale
      const modaleLN = (
        await $prismic.api.getByUID("modale", "legal_notice", lang)
      ).data;
      const modalePP = (
        await $prismic.api.getByUID("modale", "privacy_policy", lang)
      ).data;
      const modaleC = (await $prismic.api.getByUID("modale", "cookies", lang))
        .data;

      const offer = await $prismic.api.getSingle("jobs", lang);

      return {
        // Page content, set slices as variable
        slices: result.data.body,
        // Menu
        menuBody: menuContent.body,
        links: menuContent,
        menuLinks: menuContent.menu_links,
        menuTextProducts: menuContent.product_label,
        menuTextButton: menuContent.button_label,
        altLangs: result.alternate_languages,
        // Footer
        footerBody: footerContent.body,
        textCopyright: footerContent.copyright,
        textJurisdiction: footerContent.text_jurisdiction,
        // modale
        titleModaleLN: modaleLN.title,
        textModaleLN: modaleLN.text,
        titleModalePP: modalePP.title,
        textModalePP: modalePP.text,
        titleModaleC: modaleC.title,
        textModaleC: modaleC.text,
        offerData: offer.data.body[3].items,
        heroData: result.data.body[0],
        textData: result.data.body[3]
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>

<style lang="sass" scoped>
.offers

  .offers-container
    width: 1280px
    margin: auto
    display: flex

    .offers-nav
      border: 1px solid #bababa
      box-sizing: border-box
      border-radius: 2px
      width: 411px
      height: 256px
      margin-bottom: 40px
      padding: 20px
      margin-right: 24px
      &::v-deep h2
        color: #373f51
        font-style: normal
        font-weight: 700
        font-size: 20px
        line-height: 23px
        width: 306px
        margin: 9px 0px
        // height: 46px;
        text-transform: uppercase

      .offer-domaine
        color: #00a0a5
        font-style: normal
        font-weight: 700
        font-size: 16px
        line-height: 20px
        text-transform: uppercase
        margin: 9px 0px
        margin-bottom: 14px

      .offer-description
        font-style: normal
        font-weight: 300
        font-size: 16px
        line-height: 20px

        width: 371px
        height: 95px

        color: #373f51
        margin: 14px 0px
        overflow: hidden

      .offers-nav__last-section
        display: flex
        justify-content: space-between
        width: 371px
        // margin: auto;
        &::v-deep ul
          border: 2px solid red
          display: flex

          height: 16px
          list-style-type: none

          li
            font-style: normal
            font-weight: 300
            font-size: 12px
            line-height: 15px
            margin-right: 10px
            color: #373f51

          li:nth-child(1)
            &::before
              content: "TE"
              border: 2px solid red
              color: transparent
              height: 12px
              margin-right: 2px
              width: 12px
              background: url("@/assets/img/Career/test/jobs/logo contrat.png") no-repeat

          li:nth-child(2)
            &::before
              content: "TE"
              border: 2px solid red
              color: transparent
              height: 12px
              width: 12px
              margin-right: 2px
              background: url("@/assets/img/Career/test/jobs/logo date.png") no-repeat

          li:nth-child(3)
            &::before
              content: "TE"
              border: 2px solid red
              color: transparent
              height: 12px
              margin-right: 2px
              width: 12px
              background: url("@/assets/img/Career/test/jobs/Icone Géolocalisation (1).png") no-repeat

        button
          border: 1px solid #00a2a7
          box-sizing: border-box
          border-radius: 2px
          background-color: white
          font-style: normal
          font-weight: 400
          font-size: 16px
          line-height: 20px
          padding: 5px 15px

          color: #00a2a7
          cursor: pointer
    .offers-nav:nth-child(4)
      display: none

.modale
  background-color: $darkColor

.container
  max-width: $largeContainer
  margin: 0 auto
  padding: 24px 0
  display: flex
  justify-content: space-between
  align-items: flex-start
  color: $whiteColor
  .modale-nav::v-deep ul
    list-style: none
    span
      margin: 0 10px
    li
      display: inline-block
      font-size: 20px
      line-height: 25px
      cursor: pointer
    #legal-notice
      li
        &:nth-child(2),
        &:last-child
          display: none
    #privacy-policy
      li
        &:first-child,
        &:last-child
          display: none
    #cookies
      li
        &:first-child,
        &:nth-child(2)
          display: none
  .copyright
    font-size: 20px
    line-height: 25px

@media screen and (min-width: 1000px) and (max-width: 1919px)
  .offers
    width: $mediumContainer
    .offre-emploie
      .offre-container
     
        margin: auto
        width: 748px
        height: 256px
        margin-bottom: 50px

  .container
    max-width: $mediumContainer
    padding: 18px 0
    .modale-nav::v-deep ul
      li
        font-size: 16px
        line-height: 20px
    .copyright
      font-size: 16px
      line-height: 20px

@media screen and (min-width: 768px) and (max-width: 999px)
  .offers
    width: $shortContainer
    .offre-emploie
      .offre-container
     
        margin: auto
        width: 652px
        height: 256px
        margin-bottom: 50px

  .container
    max-width: $shortContainer
    padding: 10px 0
    .modale-nav::v-deep ul
      li
        font-size: 14px
        line-height: 18px
    .copyright
      font-size: 14px
      line-height: 18px

@media screen and (min-width: 480px) and (max-width: 767px)
  .offers
    width: $tabletContainer
    .green-button
      width: 500px
    .black-button
      width: 80%
    .offre-emploie
      .offre-container
      
        margin: auto
        width: 411px
        height: 256px
        margin-bottom: 50px

  .container
    max-width: $tabletContainer
    padding: 14px 0
    display: block
    .modale-nav::v-deep ul
      li
        font-size: 12px
        line-height: 15px
    .copyright
      margin-top: 6px
      font-size: 12px
      line-height: 15px

@media screen and (max-width: 479px)

  .offers
    width: $mobileContainer
    .offre-emploie
      .offre-container
      
        margin: auto
        width: 296px
        height: 287px
        margin-bottom: 50px

  .container
    max-width: $mobileContainer
    padding: 14px 0
    display: block
    .modale-nav::v-deep ul
      li
        font-size: 12px
        line-height: 15px
    .copyright
      margin-top: 6px
      font-size: 12px
      line-height: 15px
</style>
