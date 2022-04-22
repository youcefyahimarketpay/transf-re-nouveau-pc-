<template>
  <section class="general-com">
    <div class="content">
      <prismic-rich-text :field="slice.primary.title" />
      <prismic-rich-text :field="slice.primary.text" />
      <a href="mailto:fr_contact_marketpay@marketpay.eu">
        {{ $prismic.asText(slice.primary.email_address) }}
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
};
</script>

<style lang="sass" scoped>
.general-com
  max-width: 1280px
  margin: 0 auto
  padding: 60px 0 140px 215px

.content
  width: 410px
  &::v-deep h2
    margin-bottom: 10px
    text-transform: uppercase
    font-size: 22px
    font-weight: 700
    line-height: 27.45px
    color: #373f51
    strong
      color: #01a2a6
  &::v-deep p
    font-weight: 300
  a
    text-decoration: none
    color: #373f51
    font-weight: 700
    cursor: pointer

@media screen and (min-width: 1000px) and (max-width: 1919px)
  .general-com
    max-width: 900px
    padding: 60px 0 100px 50px

@media screen and (min-width: 768px) and (max-width: 999px)
  .general-com
    max-width: 668px
    padding: 50px 0 100px

@media screen and (min-width: 480px) and (max-width: 767px)
  .general-com
    max-width: 100%
    margin: 0
    padding: 40px 32px 80px

@media screen and (max-width: 479px)
  .general-com
    max-width: 100%
    margin: 0
    padding: 40px 32px 80px

  .content
    width: 296px
</style>