<template>
  <section id="mapp">
    <div class="text-container">
      <prismic-rich-text :field="slice.primary.title" />
      <prismic-rich-text :field="slice.primary.text" class="text" />
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "Mapp",
};
</script>

<style lang="sass" scoped>
#mapp
  width: 556px
  margin: auto
  height: 240px
 
  .text-container
    width: 556px
    margin: auto

    &::v-deep h2
      font-style: normal
      font-weight: 600
      font-size: 25px
      line-height: 31px
      margin-bottom: 10px

    &::v-deep p
      margin-bottom: 10px
      line-height: 23px
      font-style: normal
      font-weight: 300
      font-size: 18px
      line-height: 23px
  &::v-deep ul
    li
      margin-top: 1rem
      margin-bottom: 22px
      margin-left: 2rem
      font-style: normal
      font-weight: 300

.text
  text-align: left
@media screen and (min-width: 568px) and (max-width: 1023px)
  #mapp
    width: 584px
    margin: auto
    height: 255px
    .text-container
      width: 584px
      &::v-deep h2
        margin-bottom: 10px
@media screen and (min-width: 320px) and (max-width: 426px)
  #mapp
    width: 296px
    height: 380px
    margin: auto
 
   

    .text-container
      width: 100%
    

      font-weight: 300
      font-size: 18px
      line-height: 23px

      &::v-deep h2
        font-weight: 600
        font-size: 25px
        line-height: 31px
        margin-bottom: 5px
</style>