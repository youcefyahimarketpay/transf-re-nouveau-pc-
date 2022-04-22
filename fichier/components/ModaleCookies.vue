<template>
  <div class="bloc-modale" v-if="reveleCooky">
    <div class="overlay" @click="toggelModaleCooky"></div>
    <div class="modale-card">
      <div class="banner">
        <prismic-rich-text :field="titleModaleC" />
        <button class="btn-close" @click="toggelModaleCooky">
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
        <prismic-rich-text :field="textModaleC" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModaleCookies",
  props: ["titleModaleC", "textModaleC", "reveleCooky", "toggelModaleCooky"],
};
</script>

<style lang="sass" scoped>
.bloc-modale
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  display: flex
  justify-content: center
  align-items: center

.overlay
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  background: rgba(0, 0, 0, 0.7)

.modale-card
  position: fixed
  top: 5rem
  bottom: 5rem
  left: 15rem
  right: 15rem
  color: #333
  background-color: #fff
  overflow: hidden
  overflow-y: scroll

.banner
  padding: 1rem 0.5rem
  position: fixed
  left: 15rem
  right: 15rem
  display: flex
  justify-content: space-between
  align-items: center
  background-color: #01a2a6
  &::v-deep div
    width: 95%
    h1
      text-align: center
      font-size: 23px
      font-weight: 400
      color: #fff
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
  padding: 80px 50px 2rem
  &::v-deep h2
    margin: 2rem 0
    font-weight: 400
    color: #01a2a6
  &::v-deep p
    margin-bottom: 1rem
    font-size: 18px
  &::v-deep a
    text-decoration: underline
    font-size: 18px
    color: #333
  &::v-deep ul
    margin: 1rem 2rem
    font-size: 18px
  &::v-deep ol
    list-style: none
    display: flex
    flex-flow: row wrap
    li
      width: 25%
      padding: 1rem
      border: 1px solid #444
      border-bottom: none
      &:nth-child(2n),
      &:nth-child(3),
      &:nth-child(7),
      &:nth-child(11),
      &:nth-child(15),
      &:nth-child(19),
      &:nth-child(23),
      &:nth-child(27),
      &:nth-child(31)
        border-left: none
      &:last-child,
      &:nth-last-child(2),
      &:nth-last-child(3),
      &:nth-last-child(4)
        border-bottom: 1px solid #444

@media screen and (min-width: 1024px) and (max-width: 1024px)
  .modale-card
    top: 10rem
    bottom: 10rem
    left: 10rem
    right: 10rem

  .banner
    left: 10rem
    right: 10rem

  .content
    &::v-deep ol
      font-size: 16px

@media screen and (min-width: 768px) and (max-width: 1023.5px)
  .modale-card
    top: 5rem
    bottom: 5rem
    left: 5rem
    right: 5rem

  .banner
    left: 5rem
    right: 5rem

  .content
    &::v-deep ol
      font-size: 14px
      li
        padding: 0.5rem

@media screen and (min-width: 540px) and (max-width: 767.5px)
  .modale-card,
  .banner
    left: 2rem
    right: 2rem

  .content
    padding: 80px 20px 20px
    &::v-deep h2
      font-size: 20px
      margin: 1rem 0
    &::v-deep p,
    &::v-deep ul
      font-size: 16px
    &::v-deep ol
      font-size: 12px
      li
        padding: 0.5rem

@media screen and (max-width: 539.5px)
  .modale-card,
  .banner
    left: 2rem
    right: 2rem

  .content
    padding: 80px 20px 20px
    &::v-deep h2
      font-size: 18px
      margin: 1rem 0
    &::v-deep p,
    &::v-deep ul,
    &::v-deep a
      font-size: 14px
    &::v-deep ol
      font-size: 12px
      li
        padding: 5px
        overflow: hidden
        overflow-x: scroll
</style>