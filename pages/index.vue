<!-- Please remove this file from your project -->
<template>
  <div>
    <h2>Bar de recherche de tag</h2>

    <div>
      <label class="typo__label">Select with search</label>
      <multiselect
        v-model="tags"
        :options="options"
        placeholder="Select one"
        label="name"
        track-by="name"
      ></multiselect>
      <pre class="language-json"><code>{{tags}}</code></pre>
    </div>

    <Tagauclique />
<Chronologie />
  </div>
</template>
<script>
import Chronologie from "../components/Chronologie.vue";

export default {
  components: { Chronologie },
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
