<template>
  <Modal :name="'registration-modal'" :title="`<span>Registration</span> Form`">
    <template #title>
      <h3>Registration <span style="color: #FF4D4D">Form</span></h3>
    </template>
    <template #body>
      <p>sign modal</p>
    </template>
    <template #footer>
      <button class="bt bt-blue">Continue</button>
      <p @click="restorePass()">Forgot password</p>
    </template>
  </Modal>
</template>
<script>
  import Modal from './MicroComponents/BaseModal.vue'
  export default {
    name: 'RegistrationModal',
    components: {
      Modal
    },
    methods: {
      restorePass () {
        this.$modal.hide('registration-modal')
        setTimeout(() => {
          this.$modal.show('forgot-password-modal')
        }, 100)
      }
    }
  }
</script>
<style lang="scss">

</style>
