<template>
  <section class="test">
    <div v-bind:class="{ searchWrapper: searchWrapper }" v-show="searchWrapper">
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
  </section>
</template>

<script>
export default {
  props: ["slice","jobs"],
  data() {
    return {
      searchVille: "",
      searchContrat: "",
      searchDomaine: "",
      search: "",
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
  methods:{
      removeDuplicate(list, elementIndex) {
      console.log(list);
      // console.log(this.slice.items[0].domaine[0].text);
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

  }
};
</script>

<style lang="sass" scoped>
</style>
