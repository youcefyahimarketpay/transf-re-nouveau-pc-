<template>
  <div id="equipe">
    <div class="equipe-container">
      <div class="equipe" v-for="item in slice.items" :key="item.id">
        <div class="equipe-presentation">
          <prismic-embed :field="item.video" />
        </div>
        <div class="equipe-information">
          <prismic-rich-text :field="item.description" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slice"],
  name: "equipe",

  data() {
    return {
      checked: [],
    };
  },

  methods: {},
};
</script>

<style lang="sass" scoped>
#equipe
  .equipe-container
    width: 847px
    margin: auto
  

    .equipe

      margin: auto
      margin-bottom: 50px
      display: flex

      .equipe-presentation
        &::v-deep iframe
          width: 20.9375rem
          height: 12.5rem
          margin-right: 1.9375rem

      .equipe-information
        margin-left: 0px
        width: 100%
        &::v-deep p
          font-style: normal
          font-weight: 300
          font-size: 16px
          line-height: 20px
          width: 408px
   

@media screen and (min-width: 768px) and (max-width: 999px)
  #equipe
    .equipe-container
      width: 554px
      .equipe
        display: inline
        .equipe-presentation
          &::v-deep iframe
            width: 554px
            height: 331px
        .equipe-information
          margin-bottom: 70px
          margin-top: 20px
          &::v-deep p
            width: 554px
   
        
        
@media screen and (min-width: 480px) and (max-width: 767px)
  #equipe
    .equipe-container
      width: $tabletContainer
      .equipe
        display: inline
        .equipe-presentation
          &::v-deep iframe
            width: $tabletContainer
            height: 250px
        .equipe-information
          margin-bottom: 50px
          margin-top: 20px
          &::v-deep p
            width: $tabletContainer
   
@media screen and (max-width: 479px)
  #equipe
    .equipe-container
      width: $mobileContainer
      .equipe
        display: inline
        .equipe-presentation
          &::v-deep iframe
            width: $mobileContainer
            height: 250px
        .equipe-information
          margin-bottom: 48px
          margin-top: 17px
          &::v-deep p
            width: $mobileContainer

</style>