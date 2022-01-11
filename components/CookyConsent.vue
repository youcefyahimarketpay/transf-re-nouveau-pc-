<template>
  <div class="cookie-consent" v-if="visible">
    <div class="overlay"></div>
    <div class="modale-card">
      <p>
        By progressing beyond this screen, you are deemed to accept that Market
        Pay and, as the case may be, its partners use the cookies and or
        tracking tools for the following purposes: realization of statistics
        relating to website usage, optimization of services, improving your user
        experience, customization of the proposed contents, viewing and sharing
        multimedia contents, interaction on social networks, counting up the
        number of web users from our partners, proposing advertisements in
        connection with you area of interest and behaviors, combining
        information from you which have been collected by Market Pay and its
        partners to customize the advertisements.
        <button class="open-popup" @click="toggelCP">Follow this link</button>
        to set the cookies. Functional cookies are not configurable, but the
        other cookies are configurable and could require your consent prior
        their implementation. For more details, please
        <button class="open-popup" @click="toggelModalePolicy">
          click on this link
        </button>
      </p>
      <button id="accept" @click="accept">Accept</button>
    </div>
    <!-- privacy policy -->
    <ModalePolicyCookie
      :revelePolicy="revelePolicy"
      :toggelModalePolicy="toggelModalePolicy"
    ></ModalePolicyCookie>
    <CookiePolicy
      :reveleCP="reveleCP"
      :toggelCP="toggelCP"
      :toggelValue="toggelValue"
    ></CookiePolicy>
  </div>
</template>

<script>
import ModalePolicyCookie from "~/components/ModalePolicyCookie.vue";
import CookiePolicy from "../components/CookiePolicy.vue";

export default {
  name: "CookieConsent",
  props: ["visible"],
  data() {
    return {
      // initialize revele policy moda
      revelePolicy: false,
      reveleCP: false,
      toggelValue: true,
      cookieInfo: this.cookieInfo,
    };
  },
  components: {
    ModalePolicyCookie,
    CookiePolicy,
  },
  methods: {
    // Cookie Conesent
    accept() {
      const cookieConsent = document.querySelector(".cookie-consent");

      if (this.toggelValue) {
        // set cookies for 1 year, after 1 year the cookie will be remove automatically
        document.cookie =
          "Name=TrustCommander; max-age=" + 60 * 60 * 20 * 30 * 12;
        cookieConsent.classList.add("hide");
        this.visible = false;
      }
    },

    toggelModalePolicy() {
      this.revelePolicy = !this.revelePolicy;
    },
    toggelCP() {
      this.reveleCP = !this.reveleCP;
    },
  },
};
</script>

<style lang="sass" scoped>
.cookie-consent
  display: flex
  justify-content: center
  align-items: center
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  z-index: 1000
  &.hide
    opacity: 0
    visibility: hidden
    transition: all 0.1s ease-in

.overlay
  background: rgba(0, 0, 0, 0.9)
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0

.modale-card
  background: #333
  color: #fff
  padding: 3rem
  font-size: 20px
  text-align: justify
  position: fixed
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

button
  outline: none
  background-color: transparent
  border: none
  color: #06ced1
  font-size: 20px
  text-decoration: underline
  cursor: pointer

#accept
  text-decoration: none
  background-color: #04a9ac
  color: #fff
  padding: 15px 20px
  border-radius: 3px
  margin-top: 2rem
  position: relative
  left: 50%
  transform: translateX(-50%)
  &:hover
    background-color: #008b89

@media screen and (min-width: 768px) and (max-width: 1024px)
  .modale-card
    padding: 2rem
    margin: 0 2rem
    font-size: 20px
    left: 0
    transform: translate(0, -50%)

  button
    font-size: 20px

@media screen and (min-width: 481px) and (max-width: 767.5px)
  .modale-card
    padding: 2rem
    margin: 0 2rem
    font-size: 18px
    left: 0
    transform: translate(0, -50%)

  button
    font-size: 18px

@media (min-width: 320px) and (max-width: 480px)
  .modale-card
    padding: 1rem
    font-size: 16px
    top: 4rem
    left: 1rem
    right: 1rem
    transform: none

  button
    font-size: 16px
</style>