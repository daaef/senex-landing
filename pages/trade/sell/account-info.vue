<template>
  <trader step="user_finance">
    <template slot="title">
      Financial Details
    </template>
    <template slot="content">
      <div class="field">
        <field label="Bank Name">
          <autocomplete
            v-model="selectedBankName"
            v-validate="'required'"
            placeholder="e.g. Zenith Bank"
            keep-first
            open-on-focus
            :data="filteredBanks"
            field="Name"
            name="Bank"
            @select="option => selectedBank = option"
          />
        </field>
        <p v-show="showErrors && !details.bankCode" class="help is-danger">
          Please select your bank
        </p>        
      </div>

      <div class="field">
        <label for="" class="label">Account Number</label>
        <div class="control">
          <input
            v-model="bankAccountNumber"
            v-validate="'required|numeric|length:10'"
            type="number"
            class="input"
            :class="{ 'is-danger': errors.has('BAN') }"
            placeholder="0000000000"
            name="BAN"
          >
        </div>
        <p v-show="errors.has('BAN')" class="help is-danger">
          {{ errors.first('BAN') }}
        </p>
      </div>
      <div class="field">
        <label for="" class="label">Account Name</label>
        <div 
          class="control"
          :class="{ 'is-loading': fetching }"
        >
          <input
            v-validate="'required'"
            :value="details.accountName"
            type="text"
            class="input"
            name="account name"
            placeholder="Dennis Pat"
            disabled
          >
        </div>
        <p class="help is-danger">
          <!-- <i class="fas fa-exclamation-circle" /> Be sure to use a bank account with the name <b>{{ `${info.firstName.toUpperCase()} ${info.lastName.toUpperCase()}` }}</b> to avoid issues with payout. -->
          <i class="fas fa-exclamation-circle" /> Verify your bank information to avoid issues with payout.
        </p>
      </div>

      <div class="field">
        <label for="" class="label">Set trade PIN</label>
        <div class="control">
          <input
            v-model="pin"
            v-validate="'required|numeric|length:4'"
            type="text"
            class="input"
            placeholder="1234"
            name="trade pin"
            :class="{ 'is-danger': errors.has('trade pin') }"
          >
        </div>
        <span v-show="errors.has('trade pin')" class="help is-danger">
          {{ errors.first('trade pin') }}
        </span>
        <span>Take note of this PIN. It would be used to track your trade.</span>
      </div>

      <div class="field">
        <label for="" class="label">Passkey (optional)</label>
        <div class="control">
          <input
            v-model="passkey"
            v-validate="'alpha_num'"
            type="text"
            class="input"
            placeholder="VIP only"
            name="passkey"
            :class="{ 'is-danger': errors.has('passkey') }"
          >
        </div>
        <span v-show="errors.has('passkey')" class="help is-danger">
          {{ errors.first('passkey') }}
        </span>
      </div>
    </template>
    <template slot="button">
      <button
        class="button"
        :class="{'is-loading': loading}"
        :disabled="!proceed"
        @click="handleRequestTrade"
      >
        Proceed to Payment
      </button>
    </template>
  </trader>
</template>

<script>
import _ from 'lodash'
import { mapState } from 'vuex'
import { mapFields } from 'vee-validate'
import { Field } from 'buefy/dist/components/field'
import { Autocomplete } from 'buefy/dist/components/autocomplete'
import logger from '~/logger'
import Trader from '~/components/trade/trader.vue'

import 'buefy/dist/buefy.css'

const _ERR_CREATE_TRADE_ = 'Something bad happened; try again'
const _ERR_FETCH_ACCOUNT_ = 'Unable to resolve account'

export default {
  layout: 'stepper',

  validate({ store }) {
    if (!store.getters['trade/isActiveTrade']) {
      return false
    }
    if (!store.getters['trade/hasPersonalInformation']) {
      return false
    }
    return true
  },

  components: {
    Autocomplete,
    Field,
    Trader
  },

  data() {
    return {
      loading: false,
      selectedBank: null,
      selectedBankName: '',
      showErrors: false,
      fetching: false,
      proceed: false
    }
  },

  head() {
    return {
      title: 'Sell - SenexPay',
      script: [
        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/ClientJS/0.1.11/client.min.js'
        }
      ]
    }
  },

  computed: {
    filteredBanks() {
      return _.filter(this.banks, bank => {
        return (
          bank.Name.toLowerCase().indexOf(
            this.selectedBankName.toLowerCase()
          ) !== -1
        )
      })
    },

    ...mapState({
      details: state => state.trade.create.bankDetails,
      info: state => state.trade.create.personalInformation,
      banks: state => state.trade.banks
    }),

    ...mapFields({
      bank: 'Bank',
      ban: 'BAN'
    }),

    validateBankAccountName() {
      return this.bank.valid && this.ban.valid
    },

    bankAccountNumber: {
      get() {
        return this.details.accountNumber
      },
      set(value) {
        this.$store.commit('trade/UPDATE_BANK_DETAILS', {
          prop: 'accountNumber',
          value
        })
      }
    },

    pin: {
      get() {
        return this.info.pin
      },
      set(value) {
        this.$store.commit('trade/UPDATE_PERSONAL_INFO', {
          prop: 'pin',
          value
        })
      }
    },

    passkey: {
      get() {
        return this.details.passkey
      },
      set(value) {
        this.$store.commit('trade/UPDATE_BANK_DETAILS', {
          prop: 'passkey',
          value
        })
      }
    }
  },

  watch: {
    selectedBank(value) {
      if (value) {
        this.$store.commit('trade/UPDATE_BANK_DETAILS', {
          prop: 'bankCode',
          value: value.Code
        })
      }
    },
    validateBankAccountName(value) {
      if (value === true) {
        this.accountVerification()
      } else {
        this.fetching = false
        this.proceed = false
        this.$store.commit('trade/UPDATE_BANK_DETAILS', {
          prop: 'accountName',
          value: 'UNRESOLVED'
        })
      }
    },
    selectedBankName(value) {
      this.proceed = false
      this.$store.commit('trade/UPDATE_BANK_DETAILS', {
        prop: 'accountNumber',
        value: null
      })
    }
  },

  async fetch({ store, env, app: { $axios } }) {
    const resp = await $axios.get(`${env.FLW_BASE_URL}/v2/banks/ng`, {
      params: {
        public_key: env.FLW_PUB_KEY
      }
    })
    const sortedBanks = resp.data.data.Banks.sort((a, b) => {
      if (a.Name < b.Name) {
        return -1
      } else if (a.Name > b.Name) {
        return 1
      } else {
        return 0
      }
    })
    store.commit('trade/SET_BANK_LIST', sortedBanks)
  },
  /*
  created() {
    this.$store.commit('trade/UPDATE_BANK_DETAILS', {
      prop: 'accountName',
      value: `${this.info.firstName} ${this.info.lastName}`
    })
  },
  */
  methods: {
    setBankSearchString(text) {
      this.bankSearchString = text
    },

    async accountVerification() {
      this.fetching = true
      try {
        const resp = await this.$axios.post(
          `${process.env.FLW_BASE_URL}/flwv3-pug/getpaidx/api/resolve_account`,
          {
            recipientaccount: this.details.accountNumber,
            destbankcode: this.details.bankCode,
            PBFPubKey: process.env.FLW_PUB_KEY
          }
        )
        await this.$store.commit('trade/UPDATE_BANK_DETAILS', {
          prop: 'accountName',
          value: resp.data.data.data.accountname
        })
        // const respName = resp.data.data.data.accountname
        this.proceed = true
        // respName.includes(this.info.firstName.toUpperCase()) &&
        // respName.includes(this.info.lastName.toUpperCase())
      } catch (error) {
        this.proceed = false
        await this.$store.commit('trade/UPDATE_BANK_DETAILS', {
          prop: 'accountName',
          value: 'INVALID ACCOUNT'
        })
        this.$swal({
          title: 'Error:',
          type: 'error',
          position: 'top-end',
          text: _ERR_FETCH_ACCOUNT_,
          timer: 7 * 1000,
          toast: true,
          showConfirmButton: false
        })
      } finally {
        this.fetching = false
      }
    },

    handleRequestTrade() {
      if (!this.details.bankCode) {
        this.showErrors = true
      } else {
        this.$validator.validateAll().then(validated => {
          if (validated) {
            this.createTrade()
          }
        })
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
        screenPrint: client.getScreenPrint(),
        colorDepth: client.getColorDepth(),
        resolution: client.getCurrentResolution(),
        getAvailableResolution: client.getAvailableResolution(),
        deviceXDPI: client.getDeviceXDPI(),
        deviceYDPI: client.getDeviceYDPI(),
        fingerprint: '' + client.getFingerprint(),
        timezone: client.getTimeZone(),
        language: client.getLanguage(),
        systemLanguage: client.getSystemLanguage()
      }
    },

    async createTrade() {
      const data = this.$store.state.trade.create
      const payload = {
        type: 'sell',
        cryptoAmount: data.cryptoAmount,
        fiatAmount:
          data.currency === 'NGN'
            ? data.fiatAmount
            : data.fiatAmount * data.conversionRate.USD_NGN,
        ...data.personalInformation,
        ...data.bankDetails,
        deviceInfo: this.getDeviceInfo(),
        networkInfo: {}
      }
      payload.bank = payload.bankCode
      delete payload.bankCode

      logger.debug(`trade payload: ${JSON.stringify(payload)}`)
      try {
        this.loading = true
        const resp = await this.$axios.post('/trade/', payload)
        logger.debug(
          `[sell/account-info] resp data: ${JSON.stringify(resp.data)}`
        )

        const trade = resp.data
        localStorage.setItem('trade', trade.id)
        this.$store.commit('trade/SET_TRADE_METADATA', trade)
        this.$router.replace({
          path: '/trade/sell/wallet'
        })
      } catch (err) {
        this.$swal({
          title: 'Error:',
          type: 'error',
          position: 'top-end',
          text: _ERR_CREATE_TRADE_,
          timer: 7 * 1000,
          toast: true,
          showConfirmButton: false
        })
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: textfield; /* Firefox */
  margin: 0;
}
</style>
