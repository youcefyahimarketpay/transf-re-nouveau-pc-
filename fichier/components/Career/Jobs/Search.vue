<template>
  <section class="search">
    <!-- <p>{{this.items}}</p> -->
    <div v-bind:class="{ searchWrapper: searchWrapper }" v-show="searchWrapper">
      <form>
        <input
          type="text"
          v-model="search"
          placeholder="Métier ou mots-clés"
        /><br />
        <select class="select__search-ville" v-model="searchVille">
          <option selected value="">localisation</option>
         <option
            v-for="item in removeDuplicate(slice.items, 2)"
            :key="item.id"
            :value="item.info[2].text"
          >
            {{ item.info[2].text }}
          </option></select
        ><br />

        <select
          class="select__search-contrat"
          v-model="searchContrat"
          name="contrat"
        >
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

        <select
          class="select__search-domaine"
          v-model="searchDomaine"
          name="Domaine"
        >
          <option class="optionValue" value="">Domaine</option>
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
      <!-- <Offers :items="filterdList"/> -->
   
      <!-- <div v-for="item in filterdList" :key="item.id">
        {{item.title[0].text}}
      </div> -->
    </div>
  </section>
</template>

<script>
import Offers from "~/components/Career/Jobs/Offers.vue";

export default {
  props: ["slice", "Offers","items"],
  name: "Search",
  data() {
    return {
      searchVille: "",
      searchContrat: "",
      searchDomaine: "",
      search: "",
      searchWrapper: true,
      var:"hello Test"
    };
  },
  methods:{
    helloBack(){
      this.$emit('event', this.var)
    }
  },
  components:{
    Offers
  },
    // computed: {
    //   filterdList() {
    //     let filterList = this.items;
    //     if (this.search) {
    //       console.log(this.search);

    //       filterList = filterList.filter((item) => {
    //         return item.title[0].text
    //           .toLowerCase()
    //           .includes(this.search.toLowerCase());
    //       });
    //     }
    //     if (this.searchVille.length > 0) {
    //       // filterList = filterList.filter((item) => {
    //       //   console.log(item.info[2].text);
    //       //   console.log("test")
    //       //   return this.searchVille.includes(item.info[2].text);
    //       // });
    //       alert('bonjoour')
    //     }
    //     if (this.searchContrat.length > 0) {
    //       filterList = filterList.filter((item) => {
    //         return this.searchContrat.includes(item.info[0].text);
    //       });
    //     }
    //     if (this.searchDomaine.length > 0) {
    //       console.log(this.slice.items[0].domaine[0].text);
    //       console.log(this.searchDomaine);
    //       filterList = filterList.filter((item) => {
    //         return this.searchDomaine.includes(item.domaine[0].text);
    //       });
    //     }
        
    //     return filterList;
    //   },
    // },
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
    },
};
</script>

<style lang="scss" scoped>
.search {
  padding-top: 300px;
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
        background-image: url("@/images/Input Search.png");
        background-repeat: no-repeat;
        background-position: 95%;
        width: 436px;
        height: 40px;
      }
      select {
        border: 1px solid #00a2a7;
        width: 282px;
        height: 40px;
      }
      .select__search-ville {
        background-repeat: no-repeat;
      }
      .select__search-contrat {
        background-repeat: no-repeat;
      }
      .select__search-domaine {
        width: 283px;
        height: 40px;
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
        .select__search-contrat {
          width: 199px;
        }
        .select__search-domaine {
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
        .select__search-contrat {
          width: 147px;
        }
        .select__search-domaine {
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
        }
        .select__search-domaine {
          width: 416px;
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
        .select__search-domaine {
          width: 296px;
        }
      }
    }
  }
}
</style>