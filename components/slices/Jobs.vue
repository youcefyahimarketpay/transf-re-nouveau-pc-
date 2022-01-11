<template>
  <div id="jobs">
    <div id="menu">
      <ul id="menuList">
        <li class="menuOption">
          <nuxt-link class="career" to="career">Profil</nuxt-link>
        </li>
        <li class="menuOption">
          <nuxt-link class="equipe" to="equipe">Equipe</nuxt-link>
        </li>
        <li class="menuOption">
          <nuxt-link class="jobs" to="jobs">Jobs</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="search-wrapper">
      <input
        type="text"
        v-model="search"
        placeholder="Métier ou mots-clés"
      /><br />
      <select v-model="searchVille">
        <option value=""></option>
        <option
          v-for="item in removeDuplicate(slice.items, 2)"
          :key="item.id"
          :value="item.info[2].text"
        >
          {{ item.info[2].text }}
        </option></select
      ><br />

      <select v-model="searchContrat" name="contrat">
        <option value="" disabled selected>Type de contrat</option>
        <option
          v-for="item in removeDuplicate(slice.items, 0)"
          :key="item.id"
          :value="item.info[0].text"
          class="optionValue"
        >
          {{ item.info[0].text }}
        </option></select
      ><br />
      <select v-model="searchDomaine" name="Domaine">
        <option value="" disabled selected>Domaine</option>
        <option value=""></option>
        <option
          v-for="item in removeDuplicateDomaine(slice.items, 0)"
          :key="item.id"
          :value="item.domaine[0].text"
          class="optionValue"
        >
          {{ item.domaine[0].text }}
        </option></select
      ><br />
      <button>Recherche</button>
    </div>
    <div class="mainJobs">
      <div class="jobsContainer">
        <div
          class="jobs"
          v-for="item in filterdList"
          :key="item.id"
          @click="doublon(item)"
        >
          <prismic-rich-text :field="item.title" />
          <prismic-rich-text class="domaine" :field="item.domaine" />
          <prismic-rich-text class="description" :field="item.description" />
          <prismic-rich-text class="info" :field="item.info" />
        </div>
      </div>

      <p class="machin" @click="jobInit">Revenir en arriére</p>
      <div class="affichage" @click="jobModale">
        <div class="jobInfo">
          <div class="jobPresentation">
            <h3 class="jobTitle"></h3>
            <p class="jobDomaine"></p>
          </div>

          <div class="jobDetails">
            <div class="detailListOne"></div>
            <div class="detailListTwo"></div>
          </div>
        </div>
        <div class="mission">
          <div class="jobDescriptif"></div>
          <div class="jobMission"></div>
          <div class="jobArchitecture"></div>

          <div class="jobDevelopement"></div>

          <div class="jobConseille"></div>

          <div class="jobRecherche"></div>

          <div class="jobCompetence"></div>
          <div class="jobLink"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let expanded = false;
export default {
  props: ["slice"],
  name: "jobs",
  data() {
    return {
      searchVille: [],
      searchContrat: [],
      searchDomaine: [],
      search: "",
      modalJob: false,
    };
  },

  computed: {
    filterdList() {
      let filterList = this.slice.items;
      if (this.search) {
        console.log(this.search);
        filterList = filterList.filter((item) => {
          return item.title[0].text
            .toLowerCase()
            .includes(this.search.toLowerCase());
        });
      }
      if (this.searchVille.length > 0) {
        filterList = filterList.filter((item) => {
          console.log(item.info[2].text);
          return this.searchVille.includes(item.info[2].text);
        });
      }
      if (this.searchContrat.length > 0) {
        filterList = filterList.filter((item) => {
          return this.searchContrat.includes(item.info[0].text);
        });
      }
      if (this.searchDomaine.length > 0) {
        console.log(this.slice.items[0].domaine[0].text);
        console.log(this.searchDomaine);
        filterList = filterList.filter((item) => {
          return this.searchDomaine.includes(item.domaine[0].text);
        });
      }
      return filterList;
    },
  },

  methods: {
    removeDuplicate(list, elementIndex) {
      console.log(this.slice.items[0].domaine[0].text);
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

    showCheckboxesVille: function () {
      let checkboxes = document.getElementById("checkboxesVille");
      if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
      } else {
        checkboxes.style.display = "none";
        expanded = false;
      }
    },
    showCheckboxesContrat: function () {
      let checkboxes = document.getElementById("checkboxesContrat");
      if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
      } else {
        checkboxes.style.display = "none";
        expanded = false;
      }
    },

    doublon(item) {
      console.log(item);
      document.querySelector(".affichage").style.display = "initial";
      document.querySelector(".jobTitle").innerText = item.title[0].text || "";
      document.querySelector(".jobDomaine").innerText =
        item.domaine[0].text || "ND";

      for (let i = 0; i < item.info.length; i++) {
        if (item.info[i].text) {
          document.querySelector(".detailListOne").innerHTML = `<ul>
          <li>${item.info[0].text}</li>
          <li>${item.info[1].text}</li>
          <li>${item.info[2].text}</li></ul>`;
        } else {
          document.querySelector(
            ".detailListOne"
          ).innerHTML = `<ul><li>"ND"</li></ul>`;
        }
      }
      for (let i = 0; i < item.info.length; i++) {
        document.querySelector(".detailListTwo").innerHTML =
          `<ul><li><img src="/images/up.png"${item.info_plus[0].text}</li>
          <li>${item.info_plus[1].text}</li>
          <li>${item.info_plus[2].text}</li>
          </ul>` || "<p>ND</p>";
      }
      document.querySelector(".jobDescriptif").innerHTML =
        `<h4 class="jobDescriptifTitle">Descriptif du poste</h4><p class="jobDescriptifText">${item.description[0].text}</p>` ||
        "<p>ND</p>";
      document.querySelector(".jobMission").innerHTML =
        `<h5>Mission:</h5><p>${item.mission[0].text}</p>` || "<p>ND</p>";

      document.querySelector(".jobArchitecture").innerHTML =
        `<h5>Architecture et Spécifications :</h5> <p>${item.architecture[0].text}</p>` ||
        "<p>ND</p>";

      document.querySelector(".jobDevelopement").innerHTML =
        `<h5>Développement, intégration et tests :</h5> <p>${item.developpement[0].text}</p>` ||
        "<p>ND</p>";

      document.querySelector(".jobConseille").innerHTML =
        `<h5>Conseil, expertise et assistance technique :</h5> <p>${item.conseil[0].text}</p>` ||
        "<p>ND</p>";

      document.querySelector(".jobRecherche").innerHTML =
        `<h5>R&D et veille :</h5> <p>${item.recherche[0].text}</p>` ||
        "<p>ND</p>";

      document.querySelector(".jobCompetence").innerHTML =
        `<h5>Compétences :</h5> <p>${item.competence[0].text}</p>` ||
        "<p>ND</p>";

      document.querySelector(
        ".jobLink"
      ).innerHTML = `<a href="${item.link.url}">Lien: ${item.link.url}</a>`;
    },
    jobModale() {
      document.querySelector(".affichage").style.width = "850px";

      document.querySelector(".affichage").style.margin = "auto";
      document.querySelector(".affichage").style.postion = "relative";
      document.querySelector(".affichage").style.top = "5300px";
      document.querySelector(".affichage").style.transform = "none";
      document.querySelector(".jobsContainer").style.visibility = "hidden";
      document.querySelector(".machin").style.display = "initial";
      document.querySelector(".mainJobs").style.display = "initial";
      document.querySelector(".jobsContainer").style.display = "none";
    },
    jobInit() {
      document.querySelector(".affichage").style.width = "483px";
      document.querySelector(".affichage").style.height = "950px";
      document.querySelector(".affichage").style.marginLeft = "initial";
      document.querySelector(".affichage").style.marginRight = "87px";
      document.querySelector(".affichage").style.transform = "initial";
      document.querySelector(".jobsContainer").style.visibility = "initial";
      document.querySelector(".machin").style.display = "none";
      let x = window.matchMedia("(min-width: 320px) and (max-width: 425px)");
      if (x.matches) {
        document.querySelector(".mainJobs").style.display = "initial";
      } else {
        document.querySelector(".mainJobs").style.display = "flex";
      }

      document.querySelector(".jobsContainer").style.display = "initial";
    },
  },
};
</script>

<style lang="sass" scoped>
#jobs
  #menu
    #menuList
      border-bottom: 2px solid #E5E5E5
      padding-left: 86px
      display: flex
      .menuOption
        list-style-type: none
        margin-left: 1.8125rem
        margin-right: 1.8125rem
        margin-bottom: 0.5rem
        cursor: pointer
        width: 2.5625rem
        .career
          text-decoration: none
          padding-bottom: 0.4375rem
          &:hover
            color: #00A0A5
            border-bottom: 2px solid #00A0A5
        .equipe
          text-decoration: none
          padding-bottom: 0.625rem
          &:hover
            color: #00A0A5
            border-bottom: 2px solid #00A0A5

        .jobs
          text-decoration: none
          padding-bottom: 0.625rem
          padding-bottom: 0.625rem
          color: #00A0A5
          font-style: normal
          font-weight: normal
          font-size: 1.125rem
          line-height: 1.4375rem
          border-bottom: 2px solid #00A0A5

  .search-wrapper
    display: flex
    width: 53.125rem
    margin-left: 6.0625rem
    margin-bottom: 45px
    margin-top: 40px

    input
      border: 1px solid #00A2A7
      box-sizing: border-box
      border-radius: 10px 0px 0px 10px
      width: 16.4375rem
      height: 2.5rem
    select
      border: 1px solid #00A2A7
      box-sizing: border-box
      border-radius: 0px
      width: 11.125rem
      height: 2.5rem
      .optionValue
        cursor: pointer
        text-decoration: none
        &:hover
          background-color: rgba(0, 162, 167, 0.1)
          color: red

    button
      width: 7.3125rem
      height: 2.5rem
      background: #00A2A7
      border: 1px solid #00A2A7
      box-sizing: border-box
      border-radius: 0px 10px 10px 0px
      color: white
      cursor: pointer

  .mainJobs
    display: flex
    justify-content: space-around
    margin-bottom: 250px

    .machin
      color: #00A2A7
      font-size: 16px
      line-height: 23px
      height: 23px
      width: 118px
      display: none
      cursor: pointer
      &:hover
        text-decoration: underline

    .jobsContainer
      width: 339px
      height: 949px
      border: 2px solid red
      .jobs
        border: 1px solid #BABABA
        box-sizing: border-box
        border-radius: 0.625rem
        width: 21.125rem
        height: 13.125rem
        margin-left: 6rem
        padding: 1.25rem
        margin-bottom: 1.875rem
        cursor: pointer
        &:hover
          border: 2px solid #00A2A7

        &::v-deep h2
          color: #000000
          font-size: 20px
          line-height: 23px
          margin: 8px 0px
        .domaine

          font-size: 12px
          line-height: 15px
          text-transform: uppercase
          color: #00A0A5
          margin: 8px 0px
        .description
          font-weight: 300
          font-size: 12px
          line-height: 15px
          margin: 20px 0px
          color: red
          width: 244px
          height: 61px
          overflow: hidden

        &::v-deep ul

          display: flex
          justify-content: space-between
        &::v-deep li
          font-weight: 300
          font-size: 12px
          line-height: 15px
          list-style-type: none
    .affichage
      cursor: pointer
      width: 483px
      height: 950px
      border: 2px solid #00A2A7
      box-sizing: border-box
      border-radius: 10px
      margin-right: 87px
      overflow-y: scroll
      display: none
      &:hover
        transform: scale(1.03)
        transition-duration: 400ms
      .affichageModal
        border: 2px solid red
      .backAffichage
        color: #00A2A7
        width: 133px
        height: 23px
        cursor: pointer
        &:hover
          text-decoration: underline
      .jobInfo
        border: 2px solid #00A2A7
        box-sizing: border-box
        border-radius: 10px

        .jobPresentation
          margin-left: 20px
          margin-top: 20px
          margin-bottom: 17px
          margin-right: 165px
          h3
            font-style: normal
            font-weight: normal
            font-size: 20px
            line-height: 23px
            margin: 8px 0px
          .jobDomaine
            color: #00A0A5
            font-style: normal
            font-weight: 600
            font-size: 12px
            line-height: 15px
            margin: 8px 0px
        .jobDetails
          display: flex
          .detailListOne
            width: 133px
            height: 66px
            margin-right: 20px
            margin-bottom: 29px
            margin-right: 330px
          .detailListTwo
            margin-left: 30px
            margin-right: 142px
            width: 158px
            height: 61px
      .mission
        margin-top: 21px
        margin-left: 20px
        margin-right: 22px
        .jobDescriptif

          &::v-deep h4

            margin-bottom: 10px
          &::v-deep p

            margin-bottom: 10px
        .jobMission
          &::v-deep p
            margin-bottom: 10px
        .jobArchitecture
          &::v-deep p
            margin-bottom: 10px
        .jobDevelopement
          &::v-deep p
            margin-bottom: 10px
        .jobConseille
          &::v-deep p
            margin-bottom: 10px
        .jobRecherche
          &::v-deep p
            margin-bottom: 10px
        .jobCompetence
          &::v-deep p
            margin-bottom: 10px

@media screen and (max-width: 539.5px)
  #jobs
    width: 100%
    max-width: 100%
    #menu
      margin-bottom: 22px
      #menuList
        padding-left: 0rem
    .search-wrapper

      display: inline
      max-width: 100%

      margin-left: 44px
      margin-bottom: 30px

      height: 297px
      input
        margin-top: 22px
        margin-bottom: 10px
        width: 296px
        height: 40px
        border: 1px solid #00A2A7
        box-sizing: border-box
        border-radius: 10px
        margin: auto
      select
        height: 40px
        margin-left: 44px
        margin-top: 10px
        width: 296px
        border-radius: 10px

        border: 2px solid blue
      button
        color: red
        width: 296px
        height: 40px
        margin-left: 42px
        border: 1px solid #00A2A7
        box-sizing: border-box
        border-radius: 10px
        margin-top: 10px
        margin-bottom: 40px
    .mainJobs

      display: initial

      .jobsContainer
        border: 2px solid blue
        margin-left: 0px
        margin: auto
        max-width: 100%
        width: 90%
        .jobs

          margin-left: 0px
          margin: auto
          max-width: 100%
          width: 90%
          height: 210px
          margin-bottom: 19px
      .affichage
        border: 2px solid red
@media screen and (min-width: 540px) and (max-width: 767px)
  #jobs
    width: 100%
    max-width: 100%
    #menu
      margin-bottom: 22px
      #menuList
        padding-left: 0rem
    .search-wrapper

      display: inline
      max-width: 100%

      margin-left: 44px
      margin-bottom: 30px

      height: 297px
      input
        margin-top: 22px
        margin-bottom: 10px
        width: 296px
        height: 40px
        border: 1px solid #00A2A7
        box-sizing: border-box
        border-radius: 10px
        margin: auto
      select
        height: 40px
        margin-left: 44px
        margin-top: 10px
        width: 296px
        border-radius: 10px

        border: 2px solid blue
      button
        color: red
        width: 296px
        height: 40px
        margin-left: 42px
        border: 1px solid #00A2A7
        box-sizing: border-box
        border-radius: 10px
        margin-top: 10px
        margin-bottom: 40px
    .mainJobs

      display: initial

      .jobsContainer
        border: 2px solid blue
        margin-left: 0px
        margin: auto
        max-width: 100%
        width: 90%
        .jobs

          margin-left: 0px
          margin: auto
          max-width: 100%
          width: 90%
          height: 210px
          margin-bottom: 19px
      .affichage
        border: 2px solid red
@media screen and (min-width: 767px) and (max-width: 1023.5px)
  #jobs
    width: 100%
    max-width: 100%
    .search-wrapper
      width: 90%
      margin: auto
      margin-left: 32px
      margin-top: 40px
    .mainJobs
      border: 2px solid red
      .jobsContainer
        .jobs
          border: 2px solid blue
          margin-left: 32px
          margin-top: 45px
</style>
