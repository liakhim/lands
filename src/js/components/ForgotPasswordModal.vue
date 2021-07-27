<template>
  <Modal :name="'forgot-password-modal'" :title="`<span>Login</span> Form`">
    <template #title>
      <h3>Forgot <span style="color: #FF4D4D">Password</span></h3>
    </template>
    <template #body>
      <p>Forgot Password modal</p>
    </template>
    <template #footer>
      <button class="bt bt-blue">Continue</button>
    </template>
  </Modal>
</template>
<script>
  import Modal from './MicroComponents/BaseModal.vue'
  export default {
    name: 'LoginModal',
    components: {
      Modal
    }
  }
</script>
<style lang="scss">

</style>
