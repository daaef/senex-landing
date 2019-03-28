<template>
  <trader step="user_verify">
    <template slot="title">
      Verification
    </template>
    <template v-if="shouldVerify" slot="content">
      <div class="user-verify">
        <div>Upload ID</div>
        <div class="id-section">
          <img src="~assets/images/id-placeholder.png" alt="" class="upload-id">
          <div class="widget-grp">
            <input
              ref="idCardVer"
              type="file"
              style="display: none;"
              accept="image/*"
              @change="handleFileChange($event, 'idCard')"
            >
            <button
              class="button select-file-btn"
              @click="$refs.idCardVer.click()"
            >
              Choose File
            </button>
            <button
              class="button upload-file-btn"
              :class="{'is-loading': idCard.loading}"
              @click="handleIdCardUpload"
            >
              Upload
            </button>
            <span v-if="idCard.file" class="is-block is-size-7">
              {{ idCard.file.name|formatFilename }}
            </span>
          </div>
        </div>
        <p>Upload Selfie</p>
        <div class="selfie-section">
          <img src="~assets/images/selfie-placeholder.png" alt="" class="upload-selfie">
          <div class="widget-grp">
            <input
              ref="selfieVer"
              type="file"
              style="display: none"
              accept="image/*"
              @change="handleFileChange($event, 'selfie')"
            >
            <button
              class="button select-file-btn"
              @click="$refs.selfieVer.click()"
            >
              Choose File
            </button>
            <button
              class="button upload-file-btn"
              :class="{'is-loading': selfie.loading}"
              @click="handleSelfieUpload"
            >
              Upload
            </button>
            <span v-if="selfie.file" class="is-block is-size-7">
              {{ selfie.file.name|formatFilename }}
            </span>
          </div>
        </div>
      </div>
    </template>
    <template v-else slot="content" class="user-verify">
      <div>
        <p class="has-text-centered is-size-6">
          No verification required.
        </p>
      </div>
    </template>
    <template slot="button">
      <button
        class="button"
        :class="{'is-loading': loading}"
        @click="handleSubmit"
      >
        Request Trade
      </button>
    </template>
  </trader>
</template>

<script>
import Trader from '~/components/trade/trader.vue'
import { mapState } from 'vuex'
import { truncate } from 'lodash'

const _TRADE_VERIFY_AMOUNT_CONDITION_ = 1000.0 // in dollars
const _ERR_FILE_UPLOAD_ = 'Failed to upload; try again'
const _STR_REQUIRED_FIELDS_ = 'You must upload both a selfie & an identity'
const _ERR_KYC_UPDATE_ = 'Unable to update; try again'
const _STR_TRADE_REQUESTED_ = 'Trade request successful.'

export default {
  layout: 'simple',

  validate({ store }) {
    if (!store.getters['trade/isActiveTrade']) {
      return false
    }
    if (!store.getters['trade/hasCreatedTrade']) {
      return false
    }
    if (!store.getters['trade/isPaid']) {
      return false
    }
    return true
  },

  components: {
    Trader
  },

  filters: {
    formatFilename(filename) {
      return truncate(filename, { length: 7 })
    }
  },

  data() {
    return {
      loading: false,
      idCard: {
        file: null,
        loading: false,
        url: null
      },
      selfie: {
        file: null,
        loading: false,
        url: null
      }
    }
  },

  computed: {
    ...mapState({
      cryptoAmount: state => state.trade.create.metadata.cryptoAmount,
      fiatAmount: state => state.trade.create.metadata.fiatAmount,
      currency: state => state.trade.create.currency,
      conversionRate: state => state.trade.create.conversionRate,
      tradeId: state => state.trade.create.metadata.id,
      pin: state => state.trade.create.metadata.pin
    }),

    shouldVerify() {
      let tradeAmount
      if (this.currency === 'USD') {
        tradeAmount = this.fiatAmount
      } else {
        tradeAmount = (this.fiatAmount / this.conversionRate.USD_NGN).toFixed(2)
      }
      return tradeAmount >= _TRADE_VERIFY_AMOUNT_CONDITION_
    },

    canSubmit() {
      return this.selfie.url && this.idCard.url
    }
  },

  head() {
    return {
      title: 'Buy - SenexPay'
    }
  },

  methods: {
    handleFileChange(event, type /* selfie or idCard */) {
      const files = event.target.files || event.dataTransfer.files
      if (!files) {
        return
      }
      this[type].file = files[0]
    },

    async _doUpload(type /* selfie or idCard */) {
      const fd = new FormData()
      fd.append('datafile', this[type].file)
      try {
        this[type].loading = true
        const resp = await this.$axios.post('/upload/', fd, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
        this[type].url = resp.data.datafile
      } catch (err) {
        this.$swal({
          title: 'Error:',
          type: 'error',
          position: 'top-end',
          text: _ERR_FILE_UPLOAD_,
          timer: 7 * 1000,
          toast: true,
          showConfirmButton: false
        })
      }
      this[type].loading = false
    },

    handleSelfieUpload() {
      this._doUpload('selfie')
    },

    handleIdCardUpload() {
      this._doUpload('idCard')
    },

    async handleSubmit() {
      if (!this.shouldVerify) {
        return this.requestTrade()
      }

      if (!this.selfie.url || !this.idCard.url) {
        this.$swal({
          title: '',
          type: 'info',
          position: 'top-end',
          text: _STR_REQUIRED_FIELDS_,
          timer: 5 * 1000,
          toast: true,
          showConfirmButton: false
        })
        return
      }

      try {
        const requestBody = {
          trade: this.tradeId,
          govtIssuedId: this.idCard.url,
          selfieWithId: this.selfie.url
        }
        this.loading = true
        await this.$axios.post(`/trade/${this.tradeId}/kyc/`, requestBody, {
          headers: {
            'content-type': 'application/x-www-form-urlencoded'
          }
        })
        this.requestTrade()
      } catch (err) {
        this.$swal({
          title: '',
          type: 'error',
          position: 'top-end',
          text: _ERR_KYC_UPDATE_,
          timer: 5 * 1000,
          toast: true,
          showConfirmButton: false
        })
      } finally {
        this.loading = false
      }
    },

    requestTrade() {
      const self = this
      const onClose = () => {
        self.$store.commit('trade/RESET_CREATE_TRADE')
        self.$router.replace({
          path: '/track'
        })
      }

      this.$swal({
        type: 'success',
        title: 'Trade Request Success',
        text: `${_STR_TRADE_REQUESTED_} Your trade ID is ${this.tradeId}`,
        footer: `Your trade pin is ${this.pin}`,
        onClose
      })
    }
  }
}
</script>
