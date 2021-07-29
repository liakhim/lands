<template>
  <div class="container" :as-nav-for="asNavFor">
    <div class="title">
      <h2>What our users say about us</h2>
    </div>
    <agile class="main-feedback" :options="options">
      <div class="slide" style="width: 100%;"
           v-for="(slide, index) in feedbackSlides"
           :key="index" :class="`slide--${index}`">
        <div class="slide-body">
          <div class="avatar">
            <img style="width: 100%" :src="slide.avatar" alt=""/>
          </div>
          <div class="name">
            <h3>{{slide.name}}</h3>
            <p>{{slide.position}}</p>
          </div>
          <div class="feedback_text">
            <p>{{slide.feedback_text}}</p>
          </div>
        </div>
      </div>
    </agile>
    <template slot="prevButton">prev</template>
    <template slot="nextButton">next</template>
  </div>
</template>
<script>
  export default {
    name: 'FeedbackSlider',
    data () {
      return {
        asNavFor: [],
        options: {
          autoplay: true,
          centerMode: true,
          dots: true,
          navButtons: false,
          slidesToShow: 2,
          responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3
              }
            },

            {
              breakpoint: 1000,
              settings: {
                navButtons: true
              }
            }
          ]

        },
        feedbackSlides: [
          {
            name: 'Paul Brenson',
            position: 'Social marketing specialist',
            avatar: 'assets/img/feedback-slider/face-1.svg',
            feedback_text: `I was looking for something like this: a tool to do some manual work for me.
            I thought it would be an assistant though... but LeadEnforce combines all I need for ad creation and management`
          },
          {
            name: 'Robert Trego',
            position: 'Project Manager',
            avatar: 'assets/img/feedback-slider/face-2.svg',
            feedback_text: `We’ve been using LeadEnforce for a month now and it’s a real catch.
            A/B testing ad campaigns is crucial and with LeadEnforce it’s also super easy.`
          },
          {
            name: 'Rachel Burns',
            position: 'Social media manager',
            avatar: 'assets/img/feedback-slider/face-3.svg',
            feedback_text: `Thanks to LeadEnforce, I discovered the world of ad automation and tactics.
            Much easier than on Facebook, so it’s been a great help.`
          },
          {
            name: 'Naomi Jones',
            position: 'Product manager',
            avatar: 'assets/img/feedback-slider/face-4.svg',
            feedback_text: `With LeadEnforce we increased our ROAS by 150% which is an incredible result.
            Delegating control over your ads to automation software was the best idea to control our ad spend.`
          }
        ]
      }
    },
    methods: {},
    mounted () {
      this.asNavFor2.push(this.$refs.mainFeedback)
    }
  }
</script>
<style lang="scss" scoped>
  .container {
    padding: 80px 0 0 0;
    .title {
      padding: 0 0 60px 0;
      h2 {
        font-size: 2.1em;
        text-align: center;
      }
    }
  }
  .main-feedback {
    .slide {
      .slide-body {
        margin: 5px 10px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        padding: 2.5em;
        background: #FAFAFA;
        border-radius: 12px;
        overflow: hidden;
        .avatar {
          overflow: hidden;
          border-radius: 50%;
          height: 100px;
          margin: 50px 0 0 0;
        }
        .name {
          width: 100%;
          height: 100px;
        }
        .feedback_text {
          width: 100%;
          padding: 15px 0 0 0;
          height: 160px;
        }
      }
    }
  }
  .main-feedback .agile__nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #FFFFFF;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
  .main-feedback .agile__nav-button--prev {
    left: -45px;
  }
  .main-feedback .agile__nav-button--next {
    right: -45px;
  }
  ::v-deep.main-feedback .agile__dots {
    margin: 30px auto;
    .agile__dot {
      button {
        background: #FAFAFA;
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        width: 14px;
        height: 14px;
      }
    }
    .agile__dot--current {
      button {
        background: #FF4D4D;
        box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.1);
      }
    }
  }
  @media (max-width: 1300px) {
    .main-feedback {
      max-width: 1100px;
      margin: auto;
    }
  }
</style>
