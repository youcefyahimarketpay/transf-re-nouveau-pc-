<template>
  <section class="blog-page">
    <section class="headline-blog">
      <prismic-rich-text :field="slice.primary.title" />
      <div class="last-post"></div>
      <prismic-image :field="slice.primary.banner" />
    </section>
    <section class="sidebar">
      <div class="content">
        <ul class="topics">
          <li classe="topic" v-for="item in slice.items" :key="item.id">
            <prismic-rich-text :field="item.rubric" />
          </li>
        </ul>
      </div>
    </section>
    <section class="posts">
      <ul class="post-list">
        <li class="post" v-for="item in slice.items" :key="item.id">
          <prismic-image :field="item.image_post" />
          <prismic-rich-text :field="item.rubric_post" />
          <prismic-rich-text :field="item.post_title" />
        </li>
      </ul>
      <div class="button">
        <button class="see-more" @click="showMore">See more</button>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "blog-page",
  props: ["slice"],
  methods: {
    showMore() {
      const posts = document.querySelector(".posts");
      const topics = posts.querySelectorAll(".post-list li:nth-child(n+4)");

      for (let i = 0; i < topics.length; i++) {
        topics[i].style.display = "inline-block";
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.blog-page
  .headline-blog
    height: 90vh
    max-width: 55%
    padding: 8rem 5rem 5rem
    &::v-deep h1
      margin-bottom: 2rem
      color: #d33f2a
      font-size: 55px
      font-weight: 400
    &::v-deep img
      position: absolute
      top: 0
      left: 0
      height: 90vh
      width: 100%
      object-fit: cover
      z-index: -1
  .sidebar
    padding: 3rem
    .topics
      list-style: none
      border-bottom: 1px solid
      border-image: radial-gradient(#444, #eee) 1
      li
        display: inline-block
      &::v-deep p
        padding: 0.5rem 3rem
        transition: color 0.3s, border-bottom 10s
        cursor: pointer
        &:hover
          color: #01a2a6
          border-bottom: 1px solid
          border-image: radial-gradient(#01a2a6, #f1f1f1) 1
  .posts
    margin: 3rem
    .post-list
      list-style: none
      li
        width: 30%
        margin-bottom: 5rem
        display: inline-block
        cursor: pointer
        &::v-deep h1
          font-size: 25px
          font-weight: 600
        &::v-deep p
          font-size: 20px
          color: #01a2a6
        &::v-deep img
          width: 80%
          border-radius: 30px
          background-color: #01a2a6
          opacity: 0.5
          transition: opacity 0.5s
        &:nth-child(n+4)
          display: none
        &:hover img
          opacity: 1
    .button
      width: 100%
      text-align: center
      .see-more
        padding: 0.5rem 1rem
        font-size: 20px
        color: #01a2a6
        background: transparent
        border: none
        border-bottom: 1px solid red
        border-image: radial-gradient(#01a2a6, #f1f1f1) 1
        cursor: pointer
</style>
