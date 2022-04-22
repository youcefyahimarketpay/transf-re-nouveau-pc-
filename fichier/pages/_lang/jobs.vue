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

    <CareerMenu :menuData="menuData"></CareerMenu>
    <div v-for="item in items" :key="item.id"></div>

    <section v-if="modaleActif" class="search">
      <div class="searchWrapper">
        <form>
          <div>
            <input
              type="text"
              v-model="search"
              placeholder="Métier ou mots-clés"
              list="browsers"
            />
            <datalist id="browsers">
              <option
                v-for="item in items"
                :key="item.id"
                :value="item.title[0].text"
              >
           
              </option>
            </datalist>
          </div>

          <select class="select__search-ville" v-model="searchVille">
            <option selected value="">localisation</option>
            <option
              v-for="item in removeDuplicate(items, 2)"
              :key="item.id"
              :value="item.info[2].text"
            >
            {{item.info[2].text}}</option>
          </select>
          <br />
          <!-- <div class="select-container"></div> -->
          <select
            :class="{
              selectSearchContrat: selectSearchContrat,
              selectSearchContratActif: selectSearchContratActif,
            }"
            @click="searchContratMethods"
            v-model="searchContrat"
            name="contrat"
          >
            <option class="optionValue" value="">Type de contrat</option>
            <option
              v-for="item in removeDuplicate(items, 0)"
              :key="item.id"
              :value="item.info[0].text"
            >
            {{item.info[0].text}}
            </option></select
          ><br />

          <select
            :class="{
              selectSearchDomaine: selectSearchDomaine,
              selectSearchDomaineActif: selectSearchDomaineActif,
            }"
            v-model="searchDomaine"
            @click="searchDomaineMethods"
            name="Domaine"
          >
            <option class="optionValue" value="">Domaine</option>
            -->
            <option
              v-for="item in removeDuplicateDomaine(items, 0)"
              :key="item.id"
              :value="item.domaine[0].text"
              class="optionValue"
            >
              {{ item.domaine[0].text }}
            </option></select
          ><br />
        </form>
        <!-- <Offers :items="filterdList"/> -->
        <!-- <div v-for="item in filterdList" :key="item.id">
        {{item.title[0].text}}
      </div> -->
      </div>
    </section>
    <section @click="initSearchLogo">
      <Offers
        :items="filterdList"
        :modaleActif="modaleActif"
        :formDisable="formDisable"
        :formEnable="formEnable"
        @actif="updateModaleActif()"
        @blabla="machin()"
        @postulez="candidater()"
        v-if="formDisable"
      ></Offers>
    </section>


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
import HeaderCareer from "~/components/Career/HeaderCareer.vue";
import CareerMenu from "~/components/CareerMenu";
import Search from "~/components/Career/Jobs/Search.vue";
import Offers from "~/components/Career/Jobs/Offers.vue";
import Form from "~/components/Career/Jobs/Form.vue";
import ContactText from "~/components/slices/ContactText.vue";

export default {
  name: "Career",
  components: {
    HeaderPrismic,
    SlicesBlock,
    FooterPrismicVue,
    ModaleLegalNotice,
    ModalePolicy,
    ModaleCookies,

    CareerMenu,
    Search,
    Form,
    Offers,
    HeaderCareer,
    ContactText,
    selectSearchDomaine: true,
  },
  data() {
    return {
      // initialize revele modale
      revele: false,
      revelePolicy: false,
      reveleCooky: false,
      searchVille: "",
      searchContrat: "",
      searchDomaine: "",
      search: "",
      visibleMachin: true,
      modaleActif: true,
      formDisable: true,
      formEnable: false,
      selectSearchContrat: true,
      selectSearchDomaine: true,
      selectSearchContratActif: false,
      selectSearchDomaineActif: false,
    };
  },

  computed: {
    filterdList() {
      let filterList = this.items;
      if (this.search) {
        filterList = filterList.filter((item) => { console.log(item.title)
          return item.title[0].text
            .toLowerCase()
            .includes(this.search.toLowerCase());
        });
      }
      if (this.searchVille.length > 0) {
        filterList = filterList.filter((item) => {
          return this.searchVille.includes(item.info[2].text);
        });
      }
      if (this.searchContrat.length > 0) {
        filterList = filterList.filter((item) => {
          return this.searchContrat.includes(item.info[0].text);
        });
      }
      if (this.searchDomaine.length > 0) {
        filterList = filterList.filter((item) => {
          return this.searchDomaine.includes(item.domaine[0].text);
        });
      }

      return filterList;
    },
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

    updateModaleActif() {
      this.modaleActif = false;
    },
    machin() {
      this.modaleActif = true;
    },
    candidater() {
      this.modaleActif = false;
      this.formDisable = false;
      this.formEnable = true;
    },
    candidaterOff() {
      this.modaleActif = true;
      this.formDisable = true;
      this.formEnable = false;
    },
    removeDuplicate(list, elementIndex) {
      const filteredList = [];

      list.forEach((element) => {
        let foundItem = filteredList.find(
          (item) =>
            item?.info[elementIndex]?.text === element?.info[elementIndex]?.text
        );
        if (!foundItem) filteredList.push(element);
      });

      return filteredList;
    },
    removeDuplicateDomaine(list, elementIndex) {
      const filteredList = [];

      list.forEach((element) => {
        let foundItem = filteredList.find(
          (item) =>
            item?.domaine[elementIndex]?.text ===
            element?.domaine[elementIndex]?.text
        );
        if (!foundItem) filteredList.push(element);
      });

      return filteredList;
    },
    searchContratMethods() {
      if (this.selectSearchContratActif === false) {
        this.selectSearchContratActif = true;
      } else {
        this.selectSearchContratActif = false;
      }
    },
    searchDomaineMethods() {
      if (this.selectSearchDomaineActif === false) {
        this.selectSearchDomaineActif = true;
      } else {
        this.selectSearchDomaineActif = false;
      }
    },
    initSearchLogo() {
      if (this.selectSearchDomaineActif === true) {
        this.selectSearchDomaineActif = false;
      }
      if (this.selectSearchContratActif === true) {
        this.selectSearchContratActif = false;
      }
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
       
      const result = await $prismic.api.getSingle("jobs", lang);
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
        textModaleC: modaleC.text,
        items: result.data.body[3].items,
        heroData: result.data.body[0],
        menuData: result.data.body[1],
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
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
  .form
    .main-container
      width: 416px
      .form-container
        width: 416px
        h2
          font-size: 18px
          span
            font-size: 24px
        form
          .first-section-form
            display: initial
            .first-section-form__name
              input
                width: 416px
          .second-section-form
            input
              width: 416px
            .message
              width: 416px
              height: 133px
          .last-section-form
            .last-section-form__cv
              input
                width: 416px
            .last-section-form__document
              input
                width: 416px
          .submit
            margin-left: 0px
            width: 416px

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

  .form
    .main-container
      width: 296px
      .form-container
        width: 296px
        h2
          font-size: 18px
          width: 243px

          padding-left: 26.5px
          padding-right: 26.5px
          margin: auto

          margin-bottom: 20px
          line-height: 23px
          span
            font-size: 24px

        form
          .first-section-form
            display: initial
            .first-section-form__name
              input
                width: 296px
          .second-section-form
            input
              width: 296px
            .message
              width: 296px
              height: 133px
          .last-section-form
            .last-section-form__cv
              input
                width: 296px
            .last-section-form__document
              width: 296px
              label
                width: 296px

                height: 36px
              input
                width: 296px
          .submit
            margin-left: 0px
            width: 296px

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
<style lang="scss" scoped>
.search {
  .searchWrapper {
    width: 1280px;
    max-width: 100%;
    margin: auto;
    padding-top: 2.5rem;
    margin-bottom: 40px;

    form {
      display: flex;
      input {
        border: 1px solid #00a2a7;
        border-radius: 2px 0px 0px 2px;
        background-image: url("@/assets/img/Career/Logo offre/Icone Search.svg");
        background-repeat: no-repeat;
        background-position: 95%;
        width: 436px;
        height: 40px;
        padding-left: 12px;
        outline: none;
        appearance: none;
      }
      input::-webkit-calendar-picker-indicator {
        opacity: 0;
      }
      .browsers {
        border: 2px solid red;
        outline: none;
        appearance: none;
        option {
          border:2px solid red;
          &:hover {
            background-color: red;
          }
        }
      }
      select {
        border: 1px solid #00a2a7;
        padding-left: 11px;
        width: 282px;
        height: 40px;
        outline: none;
        appearance: none;
      }

      .select__search-ville {
        // background-repeat: no-repeat;
        border-left: none;

        background-image: url("@/assets/img/Career/Logo offre/Icone Géolocalisation.svg");
        background-repeat: no-repeat;
        background-position: 95%;
      }

      .selectSearchContrat {
        background-repeat: no-repeat;
        border-left: none;
        background-image: url("@/assets/img/Career/Logo offre/list icon.svg");
        background-repeat: no-repeat;
        background-position: 95%;
      }
      .selectSearchContratActif {
        background-image: url("@/assets/img/Career/Logo offre/Icone select down.svg");
      }
      .selectSearchDomaine {
        width: 283px;
        height: 40px;
        border-left: none;
        background-image: url("@/assets/img/Career/Logo offre/list icon.svg");
        background-repeat: no-repeat;
        background-position: 95%;
      }
      .selectSearchDomaineActif {
        background-image: url("@/assets/img/Career/Logo offre/Icone select down.svg");
      }
    }
  }
}

@media screen and (min-width: 1000px) and (max-width: 1919px) {
  .search {
    .searchWrapper {
      width: 900px;
      form {
        input {
          width: 304px;
          height: 40px;
        }
        .select__search-ville {
          width: 198px;
        }
        .selectSearchContrat {
          width: 199px;
        }
        .selectSearchDomaine {
          width: 198px;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 999px) {
  .search {
    .searchWrapper {
      width: 668px;
      form {
        input {
          width: 229px;
        }
        .select__search-ville {
          width: 147px;
        }
        .selectSearchContrat {
          width: 147px;
        }
        .selectSearchDomaine {
          width: 148px;
        }
      }
    }
  }
}

@media screen and (min-width: 480px) and (max-width: 767px) {
  .search {
    .searchWrapper {
      width: 416px;
      form {
        display: inline;
        input {
          width: 416px;
          margin-bottom: 20px;
        }
        select {
          width: 416px;
          margin-bottom: 20px;
          border: 1px solid #00a2a7;
        }
        .selectSearchDomaine {
          width: 416px;
          border: 1px solid #00a2a7;
        }
        .selectSearchContrat {
          border: 1px solid #00a2a7;
        }
        .select__search-ville {
          border: 1px solid #00a2a7;
        }
      }
    }
  }
}

@media screen and (max-width: 479px) {
  .search {
    .searchWrapper {
      width: 296px;
      form {
        display: inline;
        input {
          width: 296px;
          margin-bottom: 20px;
        }
        select {
          width: 296px;
          margin-bottom: 20px;
        }
        .selectSearchDomaine {
          width: 296px;
          border: 1px solid #00a2a7;
        }
        .selectSearchContrat {
          border: 1px solid #00a2a7;
        }
        .select__search-ville {
          border: 1px solid #00a2a7;
        }
      }
    }
  }
}
</style>
