<template>
  <footer id="footer" class="footer">
    <prismic-rich-text :field="text" />
  </footer>
</template>

<script>
export default {
  name: "footer-prismic",
  props: ["text", "textSocialNetwork", "textJurisdiction", "textCopyright"],
  data() {
    return {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phone: "",
      company: "",
      subject: "",
      message: ""
    };
  },
  methods: {
    // send email with contact form
    sendMail() {
      // All input fields selectors
      const inputField = document.querySelectorAll(".field");
      // All input fields required selectors
      const inputFieldRequired = document.querySelectorAll(".field-required");
      // All error text selectors
      const errorText = document.querySelectorAll(".error-text");

      // loop
      let error = false;
      for (let i = 0; i < inputFieldRequired.length; i++) {
        if (inputFieldRequired[i].value === "") {
          errorText[i].style.display = "block";
          errorText[i].style.position = "absolute";
          errorText[i].style.color = "#ff0000";
          error = true;
        } else {
          errorText[i].style.display = "none";
        }
      }

      if (!error) {
        try {
          // send email method
          this.$mail.send({
            from: process.env.MAILFROM,
            subject: this.subject,
            html: `First name : ${this.firstName}<br/>
            Last name : ${this.lastName}<br/>
            Email address : ${this.emailAddress}<br/>
            Phone number : ${this.phone}<br/>
            Compagny : ${this.company}<br/>
            Subject: ${this.subject}<br/>
            Message : ${this.message}<br/> `
          });
          alert(`Your message sent !`);
          for (let i = 0; i < inputField.length; i++) {
            inputField[i].value = "";
          }
        } catch (e) {
          console.error(e);
        }
      }
    }
  }
};
</script>

<style lang="sass" scoped>
footer
  padding: 3rem 5rem 2rem
  display: flex
  justify-content: space-around
  font-size: 20px
  color: #ccced2
  background-color: #383e51
  border: none
  &::v-deep p
    text-align: center
    font-weight: 300
    a
      color: #fff
      text-decoration: none
      font-weight: 400
  .text
    width: 30%
    h2
      margin-bottom: 1rem
      font-weight: 400
    p
      text-align: justify
      font-weight: 300
.contact-form
  display: flex
  justify-content: center
  align-items: center
  padding-bottom: 3rem

.identite,
.contact-details
  display: flex
  justify-content: space-between
  align-items: center

form div input,
form div textarea
  margin-bottom: 2rem
  padding: 0.5rem 1rem
  color: #fff
  background-color: #383e51
  border: 1px solid #5c6c80
  border-radius: 3px
  outline: none

form div input:focus:invalid,
form div textarea:focus:invalid
  border-color: #ff0000

form div input:valid,
form div textarea:valid
  border-color: #56c93f

input[name='phone']:valid,
input[name='company']:valid
  border-color: #5c6c80

form div input:focus:valid,
form div textarea:focus:valid
  border-color: #56c93f

input[name='phone']:focus:valid,
input[name='company']:focus:valid
  border-color: #5c6c80

textarea
  resize: none

#submit
  padding: 0.5rem 3rem
  font-size: 16px
  color: #fff
  background-color: #01a2a6
  border: 1px solid #01a2a6
  border-radius: 30px
  float: right
  cursor: pointer
  &:hover
    background-color: #01a3a691
    border: 1px solid #01a3a691

.error-text
  display: none
  margin-top: -2rem
  font-size: 12px


@media screen and (min-width: 767px) and (max-width: 1023.5px)
  footer
    padding: 2rem 2rem
    font-size: 16px

@media screen and (min-width: 540px) and (max-width: 767px)
  footer
    padding: 2rem 1rem
    flex-direction: column
    .text
      width: 100%
      padding: 1rem 4rem
    .contact-form
      padding: 3rem 0

@media screen and (max-width: 539.5px)
  footer
    padding: 2rem 1rem
    flex-direction: column
    .text
      width: 100%
      padding: 1rem
    .contact-form
      padding: 3rem 0 0
      .identite,
      .contact-details
        width: 100%
        display: block
      form div input,
      form div textarea
        width: 100%
      form div input:focus:invalid,
      form div textarea:focus:invalid
        border-color: #ff0000
      form div input:valid,
      form div textarea:valid
        border-color: #56c93f
      input[name='phone']:valid,
      input[name='company']:valid
        border-color: #5c6c80
      form div input:focus:valid,
      form div textarea:focus:valid
        border-color: #56c93f
      input[name='phone']:focus:valid,
      input[name='company']:focus:valid
        border-color: #5c6c80
      textarea
        resize: none
      #submit
        padding: 0.5rem 3rem
        font-size: 16px
        color: #fff
        background-color: #01a2a6
        border: 1px solid #01a2a6
        border-radius: 30px
        float: right
        cursor: pointer
        &:hover
          background-color: #01a3a691
          border: 1px solid #01a3a691
      .error-text
        display: none
        margin-top: -2rem
        font-size: 12px
</style>
