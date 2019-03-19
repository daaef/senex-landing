<template>
  <trader step="user_finance">
    <template slot="title">
      Financial Details
    </template>
    <template slot="content">
      <div class="field">
        <select-search
          v-model="selectedBank"
          label="Name"
          placeholder="Select your bank"
          :search="true"
          :options="filteredBanks"
          @type="setBankSearchString"
        />

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
            type="text"
            class="input"
            :class="{ 'is-danger': errors.has('account number') }"
            placeholder="0000000000"
            name="account number"
          >
        </div>
        <p v-show="errors.has('account number')" class="help is-danger">
          {{ errors.first('account number') }}
        </p>
      </div>
      <div class="field">
        <label for="" class="label">Account Name</label>
        <div class="control">
          <input
            v-model="bankAccountName"
            v-validate="'required'"
            type="text"
            class="input"
            name="account name"
            placeholder="Bruce"
            readonly
          >
        </div>
      </div>
    </template>
    <template slot="button">
      <button class="button" @click="handleRequestTrade">
        Request Trade
      </button>
    </template>
  </trader>
</template>

<script>
import _ from 'lodash'
import { mapState } from 'vuex'
import Trader from '~/components/trade/trader.vue'
import SelectSearch from '~/components/select-search.vue'

export default {
  layout: 'simple',

  components: {
    SelectSearch,
    Trader
  },

  data() {
    return {
      selectedBank: null,
      bankSearchString: '',
      showErrors: false
    }
  },

  computed: {
    filteredBanks() {
      return _.filter(this.banks, bank => {
        return (
          bank.Name.toLowerCase().indexOf(
            this.bankSearchString.toLowerCase()
          ) !== -1
        )
      })
    },

    ...mapState({
      details: state => state.trade.create.bankDetails,
      info: state => state.trade.create.personalInformation,
      banks: state => state.trade.banks
    }),

    bankAccountName: {
      get() {
        return `${this.info.firstName} ${this.info.lastName}`
      },
      set(value) {
        this.$store.commit('trade/UPDATE_BANK_DETAILS', {
          prop: 'accountName',
          value
        })
      }
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
    }
  },

  async fetch({ store, env, app: { $axios } }) {
    const resp = await $axios.get(`${env.FLW_SANDBOX_BASE_URL}/v2/banks/ng`, {
      params: {
        public_key: env.FLW_PUB_KEY
      }
    })
    store.commit('trade/SET_BANK_LIST', resp.data.data.Banks)
  },

  created() {
    this.$store.commit('trade/UPDATE_BANK_DETAILS', {
      prop: 'accountName',
      value: this.bankAccountName
    })
  },

  methods: {
    setBankSearchString(text) {
      this.bankSearchString = text
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

    createTrade() {
      const data = this.$store.state.trade.create
      const payload = {
        type: data.type,
        cryptoAmount: data.cryptoAmount,
        fiatAmount:
          data.currency === 'NGN'
            ? data.fiatAmount
            : data.fiatAmount * data.conversionRate.USD_NGN,
        ...data.personalInformation,
        ...data.bankDetails,
        deviceInfo: {}, // FIXME
        networkInfo: {} // FIXME
      }
      payload.bank = payload.bankCode
      delete payload.bankCode
      this.loading = true
      this.$axios
        .post('/trade/', payload)
        .then(resp => {
          this.loading = false
          this.$store.commit('trade/SET_TRADE_METADATA', resp.data)
          this.$router.replace({
            path: '/trade/sell/wallet'
          })
        })
        .catch(() => {
          this.loading = false
          this.$swal({
            title: 'Error:',
            type: 'error',
            position: 'top-end',
            text: 'Something bad happened; try again',
            timer: 7 * 1000,
            toast: true,
            showConfirmButton: false
          })
        })
    }
  }
}
</script>
