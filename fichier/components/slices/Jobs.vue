<template>
  <div id="jobs">
    <!-- // // BARRE DE RECHERCHE  // // -->
    <!-- <div v-bind:class="{ searchWrapper: searchWrapper }" v-show="searchWrapper">
      <form>
        <input
          type="text"
          v-model="search"
          placeholder="Métier ou mots-clés"
        /><br />
        <select class="searchVille" v-model="searchVille">
          <option selected value="">localisation</option>
          <option
            v-for="item in removeDuplicate(slice.items, 2)"
            :key="item.id"
            :value="item.info[2].text"
          >
            {{ item.info[2].text }}
          </option></select
        ><br />

        <select class="searchContrat" v-model="searchContrat" name="contrat">
          <option class="optionValue" value="">Type de contrat</option>

          <option
            v-for="item in removeDuplicate(slice.items, 0)"
            :key="item.id"
            :value="item.info[0].text"
            class="optionValue"
          >
            {{ item.info[0].text }}
          </option></select
        ><br />

        <select class="searchDomaine" v-model="searchDomaine" name="Domaine">
          <option class="optionValue" :v-model="selected" value="">
            Domaine
          </option>
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

    {{this.searchWrapper}}
       {{this.affichageActive}}
          {{this.searchWrapper}}
             {{this.searchWrapper}}
                {{this.searchWrapper}}
    <p>tetst</p> -->
    <!-- // // BARRE DE RECHERCHE  // // -->

    <!-- // // lISTE DES EMPLOIES // // -->


    
    <div v-bind:class="{ mainJobs: mainJobs, mainJobsActive: mainJobsActive }">
      <div class="jobsContainer" v-show="jobsContainer">
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

      <div class="back" v-if="buttonActive">
        <div class="backContainer">
          <img src="@/images/Rectangle31.png" alt="Rectangle vert" />
          <p @click="jobInit">Revenir en arriére</p>
        </div>
      </div>
      <!-- // // BOITE MODALE DE L EMPLOIE  // // -->
      <div
        v-bind:class="{
          affichage: affichage,
          affichageActive: affichageActive,
        }"
        v-show="affichageVisible"
        @click="jobModale"
      >
        <div class="jobInfo">
          <div class="jobPresentation">
            <h3 class="jobTitle">{{ jobTitle }}</h3>
            <p class="jobDomaine">{{ jobDomaine }}</p>
          </div>

          <div class="jobDetails">
            <div class="detailListOne">
              <ul>
                <li>{{ detailListeOne[0] }}</li>
                <li>{{ detailListeOne[1] }}</li>
                <li>{{ detailListeOne[2] }}</li>
              </ul>
            </div>
            <div class="detailListTwo">
              <ul>
                <li>{{ detailListeTwo[0] }}</li>
                <li>{{ detailListeTwo[1] }}</li>
                <li>{{ detailListeTwo[2] }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mission">
          <div class="jobDescriptif">
            <h5>{{ jobDescriptifTitle }}</h5>
            <div class="descriptif-content">
              <prismic-rich-text class="description" :field="jobDescriptif" />
              <p v-for="item in jobDescriptif" :key="item.id"></p>
            </div>
          </div>

          <div class="jobLink">
            <a class="jobLinkButton" :href="jobLink">{{ jobLinkLabel }}</a>
          </div>
        </div>
      </div>
      <!-- // // BOITE MODALE DE L EMPLOIE  // // -->

      <div class="backBottom" v-if="buttonActive">
        <div class="backContainer">
          <img src="@/images/Rectangle31.png" alt="Rectangle vert" />
          <p @click="jobInit">Revenir en arriére</p>
        </div>
      </div>
    </div>
    <!-- // // lISTE DES EMPLOIES // // -->

    <!-- // // BOUTON RETOUR MISE EN OPAGE INITIAL  // // -->
    <div @click="moreJobs" class="moreJobContainer">
      <p>plus d'offre</p>
      <img src="@/images/Flash.png" />
    </div>
    <div class="buttonContainer">
      <button class="goToAbout">
        <nuxt-link class="spanGoToAbout" to="about-us"
          >A propos de market Pay</nuxt-link
        >
      </button>
      <!-- // // BOUTON RETOUR MISE EN OPAGE INITIAL  // // -->
      <button class="goToEquipe">
        <nuxt-link class="spanGoToEquipe" to="equipe">Nos Equipe </nuxt-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slice"],
  name: "jobs",
  head: {
    title: "Market Pay | Careers",
    description: "Market Pay career area with all job offers",
  },
  data() {
    return {
      searchVille: "",
      searchContrat: "",
      searchDomaine: "",
      search: "",
      modalJob: false,
      selected: "test",

      // CLASSES // //
      affichage: true,
      affichageActive: false,
      mainJobsActive: false,
      mainJobs: true,
      searchWrapper: true,

      // // Affichage state // //

      affichageVisible: false,

      // // Big affichage state // //

      buttonActive: false,
      jobsContainer: true,

      // // Doublon Job Data // //
      jobTitle: "",
      jobDomaine: "",
      detailListeOne: [],
      detailListeTwo: [],
      jobDescriptifTitle: "",
      jobDescriptif: [],
      jobLinkLabel: "",
      jobLink: "",

      // // Doublon Job Data // //
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
      console.log(list);
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

    doublon(item) {
      // // NEW CODE // //

      console.log(item);
      this.affichageVisible = true;

      this.jobTitle = item.title[0].text;
      this.jobDomaine = item.domaine[0].text;

      this.detailListeOne.push(
        item.info[0].text,
        item.info[1].text,
        item.info[2].text
      );
      this.detailListeTwo.push(
        item.info_plus[0].text,
        item.info_plus[1].text,
        item.info_plus[2].text
      );

      this.jobDescriptifTitle = item.sous_title[0].text;
      this.jobDescriptif = [...item.description];
      console.log(item.description);
      console.log(this.jobDescriptif);

      this.jobLink = item.link.url;

      this.jobLinkLabel = item.link_label[0].text;

      // // NEW CODE // //

      // // Apparition de l'oofre version mobile // //

      // // SMARTPHONE // //
      let x = window.matchMedia("(max-width: 767px)");

      if (x.matches) {
        this.affichageActive = true;
        this.jobsContainer = false;
        this.buttonActive = true;
        this.mainJobsActive = true;
        this.searchWrapper = false;
        alert('test')
      }
    },

    jobModale() {
      let x = window.matchMedia("(max-width: 767px)");

      let tab = window.matchMedia("(min-width: 768px) and (max-width: 1023px)");

      if (!x.matches || tab.matches) {
        this.affichageActive = true;
        this.jobsContainer = false;
        this.buttonActive = true;
        this.mainJobsActive = true;
        this.searchWrapper = false;
      }
    },

    jobInit() {
      let x = window.matchMedia("(max-width: 767px)");

      if (x.matches) {
        this.affichageVisible = false;
        console.log(this.affichage);
      }
      this.affichageActive = false;
      this.jobsContainer = true;
      this.buttonActive = false;
      this.mainJobsActive = false;
      this.searchWrapper = true;
    },
    moreJobs() {
      const container = document.querySelector(".jobsContainer");
      const jobs = container.querySelectorAll(".jobs:nth-child(n+5)");

      for (let i = 0; i < jobs.length; i++) {
        jobs[i].style.display = "block";
      }
    },
  },
};
</script>

<style lang="sass" scoped>
#jobs

  .searchWrapper
    width: $largeContainer
    max-width: 100%
    margin: auto
    padding-top: 2.5rem
    margin-bottom: 40px
    form
      display: flex
      margin: auto
      text-align: center
      width: 880px

      input

        box-sizing: border-box
        border-radius: 10px 0px 0px 10px
        width: 16.4375rem
        height: 2.5rem
        padding-left: 12px
        border: 1px solid $greenBrightColor
        background-image: url('@/images/Input Search.png')
        background-repeat: no-repeat
        background-position: 95%

      select
        box-sizing: border-box
        border-radius: 0px
        height: 2.5rem
        padding-left: 12px
        border: 1px solid $greenBrightColor
        appearance: none

      .searchVille
        background-image: url('@/images/Icone Géolocalisation.png')
        @include select
        width: 217px
      .searchContrat
        @include select
      .searchDomaine
        @include select
        border-top-right-radius: 10px
        border-bottom-right-radius: 10px

        // .optionValue
        //   cursor: pointer
        //   text-decoration: none
        //   // background-image: url('@/images/contrat.png')
        //   border: 2px solid red

  .mainJobs
    display: flex
    width: 880px
    // $largeContainer
    margin: auto

    .back

      width: 100%
      margin: auto
      margin-bottom: 35px
      margin-top: 18px
      .backContainer
        display: flex
        width: 850px
        margin: auto

        p

          color: $greenBrightColor
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

      width: 100%
      margin: auto
      margin-top: 23px
      margin-bottom: 20px
      .backContainer
        display: flex
        width: 850px
        margin: auto

        p

          color: $greenBrightColor
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
      align-items: center

      .jobs
        border: 1px solid #BABABA
        box-sizing: border-box
        border-radius: 0.625rem
        width: 338px
        height: 13.125rem
        padding: 1.25rem
        margin-bottom: 1.875rem
        cursor: pointer
        &:nth-child(n+5)
          display: none

        &:hover
          border: 2px solid $greenBrightColor

        &::v-deep h2
          font-size: 20px
          line-height: 23px
          margin: 8px 0px

        .domaine

          font-size: 12px
          line-height: 15px
          text-transform: uppercase
          color: #00A0A5
          margin: 8px 0px
          font-style: normal
          font-weight: 600
          font-size: 12px
          line-height: 15px
          text-transform: uppercase

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
              margin-right: 2px

          &:nth-child(2)
            &::before
              content: url('@/images/calendrier.png')
              margin-right: 5px
              position: relative
              top: 2px

          &:nth-child(3)
            position: relative
            bottom: 4px
            &::before
              content: url('@/images/Icone Géolocalisation.png')
              margin-right: 2px

              position: relative
              top: 3px
      .jobs:nth-child(n+5)
        display: none

    .affichage
      cursor: pointer
      width: 490px
      border: 2px solid $greenBrightColor
      height: 950px
      margin-left: 30px
      box-sizing: border-box
      border-radius: 10px
      &:hover
        transform: scale(1.03)
        transition-duration: 400ms

      .backAffichage
        color: $greenBrightColor
        width: 133px
        height: 23px
        cursor: pointer
        &:hover
          text-decoration: underline
      .jobInfo
        border-bottom: 2px solid $greenBrightColor
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

            margin: 8px 0px
            font-style: normal
            font-weight: 600
            font-size: 12px
            line-height: 15px
            text-transform: uppercase
            color: #00A0A5

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
                    position: relative
                    top: 2.5px
                    display: inline-block
                    width: 12px
                    height: 12px

                &:nth-child(2)
                  margin-bottom: 9px

                  &::before

                    margin-right: 5px
                    content: url('@/images/calendrier.png')
                    position: relative
                    top: 2px
                    display: inline-block
                    width: 12px
                    height: 12px

                &:nth-child(3)
                  &::before

                    margin-right: 6px
                    content: url('@/images/Icone Géolocalisation.png')
                    position: relative
                    top: 5px
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

                  position: relative
                  bottom: 6px

                  &::before

                    margin-right: 2px
                    content: url('@/images/diplome.png')
                    position: relative
                    top: 5px
                    display: inline-block
                    width: 18.76px
                    height: 17.76px

                &:nth-child(2)

                  margin-bottom: 7px
                  width: 158px

                  position: relative
                  bottom: 5px

                  &::before

                    content: url('@/images/valise.png')
                    position: relative
                    display: inline-block
                    width: 18.76px
                    height: 15.72px
                    top: 5px

                &:nth-child(3)

                  position: relative
                  bottom: 9px
                  &::before
                    position: relative
                    top: 5px

                    content: url('@/images/batiment.png')
                    display: inline-block
                    width: 18.76px
                    height: 17.76px

      .mission
        padding-top: 21px
        padding-left: 20px
        padding-right: 22px
        overflow-y: scroll
        height: 760px
        .jobDescriptif
          &::v-deep h4

            margin-bottom: 10px
            font-weight: 400
          &::v-deep p

            margin-bottom: 10px
            font-size: 14px
            font-style: normal
            font-weight: 300

        .jobLink
          &::v-deep a
            @include button

    .affichageActive
      visibility: visible
      width: 850px
      margin: auto
      position: relative
      transform: none
      height: auto
      .mission
        height: auto
  .mainJobsActive
    display: initial

  .moreJobContainer
    text-align: center
    margin-top: 40px
    cursor: pointer
    p
      font-style: normal
      font-weight: normal
      font-size: 18px
      line-height: 23px
      color: #00A0A5

  .buttonContainer
    width: 88%

    margin: auto
    text-align: center
    margin-bottom: 50px
    margin-top: 93px
    .goToEquipe

      @include button

      .spanGoToEquipe
        text-decoration: none
        font-style: normal
        font-weight: 300
        font-size: 20px
        line-height: 25px
        text-align: center
        text-transform: capitalize
        margin: 0px 10px
        color: black
    .goToAbout
      @include button
      .spanGoToAbout
        text-decoration: none
        font-style: normal
        font-weight: 300
        font-size: 20px
        line-height: 25px
        text-align: center
        text-transform: capitalize
        color: black

  // // Smartphone en paysage et Tablett // //
// @media screen and (min-width: 1000px) and (max-width: 1919px)
@media screen and (min-width: 768px) and (max-width: 999px)
  #jobs
    .searchWrapper
      width: 720px
      max-width: 100%
      margin: auto
      margin-bottom: 30px
      form
        height: 62px
        margin-left: 0px

        input
          width: 240px
        .searchVille
          width: 178px
        .searchContrat
          width: 149px
        .searchDomaine
          width: 147px

    .mainJobs
      width: 720px
      .back
        .backContainer
          width: 680px
          margin: auto
        .back-active
          display: flex
      .backBottom
        .backContainer
          width: 680px
          margin: auto

      .backBottom-active
        display: flex
      .jobsContainer
        width: 284px

        .jobs
          width: 284px
        
          margin: auto
          height: 210px
          margin-bottom: 20px
      .affichage
       
        width: 404px
        height: auto
        .mission
          width: 404px
          height: 740px
          &::v-deep p
            font-size: 14px
        .mission-active
          width: 441px
          height: 1074px
      .affichageActive
        width: 680px
        height: auto
        margin: auto
        position: relative
        .mission
          height: initial
          width: initial

@media screen and (min-width: 480px) and (max-width: 767px)
  #jobs

    .searchWrapper
      padding-top: 0px
      width: 296px

      margin: auto
      margin-bottom: 30px
      form

        display: inline

        input
          width: 296px
          border-radius: 10px
          margin-bottom: 10px

        .searchVille
          width: 296px

          border-radius: 10px
          margin-bottom: 10px
        .searchContrat
          width: 296px

          border-radius: 10px
          margin-bottom: 10px
        .searchDomaine
          width: 296px

          border-radius: 10px
          margin-bottom: 10px

    .mainJobs
      display: initial
      .back-active
        display: flex
        margin-left: 23px

      .backBottom-active
        display: flex
        margin-left: 23px
      .jobsContainer

        max-width: 100%
        width: 90%

        margin: auto
        .jobs

          margin-left: 0px

          max-width: 100%
          width: 296px
          height: 210px
          margin: auto
          margin-bottom: 19px

      .affichage
        display: none
        width: 85%
        height: auto
        margin: auto
        position: relative
      
        transform: none
        visibility: visible
        box-sizing: content-box
        .jobPresentation
          width: 267px
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
      .affichageActive
        display: none
        width: 85%
        height: auto
        margin: auto
        position: relative
        display: block
        transform: none
        visibility: visible

@media screen and (max-width: 479px)
 #jobs

    .searchWrapper
      padding-top: 0px
      width: 296px

      margin: auto
      margin-bottom: 30px
      form

        display: inline

        input
          width: 296px
          border-radius: 10px
          margin-bottom: 10px

        .searchVille
          width: 296px

          border-radius: 10px
          margin-bottom: 10px
        .searchContrat
          width: 296px

          border-radius: 10px
          margin-bottom: 10px
        .searchDomaine
          width: 296px

          border-radius: 10px
          margin-bottom: 10px

    .mainJobs
      display: initial
      .back-active
        display: flex
        margin-left: 23px

      .backBottom-active
        display: flex
        margin-left: 23px
      .jobsContainer

        max-width: 100%
        width: 90%

        margin: auto
        .jobs

          margin-left: 0px

          max-width: 100%
          width: 296px
          height: 210px
          margin: auto
          margin-bottom: 19px

      .affichage
        display: none
        width: 85%
        height: auto
        margin: auto
        position: relative
   
        transform: none
        visibility: visible
        box-sizing: content-box
        .jobPresentation
          width: 267px
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
      .affichageActive
        display: none
        width: 85%
        height: auto
        margin: auto
        position: relative
        display: block
        transform: none
        visibility: visible

</style>
