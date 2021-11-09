<!-- Please remove this file from your project -->
<template>
  <div>

    <Tagauclique />
    <Chronologie />
    <Compteur-vue />
    <SearchBarTag/>
  </div>
</template>
<script>
import Chronologie from "../components/Chronologie.vue";
import CompteurVue from "../components/CompteurVue.vue";

export default {
  components: { Chronologie, CompteurVue },
  data: () => {
    return {
      name: "",
      value: "",

      options: [],

      tags: [
        {
          id: 1,
          name: "voiture",
        },
        {
          id: 2,
          name: "pizza",
        },
        {
          name: "vélo",
        },
      ],
    };
  },
};
</script>

<style scoped>
.dropdownWrapper {
  max-width: 350px;
  position: relative;
  margin: auto;
}
.selectedTag {
  height: 40px;
  border: 2px solid balck;
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dropdownPopover {
  position: absolute;
  border: 2px solid red;
  top: 46px;
  left: 0;
  right: 0;
}
.options ul {
  max-height: 200px;
  overflow-y: scroll;
}
</style>
