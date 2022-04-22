<template>
  <section class="header-blog">
    <div class="content">
      <div class="header">
        <prismic-rich-text :field="slice.primary.title" />
        <prismic-image :field="slice.primary.banner" />
        <div class="last-post">
          <prismic-rich-text :field="slice.items[0].post_title" />
          <prismic-rich-text :field="slice.items[0].post_text" />
          <div class="details">
            <p>{{ formattedDate }}</p>
            <prismic-rich-text :field="slice.items[0].rubric" />
            <prismic-link :field="slice.items[0].link">
              {{ $prismic.asText(slice.items[0].button_label) }}
            </prismic-link>
          </div>
        </div>
      </div>
      <!-- <div class="side-bar">
        <prismic-rich-text :field="slice.primary.side_bar" />
      </div> -->
      <div class="articles">
        <ul>
          <li v-for="item in slice.items" :key="item.id">
            <prismic-link :field="item.link">
              <prismic-image :field="item.post_img" />
              <prismic-rich-text :field="item.rubric" />
              <prismic-rich-text :field="item.post_title" />
            </prismic-link>
          </li>
        </ul>
      </div>
      <div class="see-more">
        <button class="button" @click="morePost">
          {{ $prismic.asText(slice.primary.button_more) }}
        </button>
      </div>
      <div class="see-less">
        <button class="button" @click="lessPost">
          {{ $prismic.asText(slice.primary.button_less) }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "header-blog",
  props: ["slice"],
  head() {
    return {
      title: "Market Pay | Blog",
    };
  },
  data() {
    return {
      formattedDate: "",
    };
  },
  methods: {
    morePost() {
      const more = document.querySelector(".articles");
      const btnMore = document.querySelector(".see-more");
      const btnLess = document.querySelector(".see-less");

      more.classList.add("show");
      btnMore.style.display = "none";
      btnLess.style.display = "block";
    },
    lessPost() {
      const less = document.querySelector(".articles");
      const btnMore = document.querySelector(".see-more");
      const btnLess = document.querySelector(".see-less");

      less.classList.remove("show");
      btnMore.style.display = "block";
      btnLess.style.display = "none";
    },
  },
  created() {
    this.formattedDate = Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(new Date(this.slice.items[0].date));
  },
};
</script>

<style lang="sass" scoped>
.header
  height: 800px
  padding: 8rem 5rem
  position: relative
  &::v-deep h1
    margin-bottom: 2rem
    font-size: 55px
    font-weight: 400
  &::v-deep img
    height: 800px
    width: 100%
    position: absolute
    top: 0
    left: 0
    object-fit: cover
    z-index: -1
  .last-post
    width: 500px
    &::v-deep h1
      margin-bottom: 1rem
      font-size: 35px
    &::v-deep p
      font-size: 25px
      font-weight: 300
    .details
      margin-top: 1.5rem
      display: flex
      justify-content: space-between
      p
        padding-top: 0.5rem
        font-size: 20px
      &::v-deep div:nth-child(2)
        p
          padding-top: 0.5rem
          font-size: 20px
          color: #01a2a6
      &::v-deep a
        padding: 0.5rem 1rem
        font-size: 20px
        font-weight: 300
        text-decoration: none
        color: #f1f1f1
        background-color: #01a2a6
        border-radius: 30px
        outline: none
        cursor: pointer
        &:hover
          background-color: #008b89
      .btn-read
        padding: 0.5rem 1rem
        font-size: 20px
        font-weight: 300
        text-decoration: none
        color: #f1f1f1
        background-color: #01a2a6
        border: none
        border-radius: 30px

.side-bar
  width: 100%
  padding: 3rem
  font-size: 20px
  font-weight: 300
  &::v-deep ul
    list-style: none
    li
      padding: 0.5rem 2rem
      display: inline-block
      cursor: pointer
      &:hover
        color: #01a2a6
        border-bottom: 1px solid
        border-image: radial-gradient(#01a2a6, #f1f1f1) 1

.articles
  width: 100%
  padding: 3rem 5rem
  ul
    list-style: none
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    align-items: flex-start
    li
      width: 400px
      margin-bottom: 2rem
      display: block
      a
        text-decoration: none
      &::v-deep h1
        margin: 0.5rem 0
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
      &:nth-child(n+4)
        display: none
      &:hover img
        opacity: 1

.show
  ul
    li:nth-child(n+4)
      display: block

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
  .articles
    padding: 3rem 2rem
    ul li
      width: 300px

@media screen and (min-width: 767px) and (max-width: 1023.5px)
  .header
    height: 500px
    padding: 5rem 2rem
    &::v-deep h1
      margin-bottom: 1rem
      font-size: 35px
    &::v-deep img
      height: 500px
    .last-post
      width: 370px
      &::v-deep h1
        font-size: 25px
      &::v-deep p
        font-size: 20px
      .details
        p,
        &::v-deep a,
        &::v-deep div:nth-child(2) p
          font-size: 18px

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
  .header
    height: 500px
    padding: 5rem 2rem
    &::v-deep h1
      margin-bottom: 1rem
      font-size: 35px
    &::v-deep img
      height: 500px
    .last-post
      width: 370px
      &::v-deep h1
        font-size: 25px
      &::v-deep p
        font-size: 20px
      .details
        p,
        &::v-deep a,
        &::v-deep div:nth-child(2) p
          font-size: 18px

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
  .header
    height: 400px
    padding: 4rem 1rem
    &::v-deep h1
      margin-bottom: 1rem
      font-size: 25px
    &::v-deep img
      height: 400px
    .last-post
      width: 320px
      &::v-deep h1
        font-size: 20px
      &::v-deep p
        font-size: 16px
      .details
        p,
        &::v-deep a,
        &::v-deep div:nth-child(2) p
          font-size: 16px

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