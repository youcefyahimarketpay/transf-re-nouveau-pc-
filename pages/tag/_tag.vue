<template>
  <div>
    <p>test bonjour</p>
    {{ $route.params.tag }}

    <div id="Blogs">
      <div v-for="blog in blogs" :key="blog.id">
        <div v-if="$route.params.tag === blog.tag">
          <p>{{ blog.titre }}</p>
          <p>{{ blog.cotent }}</p>
          <p>{{ blog.voiture }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          id: 1,
          titre: "titre blog 1",
          content: "contenue blog 1",
          tag: "voiture",
        },
        {
          id: 2,
          titre: "titre blog 2",
          content: "contenue blog 2",
          tag: "pizza",
        },
        {
          id: 3,
          titre: "titre blog 3",
          content: "contenue blog 3",
          tag: "vélo",
        },
      ],
    };
  },
};
</script>
