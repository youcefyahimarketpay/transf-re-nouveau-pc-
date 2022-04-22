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
    <!-- Slices block component -->
    <slices-block :slices="slices" />
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
    <modale-legal-notice
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
    />
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

export default {
  name: "Blog",
  components: {
    HeaderPrismic,
    SlicesBlock,
    FooterPrismicVue,
    ModaleLegalNotice,
    ModalePolicy,
    ModaleCookies
  },
  head() {
    return {
      title: "Market Pay | Blog"
    };
  },
  data() {
    return {
      // initialize revele modale
      revele: false,
      revelePolicy: false,
      reveleCooky: false
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
    }
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
      const result = await $prismic.api.getSingle("blogpage", lang);
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
        textModaleC: modaleC.text
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style lang="sass" scoped>
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
