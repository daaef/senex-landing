<template>
  <div class="main-login-div">
    <div class="form-div-holder">
      <LogoImage />
      <div class="form-div">
        <form id="senex-form" @submit.prevent="login">
          <span id="text">SIGN IN</span>
          <div class="input-holder">
            <input
              id="email"
              v-model="email"
              class="input-element"
              type="email"
              placeholder="Email"
            />
          </div>
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
          <ButtonSpinner
            :is-loading="processing"
            :is-in-active="buttonDisabled"
            value="Login to your account"
            :on-submit="login"
          />
        </form>
        <div class="footer">
          <span class="center-text"
            >New to Senexpay?
            <router-link class="link-color normal-font-size" to="/register"
              >Create your account</router-link
            ></span
          >
        </div>
        <div id="end">
          <router-link class="link-color normal-font-size" to="/forgot-password"
            >Forgot your password?</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ButtonSpinner from '~/components/custom/ButtonSpinner.vue'
import LogoImage from '~/components/custom/LogoImage.vue'
// import { required, email } from 'vuelidate/lib/validators'
// import CardTitle from '@/components/Base/Card/CardTitle'

export default {
  components: {
    // CardTitle
    ButtonSpinner,
    LogoImage
  },
  layout: 'blank',
  middleware: 'authenticated',
  data() {
    return {
      email: '',
      password: '',
      processing: false,
      passwordLocked: 'password',
      buttonDisabled: true
    }
  },
  head() {
    return {
      title: 'Log in',
      meta: [
        {
          hid: 'SenexPay Login',
          name: 'Log in - SenexPay',
          content: 'Log in to your SenexPay Dashboard'
        }
      ]
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  watch: {
    // user() {
    //   // alert(this.previousRoute)
    //   if (this.user) this.$router.back()
    // }
    email(value) {
      this.email = value
      this.validateEmail(value)
    },
    password(value) {
      this.password = value
      this.validatePassword(value)
    }
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
      if (value.length < 8) {
        this.validPassword = 1
      } else {
        this.validPassword = 2
      }
      this.isAllValid()
    },
    isAllValid() {
      if (this.validEmail === 2 && this.validPassword === 2) {
        this.buttonDisabled = false
      } else {
        this.buttonDisabled = true
      }
    },
    async login() {
      if (this.buttonDisabled) {
        return
      }
      const payload = {
        email: this.email,
        password: this.password
      }
      this.processing = true
      try {
        await this.$auth.loginWith('local', {
          data: payload
        })
        await this.$auth.fetchUser()
        this.processing = false
        // this.$router.push('/dashboard')
        setTimeout(() => {
          // this.processing = false
          // this.email = ''
          // this.password = ''
          this.$router.push('/dashboard')
        }, 100)
      } catch (err) {
        // console.log(err)
        this.processing = false
        // console.log(this.$notify)
        // this.$notify('Hello user!')
        // using options
        this.$notify({
          type: 'error',
          title: 'Oops!🙄 ',
          text: 'Incorrect email or password. Double-check and try again.'
        })
        // this.$toast.open({
        //   message:
        //     'Oops!🙄 Incorrect email or password. Double-check and try again.',
        //   type: 'error',
        //   position: 'top-right'
        // })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main-login-div {
  background-color: #162f55;
  height: 100vh;
  width: 100%;
  overflow-y: auto;
}

.icon {
  height: auto;
  margin-bottom: 30px;
}

.form-div-holder {
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 0 18px;
}

#logo {
  width: auto;
  height: 40px;
}
.form-div {
  background-color: #ffffff;
  border-radius: 6px;
  width: 100%;
  max-width: 460px;
  padding: 30px;
}
#senex-form {
  width: 100%;
  margin-top: 0;
}
#text {
  display: block;
  text-align: center;
  font-weight: 500;
  position: relative;
  font-size: 20px;
  margin-bottom: 20px;
}
.input-holder {
  height: 50px;
  width: 100%;
  display: block;
  margin-bottom: 25px;
}

.input-element {
  padding: 15px;
  width: 100%;
  height: 100%;
  display: inline-block;
  border-radius: 6px;
  border: 1px solid #bdbdbd;
  font-size: 20px;
}

.input-element:focus {
  outline: 0;
  border: 1px solid black;
  border-radius: 6px;
}

.pos-relative {
  position: relative;
}

.submit-btn {
  background-color: #0b913a;
  color: #ffffff;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  font-size: 20px;
  border: 1px solid;
}

.submit-holder {
  width: 100%;
  margin: auto;
  height: 50px;
  margin-bottom: 10px;
}

.submit-holder:focus {
  border: 2px solid #707070;
}

.active-color {
  opacity: 1;
  cursor: pointer;
}
.disabled-color {
  opacity: 0.5;
  cursor: default;
}

#eye {
  position: absolute;
  top: 36%;
  right: 15px;
  height: 32%;
  width: 20px;
  cursor: pointer;
}
.footer {
  display: flex;
  justify-content: center;
  padding-top: 10px;
  font-weight: 400;
  color: #242426;
}
#end {
  display: flex;
  justify-content: center;
  padding-top: 5px;
  font-size: 14px;
}

.center-text {
  text-align: center;
}

.normal-font-size {
  font-size: 16px;
}

.link-color {
  color: #076de2;
}

@media screen and (min-width: 450px) {
  .form-div {
    padding: 40px;
  }
}
</style>
