<template>
  <section class="main-screen">
    <div class="container-fl">
      <div class="text">
        <h1>Bring <span style="color: #FF4D4D" >Facebook</span> ads
          Automation to the next level</h1>
        <p>Optimize your Facebook ad campaigns and generate more sales for your business </p>
        <TrialInput :arrow="true"/>
      </div>
      <div class="image">
        <img src="assets/img/frame.png" alt="">
      </div>
    </div>
  </section>
</template>
<script>
import TrialInput from './MicroComponents/TrialInput.vue'
export default {
  name: 'MainScreen',
  components: { TrialInput }
}
</script>
<style lang="scss">
  .main-screen {
    background: #FAFAFA;
    max-width: 100%;
    .container-fl {
      display: flex;
      align-items: center;
      height: 100%;
      .text {
        width: 55%;
        h1 {
          font-size: 3em;
          line-height: 1.2;
          @media screen and (max-width: 1500px) {
            font-size: 2em;
            max-width: 500px;
          }
        }
        p {
          font-size: 1em;
          padding: 2em 0 3.5em 0;
          max-width: 500px;
        }
        .trial-input {
          .form {
            margin-left: 2em;
            p {
              padding: 0;
            }
          }
        }
      }
      .image {
        width: 45%;
        img {
          max-width: 150%;
          width: 900px;
        }
      }
    }
  }
  @media (max-width: 1919px) {
    .main-screen {
      .container-fl {
        .image {
          img {
            max-width: 45vw;
          }
        }
      }
    }
  }
</style>
