<template>
  <modal :width="width" :scrollable="true" :height="'auto'" :name="name">
    <div class="modal-header">
      <slot name="title"></slot>
      <div class="close" @click="hide(name)">
        <img src="assets/img/close-icon.svg" alt="">
      </div>
    </div>
    <div class="modal-body p-4 d-flex flex-column">
      <slot name="body"></slot>
    </div>
    <div class="modal-footer d-flex justify-content-between px-4 py-3">
      <slot name="footer"></slot>
    </div>
  </modal>
</template>

<script lang="ts">

  export default {
    name: 'ModalCustom',
    props: {
      name: {
        type: String
      },
      title: {
        type: String,
        default: 'Modal Title'
      },
      width: {
        type: String,
        default: '600'
      },
      showFooter: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      hide (name) {
        this.$modal.hide(name)
      }
    }
  }
</script>
<style lang="scss">
  .vm--modal {
    padding: 25px;
    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #EAEAEA;
      padding: 0 0 15px 0;
      .title {
        h3 {
          span {
            color: #FF4D4D;
          }
        }
      }
      .close {
        cursor: pointer;
      }
    }
    .modal-body {
      padding: 40px 0 20px;
    }
    .modal-footer {
      width: 100%;
      button {
        width: 100%;
      }
    }
  }
</style>
