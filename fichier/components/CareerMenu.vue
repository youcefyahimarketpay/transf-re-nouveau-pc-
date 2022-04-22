<template>
  <div id="careerMenu">
    <div class="menu">
      <div class="menu-container">
        <ul class="menuList">
          <li :class="{ list: list, profilActive: profilActive }">
            <nuxt-link to="profil">{{
              this.menuData.items[0].text[0].text
            }}</nuxt-link>
          </li>
          <li
            :class="{ list: list, equipeActive: equipeActive }"
            @click="equipeLink"
          >
            <nuxt-link to="team">{{
              this.menuData.items[1].text[0].text
            }}</nuxt-link>
          </li>
          <li
            :class="{ list: list, equipeActive: equipeActive }"
            @click="equipeLink"
          >
            <nuxt-link to="jobs">{{
              this.menuData.items[2].text[0].text
            }}</nuxt-link>
          </li>
          <!-- <li
            :class="{ list: list, listActive: listActive }"
            v-for="item in slice.items"
            :key="item.id"
         
          >
            <a :href="item.menu_link.url" class="link">{{
              item.text[0].text
            }}</a>
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slice", "menuData"],
  name: "career-menu",

  data() {
    return {
      list: true,
      profilActive: true,
      equipeActive: false,
      jobsActive: false,
    };
  },

  methods: {
    equipeLink() {
      this.equipeActive = true;
      this.profilActive = false;
      this.jobsActive = false;
    },
  },
};
</script>

<style lang="scss" scoped>
#careerMenu {
  margin-top: 113px;
  margin-bottom: 70px;
}

.menu {
  width: 100%;
  margin: auto;
  max-width: 100%;
  border-bottom: 2px solid #e5e5e5;
  .menu-container {
    max-width: 1280px;
    margin: auto;

    .menuList {
      display: flex;
      .list {
        position: relative;
        margin-right: 1.8125rem;
        list-style-type: none;

        margin-right: 1.8125rem;
        margin-bottom: 0.5rem;
        cursor: pointer;
        font-weight: 700;
        font-size: 18px;
        line-height: 23px;
        text-transform: uppercase;

        a {
          text-decoration: none;
          color: #99c3c6;
          &:hover {
            color: #00a0a5;
            padding-bottom: 9px;
            border-bottom: 2px solid #00a0a5;
          }
        }
        a.nuxt-link-active {
          color: #00a0a5;
        }
      }
    }

    .nuxt-link-exact-active {
      color: red;

      .list {
        border: 2px solid red;
      }

      &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: -25px;
        width: 107px;
        height: 2px;
        background: rgb(255, 255, 255);
        background: linear-gradient(
          246deg,
          rgba(255, 255, 255, 1) -5%,
          rgba(0, 162, 167, 1) 50%,
          rgba(255, 255, 255, 1) 105%
        );
      }
    }
  }
}

@media screen and (min-width: 1000px) and (max-width: 1919px) {
  #careerMenu {
    margin-top: 93px;
    margin-bottom: 54px;
  }

  .menu {
    .menu-container {
      max-width: 900px;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 999px) {
  #careerMenu {
    margin-top: 60px;
    margin-bottom: 70px;
  }

  .menu {
    .menu-container {
      max-width: 668px;
    }
  }
}

@media screen and (min-width: 480px) and (max-width: 767px) {
  #careerMenu {
    margin-top: 60px;
    margin-bottom: 50px;
  }

  .menu {
    .menu-container {
      max-width: 416px;
    }
  }
}

@media screen and (max-width: 479px) {
  #careerMenu {
    margin-top: 60px;
    margin-bottom: 50px;
  }

  .menu {
    .menu-container {
      max-width: 296px;
    }
  }
}
</style>                                                        