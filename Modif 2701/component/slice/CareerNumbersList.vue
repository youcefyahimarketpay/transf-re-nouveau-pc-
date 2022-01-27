<template>
  <div class="list">
    <h2>MarketPay en chiffres</h2>
    <ul>
      <div class="first-itemGroup">
        <li class="list-item creation">
          {{ slice.items[0].list[0].text }}<br />
        </li>
        <li class="list-item collaborateur">
          {{ slice.items[1].list[0].text }}<br />
        </li>
      </div>
      <div class="second-itemGroup">
        <li class="list-item age" id="age">
          {{ slice.items[2].list[0].text }}<br />
        </li>
        <li class="list-item chiffre">
          {{ slice.items[3].list[0].text }}<br />
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["slice"],
  name: "career-numbers-list",
};
</script>


<style lang="sass" scoped>
.list
  padding: 19px 10px 13px 19px
  background-color: #ECECEC
  h2

    text-align: center
    margin-bottom: 30px
  ul
    posotion: relative
    display: flex
    margin: auto
    justify-content: center
    justify-content: space-arround
    .first-itemGroup
      display: flex
      justify-content: space-arround

      li
        list-style-type: none
        border: 2px solid #00A2A7
        color: #00A2A7
        width: 102px
        height: 70px
        font-size: 12px
        line-height: 15px
        text-align: center
        text-transform: uppercase
        margin-right: 31px

      .creation
        padding-top: 7px
        &::after
          content: '2016'
          color: black
          width: 59px
          height: 17px
          font-size: 18px
          text-transform: uppercase
          position: relative
          top: 2px
      .collaborateur
        padding-top: 13px
        &::after
          content: '90'
          color: black
          width: 59px
          height: 17px
          font-size: 18px
          text-transform: uppercase
          position: relative
          top: 11px
    .second-itemGroup
      display: flex
      justify-content: space-arround

      li
        list-style-type: none
        border: 2px solid #00A2A7
        color: #00A2A7
        width: 102px
        height: 70px
        font-size: 12px
        line-height: 15px
        text-align: center
        text-transform: uppercase
        margin-right: 31px

      .age
        padding-top: 14px
        &::after
          content: '39'
          color: black
          width: 59px
          height: 17px
          font-size: 18px
          text-transform: uppercase
          position: relative
          top: 10px
      .chiffre
        padding-top: 7px
        &::after
          content: '36 200 000'
          color: black
          width: 59px
          height: 17px
          font-size: 18px
          text-transform: uppercase
          position: relative
          top: 2px

@media screen and (min-width: 320px) and (max-width: 426px)
  .list

    width: 100%
    max-width: 100%
    text-align: center

    ul
      display: initial

      .first-itemGroup

        border: 2px solid red
        width: 296px
        margin: auto
        margin-bottom: 13px
        li
          width: 138px
          height: 95px
          &:nth-child(1)
            font-size: 12px
            line-height: 15px
            margin-right: 18px
            border: 2px solid blue
        .creation
          color: red
          padding-top: 18px
          padding-left: 20px
          padding-right: 19px

          &::after
            position: relative
            top: 5px
            color: red
        .collaborateur
          color: red
          padding-top: 22px
          &::after
            position: relative
            top: 16px

      .second-itemGroup
        border: 2px solid red
        width: 296px
        margin: auto
        margin-bottom: 13px
        li
          width: 138px
          height: 95px
        .age
          padding-top: 20px
    
          &::after
            position: relative

        .chiffre
          padding-top: 17px
          padding-left: 17px
          padding-right: 15px
          &::after
            position: relative
            top: 5px
            font-size: 18px

@media screen and (min-width: 767px) and (max-width: 1023.5px)
</style>