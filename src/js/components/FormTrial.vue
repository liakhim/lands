<template>
  <div class="form-trial">
    <div class="title">
      <h2>Start your 7-day <span style="color: #FF4D4D">free trial</span></h2>
      <p>If you don’t see results within 7 days, we will extend your free trial</p>
    </div>
    <form>
      <TrialInput :arrow="true"/>
    </form>
  </div>
</template>
<script>
  import TrialInput from './MicroComponents/TrialInput.vue'
  export default  {
    name: 'FormTrial',
    components: { TrialInput }
  }
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}
.form-trial {
  padding: 80px 0;
  .title {
    h2 {
      font-size: 2.2em;
    }
    p {
      padding: 1em 0 2em 0;
    }
  }
}
h2 {
  text-align: center;
}
  p {
    text-align: center;
  }
  form {
    display: flex;
    justify-content: center;
  }
</style>
