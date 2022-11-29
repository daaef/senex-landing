<template>
  <section class="bottom--sect">
    <div class="container">
      <div class="meta--info">
        <h3 data-aos="fade-right" data-aos-once="true">Section title</h3>
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
            src="/wallet1.png"
            class="app--screen"
            alt="App screen"
          />
          <img src="/wall-arr1.png" alt="wallet arrow 1" class="arrow--1" />
        </div>
      </div>
    </div>
    <div class="container sect--2">
      <div class="meta--img">
        <div class="meta--container">
          <img
            data-aos="fade-right"
            data-aos-once="true"
            src="/wallet2.png"
            class="app--screen"
            alt="App screen"
          />
          <img src="/wall-arr2.png" alt="wallet arrow 1" class="arrow--2" />
        </div>
      </div>
      <div class="meta--info">
        <h3 data-aos="fade-left" data-aos-once="true">Section title</h3>
        <p data-aos="fade-left" data-aos-once="true">
          Our fast payout is why people trust us. Skip the long waits and join
          the cool people who use SenexPay to buy and sell cryptocurrency
          everyday.
        </p>
      </div>
    </div>
    <div class="container">
      <div class="meta--info">
        <h3 data-aos="fade-right" data-aos-once="true">Section title</h3>
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
            src="/wallet3.png"
            class="app--screen"
            alt="App screen"
          />
          <img src="/wall-arr3.png" alt="wallet arrow 1" class="arrow--3" />
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
