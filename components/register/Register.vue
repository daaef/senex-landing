<template>
  <div id="main">
    <span class="icon"
      ><router-link to="/">
        <img id="logo" src="/img/senexpay-logo-light.png" alt="senexpay"
      /></router-link>
    </span>
    <div class="form-holder">
      <span class="form-header">CREATE YOUR ACCOUNT</span>
      <form @submit.prevent="onSubmit">
        <div class="label-input-holder">
          <label>First name</label>
          <div class="input-holder">
            <input v-model="firstName" class="input-element" type="text" />
          </div>
        </div>
        <div class="label-input-holder">
          <label>Surname</label>
          <div class="input-holder">
            <input v-model="lastName" class="input-element" type="text" />
          </div>
        </div>
        <div class="label-input-holder">
          <label>Email</label>
          <div class="input-holder">
            <input v-model="email" class="input-element" type="email" />
          </div>
        </div>
        <div class="label-input-holder">
          <label
            >Phone number
            <span class="use-active"
              >(Please use an active phone number)</span
            ></label
          >
          <div class="select-input">
            <!-- <div class="country-select">
              <v-select :options="['Canada', 'United States']"></v-select>
            </div> -->
            <!-- <select v-model="countryCode">
              <option>+234</option>
              <option>+27</option>
            </select> -->
            <!-- <b-dropdown id="dropdown-menu" :text="countryCode">
              <b-dropdown-item
                v-for="country in countries"
                :key="country.value"
                :value="country.value"
                @click="countryCode = country.value"
              >
                {{ country.text }}
              </b-dropdown-item>
            </b-dropdown> -->
            <input
              v-model="mobileSuffix"
              class="input-element"
              autocomplete="off"
              type="number"
              @keypress="isNumber"
            />
          </div>
        </div>
        <div class="label-input-holder">
          <label>Password</label>
          <div class="input-holder pos-relative">
            <input
              id="pwd"
              v-model="password"
              class="input-element"
              :type="passwordLocked"
              placeholder="Password"
            />
            <img
              id="eye"
              :src="[
                passwordLocked !== 'password'
                  ? '/img/eye-on.svg'
                  : '/img/eye-off.svg'
              ]"
              alt="eye"
              @click="togglePassword"
            />
          </div>
          <span
            class="validation-span"
            :class="[hideValidation ? 'hide' : 'show']"
            ><i
              class="las la-circle dot"
              :class="[
                passValid.charLen === 2
                  ? 'green-dot'
                  : passValid.charLen === 1
                  ? 'red-dot'
                  : ''
              ]"
            ></i
            >Use 8 or more characters</span
          >
          <span
            class="validation-span"
            :class="[hideValidation ? 'hide' : 'show']"
            ><i
              class="las la-circle dot"
              :class="[
                passValid.upperCase === 2 && passValid.lowerCase === 2
                  ? 'green-dot'
                  : passValid.upperCase === 0 && passValid.lowerCase === 0
                  ? ''
                  : 'red-dot'
              ]"
            ></i
            >Use upper and lower case letters (e.g Aa)</span
          >
          <span
            class="validation-span"
            :class="[hideValidation ? 'hide' : 'show']"
            ><i
              class="las la-circle dot"
              :class="[
                passValid.hasNum === 2
                  ? 'green-dot'
                  : passValid.hasNum === 1
                  ? 'red-dot'
                  : ''
              ]"
            ></i
            >Use a number (e.g 1234)</span
          >
          <span
            class="validation-span"
            :class="[hideValidation ? 'hide' : 'show']"
            ><i
              class="las la-circle dot"
              :class="[
                passValid.hasSymbol === 2
                  ? 'green-dot'
                  : passValid.hasSymbol === 1
                  ? 'red-dot'
                  : ''
              ]"
            ></i
            >Use a symbol (e.g!@#$)</span
          >
        </div>
        <!-- <div class="submit-btn-holder">
          <input
            id="submit"
            class="submit-btn"
            :disabled="buttonDisabled"
            :class="[buttonDisabled ? 'disabled-color' : 'active-color']"
            type="submit"
            value="Create My Account"
          />
        </div> -->
        <ButtonSpinner
          :is-loading="processing"
          :is-in-active="buttonDisabled"
          value="Create My Account"
          :on-submit="onSubmit"
        />
      </form>
      <footer>
        <span class="footer-span-agreement"
          >By clicking the “Create My Account” button, you agree to Senexpay’s
          <router-link class="link-color" to="/">terms</router-link> and
          <router-link class="link-color" to="/">privacy policy</router-link
          >.</span
        >
        <span class="have-account"
          >Already have an account?
          <router-link class="link-color" to="/login"
            >Sign in</router-link
          ></span
        >
      </footer>
    </div>
  </div>
</template>
<script>
import ButtonSpinner from '../custom/ButtonSpinner.vue'
export default {
  components: { ButtonSpinner },
  layout: 'blank',
  props: {
    verifyUser: {
      type: Function,
      default: () => {
        // console.log('Not verified user.')
      }
    },
    saveEmail: {
      type: Function,
      default: () => {
        // console.log('No email to use.')
      }
    }
  },
  data() {
    return {
      password: '',
      rePassword: '',
      email: '',
      firstName: '',
      lastName: '',
      mobile: '',
      mobileSuffix: '',
      countryCode: '+234',
      emailSubscription: true,
      terms: true,
      processing: false,
      passwordLocked: 'password',
      buttonDisabled: true,
      fingerPrint: '',
      validFirstName: 0,
      validLastName: 0,
      validEmail: 0,
      validMobile: 0,
      hideValidation: true,
      url: '',
      passValid: {
        charLen: 0,
        upperCase: 0,
        lowerCase: 0,
        hasNum: 0,
        hasSymbol: 0
      },
      isVerified: false,
      countries: [
        {
          value: '+234',
          text: 'Nigeria +234'
        },
        {
          value: '+27',
          text: 'South Africa +27'
        }
      ]
    }
  },
  head() {
    return {
      script: [
        {
          src: '/client.min.js'
        }
      ]
    }
  },
  watch: {
    email(value) {
      this.email = value
      this.validateEmail(value)
    },
    password(value) {
      this.password = value
      this.validateFullPassword(value)
    },
    buttonDisabled(value) {
      this.buttonDisabled = value
    },
    mobileSuffix(value) {
      this.mobileSuffix = value
      this.validateMobile(value)
    },
    firstName(value) {
      this.firstName = value
      this.validateFirstName(value)
    },
    lastName(value) {
      this.lastName = value
      this.validateLastName(value)
    },
    countryCode(value) {
      this.countryCode = value
      this.mobileSuffix = ''
    }
  },
  mounted() {
    this.url = process.env.SENEX_MAIN_SITE_URL
  },
  methods: {
    togglePassword() {
      this.passwordLocked =
        this.passwordLocked === 'password' ? 'text' : 'password'
    },
    validateEmail(value) {
      const reg =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
      if (reg.test(value)) {
        this.validEmail = 2
      } else {
        this.validEmail = 1
      }
      this.isAllValid()
    },
    validatePassword(value) {
      if (this.hideValidation === true) {
        this.hideValidation = false
      }
      if (value.length < 8) {
        this.validPassword = 1
      } else {
        this.validPassword = 2
      }
      this.isAllValid()
    },
    validateMobile(value) {
      if (this.countryCode === '+234' && value.length === 10) {
        this.mobile = '+234' + value
        this.validMobile = 2
      } else if (this.countryCode === '+27' && value.length === 9) {
        this.mobile = '+27' + value
        this.validMobile = 2
      } else {
        this.validMobile = 1
      }
      this.isAllValid()
    },
    validateFirstName(value) {
      if (value.length < 2) {
        this.validFirstName = 1
      } else {
        this.validFirstName = 2
      }
      this.isAllValid()
    },
    validateLastName(value) {
      if (value.length < 2) {
        this.validLastName = 1
      } else {
        this.validLastName = 2
      }
      this.isAllValid()
    },
    validateFullPassword(value) {
      if (value.length === 0) {
        this.hideValidation = true
      } else {
        this.hideValidation = false
      }
      if (/[a-z]/.test(value)) {
        this.passValid.lowerCase = 2
      } else {
        this.passValid.lowerCase = 1
      }
      if (/[A-Z]/.test(value)) {
        this.passValid.upperCase = 2
      } else {
        this.passValid.upperCase = 1
      }
      if (/[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g.test(value)) {
        this.passValid.hasSymbol = 2
      } else {
        this.passValid.hasSymbol = 1
      }
      if (/\d/.test(value)) {
        this.passValid.hasNum = 2
      } else {
        this.passValid.hasNum = 1
      }
      if (value.length < 8) {
        this.passValid.charLen = 1
      } else {
        this.passValid.charLen = 2
      }
      this.isAllValid()
    },
    isAllValid() {
      if (this.mobileSuffix[0] === '0') {
        this.mobileSuffix = this.mobileSuffix.slice(1)
      }
      if (
        this.validEmail === 2 &&
        this.validMobile === 2 &&
        this.validFirstName === 2 &&
        this.validLastName === 2 &&
        this.passValid.charLen === 2 &&
        this.passValid.upperCase === 2 &&
        this.passValid.lowerCase === 2 &&
        this.passValid.hasNum === 2 &&
        this.passValid.hasSymbol === 2
      ) {
        this.buttonDisabled = false
      } else {
        this.buttonDisabled = true
      }
    },
    isNumber(evt) {
      if (this.countryCode === '+234' && this.mobileSuffix.length === 10) {
        evt.preventDefault()
      } else if (this.countryCode === '+27' && this.mobileSuffix.length === 9) {
        evt.preventDefault()
      }
      const charCode = evt.which ? evt.which : evt.keyCode
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault()
      }
    },
    onSubmit() {
      this.registerUser()
    },
    async registerUser() {
      // const client = new window.ClientJS()
      // const fingerPrint = client.getFingerprint()
      // console.log(fingerPrint)
      if (this.buttonDisabled) {
        return
      }
      const payload = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        mobile: this.mobile,
        password: this.password,
        email_subscription: this.emailSubscription,
        device: this.getDeviceInfo()
      }
      this.processing = true
      try {
        // const { data } = await this.$api.register(payload)
        await this.$api.register(payload)
        this.processing = false
        this.$notify({
          title: 'Welcome to Senexpay👋 ',
          text: 'Congratulations, your account was created successfully.'
        })
        // this.$toast.open({
        //   message:
        //     'Welcome to Senexpay👋  \n Congratulations, you account was created successfully.',
        //   type: 'success',
        //   position: 'top-right'
        // })
        this.saveEmail(this.email)
        this.verifyUser()
        this.firstName = ''
        this.lastName = ''
        // this.email = ''
        this.mobile = ''
        this.password = ''
        this.rePassword = ''
        this.emailSubscription = false
        // this.terms = false
        // this.$router.push('/activate')
      } catch (e) {
        this.processing = false
        const errors = e.response.data
        let error = ''
        for (const i in errors) {
          error += errors[i][0] + '. '
        }
        this.$notify({
          type: 'error',
          text: error
        })
        // this.$toast.open({
        //   message: error,
        //   type: 'error',
        //   position: 'top-right'
        // })
      }
    },
    getDeviceInfo() {
      const client = new window.ClientJS()

      return {
        userAgent: client.getUserAgent(),
        browser: client.getBrowser(),
        os: client.getOS(),
        device: client.getDevice(),
        deviceType: client.getDeviceType(),
        deviceVendor: client.getDeviceVendor(),
        cpu: client.getCPU(),
        fingerprint: '' + client.getFingerprint(),
        timezone: client.getTimeZone(),
        language: client.getLanguage()
      }
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
  padding: 20px 18px;
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
  font-weight: 500;
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

.select-box {
  border: 1px solid #b2b2b2;
  margin-right: 8px;
  border-radius: 6px;
  color: #000000;
  text-align: center;
  background-color: white !important;
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

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
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
  top: 36%;
  right: 15px;
  height: 32%;
  width: 20px;
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

.use-active {
  color: #f0ad4e;
  font-size: 14px;
}

// /deep/ #dropdown-menu > button {
//   width: 100%;
//   height: 100%;
//   background-color: white;
//   color: black;
//   margin-right: 5px;
// }

// /deep/ #dropdown-menu__BV_toggle_ {
//   width: 100%;
//   border: 1px solid #b2b2b2;
//   margin-right: 10px;
// }

// /deep/ .dropdown-menu {
//   border: 1px solid #b2b2b2;
//   margin-top: 5px;
// }

@media screen and (min-width: 450px) {
  .form-holder {
    padding: 40px;
  }
}
</style>
