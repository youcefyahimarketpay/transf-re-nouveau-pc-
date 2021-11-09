<template>
  <div id="example-1">
    <button @click="setCount(count + 1,)">
       test incrementation
    </button>
     <p>nombre de vue: {{  count }}</p>
    <p>The button above has been clicked {{ count }} times.</p>
  </div>
</template>

<script>
import { store, mutations } from "../store/store";
export default {
  data() {
    return {
        nombre:[],
    };
  },

  computed: {
    count() {
      return store.count;
    },
  },

  methods: {
    setCount: mutations.setCount,

  },
};
</script>
