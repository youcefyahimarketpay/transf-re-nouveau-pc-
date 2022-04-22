<template>
  <div class="form">
    <div class="main-container">
      <p class="back-button" @click="desactivForm">Revenir en arrier</p>
      <div class="form-container">
        <h2>
          Vous souhaitez postuler pour le poste de<br /><span class="test"
            >TITRE DU POSTE</span
          >
        </h2>
        <form @submit.prevent="formTest">
          <div class="first-section-form">
            <div class="first-section-form__name">
              <label>Prénom</label><br />
              <input
                type="text"
                v-model="firstName"
                placeholder="Prenom"
              /><br />
              <span v-if="!$v.firstName.required">Il faut le nom</span>
            </div>

            <div class="first-section-form__name">
              <label>Nom</label><br />
              <input type="text" v-model="lastName" placeholder="Nom" />
              <span v-if="!$v.lastName.required && !$v.lastName.$dirty"
                >Nom néceesaire</span
              >
            </div>
          </div>

          <div class="second-section-form">
            <label>Adresse-mail</label><br />
            <input
              type="email"
              v-model="email"
              placeholder="adresse@mail.com"
            /><br />
            <span
              v-if="(!$v.email.required || !$v.email.email) && $v.email.$dirty"
              >Email invalid</span
            >

            <label>Numéro de téléphone</label><br />
            <input type="text" v-model="phone" placeholder="XX XX XX XX" />
            <span
              v-if="
                (!$v.phone.required && !$v.phone.minLength) ||
                !$v.phone.maxLength
              "
            >
              Pas Bon num
            </span>

            <label
              >Présence sur Internet (votre portfolio, GitHub, Linkedin ou
              autre)</label
            ><br />
            <input type="text" placeholder="http://www.moi.com" /><br />

            <label>Pourquoi voulez-vous nous rejoindre?</label><br />
            <input type="text" class="message" placeholder="Message" />
          </div>

          <div class="last-section-form">
            <div class="last-section-form__cv">
              <label>CV*</label><br />
              <input type="file" @change="testUpload" name="upload" /><br />
              <span
                >Ne peut pas dépasser 5MB Format accepté: PDF, Word, JPEG</span
              >
            </div>
            <div class="last-section-form__document">
              <label
                >Autre document (lettre de motivation, portfolio, ou
                autre)</label
              ><br />
              <input type="file" name="upload" /><br />
              <span
                >Ne peut pas dépasser 5MB Format accepté: PDF, Word, JPEG</span
              >
            </div>
          </div>
          <input class="submit" type="submit" value="Envoyer" />
        </form>
      </div>
      <p class="back-button" @click="desactivForm">Revenir en arrier</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);
import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";

export default {
  props: ["slice"],
  name: "Form",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      webSite: "",
      text: "",
      cv: null,
    };
  },
  validations: {
    firstName: {
      required,
    },
    lastName: {
      required,
    },
    email: {
      required,
      email,
    },
    phone: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(14),
    },
  },
  methods: {
    formTest() {
      const formData = new FormData();
      formData.append("image", this.cv, this.cv.name);
      this.$v.$touch();
      if (!this.$v.$invalid) {
        alert("c est bon ca marche");
        alert(this.firstName);
        this.$mail.send({
          from: process.env.MAILFROM,
          subject: "Test Formulaire pour travaill",
          html: `Email address : ${this.firstName}  ${this.email} ${this.phone}`,
          attachments: [
            {
              filename: this.cv.name,
            },
          ],
        });
      } else {
        alert("ca marce pas ");
      }
    },
    testUpload(event) {
      const formData = new FormData();

      this.cv = event.target.files[0];
      formData.append("image", this.cv);
      console.log(this.cv)
      this.$axios.$post("uploadImge", this.cv, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // console.log(this.cv);
      // alert(this.cv.name);

      // const formData = new FormData();
      // formData.append("image", this.cv, this.cv.name);
      // console.log(formData);
    },
    desactivForm() {
      this.$emit("desactivForm");
    },
  },
};
</script>

<style lang="sass" scoped>
.form

  margin-bottom: 300px
  .main-container
    width: 1280px
    margin: auto
    .back-button
      margin-top: 70px
      margin-bottom: 70px
      font-style: normal
      font-weight: 400
      font-size: 16px
      line-height: 23px

      color: #00a2a7

    .form-container
      width: 628px
      margin: auto

      h2
        font-weight: 400
        font-size: 24px
        line-height: 30px
        color: #373F51
        text-align: center
        margin-bottom: 40px

        span
          font-weight: 700
          font-size: 36px
          line-height: 23px

          text-transform: uppercase
          color: #373F51
          position: relative
          top: 10px

      form
        .first-section-form

          display: flex
          justify-content: space-between
          .first-section-form__name
            margin-bottom: 20px
            input
              width: 302px
              height: 40px
              background: #FFFFFF
              border: 1px solid #00A2A7
              box-sizing: border-box
              border-radius: 2px
            label
              font-weight: 600
              font-size: 14px
              line-height: 18px
              color: #373F51
        .second-section-form

          label
            font-weight: 600
            font-size: 14px
            line-height: 18px
            color: #373F51
          input
            margin-bottom: 20px
            width: 628px
            height: 40px
            border: 1px solid #00A2A7
            box-sizing: border-box
            border-radius: 2px
          .message
            width: 628px
            height: 133px
        .last-section-form
          .last-section-form__cv

            margin-bottom: 20px
            width: 212px
            height: 96px
            label
              font-weight: 600
              font-size: 14px
              line-height: 18px
              color: #373F51
            input
              height: 40px
              width: 193px
              padding: 11px 28px

              background: rgba(0, 162, 167, 0.15)
              border: 1px solid #00A2A7
              box-sizing: border-box
              border-radius: 2px
            span
              width: 134px
              height: 26px
              font-family: 'Source Sans Pro'
              font-style: normal
              font-weight: 300
              font-size: 10px
              line-height: 13px
              color: #727272

          .last-section-form__document
            width: 345px
            height: 96px
            label
              font-weight: 600
              font-size: 14px
              line-height: 18px
              color: #373F51
            input
              height: 40px
              width: 193px
              padding: 11px 28px

              background: rgba(0, 162, 167, 0.15)
              border: 1px solid #00A2A7
              box-sizing: border-box
              border-radius: 2px
            span
              font-family: 'Source Sans Pro'
              font-style: normal
              font-weight: 300
              font-size: 10px
              line-height: 13px
              width: 134px
              height: 26px
        .submit
          width: 194px
          height: 40px
          background: #9DA0A9
          border-radius: 2px
          font-weight: 400
          color: #FFFFFF
          margin-left: 217px
          margin-top: 40px
@media screen and (min-width: 1000px) and (max-width: 1919px)
  .form
    .main-container
      width: 900px
      .form-container
        width: 442px
        h2
          font-size: 18px
          span
            font-size: 24px

        form
          .first-section-form
            .first-section-form__name
              input
                width: 212px
          .second-section-form
            input
              width: 442px
            .message
              width: 442px
              height: 153px
          .submit
            margin-left: 141px
@media screen and (min-width: 768px) and (max-width: 999px)
  .form
    .main-container
      width: 668px
      .form-container
        width: 442px
        h2
          font-size: 18px
          span
            font-size: 24px
        form
          .first-section-form
            .first-section-form__name
              input
                width: 212px
          .second-section-form
            input
              width: 442px
            .message
              width: 442px
              height: 153px
          .submit
            margin-left: 141px
@media screen and (min-width: 480px) and (max-width: 767px)
  .form
    .main-container
      width: 416px
      .form-container
        width: 416px
        h2
          font-size: 18px
          span
            font-size: 24px
        form
          .first-section-form
            display: initial
            .first-section-form__name
              input
                width: 416px
          .second-section-form
            input
              width: 416px
            .message
              width: 416px
              height: 133px
          .last-section-form
            .last-section-form__cv
              input
                width: 416px
            .last-section-form__document
              input
                width: 416px
          .submit
            margin-left: 0px
            width: 416px
@media screen and (max-width: 479px)
  .form
    .main-container
      width: 296px
      .form-container
        width: 296px
        h2
          font-size: 18px
          width: 243px

          padding-left: 26.5px
          padding-right: 26.5px
          margin: auto
          border: 2px solid red
          margin-bottom: 20px
          line-height: 23px
          span
            font-size: 24px

        form
          .first-section-form
            display: initial
            .first-section-form__name
              input
                width: 296px
          .second-section-form
            input
              width: 296px
            .message
              width: 296px
              height: 133px
          .last-section-form
            .last-section-form__cv
              input
                width: 296px
            .last-section-form__document
              width: 296px
              label
                width: 296px

                height: 36px
              input
                width: 296px
          .submit
            margin-left: 0px
            width: 296px
</style>