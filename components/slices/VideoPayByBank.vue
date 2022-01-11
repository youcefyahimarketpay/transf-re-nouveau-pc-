<template>
  <section class="video-pay-by-bank">
    <div class="content">
      <div class="divider">
        <img src="./../../images/logo.png" />
      </div>
      <div class="content">
        <!-- video pay by bank youtube (english) -->
        <iframe
          width="1000"
          height="600"
          src="https://www.youtube.com/embed/3kjCU9pfnAM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <prismic-rich-text :field="slice.primary.video_text" class="text" />
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "video-pay-by-bank",
  head() {
    return {
      title: "Pay by Bank | Simplified transfer payment solution",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Pay by Bank is a secure payment method that allows merchants to initiate a transfer from their customer's account to their own account.",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.video-pay-by-bank
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

.text
  padding: 3rem
  text-align: center
  font-size: 25px
  font-weight: 300
  max-width: 1000px

.divider
  display: flex
  justify-content: center
  align-items: center
  margin-bottom: 3rem
  &::before
    content: ""
    background: linear-gradient(to left, #01a2a6, #fff)
    height: 3px
    width: 100%
    border-radius: 30px
  &::after
    content: ""
    background: linear-gradient(to right, #01a2a6, #fff)
    height: 3px
    width: 100%
    border-radius: 5px
  &::v-deep img
    height: 50px
    width: 50px
    margin: 0 0.5rem

@media screen and (min-width: 1024px) and (max-width: 1024px)
  .video-pay-by-bank
    display: block
  iframe
    padding: 0 5rem
  .text
    padding: 3rem 8rem

@media screen and (min-width: 767px) and (max-width: 1023.5px)
  .video-pay-by-bank
    display: block
  iframe
    height: 500px
    width: 770px
    padding: 0 3rem
  .text
    padding: 3rem 4rem

@media screen and (min-width: 540px) and (max-width: 767px)
  .video-pay-by-bank
    display: block
  iframe
    height: 300px
    width: 550px
    padding: 0 2rem
  .text
    font-size: 18px
    padding: 2rem 3rem

@media screen and (max-width: 539.5px)
  .video-pay-by-bank
    display: block
  iframe
    height: 250px
    width: 380px
    padding: 0 2rem
  .text
    font-size: 18px
    padding: 2rem 1rem 2rem 2rem
</style>