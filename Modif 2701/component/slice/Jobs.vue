<template>
  <div id="jobs">
    <div id="menu">
      <div id="menuContainer">
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
    </div>
    <div class="search-wrapper">
      <form>
        <input
          type="text"
          v-model="search"
          placeholder="Métier ou mots-clés"
        /><br />
        <select class="searchVille" v-model="searchVille">
          <option disabled selected value="">Choose a drink</option>
          <option
            v-for="item in removeDuplicate(slice.items, 2)"
            :key="item.id"
            :value="item.info[2].text"
          >
            {{ item.info[2].text }}
          </option></select
        ><br />

        <select v-model="searchContrat" name="contrat">
          <option class="optionValueDefault" value="">Type de contrat</option>

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
          <option class="optionValueDefault" :v-model="selected" value="">
            Domaine
          </option>
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
      </form>
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

      <div class="back">
        <img src="@/images/Rectangle31.png" alt="Rectangle vert" />
        <p @click="jobInit">Revenir en arriére</p>
      </div>

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
      <div class="backBottom">
        <img src="@/images/Rectangle31.png" alt="Rectangle vert" />
        <p @click="jobInit">Revenir en arriére</p>
      </div>
    </div>
    <div id="moreJobContainer">
      <p @click="moreJobs">plus d'offre</p>
      <img src="@/images/Flash.png" />
    </div>
    <div id="buttonContainer">
      <button id="goToAbout"><span>propos de Market Pay</span></button>
      <button id="goToEquipe"><span>Nos Equipes</span></button>
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
      searchVille: "",
      searchContrat: "",
      searchDomaine: "",
      search: "",
      modalJob: false,
      selected: "test",
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
      document.querySelector(".affichage").style.visibility = "visible";
      document.querySelector(".jobTitle").innerText = item.title[0].text || "";
      document.querySelector(".jobDomaine").innerText =
        item.domaine[0].text || "ND";

      for (let i = 0; i < item.info.length; i++) {
        if (item.info[i].text) {
          document.querySelector(
            ".detailListOne"
          ).innerHTML = `<ul class="listOneUL">
          <li class="listIcone">${item.info[0].text}</li>
          <li>${item.info[1].text}</li>
          <li>${item.info[2].text}</li>
         
    
            
            </ul>`;
        } else {
          document.querySelector(
            ".detailListOne"
          ).innerHTML = `<ul><li>"ND"</li></ul>`;
        }
      }
      for (let i = 0; i < item.info.length; i++) {
        document.querySelector(".detailListTwo").innerHTML =
          `<ul>
          <li>${item.info_plus[0].text}</li>
          <li>${item.info_plus[1].text}</li>
          <li>${item.info_plus[2].text}</li>
 
          </ul>` || `<p>ND</p>`;
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
      ).innerHTML = `<a href="${item.link.url}" class="lien">Lien: ${item.link.url}</a>`;

      // // Apparition de l'oofre version mobile // //

      let x = window.matchMedia("(min-width: 320px) and (max-width: 426px)");

      if (x.matches) {
        document.querySelector(".affichage").style.width = "85%";
        document.querySelector(".affichage").style.height = "1680px";
        document.querySelector(".affichage").style.margin = "auto";
        document.querySelector(".affichage").style.postion = "relative";
        document.querySelector(".affichage").style.top = "5300px";
        document.querySelector(".affichage").style.transform = "none";
        document.querySelector(".jobsContainer").style.visibility = "hidden";
        document.querySelector(".back").style.display = "flex";
        document.querySelector(".backBottom").style.display = "flex";
        document.querySelector(".mainJobs").style.display = "initial";
        document.querySelector(".jobsContainer").style.display = "none";
        document.querySelector(".search-wrapper").style.display = "none";
      }
    },
    jobModale() {
      let tab = window.matchMedia("(min-width: 568px) and (max-width: 1023px)");
      document.querySelector(".affichage").style.width = "850px";

      document.querySelector(".affichage").style.margin = "auto";
      document.querySelector(".affichage").style.postion = "relative";
      document.querySelector(".affichage").style.top = "5300px";
      document.querySelector(".affichage").style.transform = "none";
      document.querySelector(".jobsContainer").style.visibility = "hidden";
      document.querySelector(".back").style.display = "flex";
      document.querySelector(".backBottom").style.display = "flex";
      document.querySelector(".mainJobs").style.display = "initial";
      document.querySelector(".jobsContainer").style.display = "none";
      document.querySelector(".search-wrapper").style.display = "none";
      document.querySelector(".mission").style.width = "443px";

      if (tab.matches) {
        document.querySelector(".affichage").style.width = "680px";
        document.querySelector(".affichage").style.height = "1312px";
        document.querySelector(".affichage").style.margin = "auto";
        document.querySelector(".affichage").style.postion = "relative";
        document.querySelector(".affichage").style.top = "5300px";
        document.querySelector(".jobsContainer").style.visibility = "hidden";
        document.querySelector(".back").style.display = "flex";
        document.querySelector(".backBottom").style.display = "flex";
        document.querySelector(".mainJobs").style.display = "initial";
        document.querySelector(".jobsContainer").style.display = "none";
        document.querySelector(".search-wrapper").style.display = "none";
      }
    },
    jobInit() {
      document.querySelector(".affichage").style.width = "65%";
      document.querySelector(".affichage").style.height = "950px";
      document.querySelector(".affichage").style.marginLeft = "30px";
      document.querySelector(".affichage").style.transform = "initial";
      document.querySelector(".jobsContainer").style.visibility = "visible";
      document.querySelector(".back").style.display = "none";
      document.querySelector(".backBottom").style.display = "none";
      document.querySelector(".detailListOne").style.width = "133px";
      document.querySelector(".search-wrapper").style.display = "flex";
      document.querySelector(".mission").style.width = "361px";

      let x = window.matchMedia("(min-width: 320px) and (max-width: 425px)");

      if (x.matches) {
        location.reload();
        document.querySelector(".mainJobs").style.display = "initial";
        document.querySelector(".affichage").style.display = "none";
        document.querySelector(".detailListOne").style.fontSize = "133px";
        //document.querySelector(".search-wrapper").style.display = "initial";
        document.querySelector(".search-wrapper").style.width = "300px";
        document.querySelector(".search-wrapper").style.margin = "auto";
        document.querySelector("form").style.display = "initial";
        document.querySelector("input").style.width = "296px";
        document.querySelector("select").style.width = "296px";
      } else {
        document.querySelector(".mainJobs").style.display = "flex";
      }

      document.querySelector(".jobsContainer").style.display = "initial";
    },
    moreJobs() {
      document.querySelector(".jobsContainer").style.overflowY = "none";
    },
  },
};
</script>

<style lang="sass" scoped>
#jobs
  #menu

    width: 100%
    margin: auto
    max-width: 100%
    #menuContainer
      border-bottom: 2px solid #E5E5E5
      width: 100%
      margin: auto
      #menuList
        width: 880px

        margin: auto
        display: flex

      .menuOption

        list-style-type: none

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
    width: 80%
    max-width: 80%
    margin: auto

    height: 8rem

    padding-top: 2.5rem

    form
      display: flex

      margin: auto
      text-align: center
      width: 880px
      height: 160px

      input

        box-sizing: border-box
        border-radius: 10px 0px 0px 10px
        width: 16.4375rem
        height: 2.5rem
        padding-left: 12px

      select
        box-sizing: border-box
        border-radius: 0px
        width: 11.125rem
        height: 2.5rem
        padding-left: 12px

        .optionValue
          cursor: pointer
          text-decoration: none
          &:hover
            background-color: rgba(0, 162, 167, 0.1)

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
    width: 880px
    margin: auto

    .back
      display: none

      width: 84%
      margin: auto
      margin-bottom: 20px

      p

        color: #00A2A7
        font-size: 16px
        line-height: 23px
        height: 1.4375rem
        width: 7.375rem
        margin-top: 7px
        margin-left: 5px

        cursor: pointer
        &:hover
          text-decoration: underline
      img
        height: 24px
        margin-top: 5px
    .backBottom
      display: none

      width: 84%
      margin: auto
      margin-bottom: 20px

      p

        color: #00A2A7
        font-size: 16px
        line-height: 23px
        height: 1.4375rem
        width: 7.375rem
        margin-top: 7px
        margin-left: 5px

        cursor: pointer
        &:hover
          text-decoration: underline
      img
        height: 24px
        margin-top: 5px

    .jobsContainer
      width: 339px
      height: 59.3125rem
      align-items: center
      overflow-y: hidden

      .jobs
        border: 1px solid #BABABA
        box-sizing: border-box
        border-radius: 0.625rem
        width: 338px
        height: 13.125rem
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
          font-weight: bold

        .description
          font-weight: 300
          font-size: 12px
          line-height: 15px
          margin: 20px 0px
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

          &:nth-child(1)
            &::before
              content: url('@/images/contrat.png')

          &:nth-child(2)
            &::before
              content: url('@/images/calendrier.png')

          &:nth-child(3)
            &::before
              content: url('@/images/localisation.png')
      .jobs:nth-child(n+5)
        display: none

    .affichage
      cursor: pointer
      width: 490px

      height: 950px
      margin-left: 30px
      border: 2px solid #00A2A7
      box-sizing: border-box
      border-radius: 10px
      overflow-y: scroll
      visibility: hidden
      &:hover
        transform: scale(1.03)
        transition-duration: 400ms

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
            font-weight: bold
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

          width: 100%

          .detailListOne
            margin-left: 30px
            margin-bottom: 29px
            width: 133px
            height: 66px

            font-size: 12px
            &::v-deep ul

              li
                list-style-type: none
                &:nth-child(1)
                  margin-bottom: 9px
                  &::before

                    margin-right: 4px
                    content: url('@/images/contrat.png')
                    position: static
                    display: inline-block
                    width: 12px
                    height: 12px

                &:nth-child(2)
                  margin-bottom: 9px
                  &::before
                    margin-right: 5px
                    content: url('@/images/calendrier.png')
                    position: static
                    display: inline-block
                    width: 12px
                    height: 12px

                &:nth-child(3)
                  &::before
                    margin-right: 6px
                    content: url('@/images/Icone Géolocalisation.png')
                    position: static
                    display: inline-block
                    width: 10.58px
                    height: 14.11px

          .detailListTwo
            margin-left: 30px
            width: 180px
            height: 61px

            font-size: 12px
            &::v-deep ul

              li
                list-style-type: none
                &:nth-child(1)
                  &::before
                    position: static
                    margin-right: 2px
                    content: url('@/images/diplome.png')
                    position: static
                    display: inline-block
                    width: 18.76px
                    height: 17.76px

                &:nth-child(2)
                  margin-bottom: 8px
                  width: 158px

                  &::before
                    margin-right: 1.24px
                    content: url('@/images/calendrier.png')
                    position: relative
                    display: inline-block
                    width: 18.76px
                    height: 15.72px
                    top: 5px

                &:nth-child(3)
                  &::before
                    content: url('@/images/batiment.png')
                    display: inline-block
                    width: 18.76px
                    height: 17.76px

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
        .joblink
          width: 50px
          .lien

            width: 50px

  #moreJobContainer
    text-align: center
    p
      font-style: normal
      font-weight: normal
      font-size: 18px
      line-height: 23px
      color: #00A0A5
  #buttonContainer
    width: 88%

    margin: auto
    text-align: center
    margin-bottom: 50px
    margin-top: 93px
    #goToEquipe
      width: 145px
      height: 36px
      left: 559px
      bottom: 735px

      background: #C2C0C0
      border-radius: 17.5px
      span
        font-style: normal
        font-weight: 300
        font-size: 20px
        line-height: 25px
        text-align: center
        text-transform: capitalize
        margin: 0px 10px
    #goToAbout
      width: 210px
      height: 36px
      right: 493px
      bottom: 735px
      background: #00A0A5
      border-radius: 17.5px
      span
        font-style: normal
        font-weight: 300
        font-size: 20px
        line-height: 25px
        text-align: center
        text-transform: capitalize

  // // Smartphone en paysage et Tablett // // 
@media screen and (min-width: 568px) and (max-width: 1023px)
  #jobs
    width: 100%
    max-width: 100%
    #menu
      margin: auto
      max-width: 100%
      margin-bottom: 22px
      #menuContainer
        border-bottom: 2px solid #E5E5E5
        width: 100%
        margin: auto
        #menuList
          padding-left: 0rem
          width: 720px
    .search-wrapper
      width: 720px
      max-width: 100%
      margin: auto
      margin-bottom: 30px

      form

        width: 704px
        height: 62px
        margin-left: 0px

    .mainJobs
      width: 720px
      .jobsContainer
        width: 284px
        height: 920px
        .jobs
          width: 284px
          height: 920px
          margin-left: 0px
          margin: auto

          height: 210px
          margin-bottom: 27px
        

          &:nth-child(2)

            .description
              height: 36px
          &:nth-child(4)

            .description
              height: 48px

      .affichage
        margin: auto
        width: 404px
        height: 920px
        margin-right: 1px
        .mission

          width: 361px
          height: 1074px
     
          &::v-deep p
            font-size: 14px

// // Smartphone en Portrait // // 
@media screen and (min-width: 320px) and (max-width: 567px)
  #jobs
    width: 100%
    max-width: 100%
    #menu
      margin-bottom: 22px
      #menuContainer
        #menuList
          padding-left: 0rem
          margin-left: 34px

    .search-wrapper
      padding-top: 0px
      width: 300px
      max-width: 100%
      height: 297px
      margin: auto
      margin-bottom: 30px
      form

        display: inline
        width: 296px
        height: 297px

        input
          width: 296px
          border: 1px solid #00A2A7
          box-sizing: border-box
          border-radius: 10px
          margin-bottom: 10px
        select
          width: 296px
          border: 1px solid #00A2A7
          box-sizing: border-box
          border-radius: 10px
          margin-bottom: 10px

        button
          width: 296px
          height: 40px
          border: 1px solid #00A2A7
          box-sizing: border-box
          border-radius: 10px

    .mainJobs

      display: initial

      .jobsContainer

        margin-left: 0px

        max-width: 100%
        width: 90%
        height: 950px

        margin: auto
        .jobs

          margin-left: 0px

          max-width: 100%
          width: 296px
          height: 210px
          margin: auto
          margin-bottom: 19px

          &:nth-child(2)
            .description

              height: 33px
      .affichage
        height: 0px
        .jobPresentation
          width: 205px
          height: 58px
        .jobDetails
          .detailListOne

            &::v-deep ul
              width: 81px
              height: 69px
              font-size: 10px
          .detailListTwo

            &::v-deep ul
              width: 125px
              height: 61px
              font-size: 10px
    #buttonContainer

      box-sizing: content-box

      #goToEquipe
        width: 100%
        height: 36px
      #goToAbout
        width: 100%
        height: 36px
        margin-bottom: 17px
</style>
