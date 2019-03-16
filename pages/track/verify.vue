<template>
  <div class="container wrapper">
    <p class="has-text-weight-semibold p-heading has-text-centered">
      Trade Status
      <span class="is-block has-text-centered has-text-weight-normal" style="font-size: 0.95rem; color: #d5d5d5;">Track status of your pending trade</span>
    </p>
    <div class="columns is-centered content-wrapper">
      <div class="column is-one-fifth status-area">
        <div class="grey-header-area">
          <p class="status">
            Verifying ID
          </p>
          <div class="progress-bar">
            <span class="percent" />
          </div>
        </div>
        <div class="content">
          <p class="brief">
            Bruce Wayne, Buying 0.0025BTC
          </p>
          <p>
            <span class="_title">BTC Address</span>
            <span class="_item">
              5151dc5sdc5sd2c51sd515c26s2d62csd...
            </span>
          </p>
          <p>
            <span class="_title">Payment Status</span>
            <span class="_item">Paid</span>
          </p>

          <p class="date">
            <svg
              width="80"
              height="2"
              style="vertical-align: middle"
              viewBox="0 0 69 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.05176e-05 1H69" stroke="#0C5DB2" />
            </svg>
            <span>Tue, 24, Feb, 2018</span>
          </p>
        </div>
      </div>
      <div class="column is-one-fifth message-area">
        <div class="title-area columns is-mobile is-gapless">
          <div class="column is-3">
            <img src="~/assets/chat-support-message.png" alt="">
          </div>
          <div class="column is-9">
            <span class="text is-block">SenexPAY Support</span>
            <span class="status success is-block">Success</span>
          </div>
        </div>
        <div class="chat-container">
          <div class="chat chat-sent">
            Can’t i make an urgent request about my trade?
            <p class="time-info">
              <span class="name">Bruce - </span>
              12:15pm
            </p>
          </div>
          <div class="chat chat-received">
            Hello, How can i help you?
            <p class="time-info">
              <span class="name">Admin - </span>
              12:19pm
            </p>
          </div>
          <div class="chat chat-sent">
            Can’t i make an urgent request about my trade?
            <p class="time-info">
              <span class="name">Bruce - </span>
              1:00pm
            </p>
          </div>
        </div>

        <div class="send-input-container">
          <div class="field is-grouped">
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="Send message">
            </p>
            <p class="control">
              <a class="button is-info">
                Send
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blue'
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
  $item-height: 290px;
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
          width: 69%;
          text-align: left;
          height: inherit;
          background: #1b70cf;
          margin: 0;
          padding: 0;
          border-radius: inherit;
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
      height: 65%;
      width: 100%;
      margin: 0;
      overflow: auto;
      .chat {
        font-size: 0.7rem;
        line-height: 1;
        width: 80%;
        height: auto;
        padding: 0.3rem;
        color: #4b4b4b;
        border-radius: 6px;
        margin: 0.4rem 0;
      }
      .chat-sent {
        background: #abcaeb;
        float: right;
        .time-info {
          margin-top: 0.65rem;
          font-weight: 500;
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
          margin-top: 0.65rem;
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
</style>
