<template>
  <div>
    <h2>test chronologie</h2>
    <div id="Blogs">
      <button @click="bonjour">Bonjour ancien</button>

      <button v-bind="blogs" @click="chronologieRecent">plus recent au plus ancien</button>
            <button v-bind="blogs" @click="chronologieAncien">plus ancie au plus recent</button>
      <div v-for="blog in blogs" :key="blog.id">
        <div>
          {{ blog.id }}|| {{ blog.titre }}||{{ blog.tag }}||{{ blog.date }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chronologie",

  data: () => {
    return {
      name: "Chronologie",

      blogs: [
        {
          id: 8,
          titre: "titre blog 2",
          content: "contenue blog 2",
          tag: "pizza",
          date: new Date("2020-12-28"),
        },
        {
          id: 4,
          titre: "titre blog 1",
          content: "contenue blog 1",
          tag: "voiture",
          date: new Date("2020-10-04"),
        },
        {
          id: 32,
          titre: "titre blog 3",
          content: "contenue blog 3",
          tag: "vélo",
          date: new Date("2020-02-15"),
        },
      ],

      count: 4,
    };
  },

  methods: {
    chronologieAncien: async function () {
      let blogsData = this.blogs;
      console.log(this.blogs);

      //blogsData.sort((a,b) => (a.date - b.date ? 1 : -1));
      blogsData.sort((a, b) => a.date - b.date);
    },
        chronologieRecent: async function () {
      let blogsData = this.blogs;
      console.log(this.blogs);

      //blogsData.sort((a,b) => (a.date - b.date ? 1 : -1));
      blogsData.sort((a, b) => b.date - a.date);
    },

    bonjour() {
      alert("text bonjour");
    },
  },
};
</script>
