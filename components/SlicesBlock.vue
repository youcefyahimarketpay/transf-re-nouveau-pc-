<template>
  <main>
    <!-- Slice section template -->
    <div v-for="(slice, index) in slices" :key="'slice-' + index">
      <!-- Headline with button slice component -->
      <template v-if="slice.slice_type === 'headline_with_button'">
        <headline-with-button :slice="slice" />
      </template>
      <!-- Headline with ancre slice component -->
      <template v-else-if="slice.slice_type === 'headline_with_ancre'">
        <headline-with-ancre :slice="slice" />
      </template>
      <!-- HeadLine about page slice component -->
      <template v-else-if="slice.slice_type === 'headline_about'">
        <headline-about :slice="slice" />
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
      <!-- Presentation about page slice component -->
      <template v-else-if="slice.slice_type === 'presentation_about_page'">
        <presentation-about-page :slice="slice" />
      </template>
      <!-- Presentation page slice component -->
      <template v-else-if="slice.slice_type === 'presentation_page'">
        <presentation-page :slice="slice" />
      </template>
      <!-- Presentation pay online slice component -->
      <template v-else-if="slice.slice_type === 'presentation_pay_online'">
        <presentation-pay-online :slice="slice" />
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
      <template v-else-if="slice.slice_type === 'emploie_recent'">
        <offre-emploie :slice="slice" />
      </template>
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
     
    
    
    </div>
  </main>
</template>

<script>
// Imports for all slices
const HeadlineWithButton = () => import("./slices/HeadlineWithButton.vue");
const HeadlineWithAncre = () => import("./slices/HeadlineWithAncre.vue");
const HeadlineAbout = () => import("./slices/HeadlineAbout.vue");
const ClientsSlider = () => import("./slices/ClientsSlider.vue");
const VideoHomePage = () => import("./slices/VideoHomePage.vue");
const VideoWithText = () => import("./slices/VideoWithText.vue");
const VideoPayByBank = () => import("./slices/VideoPayByBank.vue");
const PresentationHomePage = () => import("./slices/PresentationHomePage.vue");
const PresentationPage = () => import("./slices/PresentationPage.vue");
const PresentationAboutPage = () => import("./slices/PresentationAboutPage.vue");
const PresentationPayOnline = () => import("./slices/PresentationPayOnline.vue");
const MoreArticleHomePage = () => import("./slices/MoreArticleHomePage.vue");
const MoreArticlePage = () => import("./slices/MoreArticlePage.vue");
const OurValues = () => import("./slices/OurValues.vue");
const TextWithButton = () => import("./slices/TextWithButton.vue");
const TextWithButtonContact = () => import("./slices/TextWithButtonContact.vue");
const TextWithDivider = () => import("./slices/TextWithDivider.vue");
const HeadlineCareer = () => import("./slices/HeadlineCareer.vue");
const CareerNumbersList = () => import("./slices/CareerNumbersList.vue");
const PresentationProfilPage = () => import("./slices/PresentationProfilPage.vue");
const BlogPage = () => import("./slices/BlogPage.vue");
const EmploieRecent = () => import("./slices/EmploieRecent.vue");
const Equipe = () => import("./slices/Equipe.vue");
const Jobs = () => import("./slices/Jobs.vue");
const CareerMenu = () => import("./CareerMenu.vue");
const Career = () => import("./slices/Career.vue");
const CrSl = () => import("./slices/CrSl.vue")


export default {
  props: ["slices"],
  name: "slices-block",
  components: {
    HeadlineWithButton,
    HeadlineWithAncre,
    HeadlineAbout,
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
    HeadlineCareer,
    CareerNumbersList,
    PresentationProfilPage,
    BlogPage,
    EmploieRecent,
    Equipe,
    Jobs,
    CareerMenu,
    Career,
    CrSl

 

  },
};
</script>

<style lang="sass" scoped>
main
  width: 100vw
  overflow: hidden
</style>
