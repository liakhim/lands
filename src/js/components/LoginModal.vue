<template>
  <Modal :name="'login-modal'" :title="`<span>Login</span> Form`">
    <template #title>
      <h3>Login <span style="color: #FF4D4D">Form</span></h3>
    </template>
    <template #body>
      <p>Login modal</p>
      <Input :required="true"/>
    </template>
    <template #footer>
      <button class="bt bt-blue">Continue</button>
    </template>
  </Modal>
</template>
<script>
  import Modal from './MicroComponents/BaseModal.vue'
  import Input from './MicroComponents/BaseInput.vue'
  export default {
    name: 'LoginModal',
    components: {
      Modal, Input
    }
  }
</script>
<style lang="scss">

</style>
