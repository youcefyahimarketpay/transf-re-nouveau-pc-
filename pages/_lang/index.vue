<template>
  <div>
    <!-- Vue tag to add header component -->
    <header-prismic
      :menuLinks="menuLinks"
      :menuTextProducts="menuTextProducts"
      :menuTextButton="menuTextButton"
      :altLangs="altLangs"
    />
    <!-- Slices block component -->
    <slices-block :slices="slices" />
    <!-- FooterPrismic component -->
    <footer-prismic-vue
      :text="text"
      :textSocialNetwork="textSocialNetwork"
      :textJurisdiction="textJurisdiction"
      :textCopyright="textCopyright"
    />
    <!-- modale components -->
    <div class="paraph paraph-3 paraph-3-smartphone">
      <div class="reseau-sociaux">
        <prismic-rich-text :field="textSocialNetwork" />
        <a target="blank" href="https://www.linkedin.com/company/market-pay/">
          <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 382 382"
            style="enable-background: new 0 0 382 382"
            xml:space="preserve"
          >
            <path
              style="fill: #5c6c80"
              d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
	C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
	H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
	c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
	s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
	c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
	c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
	c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
	L341.91,330.654L341.91,330.654z"
            />
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </a>
        |
        <a
          target="blank"
          href="https://www.youtube.com/channel/UCx54msRqpNrpaIC1yaZtkSw"
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#5c6c80"
              fill-rule="evenodd"
              d="M9.522,15.553 L9.52125,8.80975 L16.00575,12.193 L9.522,15.553 Z M23.76,7.64125 C23.76,7.64125 23.52525,5.9875 22.806,5.25925 C21.89325,4.303 20.87025,4.2985 20.4015,4.243 C17.043,4 12.00525,4 12.00525,4 L11.99475,4 C11.99475,4 6.957,4 3.5985,4.243 C3.129,4.2985 2.10675,4.303 1.19325,5.25925 C0.474,5.9875 0.24,7.64125 0.24,7.64125 C0.24,7.64125 0,9.58375 0,11.5255 L0,13.3465 C0,15.289 0.24,17.23075 0.24,17.23075 C0.24,17.23075 0.474,18.8845 1.19325,19.61275 C2.10675,20.569 3.306,20.539 3.84,20.63875 C5.76,20.82325 12,20.88025 12,20.88025 C12,20.88025 17.043,20.87275 20.4015,20.62975 C20.87025,20.5735 21.89325,20.569 22.806,19.61275 C23.52525,18.8845 23.76,17.23075 23.76,17.23075 C23.76,17.23075 24,15.289 24,13.3465 L24,11.5255 C24,9.58375 23.76,7.64125 23.76,7.64125 L23.76,7.64125 Z"
            />
          </svg>
        </a>
        |
        <a target="blank" href="https://twitter.com/market_pay">
          <!-- logo twitter -->
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#5c6c80"
              fill-rule="evenodd"
              d="M24,4.3086 C23.117,4.7006 22.168,4.9646 21.172,5.0836 C22.188,4.4746 22.969,3.5096 23.337,2.3596 C22.386,2.9246 21.332,3.3336 20.21,3.5556 C19.312,2.5976 18.032,1.9996 16.616,1.9996 C13.897,1.9996 11.692,4.2046 11.692,6.9236 C11.692,7.3096 11.736,7.6856 11.82,8.0456 C7.728,7.8406 4.099,5.8806 1.671,2.9006 C1.247,3.6286 1.004,4.4736 1.004,5.3766 C1.004,7.0846 1.873,8.5926 3.195,9.4756 C2.388,9.4486 1.628,9.2276 0.964,8.8596 L0.964,8.9206 C0.964,11.3066 2.661,13.2966 4.914,13.7486 C4.501,13.8626 4.065,13.9216 3.617,13.9216 C3.299,13.9216 2.991,13.8906 2.69,13.8336 C3.317,15.7896 5.135,17.2136 7.29,17.2536 C5.604,18.5736 3.481,19.3606 1.175,19.3606 C0.777,19.3606 0.385,19.3376 0,19.2926 C2.179,20.6886 4.767,21.5046 7.548,21.5046 C16.605,21.5046 21.557,14.0016 21.557,7.4946 C21.557,7.2816 21.552,7.0696 21.543,6.8586 C22.505,6.1636 23.34,5.2966 24,4.3086"
            />
          </svg>
        </a>
      </div>
      <div class="cm">
        <div class="copyright">
          <prismic-rich-text :field="textCopyright" />
        </div>
        <div class="modale-nav">
          <nav>
            <ul>
              <li id="legal-notice" @click="toggelModale">
                <prismic-rich-text :field="textJurisdiction" />
              </li>
              |
              <li id="privacy-policy" @click="toggelModalePolicy">
                <prismic-rich-text :field="textJurisdiction" />
              </li>
              |
              <li id="cookies" @click="toggelModaleCooky">
                <prismic-rich-text :field="textJurisdiction" />
              </li>
            </ul>
          </nav>
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
  name: "Home",
  components: {
    HeaderPrismic,
    SlicesBlock,
    FooterPrismicVue,
    ModaleLegalNotice,
    ModalePolicy,
    ModaleCookies,
  },
  head() {
    return {
      title: "Market Pay | Born in retail to drive payment",
    };
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
      const result = await $prismic.api.getSingle("homepage", lang);
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
        menuLinks: menuContent.menu_links,
        menuTextProducts: menuContent.product_label,
        menuTextButton: menuContent.button_label,
        altLangs: result.alternate_languages,
        // Footer
        text: footerContent.text,
        textSocialNetwork: footerContent.text_social_network,
        textJurisdiction: footerContent.text_jurisdiction,
        textCopyright: footerContent.copyright,
        // modale
        titleModaleLN: modaleLN.title,
        textModaleLN: modaleLN.text,
        titleModalePP: modalePP.title,
        textModalePP: modalePP.text,
        titleModaleC: modaleC.title,
        textModaleC: modaleC.text,
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>

<style lang="sass" scoped>
.paraph-3-smartphone
  width: 100%
  margin: 0
  padding: 1.5rem 3rem
  display: flex
  flex-direction: column
  justify-content: space-between
  text-align: center
  color: #5c6c80
  background-color: #383e51
  border: 0
  .reseau-sociaux
    display: flex
    justify-content: center
    align-items: center
    font-size: 1rem
    a
      margin: 0 0.5rem
      text-decoration: none
      outline: none
      &:hover
        color: #ccced2
      svg
        height: 20px
        &:hover path
          fill: #f1f1f1 !important
  .cm
    display: flex
    flex-direction: row-reverse
    justify-content: space-between
    align-items: center
    .copyright
      font-size: 1rem

.modale-nav ul
  list-style: none
  color: #5c6c80
  li
    display: inline-block
    &::v-deep ul
      list-style: none
      font-size: 1rem
      color: #5c6c80
      cursor: pointer
      li
        transition: color 0.4s
      &:hover
        color: #ccced2
.modale-nav ul
  li:first-child
    &::v-deep ul
      li:nth-child(2),
      li:last-child
        display: none
  li:nth-child(2)
    &::v-deep ul
      li:first-child,
      li:last-child
        display: none
  li:last-child
    &::v-deep ul
      li:first-child,
      li:nth-child(2)
        display: none

@media screen and (min-width: 767px) and (max-width: 1023.5px)
  .paraph-3-smartphone
    display: flex
    flex-direction: column
    text-align: start
    .copyright
      font-size: 12px
    .reseau-sociaux a
      color: #f1f1f1

  .cm
    width: 100%
    display: flex
    flex-flow: row-reverse wrap
    justify-content: space-between
    align-items: center

@media screen and (min-width: 540px) and (max-width: 767px)
  .paraph-3-smartphone
    display: flex
    flex-direction: column
    align-items: flex-start
    .copyright
      font-size: 12px
    .reseau-sociaux a
      color: #f1f1f1

  .cm
    width: 100%
    margin-top: 2rem
    flex-direction: column-reverse !important
    align-items: flex-start !important

@media screen and (max-width: 539.5px)
  .paraph-3-smartphone
    display: flex
    flex-direction: column
    .copyright
      font-size: 12px
    .reseau-sociaux a
      color: #f1f1f1

    .cm
      width: 100%
      margin-top: 2rem
      display: flex
      flex-direction: column-reverse
      justify-content: flex-start
      align-items: flex-start
</style>