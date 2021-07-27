<template>
  <section class="container">
    <h2>Start your 7-day <span>free trial</span></h2>
    <p>If you don’t see results within 7 days, we will extend your free trial</p>
    <form>
      <TrialInput :arrow="true"/>
    </form>
  </section>
</template>
<script>
  import TrialInput from './MicroComponents/TrialInput.vue'
  export default  {
    name: 'FormTrial',
    components: { TrialInput }
  }
</script>
<style lang="scss" scoped>
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
