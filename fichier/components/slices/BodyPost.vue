<template>
  <section class="body-post">
    <!-- <pre v-html="JSON.stringify(slice, null, 4)"></pre> -->
    <prismic-link :field="slice.primary.blog_link">
      <svg
        width="48px"
        height="48px"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.8839 8.36612C32.372 8.85427 32.372 9.64573 31.8839 10.1339L18.0178 24L31.8839 37.8661C32.372 38.3543 32.372 39.1457 31.8839 39.6339C31.3957 40.122 30.6043 40.122 30.1161 39.6339L15.3661 24.8839C14.878 24.3957 14.878 23.6043 15.3661 23.1161L30.1161 8.36612C30.6043 7.87796 31.3957 7.87796 31.8839 8.36612Z"
          fill="#01a2a6"
        />
      </svg>
      <prismic-rich-text
        :field="slice.primary.button_back"
        style="display: inline-block"
      />
    </prismic-link>
    <div class="container">
      <div class="content">
        <prismic-rich-text :field="slice.primary.body1" />
        <div class="sys-like" @click="countLike">
          <button class="likes"></button>
        </div>
      </div>
    </div>
    <!-- <pre v-html="JSON.stringify(doc, null, 6)" /> -->
    <div class="articles">
      <ul>
        <li v-for="item in doc.items" :key="item.id">
          <prismic-link :field="item.link">
            <prismic-image :field="item.post_img" />
            <prismic-rich-text :field="item.rubric" />
            <prismic-rich-text :field="item.post_title" />
          </prismic-link>
        </li>
      </ul>
    </div>
    <div class="see-more">
      <button class="button" @click="morePost">Chargé plus</button>
    </div>
    <div class="see-less">
      <button class="button" @click="lessPost">Chargé moins</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "body-post",
  props: ["slice"],
  data() {
    return {
      doc: "",
      counlike: 0,
    };
  },
  methods: {
    countLike() {
      let likes = document.querySelector(".sys-like");
      likes.classList.toggle("like");

      if (likes.classList.value === "sys-like like") this.counlike += 1;
      else this.counlike -= 1;
    },
    morePost() {
      const post = document.querySelector(".articles");
      const btnMore = document.querySelector(".see-more");
      const btnLess = document.querySelector(".see-less");

      post.classList.add("show");
      btnMore.style.display = "none";
      btnLess.style.display = "block";
    },
    lessPost() {
      const post = document.querySelector(".articles");
      const btnMore = document.querySelector(".see-more");
      const btnLess = document.querySelector(".see-less");

      post.classList.remove("show");
      btnMore.style.display = "block";
      btnLess.style.display = "none";
    },
  },
  async fetch() {
    this.doc = (await this.$prismic.api.getSingle("blogpage")).data.body[0];
  },
};
</script>

<style lang="sass" scoped>
.body-post
  padding: 3rem 0
  a
    position: relative
    bottom: 1rem
    left: 20%
    font-size: 20px
    font-weight: 300
    text-decoration: none
    color: #01a2a6
    svg
      height: 35px
      display: inline-block
      padding-top: 10px
      vertical-align: bottom
  .container
    display: flex
    justify-content: center
    align-items: center
    .content
      max-width: 600px

      &::v-deep h1
        margin-bottom: 1rem
        font-size: 25px
        font-weight: 400
      &::v-deep p
        margin-bottom: 1rem
        font-size: 18px
        font-weight: 300
      &::v-deep img
        width: 100%
      &::v-deep iframe
        width: 600px
        height: 300px

      &::v-deep ul,
      &::v-deep ol
        margin-bottom: 1rem
        padding-left: 2rem
        font-size: 18px
        font-weight: 300

.articles
  padding: 5rem 12rem 3rem 0
  ul
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    align-items: flex-start
    list-style: none
    li
      width: 400px
      padding: 0
      margin-bottom: 2rem
      a
        text-decoration: none
        &:hover
          text-decoration: none
      &::v-deep h1
        font-size: 25px
        font-weight: 550
        color: #333
      &::v-deep p
        margin-top: 1rem
        font-size: 20px
        font-weight: 300
        color: #01a2a6
      p
        font-size: 20px
        font-weight: 300
        color: #333
      &::v-deep img
        width: 100%
        border-radius: 30px
        opacity: 0.5
        transition: opacity 0.5s
      &:first-child
        display: none
      &:nth-child(n+5)
        display: none
      &:hover img
        opacity: 1

.show
  ul
    li:nth-child(n+5)
      display: block

.sys-like
  .likes
    padding: 0.5rem
    font-size: 20px
    font-weight: 300
    color: #01a2a6
    background-color: transparent
    border: none

.see-more
  width: 100%
  text-align: center
  .button
    margin-bottom: 3rem
    padding: 0.5rem 1rem
    font-size: 20px
    color: #01a2a6
    background: transparent
    border: none
    border-bottom: 1px solid red
    border-image: radial-gradient(#01a2a6, #f1f1f1) 1
    outline: none
    cursor: pointer

.see-less
  display: none
  width: 100%
  text-align: center
  .button
    margin-bottom: 3rem
    padding: 0.5rem 1rem
    font-size: 20px
    color: #01a2a6
    background: transparent
    border: none
    border-bottom: 1px solid red
    border-image: radial-gradient(#01a2a6, #f1f1f1) 1
    outline: none
    cursor: pointer

@media screen and (min-width: 1024px) and (max-width: 1024px)
  .body-post a
    left: 5%

  .articles
    padding: 3rem 2rem
    ul li
      width: 300px

@media screen and (min-width: 767px) and (max-width: 1023.5px)
  .body-post a
    left: 0

  .articles
    padding: 3rem 1rem
    ul li
      width: 350px
      &::v-deep h1
        font-size: 20px
      &::v-deep p
        font-size: 18px

  .see-more,
  .see-less
    font-size: 18px

@media screen and (min-width: 540px) and (max-width: 767px)
  .body-post
    a
      left: 0
      font-size: 16px
      svg
        height: 28px
        margin-right: -1rem
    .container
      .content
        max-width: 400px
        &::v-deep iframe

          width: 400px

  .articles
    padding: 3rem 0
    ul
      flex-direction: column
      justify-content: center
      align-items: center
      li
        width: 350px
        display: block
        &::v-deep h1
          font-size: 20px
        &::v-deep p
          font-size: 18px

  .see-more,
  .see-less
    font-size: 18px

@media screen and (max-width: 539.5px)
  .body-post
    a
      left: 0
      font-size: 16px
      svg
        height: 28px
        margin-right: -1rem
    .container
      .content
        max-width: 300px
        &::v-deep h1
          font-size: 22px
        &::v-deep iframe

          width: 300px

  .articles
    padding: 3rem 0
    ul
      flex-direction: column
      justify-content: center
      align-items: center
      li
        width: 300px
        display: block
        &::v-deep h1
          font-size: 20px
        &::v-deep p
          font-size: 18px

  .see-more,
  .see-less
    font-size: 18px
</style>