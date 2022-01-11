<template>
  <div class="bloc-modale" v-if="revele">
    <div class="overlay" @click="toggelModale"></div>
    <div class="modale-card">
      <div class="banner">
        <prismic-rich-text :field="titleModaleLN" />
        <button class="btn-close" @click="toggelModale">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="94.926px"
            height="94.926px"
            viewBox="0 0 94.926 94.926"
            style="enable-background: new 0 0 94.926 94.926"
            xml:space="preserve"
          >
            <g>
              <path
                fill="#fff"
                d="M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0
              c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096
              c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476
              c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62
              s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z"
              />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </button>
      </div>
      <div class="content">
        <prismic-rich-text :field="textModaleLN" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModaleLegalNotice",
  props: ["titleModaleLN", "textModaleLN", "revele", "toggelModale"],
};
</script>

<style lang="sass" scoped>
.bloc-modale
  display: flex
  justify-content: center
  align-items: center
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0

.overlay
  background: rgba(0, 0, 0, 0.7)
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0

.modale-card
  background: #fff
  color: #333
  position: fixed
  top: 5rem
  bottom: 5rem
  left: 15rem
  right: 15rem
  overflow: hidden
  overflow-y: scroll

.banner
  position: fixed
  left: 15rem
  right: 15rem
  background-color: #01a2a6
  display: flex
  justify-content: space-between
  align-items: center
  padding: 1rem 0.5rem
  &::v-deep div
    width: 95%
    h1
      font-size: 23px
      color: #fff
      text-align: center
      font-weight: 400
  .btn-close
    width: 5%
    font-size: 16px
    font-weight: bold
    color: #fff
    background-color: transparent
    border: none
    cursor: pointer
    svg
      height: 15px
      width: 15px

.content
  padding: 0 50px
  padding-top: 80px
  padding-bottom: 2rem
  &::v-deep h2
    color: #01a2a6
    margin: 2rem 0
    font-weight: 400
  .gras
    font-weight: bold
    margin: 1rem 0
    display: block
  &::v-deep p
    font-size: 18px
    margin-bottom: 1rem
  &::v-deep ul
    font-size: 18px
    margin: 1rem 2rem
  &::v-deep a
    font-size: 18px
    color: #333
    text-decoration: underline

@media screen and (min-width: 768px) and (max-width: 1023.5px)
  .modale-card
    top: 10rem
    bottom: 10rem
    left: 10rem
    right: 10rem

  .banner
    left: 10rem
    right: 10rem
    padding: 1rem 0.5rem

  .content
    padding: 3rem 2rem
    &::v-deep h2
      font-size: 20px
      margin: 1rem 0
    &::v-deep p,
    &::v-deep ul,
    .gras
      font-size: 16px

    .overflow-table
      overflow: hidden
      overflow-x: scroll

@media screen and (min-width: 320px) and (max-width: 767.5px)
  .modale-card
    left: 2rem
    right: 2rem

  .banner
    left: 2rem
    right: 2rem
    padding: 1rem 0.5rem

  .content
    padding: 3rem 2rem
    &::v-deep h2
      font-size: 20px
      margin: 1rem 0
    &::v-deep p,
    &::v-deep ul,
    .gras
      font-size: 16px

    .overflow-table
      overflow: hidden
      overflow-x: scroll
</style>
