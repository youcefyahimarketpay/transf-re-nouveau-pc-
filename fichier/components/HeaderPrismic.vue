<template>
  <header class="site-header">
    <!-- navigation bar -->
    <div class="desktop">
      <div class="container">
        <div class="logo">
          <prismic-link :field="menuBody[0].items[0].link">
            <prismic-rich-text :field="menuBody[0].items[0].text" />
          </prismic-link>
        </div>
        <div class="nav-page">
          <div class="products">
            {{ $prismic.asText(menuBody[1].primary.title) }}
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L6 5L11 1" stroke="#373F51" stroke-width="2" />
            </svg>
            <div class="drop-products">
              <ul>
                <li v-for="item in menuBody[1].items" :key="item.id">
                  <prismic-link :field="item.link">
                    {{ $prismic.asText(item.text) }}
                  </prismic-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="pages">
            <ul>
              <li v-for="item in menuBody[0].items" :key="item.id">
                <prismic-link :field="item.link">
                  {{ $prismic.asText(item.text) }}
                </prismic-link>
              </li>
            </ul>
          </div>
          <div class="langs">
            <ul>
              <li v-for="altLang in altLangs" :key="altLang.id">
                <nuxt-link :to="$prismic.linkResolver(altLang)">
                  <span
                    :class="'flag-icon flag-icon-' + altLang.lang.slice(-2)"
                  ></span>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="nav-collapse">
          <div class="contact">
            <prismic-link :field="menuBody[0].items[3].link">
              {{ $prismic.asText(menuBody[0].items[3].text) }}
            </prismic-link>
          </div>
          <div class="collapse" @click="dropPageMenu">
            <svg
              width="40"
              height="27"
              viewBox="0 0 40 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 26.6667H40V22.2222H0V26.6667ZM0 15.5556H40V11.1111H0V15.5556ZM0 0V4.44444H40V0H0Z"
                fill="#373F51"
              />
            </svg>
          </div>
          <div class="navpage-collapse">
            <ul>
              <li @click="dropProductsMenu">
                <div class="products-collapse">
                  {{ $prismic.asText(menuBody[1].primary.title) }}
                  <svg
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 1L6 5L11 1" stroke="#373F51" stroke-width="2" />
                  </svg>
                  <div id="drop-products-collapse">
                    <ul>
                      <li v-for="item in menuBody[1].items" :key="item.id">
                        <prismic-link :field="item.link">
                          {{ $prismic.asText(item.text) }}
                        </prismic-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li v-for="item in menuBody[0].items" :key="item.id">
                <prismic-link :field="item.link">
                  {{ $prismic.asText(item.text) }}
                </prismic-link>
              </li>
              <li>
                <div class="langs-collapse">
                  <ul>
                    <li v-for="altLang in altLangs" :key="altLang.id">
                      <nuxt-link :to="$prismic.linkResolver(altLang)">
                        <span
                          :class="
                            'flag-icon flag-icon-' + altLang.lang.slice(-2)
                          "
                        ></span>
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <pre v-html="JSON.stringify(menuBody, null, 4)"></pre> -->
    </div>
  </header>
</template>

<script>
export default {
  props: ["menuBody", "altLangs", "links", "menuLinks"],
  name: "header-prismic",

  methods: {
    dropPageMenu() {
      const navPage = document.querySelector(".navpage-collapse");

      navPage.classList.toggle("show");
    },
    dropProductsMenu() {
      const navProducts = document.querySelector("#drop-products-collapse");

      navProducts.classList.toggle("show");
    },
  },
};
</script>

<style lang="sass" scoped>
.desktop
  padding: 15px 0
  position: fixed
  left: 0
  right: 0
  top: 0
  background-color: #fff
  box-shadow: 0px 1px 5px #bed5d4
  z-index: 1000


.container
  max-width: 1280px
  margin: 0 auto
  display: flex
  justify-content: space-between
  align-items: center

.logo
  width: 206px
  &::v-deep img
    width: 100%

.nav-collapse
  display: none

.nav-page
  display: flex
  align-items: center

.products
  margin-right: 40px
  padding: 8px
  position: relative
  text-transform: uppercase
  font-weight: bold
  line-height: 19px
  color: #373f51
  cursor: pointer
  svg
    margin-left: 5px
    position: relative
    top: -1px
  &:hover
    color: #00787D
    background-color: rgba(88, 100, 125, 0.3)
    svg
      path
        stroke: #00787D !important
    .drop-products
      display: block

.drop-products
  display: none
  position: absolute
  top: 35px
  right: 0
  left: 0
  background-color: #fff
  border: 1px solid rgba(88, 100, 125, 0.3)
  ul
    list-style: none
    li
      a
        display: block
        padding: 8px
        text-decoration: none
        text-transform: uppercase
        font-weight: bold
        line-height: 19px
        color: #373f51
        &:hover
          color: #00787D
          background-color: rgba(88, 100, 125, 0.3)

.pages
  ul
    list-style: none
    li
      margin-right: 48px
      display: inline-block
      a
        display: block
        padding: 8px
        text-decoration: none
        text-transform: uppercase
        font-weight: bold
        line-height: 19px
        color: #373f51
      &:hover
        a
          color: #00787D
          background-color: rgba(88, 100, 125, 0.3)
      &:first-child
        display: none
      &:last-child
        a
          padding: 8px 32px
          display: block
          font-weight: normal
          color: #fff
          background-color: #373f51
          box-shadow: 0px 1px 5px #373F51
          &:hover
            color: #fff
            background-color: #373f51
.langs
  ul
    list-style: none

@media screen and (min-width: 1000px) and (max-width: 1919px)
  .desktop
    padding: 11px 0

  .container
    max-width: 900px

  .products
    margin-right: 22px

  .pages
    ul
      li
        margin-right: 30px

@media screen and (min-width: 768px) and (max-width: 999px)
  .desktop
    padding: 11px 0

  .container
    max-width: 668px

  .nav-page
    display: none

  .nav-collapse
    display: flex
    align-items: center
    .contact
      margin-right: 42px
      a
        padding: 8px 32px
        text-decoration: none
        text-transform: uppercase
        line-height: 19px
        color: #fff
        background-color: #373f51
        box-shadow: 0px 1px 5px #373F51
    .collapse
      svg
        position: relative
        top: 3px
    .navpage-collapse
      display: none
      position: absolute
      top: 81px
      right: 0
      left: 120px
      background-color: #fff
      border: 1px solid rgba(88, 100, 125, 0.3)
      ul
        padding: 31px 0 23px
        list-style: none
        li
          a
            padding: 11px 0
            display: block
            text-align: center
            text-decoration: none
            text-transform: uppercase
            font-weight: bold
            line-height: 19px
            color: #373f51
          &:nth-child(2),
          &:nth-child(5)
            display: none
    .navpage-collapse.show
      display: block
    .products-collapse
      padding-top: 11px
      display: block
      text-align: center
      text-transform: uppercase
      font-weight: bold
      line-height: 19px
      color: #373f51
      svg
        margin-left: 3px
        position: relative
        top: -1px
    #drop-products-collapse
      display: none
      ul
        margin-top: 11px
        padding: 0
        li
          background-color: rgba(83, 157, 161, 0.5)
          &:nth-child(2),
          &:nth-child(5)
            display: block
          a
            padding: 11px 0
    #drop-products-collapse.show
      display: block
    .langs-collapse
      ul
        padding: 0

@media screen and (min-width: 480px) and (max-width: 767px)
  .desktop
    padding: 16px 32px

  .container
    max-width: 100%
    margin: 0

  .logo
    width: 147px
    &::v-deep img
      width: 100%

  .nav-page
    display: none

  .nav-collapse
    display: flex
    align-items: center
    .contact
      margin-right: 32px
      a
        padding: 8px 32px
        text-decoration: none
        text-transform: uppercase
        line-height: 19px
        color: #fff
        background-color: #373f51
        box-shadow: 0px 1px 5px #373F51
    .collapse
      svg
        position: relative
        top: 3px
    .navpage-collapse
      display: none
      position: absolute
      top: 76px
      right: 0
      left: 120px
      background-color: #fff
      border: 1px solid rgba(88, 100, 125, 0.3)
      ul
        padding: 31px 0 23px
        list-style: none
        li
          a
            padding: 11px 0
            display: block
            text-align: center
            text-decoration: none
            text-transform: uppercase
            font-weight: bold
            line-height: 19px
            color: #373f51
          &:nth-child(2),
          &:nth-child(5)
            display: none
    .navpage-collapse.show
      display: block
    .products-collapse
      padding-top: 11px
      display: block
      text-align: center
      text-transform: uppercase
      font-weight: bold
      line-height: 19px
      color: #373f51
      svg
        margin-left: 3px
        position: relative
        top: -1px
    #drop-products-collapse
      display: none
      ul
        margin-top: 11px
        padding: 0
        li
          background-color: rgba(83, 157, 161, 0.5)
          &:nth-child(2),
          &:nth-child(5)
            display: block
          a
            padding: 11px 0
    #drop-products-collapse.show
      display: block
    .langs-collapse
      ul
        padding: 0

@media screen and (max-width: 479px)
  .desktop
    padding: 16px 32px

  .container
    max-width: 100%
    margin: 0

  .nav-page
    display: none

  .nav-collapse
    display: flex
    align-items: center
    .contact
      display: none
    .collapse
      svg
        position: relative
        top: 3px
    .navpage-collapse
      display: none
      position: absolute
      top: 91px
      right: 0
      left: 0
      background-color: #fff
      border: 1px solid rgba(88, 100, 125, 0.3)
      ul
        padding: 31px 0 23px
        list-style: none
        li
          a
            padding: 11px 0
            display: block
            text-align: center
            text-decoration: none
            text-transform: uppercase
            font-weight: bold
            line-height: 19px
            color: #373f51
          &:nth-child(2)
            display: none
          &:nth-child(5)
            background-color: #373F51
            a
              color: #fff
    .navpage-collapse.show
      display: block
    .products-collapse
      padding-top: 11px
      display: block
      text-align: center
      text-transform: uppercase
      font-weight: bold
      line-height: 19px
      color: #373f51
    #drop-products-collapse
      display: none
      ul
        margin-top: 11px
        padding: 0
        li
          background-color: rgba(83, 157, 161, 0.5)
          &:nth-child(2),
          &:nth-child(5)
            display: block
          a
            padding: 11px 0
    #drop-products-collapse.show
      display: block
    .langs-collapse
      ul
        padding: 0
</style>
