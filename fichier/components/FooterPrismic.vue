<template>
  <footer id="footer">
    <div class="container">
      <div class="logo">
        <svg
          version="1.1"
          id="Calque_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 2084.21 541.18"
          style="enable-background:new 0 0 2084.21 541.18;"
          xml:space="preserve"
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#ffffff"
        >
          <g>
            <polygon
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="#ffffff"
              class="st4"
              points="429.76,207.01 320.75,101.84 320.75,312.19 	"
            />
            <polygon
              class="st4"
              points="117.26,208.84 203.17,123.6 193.57,206.92 302.58,442.76 	"
            />
            <polygon
              class="st4"
              points="193.57,206.92 302.58,101.84 302.58,442.76 	"
            />
          </g>
          <g>
            <path
              fill="#ffffff"
              class="st5"
              d="M545.97,346.67h-18.33V180.26h21.36l51.61,118.89l47.58-118.89h20.99v166.41h-19.19v-99.18l0.43-29.7h-0.43
		l-10.76,29.83l-29.52,74.06h-21.73l-32.06-74.44l-9.93-27.1h-0.43l0.43,27.04V346.67z"
            />
            <path
              fill="#ffffff"
              class="st5"
              d="M713.63,346.67h-20.05l68.13-166.41h21.91l62.96,166.41h-23.37l-17.26-45.78h-73.53L713.63,346.67z
		 M738.96,284.26h60.64l-29.25-77.31L738.96,284.26z"
            />
            <path
              fill="#ffffff"
              class="st5"
              d="M892.54,346.67h-21.66V180.26h51.47c12.65,0,22.16,1.82,28.52,5.47c6.36,3.65,11.4,8.92,15.12,15.82
		c3.72,6.9,5.58,14.39,5.58,22.46c0,6.51-1.25,12.74-3.74,18.71c-2.49,5.97-5.99,11.37-10.51,16.19
		c-4.52,4.82-11.56,9.13-21.14,12.92c3.59,2,6.28,3.9,8.08,5.68c1.79,1.79,3.98,4.68,6.57,8.69c2.59,4,4.84,7.76,6.77,11.26
		l26.46,49.21h-24.83l-22.97-43.75c-5.59-10.58-12.87-19.84-21.85-27.77h-21.87V346.67z M892.54,258.53h21.16
		c8.95,0,15.74-1.38,20.36-4.13c4.62-2.76,8.29-6.77,11.01-12.03c2.72-5.26,4.08-10.9,4.08-16.92c0-5.23-1.08-9.9-3.22-14.02
		c-2.15-4.12-5.3-7.57-9.45-10.37c-4.15-2.79-11.21-4.19-21.16-4.19h-22.77V258.53z"
            />
            <path
              fill="#ffffff"
              class="st5"
              d="M1030.88,346.67h-21.66V180.26h21.66v79.45l69.48-79.45h24.66l-68.26,78.06l78.88,88.35h-27.13l-77.63-86.96
		V346.67z"
            />
            <path
              fill="#ffffff"
              class="st5"
              d="M1160.09,346.67V180.26h94.03v18.33h-72.38v52.43h63.26v16.62h-63.26v60.69h78.17v18.33H1160.09z"
            />
            <path
              fill="#ffffff"
              class="st5"
              d="M1335.96,346.67V196.88h-56.61v-16.62h134.03v16.62h-55.76v149.79H1335.96z"
            />
            <path
              fill="#ffffff"
              class="st5"
              d="M1505.75,346.67h-21.66V180.26h46.32c17.65,0,30.11,1.81,37.37,5.41c7.25,3.61,12.72,8.9,16.41,15.87
		c3.68,6.97,5.52,15.06,5.52,24.29c0,15.58-5.31,28.67-15.92,39.24c-10.62,10.58-26.43,15.87-47.45,15.87h-20.59V346.67z
		 M1505.75,264.32h14.58c19.16,0,31.77-3.69,37.85-11.06c6.07-7.38,9.11-16.22,9.11-26.53c0-8.95-2.45-16.16-7.34-21.64
		c-4.9-5.48-14.6-8.22-29.11-8.22h-25.09V264.32z"
            />
            <path
              fill="#ffffff"
              class="st5"
              d="M1625.16,346.67h-20.05l68.13-166.41h21.91l62.96,166.41h-23.38l-17.26-45.78h-73.53L1625.16,346.67z
		 M1650.5,284.26h60.64l-29.25-77.31L1650.5,284.26z"
            />
            <path
              fill="#ffffff"
              class="st5"
              d="M1844.61,346.67h-21.66v-78.38l-53.83-88.03h25.2l41.55,67.13l41.01-67.13h21.02l-53.29,88.03V346.67z"
            />
          </g>
        </svg>
      </div>
      <div class="links">
        <div class="link-page">
          <div class="products">
            <prismic-rich-text :field="footerBody[0].primary.title" />
            <ul class="list-products">
              <li v-for="item in footerBody[0].items" :key="item.id">
                <prismic-link :field="item.item_link">
                  {{ $prismic.asText(item.item) }}
                </prismic-link>
              </li>
            </ul>
          </div>
          <div class="marketpay">
            <prismic-rich-text :field="footerBody[1].primary.title" />
            <ul class="list-marketpay">
              <li v-for="item in footerBody[1].items" :key="item.id">
                <prismic-link :field="item.item_link">
                  {{ $prismic.asText(item.item) }}
                </prismic-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="newsletter-socialnetwork">
          <prismic-rich-text :field="footerBody[2].primary.title" />
          <div class="newsletter">
            <div class="field">
              <form>
                <input
                  type="email"
                  name="newsletter"
                  id="newsletter"
                  v-model="newsletter"
                  pattern="[a-zA-Z0-9.\-_]+[@]{1}[a-zA-Z0-9]+[.]{1}[a-z]{2,5}"
                  placeholder="Email address*"
                />
                <button type="submit" @click.prevent="sendMailNewsletter">
                  {{ $prismic.asText(footerBody[2].primary.button_label1) }}
                </button>
              </form>
            </div>
            <label for="newsletter">
              {{ $prismic.asText(footerBody[2].primary.text_confirm) }}
            </label>
          </div>
          <div class="socialnetwork">
            <ul class="list">
              <li class="item">
                <prismic-link :field="footerBody[2].items[0].social_link">
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35.6667 0.25H2.33333C1.7808 0.25 1.25089 0.469493 0.860194 0.860194C0.469493 1.25089 0.25 1.7808 0.25 2.33333V35.6667C0.25 36.2192 0.469493 36.7491 0.860194 37.1398C1.25089 37.5305 1.7808 37.75 2.33333 37.75H35.6667C36.2192 37.75 36.7491 37.5305 37.1398 37.1398C37.5305 36.7491 37.75 36.2192 37.75 35.6667V2.33333C37.75 1.7808 37.5305 1.25089 37.1398 0.860194C36.7491 0.469493 36.2192 0.25 35.6667 0.25V0.25ZM11.3729 32.2021H5.80625V14.3062H11.3729V32.2021ZM8.58958 11.8625C7.73426 11.8625 6.91397 11.5227 6.30916 10.9179C5.70436 10.3131 5.36458 9.49282 5.36458 8.6375C5.36458 7.78218 5.70436 6.96189 6.30916 6.35708C6.91397 5.75228 7.73426 5.4125 8.58958 5.4125C9.44491 5.4125 10.2652 5.75228 10.87 6.35708C11.4748 6.96189 11.8146 7.78218 11.8146 8.6375C11.8146 9.49282 11.4748 10.3131 10.87 10.9179C10.2652 11.5227 9.44491 11.8625 8.58958 11.8625V11.8625ZM32.2042 32.2021H26.6437V23.5C26.6437 21.425 26.6062 18.7563 23.7521 18.7563C20.8562 18.7563 20.4167 21.0187 20.4167 23.3542V32.2042H14.8604V14.3083H20.1937V16.7542H20.2708C21.0104 15.3479 22.8271 13.8646 25.5292 13.8646C31.1625 13.8646 32.2021 17.5687 32.2021 22.3896V32.2021H32.2042Z"
                      fill="#00A2A7"
                    />
                  </svg>
                </prismic-link>
              </li>
              <li class="item">
                <prismic-link :field="footerBody[2].items[1].social_link">
                  <svg
                    width="42"
                    height="30"
                    viewBox="0 0 42 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40.9854 5.0061C40.7481 4.12569 40.2844 3.32278 39.6404 2.67729C38.9963 2.03179 38.1945 1.56623 37.3146 1.32694C34.0521 0.431103 21 0.41652 21 0.41652C21 0.41652 7.95002 0.401936 4.68543 1.25819C3.80611 1.50849 3.00589 1.98064 2.36161 2.6293C1.71733 3.27796 1.25061 4.08136 1.00627 4.96235C0.145849 8.22485 0.137515 14.9915 0.137515 14.9915C0.137515 14.9915 0.129182 21.7915 0.983349 25.0207C1.46252 26.8061 2.86877 28.2165 4.65627 28.6978C7.9521 29.5936 20.9688 29.6082 20.9688 29.6082C20.9688 29.6082 34.0209 29.6228 37.2834 28.7686C38.1636 28.5297 38.9662 28.0652 39.6118 27.4211C40.2574 26.7769 40.7237 25.9753 40.9646 25.0957C41.8271 21.8353 41.8334 15.0707 41.8334 15.0707C41.8334 15.0707 41.875 8.2686 40.9854 5.0061ZM16.825 21.2603L16.8354 8.76027L27.6834 15.0207L16.825 21.2603Z"
                      fill="#00A2A7"
                    />
                  </svg>
                </prismic-link>
              </li>
              <li class="item">
                <prismic-link :field="footerBody[2].items[2].social_link">
                  <svg
                    width="42"
                    height="34"
                    viewBox="0 0 42 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36.902 8.66055C36.9291 9.02513 36.9291 9.38763 36.9291 9.75013C36.9291 20.8439 28.4854 33.6272 13.0541 33.6272C8.29996 33.6272 3.88329 32.2501 0.166626 29.8585C0.841626 29.9356 1.49163 29.9626 2.19371 29.9626C5.97078 29.9718 9.64089 28.7088 12.6125 26.3772C10.8613 26.3455 9.16366 25.7678 7.7567 24.7246C6.34975 23.6814 5.30368 22.2249 4.76454 20.5585C5.28329 20.6356 5.80413 20.6876 6.34996 20.6876C7.10204 20.6876 7.85829 20.5835 8.56038 20.4022C6.65988 20.0185 4.95095 18.9884 3.72416 17.487C2.49738 15.9856 1.82849 14.1056 1.83121 12.1668V12.0626C2.94996 12.6855 4.24788 13.0751 5.62288 13.1272C4.47098 12.3618 3.52646 11.3231 2.87358 10.1039C2.22071 8.88463 1.87978 7.52275 1.88121 6.13972C1.88121 4.58138 2.29579 3.15221 3.02288 1.90638C5.1315 4.50017 7.76142 6.62214 10.7423 8.13484C13.7232 9.64754 16.9886 10.5172 20.327 10.6876C20.1979 10.0626 20.1187 9.41471 20.1187 8.76472C20.1182 7.66255 20.3348 6.57109 20.7564 5.55271C21.1779 4.53434 21.796 3.60904 22.5753 2.82969C23.3547 2.05034 24.28 1.43224 25.2984 1.01071C26.3167 0.589184 27.4082 0.3725 28.5104 0.373048C30.927 0.373048 33.1083 1.38555 34.6416 3.02305C36.5203 2.65975 38.3219 1.97393 39.9666 0.995964C39.3404 2.93516 38.0286 4.57951 36.277 5.62097C37.9433 5.43092 39.5717 4.99274 41.1083 4.32096C39.9606 5.99409 38.5385 7.46127 36.902 8.66055Z"
                      fill="#00A2A7"
                    />
                  </svg>
                </prismic-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-prismic",
  props: ["footerBody"],
  data() {
    return {
      newsletter: ""
    };
  },
  methods: {
    sendMailNewsletter() {
      try {
        this.$mail.send({
          from: process.env.MAILFROM,
          subject: "Subscribe newsletter from the web site",
          html: `Email address : ${this.newsletter}`
        });
        alert("Email done !");
      } catch (error) {
        console.log(e.response);
      }
    }
  }
};
</script>

<style lang="sass" scoped>
#footer
  padding: 32px 0
  background-color: $darkColor
  border-bottom: 1px solid $greenBrightColor

.container
  max-width: $largeContainer
  margin: 0 auto

.logo
  margin-bottom: 32px
  color: $whiteColor
  svg
    height: 46px

.link-page
  display: flex
.links
  display: flex
  align-items: flex-start
  .products,
  .marketpay
    margin-right: 112px
    &::v-deep h3
      margin-bottom: 11px
      font-size: $largeH4Size
      font-weight: $titleWeight
      line-height: $largeH4Line
      color: $greenBrightColor
    ul
      list-style: none
      li
        margin-bottom: 11px
        a
          text-decoration: none
          font-size: $largeParaphSize
          font-weight: 600
          line-height: $largeLine
          color: $whiteColor
  .newsletter-socialnetwork
    width: 412px
    &::v-deep h3
      margin-bottom: 14px
      font-size: $largeH4Size
      font-weight: $titleWeight
      line-height: $largeH4Line
      color: $greenBrightColor
    .newsletter
      margin-bottom: 16px
      .field
        input
          width: 315px
          padding: 11px 10px
          font-size: 14px
          font-weight: 300
          line-height: 17.6px
          background-color: $whiteColor
          border: 1px solid $darkColor
          border-radius: 2px 0px 0px 2px
          outline: none
        button
          margin-left: -3px
          padding: 11px 24px
          font-size: 14px
          font-weight: 600
          line-height: 18px
          color: $whiteColor
          background-color: $greenBrightColor
          border: 1px solid $greenBrightColor
          border-bottom: 0.5px solid $greenBrightColor
          border-radius: 0px 2px 2px 0px
          outline: none
          cursor: pointer
      label
        font-size: 12px
        font-weight: 300
        line-height: 15px
        color: $whiteColor
  .socialnetwork
    ul
      display: flex
      align-items: center
      list-style: none
      li
        margin-right: 11px
        a
          text-decoration: none

@media screen and (min-width: 1000px) and (max-width: 1919px)
  #footer
    padding: 20px 0

  .container
    max-width: $mediumContainer

  .logo
    margin-bottom: 30px

  .links
    .products,
    .marketpay
      margin-right: 124px
      &::v-deep h3
        margin-bottom: 10px
        font-size: 22px
        line-height: 28px
      ul
        li
          margin-bottom: 10px
          a
            font-size: 18px
            line-height: 23px
    .newsletter-socialnetwork
      width: 410px
      &::v-deep h3
        margin-bottom: 10px
        font-size: 22px
        line-height: 28px
      .newsletter
        margin-bottom: 16px
        .field
          input
            width: 313px
    .socialnetwork
      ul
        li
          margin-right: 21px

@media screen and (min-width: 768px) and (max-width: 999px)
  #footer
    padding: 20px 0

  .container
    max-width: $shortContainer

  .logo
    margin-bottom: 30px

  .links
    .products,
    .marketpay
      margin-right: 66px
      &::v-deep h3
        margin-bottom: 10px
        font-size: 20px
        line-height: 25px
      ul
        li
          margin-bottom: 10px
          a
            font-size: 16px
            line-height: 20px
    .newsletter-socialnetwork
      width: 326px
      &::v-deep h3
        margin-bottom: 13px
        font-size: 20px
        line-height: 25px
      .newsletter
        margin-bottom: 10px
        .field
          input
            width: 229px
    .socialnetwork
      ul
        li
          margin-right: 14px
          svg
            width: 30px
            height: 30px

@media screen and (min-width: 480px) and (max-width: 767px)
  #footer
    padding: 20px 32px

  .container
    max-width: $tabletContainer

  .logo
    margin-bottom: 20px

  .link-page
    margin-bottom: 30px
  .links
    flex-direction: column
    .products,
    .marketpay
      margin-right: 109px
      &::v-deep h3
        margin-bottom: 10px
        font-size: 20px
        line-height: 25px
      ul
        li
          margin-bottom: 10px
          a
            font-size: 16px
            line-height: 20px
    .newsletter-socialnetwork
      width: 100%
      &::v-deep h3
        margin-bottom: 13px
        font-size: 20px
        line-height: 25px
      .newsletter
        margin-bottom: 13px
        .field
          input
            width: 62%
          button
            margin-left: -4px
            padding: 11px 54px
    .socialnetwork
      ul
        justify-content: center
        li
          margin-right: 25px
          svg
            width: 30px
            height: 30px

@media screen and (max-width: 479px)
  #footer
    padding: 20px 32px

  .container
    max-width: $mobileContainer

  .logo
    margin-bottom: 20px

  .link-page
    margin-bottom: 30px
  .links
    flex-direction: column
    .products,
    .marketpay
      margin-right: 51px
      &::v-deep h3
        margin-bottom: 10px
        font-size: 20px
        line-height: 25px
      ul
        li
          margin-bottom: 10px
          a
            font-size: 16px
            line-height: 20px
    .newsletter-socialnetwork
      width: 100%
      &::v-deep h3
        margin-bottom: 13px
        font-size: 20px
        line-height: 25px
      .newsletter
        margin-bottom: 13px
        .field
          input
            width: 73%
          button
            margin-left: -3px
            padding: 11px 15px
    .socialnetwork
      ul
        justify-content: center
        li
          margin-right: 25px
          svg
            width: 30px
            height: 30px
</style>
