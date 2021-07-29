<template>
  <div>
    <!----modals---->
    <RegistrationModal/>
    <LoginModal/>
    <ForgotPassword/>
    <!----content---->
    <Header :scroll-header="windowTop > 0"/>
    <MainScreen :style="{'margin-top': windowTop > 0 ? '100px' : '0'}"/>
    <Features/>
    <QuickStart/>
    <Functions/>
    <Ads/>
    <Kpi/>
    <FeedbackSlider/>
    <FormTrial/>
<!--    <InterfaceShowSlider/>-->
<!--    <CallToAction/>-->
<!--    <DragDropEditor/>-->
<!--    <Infographics/>-->
    <Footer/>
  </div>
</template>
<script>
import RegistrationModal from './RegistrationModal.vue'
import LoginModal from './LoginModal.vue'
import ForgotPassword from './ForgotPasswordModal.vue'
import Header from './Header.vue'
import Features from './Features.vue'
import MainScreen from './MainScreen.vue'
import QuickStart from './QuickStart.vue'
import Functions from './Functions.vue'
import Kpi from './Kpi.vue'
import Ads from './Ads.vue'
import FormTrial from './FormTrial.vue'
import FeedbackSlider from './FeedbackSlider.vue'
import Footer from './Footer.vue'
export default {
  data () {
    return {
      windowTop: 0
    }
  },
  components: {
    RegistrationModal,
    LoginModal,
    ForgotPassword,
    Header,
    Features,
    MainScreen,
    Functions,
    Ads,
    FormTrial,
    Kpi,
    QuickStart,
    FeedbackSlider,
    Footer
  },
  mounted() {
     window.addEventListener("scroll", this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    onScroll(e) {
      this.windowTop = window.top.scrollY /* or: e.target.documentElement.scrollTop */
    }
  }
}
</script>
<style lang="scss">
  .main {
    margin-bottom: 30px;
  }

  .thumbnails {
    margin: 0 -5px;
    width: calc(100% + 10px);
    padding: 50px 0;
  }

  .agile__nav-button {
    background: transparent;
    border: none;
    color: #ccc;
    cursor: pointer;
    transition-duration: 0.3s;
  }
  .thumbnails .slide {
    padding: 5px;
    height: auto;
    .slide-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid #E2E2E2;
      padding: 20px;
      min-height: 160px;
      border-radius: 12px;
      .icon {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 40px;
        }
      }
      .text {
        p {
          text-align: center;
          padding-top: 20px;
        }
      }
    }
  }
  .thumbnails .agile__slide--active {
    .slide-body {
      border: 1px solid red;
    }
  }
  .thumbnails .agile__nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .thumbnails .agile__nav-button--prev {
    left: -45px;
  }
  .thumbnails .agile__nav-button--next {
    right: -45px;
  }
  /***********************/

  /***********************/
  .agile__nav-button:hover {
    color: #888;
  }
  .agile__dot {
    margin: 0 10px;
  }
  .agile__dot button {
    background-color: #eee;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: block;
    height: 10px;
    font-size: 0;
    line-height: 0;
    margin: 0;
    padding: 0;
    transition-duration: 0.3s;
    width: 10px;
  }
  .agile__dot--current button, .agile__dot:hover button {
    background-color: #888;
  }

  .slide {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    height: 450px;
    justify-content: center;
  }
  .slide--thumbnail {
    cursor: pointer;
    height: 100px;
    padding: 0 5px;
    transition: opacity 0.3s;
  }
  .slide--thumbnail:hover {
    opacity: 0.75;
  }
  .slide img {
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
    width: 100%;
  }
</style>
