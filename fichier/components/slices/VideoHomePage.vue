<template>
  <section class="video">
    <!-- video MarketPay since youtube (english) -->
    <iframe
      width="1000"
      height="600"
      src="https://www.youtube.com/embed/_KJF9QHueEM"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "video-highlights",
};
</script>

<style lang="sass" scoped>
.video
  padding: 5rem
  display: flex
  justify-content: center
  align-items: center
  background-color: #f1f1f1

@media screen and (min-width: 767px) and (max-width: 1023.5px)
  iframe
    height: 450px !important

@media screen and (min-width: 540px) and (max-width: 767px)
  .video
    padding: 3rem
  iframe
    height: 300px !important

@media screen and (max-width: 539.5px)
  .video
    padding: 2rem 1.5rem
  iframe
    height: 200px !important
</style>