<template>
  <header class="site-header">
    <!-- navigation bar -->
    <div class="desktop">
      <!-- Logo Market Pay -->
      <nuxt-link to="./" class="logo">
        <img
          src="./../images/marketpaylogo-min.png"
          alt="Facebook social icon"
        />
      </nuxt-link>
      <!-- naigation list -->
      <nav id="navbar">
        <ul>
          <!-- Products list -->
          <li id="products-item">
            <span>
              {{ $prismic.asText(menuTextProducts) }}
              <!-- SVG icon "chevron down" -->
              <svg
                class="chevron-down"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                id="magicoon-Filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="chevron-down-Filled">
                  <path
                    id="chevron-down-Filled-2"
                    fill="#444"
                    data-name="chevron-down-Filled"
                    class="cls-2"
                    d="M21.707,8.707l-9,9a1,1,0,0,1-1.414,0l-9-9A1,1,0,1,1,3.707,7.293L12,15.586l8.293-8.293a1,1,0,1,1,1.414,1.414Z"
                  />
                </g>
              </svg>
            </span>
            <ul id="dropdown-list">
              <li v-for="menuLink in menuLinks" :key="menuLink.id">
                <prismic-link  :field="menuLink.link">{{
                  $prismic.asText(menuLink.label)
                }}</prismic-link>
              </li>
            </ul>
          </li>
          <!-- About us -->
          <li id="about-item">
            <prismic-link  :field="menuLinks[0].link">{{
              $prismic.asText(menuLinks[0].label)
            }}</prismic-link>
          </li>
          <!-- button contact -->
          <li id="btn-contact" class="btn-contact">
            <a href="#footer">
              {{ $prismic.asText(menuTextButton) }}
            </a>
          </li>
          <li id="langue">
            <!-- SVG icon "globe" -->
            <span
              ><svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                id="magicoon-Filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="globe-Filled">
                  <path
                    fill="#444"
                    id="globe-Filled-2"
                    data-name="globe-Filled"
                    class="cls-2"
                    d="M21.424,8.669A9.936,9.936,0,0,0,13.431,2.1a10.322,10.322,0,0,0-2.863,0A9.93,9.93,0,0,0,2.58,8.66a9.913,9.913,0,0,0,0,6.671A9.936,9.936,0,0,0,10.569,21.9a10.3,10.3,0,0,0,2.863,0,9.93,9.93,0,0,0,7.988-6.56,9.913,9.913,0,0,0,0-6.671ZM20,12a7.832,7.832,0,0,1-.257,2H16.865A16.728,16.728,0,0,0,17,12a16.667,16.667,0,0,0-.135-2h2.879A7.838,7.838,0,0,1,20,12ZM9.154,14A14.556,14.556,0,0,1,9,12a14.576,14.576,0,0,1,.154-2h5.692A14.527,14.527,0,0,1,15,12a14.764,14.764,0,0,1-.154,2Zm-4.9,0a7.94,7.94,0,0,1,0-4H7.135A16.7,16.7,0,0,0,7,12a16.686,16.686,0,0,0,.135,2ZM18.909,8H16.5a16.5,16.5,0,0,0-1.146-3.266A7.906,7.906,0,0,1,18.909,8ZM12.7,4.049A14.566,14.566,0,0,1,14.445,8H9.555A14.555,14.555,0,0,1,11.3,4.049c.233-.02.464-.049.7-.049S12.469,4.029,12.7,4.049Zm-4.053.685A16.479,16.479,0,0,0,7.5,8H5.089A7.916,7.916,0,0,1,8.649,4.734ZM5.092,16H7.5a16.423,16.423,0,0,0,1.147,3.264A7.907,7.907,0,0,1,5.092,16Zm6.205,3.95A14.575,14.575,0,0,1,9.556,16h4.889a14.591,14.591,0,0,1-1.743,3.95A8.451,8.451,0,0,1,11.3,19.951Zm4.055-.685A16.432,16.432,0,0,0,16.5,16h2.411A7.9,7.9,0,0,1,15.352,19.266Z"
                  />
                </g></svg
            ></span>
            <ul id="droplang">
              <!-- List of langagues -->
              <li id="lang-item" v-for="altLang in altLangs" :key="altLang.id">
                <nuxt-link :to="$prismic.linkResolver(altLang)">
                  <span
                    :class="'flag-icon flag-icon-' + altLang.lang.slice(-2)"
                  ></span>
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
    <!-- navigation bar small screen-->
    <div class="smartphone">
      <!-- Logo Market Pay -->
      <nuxt-link to="./" class="logo">
        <img
          src="./../images/marketpaylogo-min.png"
          alt="Facebook social icon"
        />
      </nuxt-link>
      <!-- Toggle menu displayed on Tablet & Smartphone size screen -->
      <div class="toggle-menu" @click="showMenu">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="344.339px"
          height="344.339px"
          viewBox="0 0 344.339 344.339"
          style="enable-background: new 0 0 344.339 344.339"
          xml:space="preserve"
        >
          <g>
            <g>
              <g>
                <rect y="46.06" width="344.339" height="29.52" />
              </g>
              <g>
                <rect y="156.506" width="344.339" height="29.52" />
              </g>
              <g>
                <rect y="268.748" width="344.339" height="29.531" />
              </g>
            </g>
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
      </div>
      <!-- naigation list -->
      <nav>
        <ul>
          <!-- Products list -->
          <li id="products-item" @click="showDrop">
            <span>
              {{ $prismic.asText(menuTextProducts) }}
              <!-- SVG icon "chevron down" -->
              <svg
                class="chevron-down"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                id="magicoon-Filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="chevron-down-Filled">
                  <path
                    id="chevron-down-Filled-2"
                    fill="#444"
                    data-name="chevron-down-Filled"
                    class="cls-2"
                    d="M21.707,8.707l-9,9a1,1,0,0,1-1.414,0l-9-9A1,1,0,1,1,3.707,7.293L12,15.586l8.293-8.293a1,1,0,1,1,1.414,1.414Z"
                  />
                </g>
              </svg>
            </span>
            <ul id="dropdown-list">
              <li v-for="menuLink in menuLinks" :key="menuLink.id">
                <prismic-link  :field="menuLink.link">{{
                  $prismic.asText(menuLink.label)
                }}</prismic-link>
              </li>
            </ul>
          </li>
          <!-- About us -->
          <li id="about-item">
            <prismic-link v-if='menuLinks.link' :field="menuLinks[0].link">{{
              $prismic.asText(menuLinks[0].label)
            }}</prismic-link>
          </li>
          <!-- button contact -->
          <li id="btn-contact" class="btn-contact">
            <a href="#footer">
              {{ $prismic.asText(menuTextButton) }}
            </a>
          </li>
          <li id="langue" @click="showDropLang">
            <!-- SVG icon "globe" -->
            <span
              ><svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                id="magicoon-Filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="globe-Filled">
                  <path
                    fill="#444"
                    id="globe-Filled-2"
                    data-name="globe-Filled"
                    class="cls-2"
                    d="M21.424,8.669A9.936,9.936,0,0,0,13.431,2.1a10.322,10.322,0,0,0-2.863,0A9.93,9.93,0,0,0,2.58,8.66a9.913,9.913,0,0,0,0,6.671A9.936,9.936,0,0,0,10.569,21.9a10.3,10.3,0,0,0,2.863,0,9.93,9.93,0,0,0,7.988-6.56,9.913,9.913,0,0,0,0-6.671ZM20,12a7.832,7.832,0,0,1-.257,2H16.865A16.728,16.728,0,0,0,17,12a16.667,16.667,0,0,0-.135-2h2.879A7.838,7.838,0,0,1,20,12ZM9.154,14A14.556,14.556,0,0,1,9,12a14.576,14.576,0,0,1,.154-2h5.692A14.527,14.527,0,0,1,15,12a14.764,14.764,0,0,1-.154,2Zm-4.9,0a7.94,7.94,0,0,1,0-4H7.135A16.7,16.7,0,0,0,7,12a16.686,16.686,0,0,0,.135,2ZM18.909,8H16.5a16.5,16.5,0,0,0-1.146-3.266A7.906,7.906,0,0,1,18.909,8ZM12.7,4.049A14.566,14.566,0,0,1,14.445,8H9.555A14.555,14.555,0,0,1,11.3,4.049c.233-.02.464-.049.7-.049S12.469,4.029,12.7,4.049Zm-4.053.685A16.479,16.479,0,0,0,7.5,8H5.089A7.916,7.916,0,0,1,8.649,4.734ZM5.092,16H7.5a16.423,16.423,0,0,0,1.147,3.264A7.907,7.907,0,0,1,5.092,16Zm6.205,3.95A14.575,14.575,0,0,1,9.556,16h4.889a14.591,14.591,0,0,1-1.743,3.95A8.451,8.451,0,0,1,11.3,19.951Zm4.055-.685A16.432,16.432,0,0,0,16.5,16h2.411A7.9,7.9,0,0,1,15.352,19.266Z"
                  />
                </g></svg
            ></span>
            <ul id="droplang">
              <!-- List of langagues -->
              <li id="lang-item" v-for="altLang in altLangs" :key="altLang.id">
                <nuxt-link :to="$prismic.linkResolver(altLang)">
                  <span
                    :class="'flag-icon flag-icon-' + altLang.lang.slice(-2)"
                  ></span>
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  props: ["altLangs", "menuLinks", "menuTextButton", "menuTextProducts"],
  name: "header-prismic",
  
  methods: {
    showMenu() {
      let menu = document.querySelector(".smartphone nav");
      let dropList = document.querySelector(".smartphone nav #dropdown-list");
      let dropLang = document.querySelector(".smartphone nav #droplang");

      menu.classList.toggle("show");
      dropList.classList.remove("drop");
      dropLang.classList.remove("drop");
    },
    showDrop() {
      let dropList = document.querySelector(".smartphone nav #dropdown-list");

      dropList.classList.toggle("drop");
    },
    showDropLang() {
      let dropLang = document.querySelector(".smartphone nav #droplang");

      dropLang.classList.toggle("drop");
    },
  },
};
</script>

<style lang="sass" scoped>
.smartphone
  display: none

.desktop
  width: 100%
  padding: 0.5rem 3rem
  position: fixed
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center
  font-size: 14px
  font-weight: 300
  background-color: #fff
  box-shadow: 0px 1px 5px #bed5d4
  z-index: 1
  a
    text-decoration: none
    color: #444
  .logo
    img
      height: 35px
      width: auto
  nav
    ul
      list-style: none
      position: relative
      display: flex
      flex-direction: row
      justify-content: center
      align-items: center
    li
      margin: 0 0.5rem
      text-transform: uppercase
      border: 1px solid transparent
      transition: background-color 0.4s
      .chevron-down
        height: 15px
        width: 15px
        padding: 5px 0 0 5px
      a
        padding: 0.5rem 1rem
        display: block
        cursor: pointer
      .nuxt-link-exact-active
        color: #01a2a6
      span
        padding: 0.5rem 1rem
        display: block
      &:hover
        background-color: #edf2f7
        border: 1px solid #edf2f7
    #dropdown-list
      max-height: 0
      list-style: none
      position: absolute
      display: block
      background-color: #fff
      border: none
      box-shadow: 0px 0px 5px #bed5d4
      overflow: hidden
      transition: max-height 0.5s ease-in
      li
        margin: 0
        &:nth-child(1)
          display: none
    #droplang
      max-height: 0
      list-style: none
      position: absolute
      display: block
      background-color: #fff
      border: none
      box-shadow: 0px 0px 5px #bed5d4
      overflow: hidden
      transition: max-height 0.5s ease-in
      li
        margin: 0
    #products-item:hover #dropdown-list,
    #langue:hover #droplang
      max-height: 500px
    #btn-contact
      background-color: #01a2a6
      border: 1px solid #01a2a6
      border-radius: 30px
      a
        text-decoration: none
        color: #fff
        transition: color 0.4s
      &:hover
        background-color: #fff
        border: 1px solid #01a2a6
        border-radius: 30px
        a
          color: #01a2a6
  #lang-item
    span
      padding: 0.3rem 0.5rem

@media screen and (min-width: 767px) and (max-width: 1024px)
  .desktop
    padding: 0.5rem 1rem

@media screen and (max-width: 767px)
  .desktop
    display: none

  .smartphone
    width: 100%
    padding: 0.5rem 2rem
    position: fixed
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: center
    font-size: 14px
    font-weight: 300
    background-color: #fff
    box-shadow: 0px 1px 5px #bed5d4
    z-index: 1
    a
      text-decoration: none
      color: #444
    .logo
      img
        height: 30px
        width: auto
    nav
      max-height: 0
      width: 100%
      display: block
      position: absolute
      top: 3.1rem
      left: 0
      background-color: #fff
      box-shadow: 0px 3px 5px #bed5d4
      overflow: hidden
      transition: max-height 0.5s ease-in
      ul
        flex-direction: column
      li
        text-align: center
        .chevron-down
          height: 8px
          width: 20px
          padding: 0
        a,
        span
          padding: 1rem
          display: block
        .nuxt-link-exact-active
          color: #01a2a6
      #dropdown-list
        max-height: 0
        display: block
        background-color: #edf2f7
        overflow: hidden
        transition: max-height 0.5s ease-in
        li
          margin: 0
          &:first-child
            display: none
      #droplang
        max-height: 0
        display: block
        background-color: #edf2f7
        overflow: hidden
        transition: max-height 0.5s ease-in
        li
          margin: 0
      #dropdown-list.drop,
      #droplang.drop
        max-height: 500px
      #btn-contact
        color: #fff
        background-color: #01a2a6
        border: 1px solid #01a2a6
        a
          text-decoration: none
          color: #fff
    .toggle-menu
      svg
        height: 20px
        width: 20px
    #lang-item
      span
        padding: 0.3rem 0.5rem
      a
        display: flex
        justify-content: center
        align-items: center

    nav.show
      max-height: 500px
</style>


