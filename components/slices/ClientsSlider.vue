<template>
  <section class="clients-slider">
    <div class="container">
      <span class="slider s1">
        <div v-for="item in slice.items" :key="item.id">
          <prismic-image :field="item.logo" />
        </div>
      </span>
      <span class="slider s1">
        <div v-for="item in slice.items" :key="item.id">
          <prismic-image :field="item.logo" />
        </div>
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: "clients-slider",
  props: ["slice"],
};
</script>

<style lang="sass" scoped>
.clients-slider
  margin: 3rem
  .container
    width: 100%
    display: flex
    overflow: hidden
    .slider
      display: flex
      animation: sliderLogo 60s linear infinite
      div
        margin-right: 3rem

@keyframes sliderLogo
  0%
    transform: translate(0, 0)
  100%
    transform: translate(-100%, 0)
</style>