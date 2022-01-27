<template>
  <main>
    <!-- Slice section template -->
    <div v-for="(slice, index) in slices" :key="'slice-' + index">
      <!-- Header home page slice component -->
      <template v-if="slice.slice_type === 'headline_with_button'">
        <headline-with-button :slice="slice" />
      </template>
      <!-- Header products pages slice component -->
      <template v-else-if="slice.slice_type === 'headline_with_ancre'">
        <headline-with-ancre :slice="slice" />
      </template>
      <!-- Header about page slice component -->
      <template v-else-if="slice.slice_type === 'headline_about'">
        <headline-about :slice="slice" />
      </template>
      <!-- Header cas client slice components -->
      <template v-else-if="slice.slice_type === 'header_casclient'">
        <header-cas-client :slice="slice" />
      </template>
      <!-- Header blog page slice component -->
      <template v-else-if="slice.slice_type === 'header_blog'">
        <header-blog :slice="slice" />
      </template>
      <!-- Header post Blog slice component -->
      <template v-else-if="slice.slice_type === 'header_post'">
        <header-post :slice="slice" />
      </template>
      <!-- Body post blog slice component -->
      <template v-else-if="slice.slice_type === 'body_post'">
        <body-post :slice="slice" />
      </template>
      <!-- Clients slider slice component -->
      <template v-else-if="slice.slice_type === 'clients_slider'">
        <clients-slider :slice="slice" />
      </template>
      <!-- Video home page slice component -->
      <template v-else-if="slice.slice_type === 'video_home_page'">
        <video-home-page :slice="slice" />
      </template>
      <!-- Video with text slice component -->
      <template v-else-if="slice.slice_type === 'video_with_text'">
        <video-with-text :slice="slice" />
      </template>
      <!-- Video pay by bank slice component -->
      <template v-else-if="slice.slice_type === 'video_pay_by_bank'">
        <video-pay-by-bank :slice="slice" />
      </template>
      <!-- Presentation home page slice component -->
      <template v-else-if="slice.slice_type === 'presentation_home_page'">
        <presentation-home-page :slice="slice" />
      </template>
      <!-- Presentation page slice component -->
      <template v-else-if="slice.slice_type === 'presentation_page'">
        <presentation-page :slice="slice" />
      </template>
      <!-- Presentation pay online slice component -->
      <template v-else-if="slice.slice_type === 'presentation_pay_online'">
        <presentation-pay-online :slice="slice" />
      </template>
      <!-- Presentation about page slice component -->
      <template v-else-if="slice.slice_type === 'presentation_about_page'">
        <presentation-about-page :slice="slice" />
      </template>
      <!-- Presentation cas client page slice component -->
      <template v-else-if="slice.slice_type === 'presentation_casclient'">
        <presentation-cas-client :slice="slice" />
      </template>
      <!-- More article home page slice component -->
      <template v-else-if="slice.slice_type === 'more_article_home_page'">
        <more-article-home-page :slice="slice" />
      </template>
      <!-- More article page slice  component -->
      <template v-else-if="slice.slice_type === 'more_article_page'">
        <more-article-page :slice="slice" />
      </template>
      <!-- Our values slice component -->
      <template v-else-if="slice.slice_type === 'our_values'">
        <our-values :slice="slice" />
      </template>
      <!-- Text with button slice component -->
      <template v-else-if="slice.slice_type === 'text_with_button'">
        <text-with-button :slice="slice" />
      </template>
      <!-- Text with button contact slice component -->
      <template v-else-if="slice.slice_type === 'text_with_button_contact'">
        <text-with-button-contact :slice="slice" />
      </template>
      <!-- Text with divider slice component -->
      <template v-else-if="slice.slice_type === 'text_with_divider'">
        <text-with-divider :slice="slice" />
      </template>
      <template v-else-if="slice.slice_type === 'headline_career'">
        <headline-career :slice="slice" />
      </template>
      <template v-else-if="slice.slice_type === 'career_numbers_list'">
        <career-numbers-list :slice="slice" />
      </template>
      <template v-else-if="slice.slice_type === 'presentation_profil_page'">
        <presentation-profil-page :slice="slice" />
      </template>
      <!-- Blog page slice component -->
      <template v-else-if="slice.slice_type === 'blog_page'">
        <blog-page :slice="slice" />
      </template>
      <!--  -->
      <template v-else-if="slice.slice_type === 'equipe'">
        <equipe :slice="slice" />
      </template>
      <template v-else-if="slice.slice_type === 'jobs'">
        <jobs :slice="slice" />
      </template>
      <template v-else-if="slice.slice_type === 'career_menu'">
        <career-menu :slice="slice" />
      </template>
      <template v-else-if="slice.slice_type === 'career'">
        <career :slice="slice" />
      </template>
      <template v-else-if="slice.slice_type === 'cr_sl'">
        <cr-sl :slice="slice" />
      </template>
      <!-- Clients page section -->
      <!-- Header client page slice components -->
      <template v-else-if="slice.slice_type === 'header_clients'">
        <client-header :slice="slice" />
      </template>
      <!-- Title client page slice components -->
      <template v-else-if="slice.slice_type === 'clients_title'">
        <client-title :slice="slice" />
      </template>
      <!-- Text client page slice components -->
      <template v-else-if="slice.slice_type === 'clients_text'">
        <client-text :slice="slice" />
      </template>
      <!-- Image client page slice components -->
      <template v-else-if="slice.slice_type === 'clients_image'">
        <client-image :slice="slice" />
      </template>
      <!-- Quote client page slice components -->
      <template v-else-if="slice.slice_type === 'clients_quote'">
        <client-quote :slice="slice" />
      </template>
      <!-- Solution client page slice components -->
      <template v-else-if="slice.slice_type === 'client_solution'">
        <client-solution :slice="slice" />
      </template>
      <template v-else-if="slice.slice_type === 'crb'">
        <crb :slice="slice"/>
      </template>
    </div>
  </main>
</template>

<script>
// Imports for all slices
const HeadlineWithButton = () => import("./slices/HeadlineWithButton.vue");
const HeadlineWithAncre = () => import("./slices/HeadlineWithAncre.vue");
const HeadlineAbout = () => import("./slices/HeadlineAbout.vue");
const HeaderCasClient = () => import("./slices/HeaderCasClient.vue");
const HeaderBlog = () => import("./slices/HeaderBlog.vue");
const HeaderPost = () => import("./slices/HeaderPost.vue");
const BodyPost = () => import("./slices/BodyPost.vue");
const ClientsSlider = () => import("./slices/ClientsSlider.vue");
const VideoHomePage = () => import("./slices/VideoHomePage.vue");
const VideoWithText = () => import("./slices/VideoWithText.vue");
const VideoPayByBank = () => import("./slices/VideoPayByBank.vue");
const PresentationHomePage = () => import("./slices/PresentationHomePage.vue");
const PresentationPage = () => import("./slices/PresentationPage.vue");
const PresentationAboutPage = () =>
  import("./slices/PresentationAboutPage.vue");
const PresentationPayOnline = () =>
  import("./slices/PresentationPayOnline.vue");
const PresentationCasClient = () =>
  import("./slices/PresentationCasClient.vue");
const MoreArticleHomePage = () => import("./slices/MoreArticleHomePage.vue");
const MoreArticlePage = () => import("./slices/MoreArticlePage.vue");
const OurValues = () => import("./slices/OurValues.vue");
const TextWithButton = () => import("./slices/TextWithButton.vue");
const TextWithButtonContact = () =>
  import("./slices/TextWithButtonContact.vue");
const TextWithDivider = () => import("./slices/TextWithDivider.vue");
const HeadlineCareer = () => import("./slices/HeadlineCareer.vue");
const CareerNumbersList = () => import("./slices/CareerNumbersList.vue");
const PresentationProfilPage = () =>
  import("./slices/PresentationProfilPage.vue");
const BlogPage = () => import("./slices/BlogPage.vue");
const Equipe = () => import("./slices/Equipe.vue");
const Jobs = () => import("./slices/Jobs.vue");
const CareerMenu = () => import("./CareerMenu.vue");
const CrSl = () => import("./slices/CrSl.vue");
// Clients page section
const ClientHeader = () => import("./slices/ClientHeader.vue");
const ClientTitle = () => import("./slices/ClientTitle.vue");
const ClientText = () => import("./slices/ClientText.vue");
const ClientImage = () => import("./slices/ClientImage.vue");
const ClientQuote = () => import("./slices/ClientQuote.vue");
const ClientSolution = () => import("./slices/ClientSolution.vue");
const Crb = () => import("./slices/Crb.vue")

export default {
  props: ["slices"],
  name: "slices-block",
  components: {
    HeadlineWithButton,
    HeadlineWithAncre,
    HeadlineAbout,
    HeaderCasClient,
    HeaderBlog,
    HeaderPost,
    BodyPost,
    ClientsSlider,
    VideoHomePage,
    VideoWithText,
    VideoPayByBank,
    PresentationHomePage,
    PresentationPage,
    PresentationAboutPage,
    PresentationPayOnline,
    MoreArticleHomePage,
    MoreArticlePage,
    OurValues,
    TextWithButton,
    TextWithButtonContact,
    TextWithDivider,
    BlogPage,
    Equipe,
    Jobs,
    CareerMenu,
    CrSl,
    PresentationProfilPage,
    HeadlineCareer,
    CareerNumbersList,
    PresentationCasClient,
    // Clients page section
    ClientHeader,
    ClientTitle,
    ClientText,
    ClientImage,
    ClientQuote,
    ClientSolution,
    Crb
  },
};
</script>

<style lang="sass" scoped>
main
  width: 100vw
  overflow: hidden
</style>
