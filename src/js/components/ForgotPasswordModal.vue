<template>
  <Modal :name="'forgot-password-modal'" :title="`<span>Login</span> Form`">
    <template #title>
      <h3>Forgot <span style="color: #FF4D4D">Password</span></h3>
    </template>
    <template v-if="!successMessageShow" #body>
      <div class="form">
        <Input :title="'Email'"
               :required="true"
               :validation-rule="'email'"
               :placeholder="'Enter your email'"/>
      </div>
    </template>
    <template v-else #body>
      <div class="message">
        <div class="icon">
          <img src="assets/img/success-message-icon.svg" alt="">
        </div>
        <div class="text">
          <p>A link for password recovery was sent to the specified email
            "Example@mail.com", follow it and enter a new password</p>
        </div>
      </div>
    </template>
    <template #footer>
      <button class="bt bt-blue">Continue</button>
    </template>
    <template #links>
      <div class="links">
        <p @click="goToRegistration()">Don't have an account? <span>Registration</span></p>
      </div>
    </template>
  </Modal>
</template>
<script>
import Modal from './MicroComponents/BaseModal.vue'
import Input from './MicroComponents/BaseInput.vue'
export default {
  name: 'LoginModal',
  data () {
    return {
      successMessageShow: true
    }
  },
  components: {
   Modal, Input
  },
  methods: {
    goToRegistration () {
      this.$modal.hide('forgot-password-modal')
      setTimeout(() => {
        this.$modal.show('registration-modal')
      }, 100)
    }
  }
}
</script>
<style scoped lang="scss">
  .form {
    padding: 30px 0 20px 0;
  }
  .message {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 30px 0 20px 0;
    .icon {
      min-width: 50px;
      min-height: 50px;
      img {
        width: 100%;
      }
    }
    .text {
      padding: 0 20px;
    }
  }
</style>
