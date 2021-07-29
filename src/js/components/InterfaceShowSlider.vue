<template>
  <div>
    <div class="container" style="max-width: 900px">
      <div class="title">
        <h2><span style="color: #FF4D4D">Automations</span> take a load of work
          off your shoulders</h2>
        <p>LeadEnforce will keep an eye on your ads performance so that you don't miss on important performance changes 24/7</p>
      </div>
      <agile class="thumbnails" ref="thumbnails" :options="options2" :as-nav-for="asNavFor2">
        <div class="slide slide--thumbnail"
             v-for="(slide, index) in slides2"
             :key="index" :class="`slide--${index}`"
             @click="$refs.thumbnails.goTo(index)">
          <div class="slide-body">
            <div class="icon">
              <img :src="slide.icon"/>
            </div>
            <div class="text">
              <p>{{slide.text}}</p>
            </div>
          </div>
        </div>
        <template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
        <template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
      </agile>
    </div>
    <div class="container-fl">
      <agile class="main" ref="main" :options="options1" :as-nav-for="asNavFor1">
        <div class="slide"
             v-for="(slide, index) in slides"
             :key="index" :class="`slide--${index}`">
          <img :src="slide" alt=""/>
        </div>
      </agile>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        asNavFor1: [],
        asNavFor2: [],
        options1: {
          dots: true,
          fade: true,
          navButtons: false,
          autoplay: false
        },

        options2: {
          autoplay: true,
          centerMode: true,
          dots: false,
          navButtons: false,
          slidesToShow: 3,
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

        slides: [
          'assets/img/slider/slide-1.png',
          'assets/img/slider/slide-2.png',
          'assets/img/slider/slide-3.png',
        ],
        slides2: [
          {
            icon: 'assets/img/thumb-slider/thumb-1.svg',
            text: 'Pause underperforming ads'
          },
          {
            icon: 'assets/img/thumb-slider/thumb-2.svg',
            text: 'Upload and test multiple creatives'
          },
          {
            icon: 'assets/img/thumb-slider/thumb-3.svg',
            text: 'Scale the top performing ad sets'
          }
        ]
      }
    },
    methods: {},
    mounted () {
      this.asNavFor1.push(this.$refs.thumbnails)
      this.asNavFor2.push(this.$refs.main)
    }
  }
</script>
<style lang="scss" scoped>
  .container {
    padding: 80px 0 0 0;
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        text-align: center;
        font-size: 2.1em;
        max-width: 700px;
      }
      p {
        text-align: center;
        max-width: 700px;
        padding: 30px 0 0 0;
      }
    }
  }
  .main {
    ::v-deep.agile__dots {
      margin: 30px 0;
      .agile__dot {
        button {
          background: #FAFAFA;
          box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
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
  }
</style>
