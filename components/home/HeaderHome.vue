<template>
  <header>
    <NavBar
      uk-sticky="offset: 0; show-on-up: true; animation: uk-animation-slide-top"
      :theme="{
        backgroundColor: 'transparent',
        color: '#fafafa',
        lightTheme: true
      }"
    />
    <div class="header--content container">
      <div class="header--cto">
        <h2>
          Trade and save <span class="gradient--text">crypto</span> <br />with
          no hassle.
        </h2>
        <p>Buy, exchange and save crypto assets using our wallet feature</p>
        <div class="cto--btns">
          <a
            class="cto--btn"
            target="_blank"
            href="https://apps.apple.com/us/app/senexpay-trade-bitcoin-usdt/id1627864145"
          >
            <img src="~/assets/img/apple_logo_appstore.svg" alt="Apple Logo" />
            <span> App Store </span>
          </a>
          <a
            class="cto--btn"
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.senexpay.mobile&hl=en&gl=NG"
          >
            <img
              src="~/assets/img/googleplay_logo_playstore.svg"
              alt="Google Play Logo"
            />
            <span> Google Play </span>
          </a>
          <a class="qr-code--btn" href="#" @click.prevent="qrActive = true">
            <img class="qr-img" src="~/assets/img/qrcode.svg" alt="QR-Code" />
          </a>
          <div class="qrcode--scan items-center">
            <QrBtn />
          </div>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-once="true" class="header--media">
        <div class="img--set">
          <img src="/phone-img.png" alt="Home screen image" />
        </div>
        <!--        <div class="img&#45;&#45;left">
          <img src="~/assets/img/phone.png" alt="Home screen image" />
        </div>
        <div class="img&#45;&#45;group-right">
          <img src="~/assets/img/dashboard_widget1.png" alt="Dash Widget 1" />
          <img src="~/assets/img/dashboard_widget2.png" alt="Dash Widget 2" />
          <div class="widget&#45;&#45;span">
            <a href="#">
              <svg
                id="Layer_1"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 186 61"
                style="enable-background: new 0 0 186 61"
                xml:space="preserve"
              >
                <filter
                  id="Rectangle_979"
                  filterUnits="userSpaceOnUse"
                  height="181"
                  width="306"
                  x="0"
                  y="0"
                >
                  <feOffset dy="10" input="SourceAlpha"></feOffset>
                  <feGaussianBlur
                    result="blur"
                    stdDeviation="20"
                  ></feGaussianBlur>
                  <feFlood
                    flood-color="#064EBE"
                    flood-opacity="0.392"
                  ></feFlood>
                  <feComposite in2="blur" operator="in"></feComposite>
                  <feComposite in="SourceGraphic" operator="over"></feComposite>
                </filter>
                <g id="Group_1008" transform="translate(60 49.942)">
                  <g transform="matrix(1, 0, 0, 1, -60, -49.94)" class="st0">
                    <path
                      id="Rectangle_979-2_00000060019377272759623760000014539006692449735861_"
                      class="st1"
                      d="M20,0h146c11,0,20,9,20,20v21
							  c0,11-9,20-20,20H20C9,61,0,52,0,41V20C0,9,9,0,20,0z"
                    />
                  </g>
                  <path
                    id="Rectangle_981"
                    class="st2"
                    d="M-31-36.9h16c5.5,0,10,4.5,10,10v15c0,5.5-4.5,10-10,10h-16c-5.5,0-10-4.5-10-10v-15
						  C-41-32.5-36.5-36.9-31-36.9z"
                  />
                  <path
                    id="Icon_feather-star"
                    class="st3"
                    d="M-23.1-28.3l2.9,5.9l6.5,0.9l-4.7,4.6l1.1,6.5l-5.8-3.1l-5.8,3.1l1.1-6.5l-4.7-4.6
						  l6.5-0.9L-23.1-28.3z"
                  />
                </g>
                <text transform="matrix(1 0 0 1 66.8903 36)" class="st4 st5">
                  Easy to use
                </text>
              </svg>
            </a>
            <a href="#">
              <svg
                id="Layer_2"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 185 61"
                style="enable-background: new 0 0 185 61"
                xml:space="preserve"
              >
                <filter
                  id="Rectangle_979"
                  filterUnits="userSpaceOnUse"
                  height="181"
                  width="305"
                  x="0"
                  y="0"
                >
                  <feOffset dy="10" input="SourceAlpha"></feOffset>
                  <feGaussianBlur
                    result="blur"
                    stdDeviation="20"
                  ></feGaussianBlur>
                  <feFlood
                    flood-color="#064EBE"
                    flood-opacity="0.392"
                  ></feFlood>
                  <feComposite in2="blur" operator="in"></feComposite>
                  <feComposite in="SourceGraphic" operator="over"></feComposite>
                </filter>
                <g id="Group_1009" transform="translate(59.859 49.942)">
                  <g transform="matrix(1, 0, 0, 1, -59.86, -49.94)" class="st0">
                    <path
                      id="Rectangle_979-2_00000182488001545746329090000009219618859169814408_"
                      class="st1"
                      d="M20,0h145c11,0,20,9,20,20v21
						  c0,11-9,20-20,20H20C9,61,0,52,0,41V20C0,9,9,0,20,0z"
                    />
                  </g>
                  <path
                    id="Rectangle_981"
                    class="st2"
                    d="M-30.9-36.9h16c5.5,0,10,4.5,10,10v15c0,5.5-4.5,10-10,10h-16c-5.5,0-10-4.5-10-10v-15
					  C-40.9-32.5-36.4-36.9-30.9-36.9z"
                  />
                  <g id="Group_857" transform="translate(29.15 23.053)">
                    <path
                      id="Icon_feather-check"
                      class="st3"
                      d="M-45.1-50l-10.2,10.2l-4.7-4.7"
                    />
                    <path
                      id="Icon_feather-check-2"
                      class="st3"
                      d="M-45.1-44.9l-10.2,10.2l-4.7-4.7"
                    />
                  </g>
                </g>
                <text
                  transform="matrix(1 0 0 1 68.9131 35.239)"
                  class="st4 st5"
                >
                  Swift Payout
                </text>
              </svg>
            </a>
          </div>
        </div>-->
      </div>
    </div>
    <div class="qrcode--scan--sidebar" :class="qrActive ? 'active' : ''">
      <label
        id="toggle"
        class="toggler opened"
        @click.prevent="qrActive = false"
      >
        <span class="one"></span>
        <span class="two"></span>
        <span class="three"></span>
      </label>
      <QrBtn />
    </div>
  </header>
</template>

<script>
import QrBtn from '~/components/home/QrBtn'
export default {
  name: 'HeaderHome',
  components: { QrBtn },
  data() {
    return {
      qrActive: false,
      qr: `https://onelink.to/xd462s`
    }
  }
}
</script>

<style lang="scss">
.header--content {
  .cto--btns {
    position: relative;
    align-items: center;
    .qrcode--scan {
      position: absolute;
      background: transparent linear-gradient(112deg, #064ebe 0%, #5237e0 100%);
      box-shadow: 0px 5px 20px #00000080;
      border: 5px solid #ffffff;
      border-radius: 22px;
      padding: 20px;
      top: 0;
      right: 0;
      display: flex;
      transition: 0.3s 0.2s ease-in-out;
      transform: scale(0) translate(100px, -100%);
      z-index: 10;
      transform-origin: top right;
      .qr--content {
        display: flex;
        align-items: center;
      }
      .qr-code--btn {
        margin-left: 0;
        .qr-img {
          img {
            height: 100px;
            width: 100px;
          }
        }
      }
      .qr--code-text {
        margin-left: 20px;
        .heading-1 {
          font-size: 2rem;
          color: #fafafa;
          font-weight: bold;
        }
        .paragraph {
          font-size: 1.8rem;
          color: #fafafa;
        }
      }
    }
    .qr-code--btn {
      padding: 7px;
      border-radius: 8px;
      background: #064ebe;
      margin-left: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 1140px) {
        border-radius: 3px;
        padding: 5px;
      }
      @media (max-width: 400px) {
        padding: 7px;
        margin-left: 0;
      }
      img {
        height: 40.9744px;
        width: 40.9744px;
        @media (max-width: 1140px) {
          height: 30px;
          width: 30px;
        }
      }

      @media (min-width: 1141px) {
        &:hover {
          & ~ .qrcode--scan {
            display: flex;
            transform: scale(1) translate(100px, -100%);
            z-index: 10;
            transition: 0.3s ease-in-out;
          }
        }
      }
    }
    @media (max-width: 500px) {
      justify-content: flex-start;
      .qr-code--btn {
        margin-left: 10px;
      }
      .cto--btn {
        padding: 12px 20px;
        span {
          font-size: 1.7rem;
        }
      }
    }
    @media (max-width: 400px) {
      .qr-code--btn {
        margin-left: 5px;
        padding: 4.5px;
        .qr-img {
          height: 23px;
          width: 23px;
        }
      }
      .cto--btn {
        padding: 8px 16px;
      }
    }
  }
}
.header--media {
  .img--set {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
.st0 {
  filter: url(#Rectangle_979);
}
.st1 {
  fill: #ffffff;
}
.st2 {
  fill: #05bf4c;
}
.st3 {
  fill: none;
  stroke: #ffffff;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.st4 {
  font-family: 'SF Pro', sans-serif;
  font-size: 1.5rem;
  @media (max-width: 767px) {
    font-size: 1.9rem;
  }
  @media (max-width: 450px) {
    font-size: 2.1rem;
  }
}
#Layer_1 {
  .st0 {
    filter: url(#Rectangle_979);
  }
  .st1 {
    fill: #ffffff;
  }
  .st2 {
    fill: #fc5286;
  }
  .st3 {
    fill: none;
    stroke: #ffffff;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .st4 {
    font-family: 'SF Pro', sans-serif;
    font-size: 1.5rem;
    @media (max-width: 767px) {
      font-size: 1.9rem;
    }
    @media (max-width: 450px) {
      font-size: 2.1rem;
    }
  }
}
.qrcode--scan--sidebar {
  .toggler {
    position: absolute;
  }
  display: none;
}
@media (max-width: 1040px) {
  /*.testimonial-carousel {
    .slick-list {
      .slick-slide {
        width: 300px !important;
      }
    }
  }*/
  .qrcode--scan--sidebar {
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
    background: #041d45;
    transform: translateX(-100%);
    transform-origin: top left;
    border: none;
    box-shadow: none;
    min-height: 100vh;
    min-width: 100%;
    z-index: 1000000000;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: 0.2s ease-in-out;
    &.active {
      transform: translateX(0);
    }
    .qr--content {
      background: transparent linear-gradient(112deg, #064ebe 0%, #5237e0 100%);
      box-shadow: 0 5px 20px #00000080;
      border: 5px solid #ffffff;
      border-radius: 22px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .qr-code--btn {
        padding: 10px;
        border-radius: 10px;
        background: #fafafa;
        margin-bottom: 30px;
        display: inline-block;
        .qr-img {
          img {
            height: 150px;
            width: 150px;
          }
        }
      }
      span {
        line-height: 1.2em;
      }
      .qr--code-text {
        display: inline-block;
        .heading-1 {
          font-size: 2.5rem;
          color: #fafafa;
          font-weight: bold;
        }
        .paragraph {
          font-size: 2.1rem;
          color: #fafafa;
        }
      }
    }
  }
}
</style>
