<template>
  <main>
    <!-- Slice section template -->
    <div v-for="(slice, index) in slices" :key="'slice-' + index">
      <!-- Home page section -->
      <!-- Header home page slice component -->
      <template v-if="slice.slice_type === 'header_home'">
        <header-home :slice="slice" />
      </template>
      <!-- Clients slider slice component -->
      <template v-else-if="slice.slice_type === 'clients_slider'">
        <clients-slider :slice="slice" />
      </template>
      <!-- Solution home page slice component -->
      <template v-else-if="slice.slice_type === 'solution_home'">
        <solution-home :slice="slice" />
      </template>
      <!-- Presentation home page slice component -->
      <template v-else-if="slice.slice_type === 'presentation_home_page'">
        <presentation-home-page :slice="slice" />
      </template>
      <!-- Why home page slice component -->
      <template v-else-if="slice.slice_type === 'why_home'">
        <why-home :slice="slice" />
      </template>
      <!-- Ready to begin home page slice component -->
      <template v-else-if="slice.slice_type === 'ready_home'">
        <ready-home :slice="slice" />
      </template>

      <!-- About page section -->
      <!-- Header about page slice component -->
      <template v-else-if="slice.slice_type === 'header_about'">
        <header-about :slice="slice" />
      </template>

      <!-- Contact & Validation page section -->
      <!-- Label fields of contact page slice component -->
      <template v-else-if="slice.slice_type === 'label_field'">
        <label-field :slice="slice" />
      </template>
      <!-- Label validate of validation page slice component -->
      <template v-else-if="slice.slice_type === 'label_validate'">
        <label-validate :slice="slice" />
      </template>
      <!-- General communication of contact page slice component -->
      <template v-else-if="slice.slice_type === 'general_com'">
        <general-com :slice="slice" />
      </template>

      <!-- Paywish page section -->
      <!-- Header paywish slice component -->
      <template v-else-if="slice.slice_type === 'header_page'">
        <header-page :slice="slice" />
      </template>
      <!-- Presentation paywish slice component -->
      <template v-else-if="slice.slice_type === 'presentation_pw'">
        <presentation-p-w :slice="slice" />
      </template>
      <!-- Solution paywish slice component -->
      <template v-else-if="slice.slice_type === 'solution_pw'">
        <solution-p-w :slice="slice" />
      </template>
      <!-- Payment method slice component -->
      <template v-else-if="slice.slice_type === 'payment_methods'">
        <payment-methods :slice="slice" />
      </template>
      <!-- Contact text paywish slice component -->
      <template v-else-if="slice.slice_type === 'contact_text'">
        <contact-text :slice="slice" />
      </template>

      <!-- Pay by bank page section -->
      <!-- Header pay by bank slice component -->

      <!-- Presentation pay by bank slice component -->
      <template v-else-if="slice.slice_type === 'presentation_pbb'">
        <presentation-p-b-b :slice="slice" />
      </template>

      <!-- Pay online page section -->
      <!-- Header pay online slice component -->

      <!-- Presentation pay online slice component -->
      <template v-else-if="slice.slice_type === 'presentation_po'">
        <presentation-p-o :slice="slice" />
      </template>
      <!-- Solution pay online slice component -->
      <template v-else-if="slice.slice_type === 'solution_po'">
        <solution-p-o :slice="slice" />
      </template>

      <!-- Pay on site page section -->

      <!-- Presentation pay on site slice component -->
      <template v-else-if="slice.slice_type === 'presentation_pos'">
        <presentation-p-o-s :slice="slice" />
      </template>

      <!-- About us page section -->
      <!-- Header about page slice component -->
      <template v-else-if="slice.slice_type === 'headline_about'">
        <headline-about :slice="slice" />
      </template>
      <!-- Presentation about page slice component -->
      <template v-else-if="slice.slice_type === 'presentation_about_page'">
        <presentation-about-page :slice="slice" />
      </template>
      <!-- Our offices slice component -->
      <template v-else-if="slice.slice_type === 'our_office'">
        <our-office :slice="slice" />
      </template>
      <!-- Our key slice component -->
      <template v-else-if="slice.slice_type === 'our_key'">
        <our-key :slice="slice" />
      </template>
      <!-- New our values slice component -->
      <template v-else-if="slice.slice_type === 'new_our_values'">
        <new-our-values :slice="slice" />
      </template>

      <!-- Cas client page section -->
      <!-- Header cas client slice components -->
      <template v-else-if="slice.slice_type === 'header_casclient'">
        <header-cas-client :slice="slice" />
      </template>
      <!-- Presentation cas client page slice component -->
      <template v-else-if="slice.slice_type === 'presentation_casclient'">
        <presentation-cas-client :slice="slice" />
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

      <!-- Blog page section -->
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
      <!-- Blog page slice component -->
      <template v-else-if="slice.slice_type === 'blog_page'">
        <blog-page :slice="slice" />
      </template>

      <!-- Career page section -->
      <!--  -->
      <template v-else-if="slice.slice_type === 'headline_career'">
        <headline-career :slice="slice" />
      </template>
      <!--  -->
      <template v-else-if="slice.slice_type === 'career_numbers_list'">
        <career-numbers-list :slice="slice" />
      </template>
      <!--  -->
      <template v-else-if="slice.slice_type === 'presentation_profil_page'">
        <presentation-profil-page :slice="slice" />
      </template>
      <!--  -->
      <template v-else-if="slice.slice_type === 'equipe'">
        <equipe :slice="slice" />
      </template>
      <!--  -->
      <template v-else-if="slice.slice_type === 'jobs'">
        <jobs :slice="slice" />
      </template>
      <!--  -->
      <template v-else-if="slice.slice_type === 'career_menu'">
        <career-menu :slice="slice" />
      </template>
      <!--  -->
      <template v-else-if="slice.slice_type === 'cr_sl'">
        <cr-sl :slice="slice" />
      </template>
      <!--  -->
      <template v-else-if="slice.slice_type === 'crb'">
        <crb :slice="slice" />
      </template>
      <!--  -->
      <template v-else-if="slice.slice_type === 'mapp'">
        <mapp :slice="slice" />
      </template>

      <!-- Footer section -->
      <!-- Produvts link slice component -->
      <template v-else-if="slice.slice_type === 'footer_products'">
        <footer-products :slice="slice" />
      </template>
      <template v-else-if="slice.slice_type === 'test'">
        <test :slice="slice" />
      </template>

      <template v-else-if="slice.slice_type === 'search'">
        <search :slice="slice" />
      </template>

      <template v-else-if="slice.slice_type === 'offers'">
        <offers :slice="slice" />
      </template>

      <template v-else-if="slice.slice_type === 'form'">
        <form :slice="slice" />
      </template>

      <!-- Marketpay link slice component -->
      <!-- <template v-else-if="slice.slice_type === 'footer_marketpay'">
        <footer-marketpay :slice="slice" />
      </template> -->
      <!-- Newsletter & Social networks slice component -->
      <!-- <template v-else-if="slice.slice_type === 'newsletter_socialnetwork'">
        <newsletter-socialnetworks :slice="slice" />
      </template> -->
    </div>
  </main>
</template>

<script>
import HeadlineCareer from "./slices/HeadlineCareer.vue";
import CareerNumbersList from "./Career/Profil/CareerNumbersList.vue";
import PresentationProfilPage from "./Career/Profil/PresentationProfilPage.vue";
import Equipe from "./Career/Equipe/Equipe.vue";
import Jobs from "./slices/Jobs.vue";
import CareerMenu from "./CareerMenu.vue";
import CrSl from "./Career/Profil/CrSl.vue";
import Crb from "./slices/Crb.vue";
import NewOurValues from "./slices/NewOurValues.vue";
import HeaderHome from "./slices/HeaderHome.vue";
import SolutionHome from "./slices/SolutionHome.vue";
import WhyHome from "./slices/WhyHome.vue";
import ReadyHome from "./slices/ReadyHome.vue";
import LabelField from "./slices/LabelField.vue";
import LabelValidate from "./slices/LabelValidate.vue";
import GeneralCom from "./slices/GeneralCom.vue";
import HeaderPage from "./slices/HeaderPage.vue";
import PresentationPW from "./slices/PresentationPW.vue";
import PresentationPW1 from "./slices/PresentationPW.vue";
import PresentationPW2 from "./slices/PresentationPW.vue";
import SolutionPW from "./slices/SolutionPW.vue";
import ContactText from "./slices/ContactText.vue";

import PresentationPBB from "./slices/PresentationPBB.vue";

import PresentationPO from "./slices/PresentationPO.vue";
import SolutionPO from "./slices/SolutionPO.vue";

import PresentationPOS from "./slices/PresentationPOS.vue";
import PaymentMethods from "./slices/PaymentMethods.vue";
// import HeaderAbout from "./slices/HeaderAbout.vue";
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

const TextWithButton = () => import("./slices/TextWithButton.vue");
const TextWithButtonContact = () =>
  import("./slices/TextWithButtonContact.vue");
const TextWithDivider = () => import("./slices/TextWithDivider.vue");
const BlogPage = () => import("./slices/BlogPage.vue");
// Clients page section
const ClientHeader = () => import("./slices/ClientHeader.vue");
const ClientTitle = () => import("./slices/ClientTitle.vue");
const ClientText = () => import("./slices/ClientText.vue");
const ClientImage = () => import("./slices/ClientImage.vue");
const ClientQuote = () => import("./slices/ClientQuote.vue");
const ClientSolution = () => import("./slices/ClientSolution.vue");
const Mapp = () => import("./slices/Mapp.vue");
const OurOffice = () => import("./slices/OurOffice.vue");
const OurKey = () => import("./slices/OurKey.vue");
const Test = () => import("./Career/Jobs/Test.vue");
const newOurValues = () => import("./slices/NewOurValues.vue");

//const JoinUs = () => import("./slices/JoinUs.vue")
const Search = () => import("./Career/Jobs/Search.vue");
const Offers = () => import("./Career/Jobs/Offers.vue");
const Form = () => import("./Career/Jobs/Form.vue");

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
    TextWithButton,
    TextWithButtonContact,
    TextWithDivider,
    BlogPage,
    PresentationCasClient,
    // Clients page section
    ClientHeader,
    ClientTitle,
    ClientText,
    ClientImage,
    ClientQuote,
    ClientSolution,
    // Carrer page section
    HeadlineCareer,
    CareerNumbersList,
    PresentationProfilPage,
    Equipe,
    Jobs,
    CareerMenu,
    CrSl,
    Crb,
    Mapp,
    // New About Page //
    OurOffice,
    OurKey,
    NewOurValues,
    HeaderHome,
    SolutionHome,
    ReadyHome,
    WhyHome,
    LabelField,
    LabelValidate,
    GeneralCom,
    HeaderPage,
    PresentationPW,
    PresentationPW1,
    PresentationPW2,
    SolutionPW,
    ContactText,
    PresentationPBB,
    PresentationPO,
    SolutionPO,
    PresentationPOS,
    Test,
    // HeaderAbout
    PaymentMethods,
    Search,
    Offers,
    Form
  }
};
</script>

<style lang="sass" scoped>
main
  width: 100vw
  overflow: hidden
</style>
