<template>
  <section class="contact-form">
    <div class="container">
      <div class="content">
        <form id="form" @submit="checkForm">
          <!-- first name -->
          <div class="first-name">
            <label for="firstName">
              {{ $prismic.asText(slice.items[0].label) }}
            </label>

            <input
              type="text"
              name="firstName"
              id="firstName"
              class="field-required field"
              v-model="firstName"
              pattern="[a-zA-Z \-]{3,}"
              placeholder="James"
              required
            />
            <span class="error-text error-fn">
              {{ $prismic.asText(slice.primary.text_error) }}
            </span>
          </div>
          <!-- last name -->
          <div class="last-name">
            <label for="lastName">
              {{ $prismic.asText(slice.items[1].label) }}
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              class="field-required field"
              v-model="lastName"
              pattern="[a-zA-Z \-]{3,}"
              placeholder="Brown"
              required
            />
            <span class="error-text error-ln">
              {{ $prismic.asText(slice.primary.text_error) }}
            </span>
          </div>
          <!-- email address -->
          <div class="email-address">
            <label for="emailAdress">
              {{ $prismic.asText(slice.items[2].label) }}
            </label>
            <input
              type="email"
              name="emailAdress"
              id="emailAdress"
              class="field-required field"
              v-model="emailAddress"
              pattern="[a-zA-Z0-9.\-_]+[@]{1}[a-zA-Z0-9]+[.]{1}[a-z]{2,5}"
              placeholder="email@example.com"
              required
            />
            <span class="error-text error-ea">
              {{ $prismic.asText(slice.primary.text_error) }}
            </span>
          </div>
          <!-- phone number -->
          <div class="telephone">
            <label for="phone">
              {{ $prismic.asText(slice.items[3].label) }}
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              class="field"
              v-model="phone"
              maxlength="11"
              pattern="[0-9]{10,11}"
              placeholder="00 00 00 00 00"
              required
            />
          </div>
          <!-- message -->
          <div class="message">
            <label for="message">
              {{ $prismic.asText(slice.items[4].label) }}
            </label>
            <textarea
              name="message"
              id="message"
              class="field-required field"
              v-model="message"
              rows="10"
              cols="57"
              placeholder="Text of your message"
              wrap="hard"
              required
            />
            <span class="error-text error-m">
              {{ $prismic.asText(slice.primary.text_error) }}
            </span>
          </div>
          <!-- submit -->
          <div class="valider">
            <button type="submit" id="submit">
              {{ $prismic.asText(slice.primary.button_label) }}
            </button>
          </div>
        </form>
      </div>
      <div class="image">
        <img src="./../../images/contact/Image du fond (short).png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "contact-form",
  props: ["slice"],
  data() {
    return {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phone: "",
      message: "",
    };
  },
  methods: {
    // Send email with contact form

    checkForm(e) {
      if (
        this.firstName &&
        this.lastName &&
        this.emailAddress &&
        this.phone &&
        this.message
      ) {
        this.$mail.send({
          from: process.env.MAILFROM,
          subject: "Message from the website contact form ",
          html: `First name : ${this.firstName}<br/>
            Last name : ${this.lastName}<br/>
            Email address : ${this.emailAddress}<br/>
            Phone number : ${this.phone}<br/>
            Message : ${this.message}`,
        });

        location.replace("https://marketpay.eu/en-us/validation");

        e.preventDefault();
      }
    },
    // sendEmail() {
    //   let form = document.querySelector("#form");
    //   form.addEventListener("submit", function (e) {
    //     e.preventDefault;
    //     this.$mail.send({
    //       from: process.env.MAILFROM,
    //       subject: "Message from the website contact form ",
    //       html: `First name : ${this.firstName}<br/>
    //         Last name : ${this.lastName}<br/>
    //         Email address : ${this.emailAddress}<br/>
    //         Phone number : ${this.phone}<br/>
    //         Message : ${this.message}`,
    //     });
    //     alert("message sent !");
    //     location.replace("http://localhost:3000/en-us/validation");

    // });
    // // All input fields selectors
    // const inputField = document.querySelectorAll(".field");
    // // All input fields required selectors
    // const inputFieldRequired = document.querySelectorAll(".field-required");
    // // All error text selectors
    // const errorText = document.querySelectorAll(".error-text");

    // Loop
    // let error = false;
    // for (let i = 0; i < inputFieldRequired.length; i++) {
    //   if (inputFieldRequired[i].value === null) {
    //     errorText[i].style.display = "block";
    //     errorText[i].style.color = "#ff0000";
    //     error = true;
    //   } else {
    //     errorText[i].style.display = "none";
    //   }
    // }
  },
};
</script>

<style lang="sass" scoped>
.contact-form
  background-color: #6da7ab

.container
  max-width: 1280px
  margin: 0 auto
  padding: 50px 0
  background: url("~/images/contact/Image du fond.png") no-repeat
  background-position: 65% 100%

.image
  display: none

form
  margin-left: 215px
  display: flex
  flex-direction: column
  background-color: transparent

.first-name,
.last-name,
.email-address,
.telephone,
.message
  margin-bottom: 10px
  display: flex
  flex-direction: column
  label
    margin-bottom: 2px
    font-size: 14px
    font-weight: 600
    line-height: 17.6px
  input,
  textarea
    width: 302px
    padding: 10px
    font-size: 14px
    font-weight: 300
    line-height: 17.6px
    border: none
    border-radius: 2px
    outline: none
  .error-text
    display: none

#submit
  margin-top: 30px
  margin-left: 43px
  padding: 8px 32px
  font-size: 16px
  font-weight: 400
  line-height: 19.2px
  color: #fff
  background-color: #373f51
  border: 1px solid #373f51
  box-shadow: 0px 1px 5px #373f51
  outline: none
  cursor: pointer

@media screen and (min-width: 1000px) and (max-width: 1919px)
  .container
    max-width: 900px

  form
    margin-left: 50px

@media screen and (min-width: 768px) and (max-width: 999px)
  .container
    max-width: 668px
    background-size: 140%

  form
    margin-left: 0

@media screen and (min-width: 480px) and (max-width: 767px)
  .container
    max-width: 100%
    padding-bottom: 0
    display: flex
    flex-direction: column
    justify-content: center
    background: none

  .image
    display: block
    img
      width: 100%

  form
    width: 100%
    margin-left: 0
    align-items: center

  #submit
    margin-left: 0

@media screen and (max-width: 479px)
  .container
    max-width: 100%
    padding-bottom: 0
    display: flex
    flex-direction: column
    justify-content: center
    background: none

  .image
    display: block
    img
      width: 100%

  form
    margin-left: 0
    align-items: center

  #submit
    width: 100%
    margin-left: 0
</style>