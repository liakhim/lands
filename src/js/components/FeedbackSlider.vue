<template>
  <div class=container :as-nav-for="asNavFor">
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
      this.asNavFor2.push(this.$refs.main-feedback)
    }
  }
</script>
