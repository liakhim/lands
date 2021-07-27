<template>
  <div class="trial-input">
    <div class="form">
      <div style="display:flex;width: 100%;">
        <div class="arrow" v-if="arrow">
          <img src="assets/img/custom-arrow.svg" alt="">
        </div>
        <label>
          <input class="inp" type="email" placeholder="Enter your email">
        </label>
        <button class="bt bt-red" type="button">Start free trial</button>
      </div>
      <div class="comment" v-if="arrow">
        <p><span>*</span> No credit card required</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InputTrial',
  props: ['arrow']
}
</script>
<style lang="scss" scoped>
  @import '../../../assets/scss/utils/vars.scss';
  .trial-input {
    position: relative;
    margin: auto;
    width: 100%;
    .form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: auto;
      position: relative;
      max-width: 520px;
      .arrow {
        position: absolute;
        right: 100%;
        top: 10px;
        width: 20px;
      }
      label {
        position: relative;
        width: 100%;
      }
      .comment {
        font-size: 0.8em;
        padding: 0.5em 0 0 1em;
        width: 100%;
        span {
          color: $danger-color;
        }
      }
    }
  }
</style>
