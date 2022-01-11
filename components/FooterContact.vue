<template>
  <div>
    <!-- <prismic-rich-text :field="text" /> -->
    <div class="text">
      <h2>Contact us</h2>
      <p>
        Our mission is to create and operate the best payment solutions and
        experiences to help companies develop their businesses.<br />
        We are always willing to onboard new talents.<br />
        Please complete our form, and we will get in touch shortly.
      </p>
    </div>
    <div class="contact-form">
      <!-- form -->
      <form>
        <div class="identite">
          <!-- first name -->
          <div>
            <input
              type="text"
              name="firstName"
              id="firstName"
              class="field-required field"
              v-model="firstName"
              pattern="[a-zA-Z \-]{3,}"
              placeholder="First name *"
              required
            />
            <span class="error-text error-fn">Veuillez remplir ce champs</span>
          </div>
          <!-- last name -->
          <div>
            <input
              type="text"
              name="lastName"
              id="lastName"
              class="field-required field"
              v-model="lastName"
              pattern="[a-zA-Z \-]{3,}"
              placeholder="Last name *"
              required
            />
            <span class="error-text error-ln">Veuillez remplir ce champs</span>
          </div>
        </div>
        <div class="contact-details">
          <!-- email adress -->
          <div>
            <input
              name="emailAdress"
              id="emailAdress"
              class="field-required field"
              v-model="emailAddress"
              pattern="[a-zA-Z0-9.\-_]+[@]{1}[a-zA-Z0-9]+[.]{1}[a-z]{2,5}"
              placeholder="myadress@mail.com *"
              required
            />
            <span class="error-text error-ea">Veuillez remplir ce champs</span>
          </div>
          <!-- phone number -->
          <input
            type="tel"
            name="phone"
            id="phone"
            class="field"
            v-model="phone"
            maxlength="11"
            pattern="[0-9]{10,11}"
            placeholder="phone number *"
          />
        </div>
        <div class="compagny">
          <!-- company -->
          <input
            type="text"
            name="company"
            id="company"
            class="field"
            v-model="company"
            placeholder="Company"
          />
        </div>
        <div class="subject">
          <!-- subject -->
          <div>
            <input
              type="text"
              name="subject"
              id="subject"
              class="field-required field"
              v-model="subject"
              pattern="[a-zA-Z0-9 \-_'(éèçà)ù!:.,?%]{0,}"
              placeholder="Subject *"
              required
            />
            <span class="error-text error-s">Veuillez remplir ce champs</span>
          </div>
        </div>
        <div class="message">
          <!-- message -->
          <div>
            <textarea
              name="message"
              id="message"
              class="field-required field"
              v-model="message"
              rows="10"
              cols="57"
              placeholder="Message *"
              wrap="hard"
              required
            />
            <span class="error-text error-m">Veuillez remplir ce champs</span>
          </div>
        </div>
        <div class="valider">
          <!-- submit -->
          <input
            type="submit"
            id="submit"
            value="Submit"
            @click.prevent="sendMail"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
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
