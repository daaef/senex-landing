<template>
  <section class="download--app">
    <div class="container">
      <div class="down--app-banner">
        <div
          class="download--message md:text-center sm:text-left lg:text-left"
          data-aos="fade"
          data-aos-once="true"
        >
          <h3>
            Download the
            <br />mobile app
          </h3>
          <p>Get smarter and faster access right on your mobile phone.</p>
          <div
            class="cto--btns md:justify-center sm:justify-start lg:justify-start"
          >
            <a
              target="_blank"
              href="https://apps.apple.com/us/app/senexpay-trade-bitcoin-usdt/id1627864145"
            >
              <img
                src="~/assets/img/apple_logo_appstore.svg"
                alt="Apple Logo"
              />
              <span> App Store </span>
            </a>
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.senexpay.mobile&hl=en&gl=NG"
            >
              <img
                src="~/assets/img/googleplay_logo_playstore.svg"
                alt="Google Play Logo"
              />
              <span> Google Play </span>
            </a>
          </div>
        </div>
        <div class="app--image" data-aos="fade-up" data-aos-once="true">
          <img
            src="/img/app--bubble.png"
            class="app--bubble1"
            alt="App Bubble"
          />
          <img
            src="/img/app--bubble.png"
            class="app--bubble2"
            alt="App Bubble"
          />
          <img
            src="/img/app--bubble.png"
            class="app--bubble3"
            alt="App Bubble"
          />
          <img class="app--screens" src="/img/app-image.png" alt="App Image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DownloadApp'
}
</script>

<style lang="scss">
.download--app {
  padding: 100px 0;
  background: #e8f0fc;
  .down--app-banner {
    background: transparent linear-gradient(116deg, #1265fb 0%, #5237e0 100%);
    padding-left: 60px;
    padding-right: 60px;
    border-radius: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .download--message {
      width: 60%;
      h3 {
        font-size: 4.5rem;
        color: #ffffff;
        font-weight: bold;
        line-height: 1.2em;
        br {
          display: none;
        }
        @media (max-width: 767px) {
          font-size: 3.8rem;
        }
        @media (max-width: 450px) {
          font-size: 4.3rem;
          br {
            display: block;
          }
        }
      }
      p {
        font-size: 1.9rem;
        color: #ffffff;
        @media (max-width: 450px) {
          font-size: 2.2rem;
        }
      }
      a {
        align-items: center;
        &:hover {
          background: transparent
            linear-gradient(109deg, #1265fb 0%, #00ffff 100%);
        }
      }
    }
    .app--image {
      padding-top: 100px;
      width: 40%;
      position: relative;
      max-width: 450px;
      .app--screens {
        width: 100%;
        height: 90%;
        object-fit: contain;
        position: relative;
        object-position: bottom;
      }
      .app--bubble1 {
        position: absolute;
        top: 60px;
        left: 35px;
        height: 140px;
      }
      .app--bubble2 {
        position: absolute;
        bottom: 60px;
        left: -20px;
        height: 70px;
      }
      .app--bubble3 {
        position: absolute;
        bottom: 80px;
        right: -20px;
        height: 140px;
      }
    }
    @media only screen and (max-width: 64em) {
      & {
        padding-top: 50px;
      }
      .app--image,
      .download--message {
        width: 100%;
      }
    }
    @media only screen and (max-width: 37.5em) {
      .download--message {
        .cto--btns {
          align-items: center;
          //justify-content: center;
          a {
            align-items: center;
            //width: calc(50% - 5px);
            //padding: 10px;
            justify-content: center;
            margin: 0;
            span {
              font-size: 1.6rem;
            }
            &:first-of-type {
              margin-right: 5px;
            }
            &:last-of-type {
              margin-left: 5px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 450px) {
  .download--app {
    .down--app-banner {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  .download--app .down--app-banner .download--message p {
    margin-top: 10px;
  }
}
</style>
