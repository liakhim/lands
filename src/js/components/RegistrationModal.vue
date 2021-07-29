<template>
  <Modal :name="'registration-modal'" :title="`<span>Registration</span> Form`">
    <template #title>
      <h3>Registration <span style="color: #FF4D4D">Form</span></h3>
    </template>
    <template #body>
      <form class="form">
        <Input :title="'Email address'" :required="true" :validation-rule="'email'" :placeholder="'Enter your email'"/>
        <label class="name">
          <Input :title="'First name'" :required="true":placeholder="'First name'" :min-width="120"/>
          <Input :title="'Last name'" :required="true" :placeholder="'Last name'" :min-width="120"/>
        </label>
        <Input :title="'Password'" :required="true" :placeholder="'********'"/>
        <div class="checkbox">
          <input class="styled-checkbox" id="styled-checkbox-2" type="checkbox" value="value2" checked>
          <label for="styled-checkbox-2"></label>
          <span>I accept the terms of the User Agreement and give my consent to Leadenforce to process my personal information on the terms determined by the Privacy Policy.</span>
        </div>
      </form>
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
  name: 'RegistrationModal',
  components: {
    Modal, Input
  },
  methods: {}
}
</script>
<style scoped lang="scss">
  label {
    width: 100%;
    margin-right: 10px;
  }
.name {
  display: flex;
}
.form {
  padding: 30px 0 20px 0;
}
  .checkbox {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 30px;
    label {
      max-width: 25px;
      margin-right: 10px;
    }
    span {
      font-size: 0.9em;
    }
    .styled-checkbox {
      position: absolute; // take it out of document flow
      opacity: 0; // hide it
      label {
        margin-right: 10px;
      }
      & + label {
        position: relative;
        cursor: pointer;
        padding: 0;
      }

      // Box.
      & + label:before {
        content: '';
        margin-right: 10px;
        display: inline-block;
        vertical-align: text-top;
        width: 20px;
        height: 20px;
        background: white;
        border-radius: 3px;
        border: 1px solid #C0BFBF;
      }

      // Box hover
      &:hover + label:before {
        border-radius: 3px;
      }

      // Box focus
      &:focus + label:before {}

      // Box checked
      &:checked + label:before {
        background: #68AEFF;
        border-radius: 3px;
        border: 1px solid #68AEFF;
      }

      // Disabled state label.
      &:disabled + label {
        color: #b8b8b8;
        cursor: auto;
      }

      // Disabled box.
      &:disabled + label:before {
        box-shadow: none;
        background: #ddd;
      }

      // Checkmark. Could be replaced with an image
      &:checked + label:after {
        content: '';
        position: absolute;
        left: 5px;
        top: 9px;
        background: #ffffff;
        width: 2px;
        height: 2px;
        box-shadow:
          2px 0 0 #ffffff,
          4px 0 0 #ffffff,
          4px -2px 0 #ffffff,
          4px -4px 0 #ffffff,
          4px -6px 0 #ffffff,
          4px -8px 0 #ffffff;
        transform: rotate(45deg);
      }
    }
  }
</style>
