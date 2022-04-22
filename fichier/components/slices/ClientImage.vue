<template>
  <section class="client-image">
    <div class="content">
      <prismic-image :field="slice.primary.image" />
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"]
};
</script>

<style lang="sass" scoped>
.client-image
  max-width: $shortContainer
  margin: 0 auto

.content
  &::v-deep img
    width: 100%
    object-fit: cover

@media screen and (min-width: 480px) and (max-width: 767px)
  .client-image
    max-width: $tabletContainer

@media screen and (max-width:479px)
  .client-image
    max-width: $mobileContainer
</style>
