<template>
  <header class="header" :class="{'scroll-header': scrollHeader}">
    <div class="container">
      <div class="logo">
        <a href="/">
          <img src="assets/img/le-logo.svg" alt="">
        </a>
      </div>
      <div v-if="!scrollHeader" class="sign-buttons">
        <button @click="$modal.show('registration-modal')"
                class="bt bt-blue">
          Create account
        </button>
        <button @click="$modal.show('login-modal')"
                class="bt bt-blue">
          Log in
        </button>
      </div>
      <div v-if="scrollHeader" class="trial-input">
        <TrialInput :arrow="false"/>
      </div>
    </div>
  </header>
</template>
<script>
  import TrialInput from "./MicroComponents/TrialInput.vue";
  export default {
    name: 'Header',
    components: {
      TrialInput
    },
    props: {
      scrollHeader: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      etst () {
        console.log(window.pageYOffset)
      }
    },
    mounted() {
      this.etst()
    }
  }
</script>
<style lang="scss">
  .header {
    background: #FFFFFF;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .container {
      display: flex;
      align-items: center;
      .logo {
        width: 150px;
        img {
          width: 100%;
        }
      }
      .sign-buttons {
        display: flex;
        align-items: center;
        margin-left: auto;
        button {
          margin-left: 10px;
        }
      }
      .trial-input {
        margin-left: auto;
        animation: 1s smooth-show-block 1;
      }
    }
  }
  .header.scroll-header {
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;
    z-index: 100;
    animation: 0.4s smooth-show 1;
  }
  @keyframes smooth-show {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes smooth-show-block {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
