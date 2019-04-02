<template>
  <div class="container wrapper">
    <p class="has-text-weight-semibold p-heading has-text-centered">
      Trade Status
      <span class="is-block has-text-centered has-text-weight-normal" style="font-size: 0.95rem; color: #d5d5d5;">
        Track status of your pending trade
      </span>
    </p>
    <div class="columns is-centered content-wrapper">
      <div class="column is-4 status-area">
        <div class="grey-header-area">
          <p class="status">
            <span v-if="tradeData.status === 'pending'">Pending</span>
            <span v-if="tradeData.status === 'paid'">Paid</span>
            <span v-if="tradeData.status === 'kyc_passed'">ID Verification</span>
            <span v-if="tradeData.status === 'disbursed'">Disbursement</span>
            <span v-if="tradeData.status === 'completed'">Complete</span>
          </p>
          <div class="progress-bar">
            <span
              class="percent"
              :class="{
                'percent-20': tradeData.status === 'pending',
                'percent-40': tradeData.status === 'paid',
                'percent-60': tradeData.status === 'kyc_passed',
                'percent-80': tradeData.status === 'disbursed',
                'percent-100': tradeData.status === 'completed'
              }"
            />
          </div>
        </div>
        <div class="content">
          <p class="brief">
            {{ tradeData.firstName }} {{ tradeData.lastName }},
            <span v-if="tradeData.type === 'buy'">Buying</span><span v-else>Selling</span> {{ tradeData.cryptoAmount }}BTC
          </p>
          <p>
            <span class="_title">Transaction amount</span>
            <span class="_item">
              {{ tradeData.fiatAmount|formatMoney('NGN') }}
            </span>
          </p>
          <p v-if="tradeData.walletAddress">
            <span class="_title">BTC Address</span>
            <span class="_item">
              {{ tradeData.walletAddress }}
            </span>
          </p>
          <p v-else>
            <span class="_title">Account Number</span>
            <span class="_item">
              {{ tradeData.accountNumber }}
            </span>
          </p>
          <p>
            <span class="_title">Payment Status</span>
            <span
              v-if="tradeData.status !== 'pending'"
              class="_item"
            >
              Paid
            </span>
            <span v-else>
              Pending
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
              <path d="M3.05176e-05 1H69" stroke="#0C5DB2" />
            </svg>
            <span>{{ tradeData.created|prettydate(true) }}</span>
          </p>
        </div>
      </div>
      <div class="column is-4 message-area">
        <div class="title-area columns is-mobile is-gapless">
          <div class="column is-3">
            <img src="~/assets/chat-support-message.png" alt="">
          </div>
          <div class="column is-9">
            <span class="text is-block">SenexPAY Support</span>
            <span v-if="tradeData.status === 'pending'" class="status is-block">
              Pending
            </span>
            <span v-else-if="tradeData.status === 'paid'" class="status is-block">
              Paid
            </span>
            <span v-else-if="tradeData.status === 'completed'" class="status is-block success">
              Completed
            </span>
            <span v-else-if="tradeData.status === 'disbursed'" class="status is-block">
              Disbursed
            </span>
            <span v-else-if="tradeData.status === 'kyc_passed'">
              KYC
            </span>
          </div>
        </div>
        <div class="chat-container">
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
        </div>

        <form class="send-input-container">
          <div class="field is-grouped">
            <p class="control is-expanded">
              <input
                v-model="messageText"
                v-validate="'required'"
                class="input"
                type="text"
                name="message text"
                placeholder="Type message"
              >
            </p>
            <p class="control">
              <button
                class="button is-info"
                :class="{'is-loading': sendingMessage}"
                @click.prevent="handleSendMessage"
              >
                Send
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import hd from 'human-date'
import formatMoney from '~/filters/format-money'

const _SEND_MESSAGE_ERROR_ = "Couldn't send message; try again"

export default {
  layout: 'blue',

  validate({ query, store }) {
    if (!query.trade_id) {
      return false
    }

    if (!store.state.trade.track.tradeId) {
      return false
    }

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
      sendingMessage: false
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

  methods: {
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/fonts.scss';

div.wrapper {
  min-height: 480px;
  margin-bottom: 3rem;
  margin-top: 2rem;
  font-family: $font-avenir;

  p.p-heading {
    color: #1b70cf;
    font-size: 1.7rem;
    margin-bottom: 1.5rem;
  }
}

.content-wrapper {
  $item-height: 350px;
  margin: 1rem 0;
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
        color: #1b70cf;
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
          background: #1b70cf;
          margin: 0;
          padding: 0;
          border-radius: inherit;
          &.percent-20 {
            width: 20%;
          }
          &.percent-40 {
            width: 40%;
          }
          &.percent-60 {
            width: 60%;
          }
          &.percent-80 {
            width: 80%;
          }
          &.percent-100 {
            width: 100%;
            background: #58c13d;
          }
        }
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      padding: 0.7rem 0.8rem 1rem 0.8rem;
      text-align: left;
      font-size: 0.8rem;
      p {
        margin: 0.3rem 0;
        span._title {
          display: block;
          color: #1b70cf;
          margin-bottom: 0.2rem;
        }
        span._item {
          display: block;
          color: #d5d5d5;
          word-wrap: break-word;
        }
      }
      .brief {
        border-bottom: 1px solid #0c5db2;
        padding-bottom: 0.3rem;
        color: #1b70cf;
      }
      .date {
        color: #1b70cf;
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
        line-height: 1;
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
        background: #0c5db2;
      }
    }
  }
}

.success {
  color: #58c13d;
}
</style>
