<template>
  <div>
    <h2>Bar de recherche de tag</h2>
    <div>
      <label class="typo__label">Select with search</label>
      <multiselect
        v-model="value"
        :searchable="true"
        :createTag="true"
        :options="options"
        placeholder="Select one"
        label="name"
        track-by="name"
      >
      </multiselect>
      <pre
        class="language-json"
      ><code class="truc" @click="truc">{{ value  }}</code></pre>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: null,

      options: [
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
  methods: {
    truc() {
      alert("bonjour");
    },
  },
};
</script>

<style scoped>
.truc {
  cursor: pointer;
}
</style>
