<template>
  <section class="section">
    <div class="container wrapper">
      <p class="has-text-weight-semibold p-heading has-text-centered">
        Trade Lookup
        <span class="is-block has-text-centered has-text-weight-normal" style="font-size: 0.95rem; color: #162e55;">
          Quickly track and manage your transaction
        </span>
      </p>
      <div class="columns is-centered content-wrapper">
        <div class="column is-4 status-area" :style="$device.isMobile ? 'margin-bottom: 1.5rem;' : ''">
          <div class="grey-header-area">
            <p class="status">
              <span v-if="tradeData.status === 'pending'">Pending</span>
              <span v-if="tradeData.status === 'paid'">Paid</span>
              <span v-if="tradeData.status === 'kyc_passed'">KYC Approved</span>
              <span v-if="tradeData.status === 'disbursed'">Disbursed</span>
              <span v-if="tradeData.status === 'completed'">Complete</span>
              <span v-if="tradeData.status === 'expired'">Expired</span>
            </p>
            <div class="progress-bar">
              <span
                class="percent"
                :class="{
                  'percent-20': tradeData.status === 'pending',
                  'percent-40': tradeData.status === 'paid',
                  'percent-60': tradeData.status === 'kyc_passed',
                  'percent-80': tradeData.status === 'disbursed',
                  'percent-100': tradeData.status === 'completed',
                  'percent-101': tradeData.status === 'expired'
                }"
              />
            </div>
          </div>
          <div class="content">
            <p class="brief">
              {{ tradeData.firstName }} {{ tradeData.lastName }},
              <span v-if="tradeData.type === 'buy'">Buying</span><span v-else>Selling</span> <b>{{ tradeData.cryptoAmount }}</b>BTC
            </p>
            <p>
              <span class="_title">{{ tradeData.type == 'buy' ? 'We Receive' : 'Your are Paid' }}</span>
              <span class="_item">
                <b>{{ tradeData.fiatAmount|formatMoney('NGN') }}</b>
              </span>
            </p>
            <p v-if="tradeData.walletAddress">
              <span class="_title">Payout to Wallet</span>
              <span class="_item">
                {{ tradeData.walletAddress }}
              </span>
            </p>
            <p v-else>
              <span class="_title">Deposit to Bank</span>
              <span class="_item">
                {{ tradeData.accountNumber }}
              </span>
            </p>
            <p>
              <span class="_title">KYC Status</span>
              <span v-if="tradeData.isKyc" class="_item">
                <span v-if="tradeData.kyc !== null">
                  {{ tradeData.kyc.status === 'failed' ? 'Declined, please re-upload documents' : tradeData.kyc.status }}
                </span>
                <span class="has-text-danger">
                  Please upload documents below!
                </span>
              </span>
              <span v-else class="_item">
                No ID required.
              </span>
            </p>

            <p class="date">
              <svg
                width="100"
                height="2"
                style="vertical-align: middle"
                viewBox="0 0 69 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.05176e-05 1H69" stroke="#162e55" />
              </svg>
              <span>{{ tradeData.created|prettydate(true) }}</span>
            </p>
            <div v-if="tradeData.isKyc">
              <div v-if="tradeData.kyc == null || tradeData.kyc.status == 'failed'" class="field is-grouped is-grouped-multiline" style="padding-top: 10px;">
                <div class="control">
                  <div class="tags has-addons" style="cursor:pointer;" @click="$refs.idBrowse.click()">
                    <span class="tag is-dark is-medium">Govt. ID</span>
                    <span class="tag is-medium" :class="{ 'is-info': !upload1, 'is-success': upload1 }"><i class="fas" :class="{ 'fa-file-upload': !upload1, 'fa-check-circle': upload1 }" /></span>
                    <input
                      ref="idBrowse"
                      class="file-input"
                      type="file"
                      accept="image/*"
                      name="idcard"
                      hidden
                      @change="uploadDoc($event, 'idCard')"
                    >
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons" style="cursor:pointer;" @click="$refs.selfieBrowse.click()">
                    <span class="tag is-dark is-medium">Selfie</span>
                    <span class="tag is-medium" :class="{ 'is-info': !upload2, 'is-success': upload2 }"><i class="fas" :class="{ 'fa-file-upload': !upload2, 'fa-check-circle': upload2 }" /></span>
                    <input
                      ref="selfieBrowse"
                      class="file-input"
                      type="file"
                      accept="image/*"
                      name="selfie"
                      hidden
                      @change="uploadDoc($event, 'selfie')"
                    >     
                  </div>
                </div>
                <div class="control">
                  <button
                    class="button is-info"
                    :class="{'is-loading': loading}"
                    :disabled="!canSave"
                    @click.prevent="saveDoc"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div><br><br>
        <div class="column is-4 message-area" :style="$device.isMobile ? 'margin-top: 1.5rem;' : ''">
          <div class="title-area columns is-mobile is-gapless">
            <div class="column is-3">
              <img src="~/assets/chat-support-message.png" alt="">
            </div>
            <div class="column is-9">
              <span class="text is-block">SenexPAY Support</span>
              <span class="status is-block">
                <i class="fas fa-users" /> Closed
              </span>
            </div>
          </div>
          <!-- <div class="chat-container">
            <div
              v-for="message in messages"
              :key="message.id"
              class="chat"
              :class="{'chat-sent': !message.admin, 'chat-received': message.admin}"
            >
              {{ message.body }}
              <p class="time-info">
                <span v-if="!message.admin" class="name">You - </span>
                <span v-else class="name">Admin - </span>
                {{ message.created|prettydate }}
              </p>
            </div>
          </div> -->
          <div class="chat-container">
            <div class="chat chat-received">
              <p>
                Hi {{ tradeData.firstName }},<br>
                This chatbox is currently deactivated. 
                Kindly lay your complaints using our live chat by clicking the button below.
              </p>
              <p class="time-info">
                <span class="name">Agent - </span>
                A short while ago
              </p>
            </div>
          </div>

          <form class="send-input-container">
            <div class="field is-grouped">
              <!-- <p class="control is-expanded">
                <input
                  v-model="messageText"
                  v-validate="'required'"
                  class="input"
                  type="text"
                  name="message text"
                  placeholder="Type message"
                >
              </p> -->
            </div>
            <p class="control">
              <button
                class="button is-info is-fullwidth"
                :class="{'is-loading': sendingMessage}"
                @click.prevent="openLiveChat()"
              >
                Open live chat !
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import hd from 'human-date'
import log from '~/logger'
import formatMoney from '~/filters/format-money'

const _SEND_MESSAGE_ERROR_ = "Couldn't send message; try again"
const _ERR_FILE_UPLOAD_ = 'Failed to upload; try again'
const _SUC_FILE_UPLOAD_ = 'Document uploaded'

export default {
  layout: 'blue',

  validate({ query, store }) {
    if (!query.trade_id) {
      return false
    }

    // if (!store.state.trade.track.tradeId) {
    //   return false
    // }

    return true
  },

  filters: {
    formatMoney,
    prettydate(dateStr, showTime = true) {
      return hd.prettyPrint(dateStr, { showTime })
    }
  },

  data() {
    return {
      messageText: '',
      sendingMessage: false,
      clms: null,
      cltr: null,
      doc1: null,
      upload1: false,
      doc2: null,
      upload2: false,
      loading: false
    }
  },

  computed: {
    canSave() {
      return this.doc1 && this.doc2
    }
  },

  async asyncData({ query, app: { $axios } }) {
    const [tradeResp, messageResp] = await Promise.all([
      $axios.get(`/trade/${query.trade_id}/`),
      $axios.get(`/trade/${query.trade_id}/messages/`)
    ])

    return {
      tradeData: tradeResp.data,
      messages: messageResp.data.sort((a, b) => a.id - b.id)
    }
  },

  mounted() {
    this.cltr = setInterval(this.polldTrade, 15000)
    // this.clms = setInterval(this.pollMessages, 4000)
  },
  beforeDestroy() {
    clearInterval(this.cltr)
    // clearInterval(this.clms)
  },

  methods: {
    async polldTrade() {
      try {
        const response = await this.$axios.get(`/trade/${this.query.trade_id}/`)
        this.tradeData = response.data
      } catch (e) {
        // const errors = e
        log.debug(`[error] /track/verify ${JSON.stringify(e)}`)
      }
    },
    async pollMessages() {
      try {
        const response = await this.$axios.get(
          `/trade/${this.query.trade_id}/messages/`
        )
        this.messageResp = response.data.sort((a, b) => a.id - b.id)
      } catch (e) {
        // const errors = e
        log.debug(`[error] /track/verify ${JSON.stringify(e)}`)
      }
    },
    async handleSendMessage() {
      console.log(JSON.stringify(this.tradeData)) // eslint-disable-line
      const validated = await this.$validator.validateAll()
      if (validated) {
        try {
          const payload = {
            body: this.messageText,
            trade: this.tradeData.id
          }
          this.sendingMessage = true
          const resp = await this.$axios.post(
            `/trade/${this.tradeData.id}/messages/`,
            payload
          )
          this.messages.push(resp.data)
        } catch (err) {
          this.$swal({
            title: 'Error:',
            type: 'error',
            position: 'top-end',
            text: _SEND_MESSAGE_ERROR_,
            timer: 7 * 1000,
            toast: true,
            showConfirmButton: false
          })
        } finally {
          this.sendingMessage = false
          this.messageText = ''
        }
      }
    },
    async uploadDoc(e, fileType) {
      // fileType === 'idCard' ? (this.upload1 = true) : (this.upload2 = true)
      const files = e.target.files || e.dataTransfer.files
      if (files.length === 0) return
      const formData = new FormData()
      formData.append('datafile', files[0])
      try {
        const resp = await this.$axios.post('/upload/', formData, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
        /*
        const requestBody = {
          trade: this.tradeData.id
        }
        fileType === 'idCard'
          ? (requestBody.govtIssuedId = resp.data.datafile)
          : (requestBody.selfieWithId = resp.data.datafile)

        await this.$axios.put(`/trade/${requestBody.trade}/kyc/`, requestBody)
        */
        fileType === 'idCard'
          ? (this.doc1 = resp.data.datafile)((this.upload1 = true))
          : (this.doc2 = resp.data.datafile)((this.upload2 = true))

        this.$swal({
          title: 'Document uploaded',
          type: 'success',
          position: 'top-end',
          text: _SUC_FILE_UPLOAD_,
          timer: 7 * 1000,
          toast: true,
          showConfirmButton: false
        })
      } catch (e) {
        if (e && e.response) {
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
      } finally {
        // this.$nuxt.$loading.finish()
      }
    },
    async saveDoc() {
      try {
        const requestBody = {
          trade: this.tradeData.id,
          govtIssuedId: this.doc1,
          selfieWithId: this.doc2
        }
        await this.$axios.put(`/trade/${requestBody.trade}/kyc/`, requestBody)
        this.polldTrade()

        this.$swal({
          title: 'Saved:',
          type: 'success',
          position: 'top-end',
          text: _SUC_FILE_UPLOAD_,
          timer: 7 * 1000,
          toast: true,
          showConfirmButton: false
        })
      } catch (e) {
        if (e && e.response) {
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
      }
    },
    openLiveChat() {
      window.Tawk_API.maximize()
      // this.sendingMessage = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/fonts.scss';

div.wrapper {
  min-height: 580px;
  margin-bottom: 3rem;
  margin-top: 3rem;
  font-family: $font-inter;

  p.p-heading {
    color: #162e55;
    font-size: 1.7rem;
    margin-bottom: 1.5rem;
  }
}

.content-wrapper {
  $item-height: auto;
  // margin: 1rem 0;
  .status-area,
  .message-area {
    height: $item-height;
  }

  .status-area {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.161);
    border-radius: 10px;
    margin-right: 1rem;
    padding: 0;
    text-align: center;
    .grey-header-area {
      background: #fbfbfb;
      border-bottom: rgba(0, 0, 0, 0.161);
      text-align: center;
      padding: 0.9rem 0;
      .status {
        color: #162e55;
        font-size: 1.159rem;
      }
      .progress-bar {
        width: 70%;
        background: #f5f5f5;
        height: 15px;
        border-radius: 10px;
        margin: 0 auto;
        margin-top: 6px;
        padding: 0;
        text-align: left;
        .percent {
          display: inline-block;
          text-align: left;
          height: inherit;
          background: #162e55;
          margin: 0;
          padding: 0;
          border-radius: inherit;
          &.percent-20 {
            width: 20%;
          }
          &.percent-40 {
            width: 40%;
            background: #00d1b1;
          }
          &.percent-60 {
            width: 60%;
          }
          &.percent-80 {
            width: 80%;
            background: #fedd56;
          }
          &.percent-100 {
            width: 100%;
            background: #58c13d;
          }
          &.percent-101 {
            width: 100%;
            background: #fe385f;
          }
        }
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      padding: 0.7rem 0.8rem 1rem 0.8rem;
      text-align: left;
      font-size: 0.95rem;
      background: #fff;
      p {
        margin: 0.3rem 0;
        span._title {
          display: block;
          color: #162e55;
          margin-bottom: 0.2rem;
        }
        span._item {
          display: block;
          color: #838383;
          word-wrap: break-word;
        }
      }
      .brief {
        border-bottom: 1px solid #162e55;
        padding-bottom: 0.3rem;
        color: #162e55;
      }
      .date {
        color: #162e55;
      }
      .button {
        font-size: 0.92rem;
        color: #ffffff;
        background: #162e55;
      }
    }
  }

  .message-area {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.161);
    border-radius: 10px;
    background: #fbfbfb;
    padding: 0.84rem 0.5rem;
    .title-area {
      margin: 0;
      padding: 0;
      img {
        height: 40px;
        width: 40px;
      }
      .text {
        font-size: 0.9rem;
        font-weight: 500;
      }
      .status {
        font-size: 0.7rem;
      }
    }
    .chat-container {
      background: #ffffff;
      border-radius: 6px;
      padding: 0.2rem 0.1rem;
      height: 70%;
      width: 100%;
      margin: 0;
      overflow: auto;
      .chat {
        font-size: 0.95rem;
        line-height: 1.3;
        width: 80%;
        height: auto;
        padding: 0.3rem;
        color: #4b4b4b;
        border-radius: 6px;
        padding: 0.4rem;
        margin: 0.4rem 0;
      }
      .chat-sent {
        background: #abcaeb;
        float: right;
        .time-info {
          font-size: 0.7rem;
          margin-top: 0.7rem;
          font-weight: 500;
          padding-top: 0.8rem;
          float: right;
          .name {
            font-weight: normal;
          }
        }
      }
      .chat-received {
        background: #f4f4f4;
        float: left;
        .time-info {
          font-size: 0.7rem;
          margin-top: 0.7rem;
          font-weight: 500;
          float: left;
          .name {
            font-weight: normal;
          }
        }
      }
    }

    .send-input-container {
      margin: 1rem 0 auto;
      input {
        font-size: 0.8rem;
        border-radius: 12px;
      }
      .button {
        font-size: 0.8rem;
        border-radius: 12px;
        color: #ffffff;
        background: #162e55;
      }
    }
  }
}

.success {
  color: #58c13d;
}
</style>
