<template>
  <div class="cookie-policy" v-if="reveleCP">
    <div class="overlay"></div>
    <div class="modale-card">
      <div id="banner">
        <div>
          <span>Cookie Policy</span>
        </div>
        <div @click="toggelCP">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="94.926px"
            height="94.926px"
            viewBox="0 0 94.926 94.926"
            style="enable-background: new 0 0 94.926 94.926"
            xml:space="preserve"
          >
            <g>
              <path
                fill="#fff"
                d="M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0
		c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096
		c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476
		c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62
		s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z"
              />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </div>
      </div>
      <div id="content">
        <div id="section-left">
          <h4>Third-party cookies</h4>
          <p>Cookies set by third-party services</p>
        </div>
        <div id="section-right">
          <div id="toggle-area" @click="toggle">
            <div id="toggle-btn">
              <span id="on">ON</span>
              <span id="off">OFF</span>
            </div>
          </div>
        </div>
      </div>
      <div id="save">
        <button @click="cookie">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CookiePolicy",
  props: ["reveleCP", "toggelCP", "toggelValue",],
  methods: {
    // toggle btn
    toggle() {
      const area = document.querySelector("#toggle-area");
      const btn = document.querySelector("#toggle-btn");
      const textOn = document.querySelector("#on");
      const textOff = document.querySelector("#off");

      area.classList.toggle("active");
      btn.classList.toggle("active");
      textOn.classList.toggle("desactived");
      textOff.classList.toggle("actived");
    },
    // set cooky
    cookie() {
      const btn = document.querySelector("#toggle-btn");

      if (btn.classList.value !== "active") {
        this.toggelValue = this.toggelValue;
        alert("Cookies accepted !");
      } else {
        this.toggelValue = !this.toggelValue;
        alert("Cookies denied !" + this.toggelValue);
        document.cookie = "Name=CookieRefused";
        location.reload();
      }

      this.reveleCP = !this.reveleCP;
    },
  },
};
</script>

<style scoped>
.cookie-policy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2000;
}
.overlay {
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.modale-card {
  background: #333;
  color: #fff;
  font-size: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: #01a2a6;
  color: #fff;
  font-size: 20px;
}
#banner div:last-child svg {
  height: 20px;
  width: 20px;
  padding-top: 7px;
  cursor: pointer;
}
#content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  widows: 100%;
  color: #fff;
  border-bottom: 1px solid #fff;
}
#content h4 {
  margin-bottom: 1rem;
}
#content p {
  margin-right: 5rem;
}
/** section toggle (right) */
#toggle-area {
  height: 30px;
  width: 100px;
  border-radius: 50px;
  border: 3px solid #01a2a6;
  background-color: #01a2a6;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
}
#toggle-area.active {
  height: 30px;
  width: 100px;
  border-radius: 50px;
  border: 3px solid #e3e3e3;
  background-color: #fff;
  transition: all 0.1s ease-in-out;
}
#toggle-btn {
  border-radius: 50px;
  background-color: #fff;
  height: 100%;
  width: 50%;
  transition: all 0.2s ease-in-out;
}
#toggle-btn.active {
  border-radius: 50px;
  background-color: #01a2a6;
  height: 100%;
  width: 50%;
  margin-left: 47px;
  transition: all 0.2s ease-in-out;
}
#on,
#off {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
}
#on.desactived {
  display: none;
}
#off {
  display: none;
}
#off.actived {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
/** button */
#save {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#save button {
  font-size: 20px;
  padding: 0.5rem 0.7rem;
  background-color: #01a2a6;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 3px;
}
#save button:hover {
  background-color: #008b89;
}

/** responsive: smartphone */
@media (min-width: 320px) and (max-width: 767.5px) {
  .modale-card {
    font-size: 20px;
    position: fixed;
    top: 50%;
    left: 1rem;
    right: 1rem;
    transform: translate(0, -50%);
  }
  #content {
    font-size: 16px;
  }
  #toggle-area {
    height: 40px;
    width: 70px;
  }
  #toggle-area.active {
    height: 40px;
    width: 70px;
  }
  #toggle-btn.active {
    margin-left: 32.5px;
  }
  #content p {
    margin-right: 1rem;
  }
}
</style>