<template>
  <section id="ourOffice">
    <div class="main-content">
      <div class="title-container">
        <prismic-rich-text :field="slice.primary.title" />
      </div>
      <div class="content">
        <prismic-image class="img-prismic" :field="slice.primary.image" />
        <div class="list">
          <prismic-rich-text :field="slice.primary.pays" />
          <prismic-rich-text :field="slice.primary.adresse" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "our-office",
};
</script>

<style lang="sass" scoped>
#ourOffice
    margin: -150px auto 0
    padding: 8rem 0 11rem
    background: url("@/images/Our office/Background Image - globe section_2 (1).png") no-repeat
    background-position: center
    z-index: 3
    position: relative

    .main-content
        max-width: 1280px
        margin: 0 auto
        .title-container
            &::v-deep h2
                font-size: 48px
                line-height: 60px
                text-align: right
                margin-right: 280px
                text-transform: uppercase
                color: #373F51
                position: relative
                top: 100px
                left: 275px
                strong
                    color: white
        .content
            display: flex
            margin-top: 50px
            
            position: relative
            .list
                margin-top: 87px
                &::v-deep ul
                    list-style-type: none
                    li
                        color: white
                        margin-left: 30px
                        &:nth-child(1)
                            position: relative
                            right: 80px
                            font-weight: 700
                            font-size: 24px
                            line-height: 30px
                        &:nth-child(2)
                            position: relative
                            right: 80px
                            margin-bottom: 20px
                            font-weight: 600
                            font-size: 20px
                            line-height: 25px
                        &:nth-child(3)
                            position: relative
                            right: 50px
                            font-weight: 700
                            font-size: 24px
                            line-height: 30px
                        &:nth-child(4)
                            position: relative
                            right: 45px
                            margin-bottom: 20px
                            font-weight: 600
                            font-size: 20px
                            line-height: 25px
                        &:nth-child(5)
                            position: relative
                            right: 20px
                            font-weight: 700
                            font-size: 24px
                            line-height: 30px
                        &:nth-child(6)
                            position: relative
                            right: 15px
                            margin-bottom: 20px
                            font-weight: 600
                            font-size: 20px
                            line-height: 25px
                        &:nth-child(7)
                            position: relative
                            right: initial
                            left: 10px
                            font-weight: 700
                            font-size: 24px
                            line-height: 30px
                        &:nth-child(8)
                            position: relative
                            right: initial
                            left: 10px
                            margin-bottom: 20px
                            font-weight: 600
                            font-size: 20px
                            line-height: 25px
                        &:nth-child(9)
                            position: relative
                            right: initial
                            left: 15px
                            font-weight: 700
                            font-size: 24px
                            line-height: 30px
                        &:nth-child(10)
                            position: relative
                            right: initial
                            left: 15px
                            margin-bottom: 20px
                            font-weight: 600
                            font-size: 20px
                            line-height: 25px
                        &:nth-child(11)
                            position: relative
                            right: 15px
                            font-weight: 700
                            font-size: 24px
                            line-height: 30px
                        &:nth-child(12)
                            position: relative
                            right: 15px
                            margin-bottom: 20px
                            font-weight: 600
                            font-size: 20px
                            line-height: 25px
                        &:nth-child(13)
                            position: relative
                            right: 45px
                            font-weight: 700
                            font-size: 24px
                            line-height: 30px
                        &:nth-child(14)
                            position: relative
                            right: 45px
                            margin-bottom: 20px
                            font-weight: 600
                            font-size: 20px
                            line-height: 25px
                        &:nth-child(15)
                            position: relative
                            right: 75px
                            font-weight: 700
                            font-size: 24px
                            line-height: 30px
                        &:nth-child(16)
                            position: relative
                            right: 75px
                            margin-bottom: 20px
                            font-weight: 600
                            font-size: 20px
                            line-height: 25px

@media screen and (min-width: 1000px) and (max-width: 1275px) // Ecran medium //
    #ourOffice
        background-position: center
        .main-content
            max-width: 900px
            .title-container
                &::v-deep h2
                    font-size: 30px
                    line-height: 38px
            .content
                &::v-deep img
                    height: 80%
                    width: 80%
                    margin: 20px 0 0 -300px

@media screen and (min-width: 768px) and (max-width: 999px) // Ecran Tablette //
    #ourOffice
        background-image: url("@/images/Diagonal section.png") no-repeat center
        .main-content
            max-width: 668px
            .title-container
                &::v-deep h2
                    font-size: 30px
                    line-height: 38px
            .content
                margin-top: 0px
                &::v-deep img
                    height: 100%
                    width: 100%
                    margin: 150px 0 0 -300px
                .list
                    margin-top: 130px
                    &::v-deep ul
                        li
                            &:nth-child(2n + 1)
                                font-size: 20px
                               
                            &:nth-child(2n)
                                font-size: 16px
                               

@media screen and (min-width: 480px) and (max-width: 767px) // Grand Ecran Smartphone//
    #ourOffice
        margin-top: 50px

        background: #6DA7AB

        .main-content
            max-width: 100%
            margin: 50px 0 0
            .title-container
                &::v-deep h2
                    font-size: 30px
                    line-height: 38px
                    top: 0
                    left: 245px
            .content
                padding: 0 32px
                flex-direction: column
                .list
                    &::v-deep ul
                        li
                            &:nth-child(2n + 1)
                                font-size: 20px
                                line-height: 25px
                                left: 0px
                            &:nth-child(2n)
                                font-size: 16px
                                line-height: 20px
                                left: 0px

@media screen and (max-width: 479px) // Ecran Smartphone  //
    #ourOffice
        margin: 0
        padding: 0

        background-position: 40% 30%

        background: #6DA7AB
        .main-content
            max-width: 100%
            margin: 0
            padding-top: 5rem
            .title-container

                &::v-deep h2
                    margin-right: 0px
                    font-size: 30px
                    line-height: 38px
                    top: 0px
                    left: 0px
                    bottom: initial
                    display: flex
                    color: re
                    justify-content: flex-end
                    margin-right: 31px

                    strong
                        margin-left: 5px

            .content
                margin-top: 9rem
                padding: 0 32px
                flex-direction: column
                .list
                    &::v-deep ul
                        margin-top: -50px
                        li
                            &:nth-child(2n + 1)
                                font-size: 20px
                                line-height: 25px
                                left: 0px
                            &:nth-child(2n)
                                font-size: 16px
                                line-height: 20px
                                left: 0px
</style>