<template>
  <div>
    <!----modals---->
    <RegistrationModal/>
    <LoginModal/>
    <ForgotPassword/>
    <!----content---->
    <Header :scroll-header="windowTop > 50"/>
    <MainScreen :style="{'margin-top': windowTop > 50 ? '100px' : '0'}"/>
    <InterfaceShowSlider/>
    <CallToAction/>
    <DragDropEditor/>
    <Infographics/>
    <FeedbackSlider/>
    <FormTrial/>
    <Footer/>
  </div>
</template>
<script>
  import RegistrationModal from './RegistrationModal.vue'
  import LoginModal from './LoginModal.vue'
  import ForgotPassword from './ForgotPasswordModal.vue'
  import Header from './Header.vue'
  import MainScreen from './MainScreen.vue'
  import FormTrial from './FormTrial.vue'
  import InterfaceShowSlider from './InterfaceShowSlider.vue'
  import CallToAction from './CallToAction.vue'
  import DragDropEditor from './DragDropEditor.vue'
  import Infographics from './Infographics.vue'
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
      MainScreen,
      FormTrial,
      InterfaceShowSlider,
      CallToAction,
      DragDropEditor,
      Infographics,
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
    font-size: 24px;
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
  .main-feedback {
    .slide {
      .slide-body {
        margin: 5px 10px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        padding: 50px;
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
  .main-feedback .agile__dots {
    margin: 20px auto;
    .agile__dot {
      button {
        background: #FAFAFA;
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }
    .agile__dot--current {
      button {
        background: #FF4D4D;
        box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.1);
      }
    }
  }
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
