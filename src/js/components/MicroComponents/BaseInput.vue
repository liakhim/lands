<template>
  <label class="base-input">
    <span v-if="!!title" class="d-flex align-items-center label-title">{{title}}</span>
    <label style="position: relative">
      <input :name="name"
             v-model="val"
             min="0"
             @blur="checkValue()"
             @input="throwValue()"
             :type="type"
             class="input"
             :class="{error: errorMessageProp.length > 0 || errorMessage.length > 0, 'is-slot': !!$slots.icon}"
             :style="{'min-width': minWidth + 'px', 'max-width': typeof maxWidth === 'string' ? maxWidth : maxWidth + 'px'}"
             :placeholder="placeholder">
      <span class="icon" v-if="$slots">
        <slot class="icon" name="icon"></slot>
      </span>
    </label>
    <span class="error p-2"
          v-if="errorMessage.length > 0">
      {{errorMessage}}
    </span>
    <span class="error" v-if="errorMessage.length === 0 && errorMessageProp.length > 0">{{errorMessageProp}}</span>
  </label>
</template>
<script lang="ts">
  export default {
    name: 'Input',
    data () {
      return {
        val: '',
        errorMessage: '',
        errorMessages: []
      }
    },
    props: {
      title: {
        type: String
      },
      showTitle: {
        type: Boolean,
        default: true
      },
      name: {
        type: String
      },
      type: {
        type: String,
        default: 'text'
      },
      required: {
        type: Boolean,
        default: false
      },
      errorMessageProp: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: 'Placeholder text...'
      },
      validationRule: {
        type: String,
        required: false
      },
      minWidth: {
        type: Number,
        default: 300
      },
      maxWidth: {
        type: [Number, String],
        default: 'auto'
      },
      default: {
        required: false,
        default: null
      },
      valueKey: {
        required: false,
        type: String
      }
    },
    mounted () {
      if (this.default) {
        this.val = this.default
      }
    },
    methods: {
      checkValue () {
        if (this.validationRule === 'email') {
          if (!this.validEmail(this.val)) {
            this.errorMessage = 'Email must be valid'
          }
        }
        if (this.required && this.val.length === 0) {
          this.errorMessage = 'This field must not be empty'
        }
      },
      throwValue () {
        // off all errors
        this.errorMessage = ''
        // throw value of input
        this.$emit('changeValue', { value: this.val, validity: !!this.errorMessage.length, key: this.valueKey })
      },
      validEmail (val) {
        const regexQuery = '^\\w+([\\+.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$'
        const email = new RegExp(regexQuery, 'i')
        return email.test(val)
      }
    }
  }
</script>
<style scoped lang="scss">
  .base-input {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  .icon {
    position: absolute;
    left: 10px;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  label {
    .base-input.is-slot {
      padding: 10px 10px 10px 30px;
    }
    input {
      height: 34px;
      width: 100%;
    }
    input.error {
      border: 1px solid #fc5c65;
      color: #000
    }
    .label-title {
      font-weight: 400;
      font-size: 0.9em;
      color: #888888;
      padding: 0 0 10px 0;
      display: block;
    }
    .error {
      display: block;
      color: #fc5c65;
      font-size: 0.8em;
    }
  }
</style>
