<template>
  <div>
    <Register
      v-if="!isVerified"
      :verify-user="verifyUser"
      :save-email="saveEmail"
    />
    <VerifyEmail v-else :email="email" />
  </div>
</template>
<script>
import Register from '~/components/register/Register.vue'
import VerifyEmail from '~/components/register/VerifyEmail.vue'
export default {
  components: {
    Register,
    VerifyEmail
    // CardTitle
    // vSelect
  },
  layout: 'blank',
  middleware: 'authenticated',
  data() {
    return {
      email: '',
      isVerified: false
    }
  },
  head() {
    return {
      title: 'Register',
      meta: [
        {
          hid: 'SenexPay Registration',
          name: 'Register - SenexPay',
          content: 'Create your SenexPay account'
        }
      ]
    }
  },
  methods: {
    verifyUser() {
      this.isVerified = true
    },
    saveEmail(newEmail) {
      this.email = newEmail
    }
  }
}
</script>

<style lang="scss" scoped>
#main {
  background-color: #162f55;
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;
  padding-bottom: 25px;
  color: #222122;
  padding: 20px 10px;
}

.form-holder {
  background-color: white;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  border-radius: 6px;
  max-width: 460px;
  padding: 20px;
}

.form-header {
  display: block;
  text-align: center;
  margin: 15px 0;
  font-size: 20px;
}

.icon {
  margin: auto;
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

#logo {
  height: 40px;
}

.label-input-holder {
  width: 100%;
  margin: 0 auto 20px auto;
}

.input-holder {
  display: block;
  width: 100%;
  height: 50px;
  // border-radius: 8px;
  // border: 1px solid #b2b2b2;
}

.select-input {
  display: flex;
  width: 100%;
  height: 50px;
}

.active-color {
  opacity: 1;
  cursor: pointer;
}
.disabled-color {
  opacity: 0.5;
  cursor: default;
}

.select-input > select {
  border: 1px solid #b2b2b2;
  margin-right: 8px;
  border-radius: 6px;
  color: #000000;
  text-align: center;
  padding: 0 10px;
}

.select-input > input {
  border-radius: 8px;
  border: 1px solid #b2b2b2;
}

.select-input > select > option {
  border: 1px solid black;
  display: block;
  padding: 10px;
}

.select-input > select:focus {
  outline: 0;
  border: 1px solid #000000;
  border-radius: 4px;
}

.label-input-holder > label {
  display: block;
  margin-bottom: 5px;
  color: #000000;
  font-size: 18px;
}

.pos-relative {
  position: relative;
}

.validation-span {
  margin: 10px 0 0 5px;
  font-style: italic;
  color: #707070;
  display: inline-block;
}

.input-element {
  height: 100%;
  width: 100%;
  display: inline-block;
  font-size: 16px;
  padding: 0 10px;
  border: 1px solid #b2b2b2;
  border-radius: 6px;
  font-size: 20px;
}

.input-element:focus {
  outline: 0;
  border: 1px solid #707070;
  border-radius: 6px;
}

#eye {
  position: absolute;
  top: 34%;
  right: 15px;
  height: 32%;
  cursor: pointer;
}

.submit-btn-holder {
  width: 100%;
  margin: auto;
  height: 50px;
  margin-bottom: 20px;
}

.submit-btn {
  background-color: #0b913a;
  color: #ffffff;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  border: 1px solid;
  font-size: 20px;
}

.footer-span-agreement {
  width: 100%;
  padding: 0 10px;
  display: block;
  margin: auto;
  text-align: center;
  margin-bottom: 25px;
}

.have-account {
  text-align: center;
  display: block;
  margin: auto;
  font-size: 20px;
  margin-bottom: 20px;
}

.dot {
  margin-right: 2px;
  border: 1px solid #707070;
  position: relative;
  top: -4px;
  border-radius: 50%;
  font-size: 6px;
}

.red-dot {
  background-color: red;
}
.green-dot {
  background-color: green;
}
.hide {
  display: none;
}

.show {
  display: block;
}

.link-color {
  color: #076de2;
}

@media screen and (min-width: 450px) {
  .form-holder {
    padding: 40px;
  }
}
</style>
