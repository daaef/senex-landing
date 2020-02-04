<template>
  <trader step="user_info">
    <template slot="title">
      Personal Information
    </template>
    <template slot="content">
      <div class="field">
        <label for="" class="label">First Name</label>
        <div class="control">
          <input
            v-model="firstName"
            v-validate="'required'"
            name="first name"
            type="text"
            class="input"
            :class="{ 'is-danger': errors.has('first name') }"
            placeholder="Bruce"
          >
        </div>
        <p v-show="errors.has('first name')" class="help is-danger">
          {{ errors.first('first name') }}
        </p>
      </div>

      <div class="field">
        <label for="" class="label">Last Name</label>
        <div class="control">
          <input
            v-model="lastName"
            v-validate="'required'"
            name="last name"
            type="text"
            class="input"
            :class="{ 'is-danger': errors.has('last name') }"
            placeholder="Wayne"
          >
        </div>
        <p v-show="errors.has('last name')" class="help is-danger">
          {{ errors.first('last name') }}
        </p>
      </div>

      <div class="field">
        <label for="" class="label">Email</label>
        <div class="control">
          <input
            v-model="email"
            v-validate="'required|email'"
            name="email"
            type="text"
            class="input"
            :class="{ 'is-danger': errors.has('email') }"
            placeholder="example@mail.com"
          >
        </div>
        <p v-show="errors.has('email')" class="is-danger help">
          {{ errors.first('email') }}
        </p>
      </div>

      <div class="field">
        <label for="" class="label">Mobile Number</label>
        <div class="control">
          <input
            v-model="mobileNumber"
            v-validate="'required|phoneNumber'"
            name="mobile number"
            type="text"
            class="input"
            :class="{ 'is-danger': errors.has('mobile number') }"
            placeholder="ex. +1 5342340596"
          >
        </div>
        <p v-show="errors.has('mobile number')" class="help is-danger">
          {{ errors.first('mobile number') }}
        </p>
      </div>
    </template>

    <template slot="button">
      <button
        type="submit"
        class="button"
        :class="{'is-loading': isLoading}"
        @click="handleContinue"
      >
        Continue
      </button>
    </template>
    <template slot="helpText">
      Input your personal information. All fields are required.
    </template>
  </trader>
</template>

<script>
import { Validator } from 'vee-validate'
import PhoneNumber from 'awesome-phonenumber'
import { mapState } from 'vuex'
import Trader from '~/components/trade/trader.vue'
import logger from '~/logger'

const phoneNumber = {
  getMessage: field => `${field} is not a valid phone number`,
  validate(value) {
    return new Promise(resolve => {
      const phone = new PhoneNumber(value)
      resolve({ valid: phone.isValid() })
    })
  }
}
Validator.extend('phoneNumber', phoneNumber)

export default {
  layout: 'simple',

  validate({ store }) {
    if (!store.getters['trade/isActiveTrade']) {
      return false
    }
    return true
  },

  components: {
    Trader
  },

  head() {
    return {
      title: 'Sell - SenexPay'
    }
  },

  data() {
    return {
      isLoading: false
    }
  },

  computed: {
    ...mapState({
      info: state => state.trade.create.personalInformation
    }),

    firstName: {
      get() {
        return this.info.firstName
      },
      set(value) {
        this.$store.commit('trade/UPDATE_PERSONAL_INFO', {
          prop: 'firstName',
          value
        })
      }
    },

    lastName: {
      get() {
        return this.info.lastName
      },
      set(value) {
        this.$store.commit('trade/UPDATE_PERSONAL_INFO', {
          prop: 'lastName',
          value
        })
      }
    },

    email: {
      get() {
        return this.info.email
      },
      set(value) {
        this.$store.commit('trade/UPDATE_PERSONAL_INFO', {
          prop: 'email',
          value
        })
      }
    },

    mobileNumber: {
      get() {
        return this.info.mobileNumber
      },
      set(value) {
        this.$store.commit('trade/UPDATE_PERSONAL_INFO', {
          prop: 'mobileNumber',
          value
        })
      }
    }
  },

  methods: {
    handleContinue() {
      this.$validator.validateAll().then(validated => {
        logger.debug(`Personal information: ${JSON.stringify(this.info)}`)
        if (validated) {
          this.isLoading = true
          this.$router.push({
            path: '/trade/sell/account-info'
          })
        }
      })
    }
  }
}
</script>
