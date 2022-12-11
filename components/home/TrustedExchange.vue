<template>
  <section class="bottom--sect">
    <div class="container">
      <div class="meta--info">
        <h3 data-aos="fade-right" data-aos-once="true">
          Effective transactions from anywhere
        </h3>
        <p data-aos="fade-right" data-aos-once="true">
          Our fast payout is why people trust us. Skip the long waits and join
          the cool people who use SenexPay to buy and sell cryptocurrency
          everyday.
        </p>
      </div>
      <div class="meta--img">
        <div class="meta--container">
          <img
            data-aos="fade-left"
            data-aos-once="true"
            src="~/assets/img/App_screen2.png"
            class="app--screen"
            alt="App screen"
          />
          <div class="country--bubbles">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              src="~/assets/img/nigeria_bubble.svg"
              class="bubble"
              alt="Nigeria Bubble"
            />
            <img
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="200"
              src="~/assets/img/southafrica_bubble.svg"
              class="bubble"
              alt="SA Bubble"
            />
            <img
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
              src="~/assets/img/ghana_bubble.svg"
              class="bubble"
              alt="Ghana Bubble"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TrustedExchange'
}
</script>

<style lang="scss">
.bottom--sect {
  .container {
    &.sect--2 {
      .meta--img {
        justify-content: flex-start;
        padding-right: 60px;
        padding-left: 0;
      }
    }

    .meta--img {
      .meta--container {
        .arrow--1 {
          position: absolute;
          top: 0;
          left: 0;
          transform: translate(-65%, 25%);
          z-index: 3;
        }
        .arrow--2 {
          position: absolute;
          top: 0;
          right: 0;
          transform: translate(50%, -50%);
          z-index: 3;
        }
        .arrow--3 {
          position: absolute;
          top: 0;
          right: 0;
          transform: translate(-100%, -20%);
          z-index: 3;
        }
      }
    }
  }
}
</style>
