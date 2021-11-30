<template>
  <div class="container">
    <div class="our-obsession">
      <div class="our-obsession__box">
        <img
          src="/img/blue-semi-circles.svg"
          alt="Circles"
          class="our-obsession__circle"
        />
        <img
          src="/img/btc.svg"
          alt="Bitcoin"
          class="our-obsession__coin our-obsession__coin--btc"
        />
        <img
          src="/img/t-coin.svg"
          alt="USDT"
          class="our-obsession__coin our-obsession__coin--t-coin"
        />
        <h3 class="our-obsession__heading">
          We are obsessed with making crypto easy for everyone!
        </h3>
        <span class="our-obsession__text"
          >Buy and sell Bitcoin and USDT easy and fast without hassles. It’s
          never been easier.</span
        >
        <a
          :href="appLink + '/create-account'"
          class="btn our-obsession__register-btn"
          rel="noopener"
          >Buy/Sell Crypto</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appLink: ''
    }
  },
  mounted() {
    this.appLink = process.env.APP_URL
  }
}
</script>

<style lang="scss">
.our-obsession {
  width: 100%;
  max-width: 1000px;
  // height: 500px;
  background: transparent linear-gradient(180deg, #1cbf4c 0%, #3985f6 100%) 0%
    0% no-repeat padding-box;

  margin: 50px auto;
  border-radius: 30px;
  padding: 50px;
  color: white;
  position: relative;

  &__box {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    position: relative;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__circle {
    width: 50%;
    position: absolute;
    top: -50px;
    right: 0;
  }

  &__coin {
    width: 60px;
    position: absolute;

    &--btc {
      left: 0;
      top: 50%;
      transform: translateX(-50%) rotate(25deg);
    }

    &--t-coin {
      right: 0;
      bottom: 10%;
      transform: translateX(50%) rotate(-25deg);
    }
  }

  &__heading {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  &__text {
    display: inline-block;
    width: 80%;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 30px;
  }

  &__register-btn {
    background: #05bf4c !important;
    color: white !important;
    border-color: #05bf4c !important;
    transition: all 0.4s ease-in-out;
    padding: 8px 16px;
    min-width: 160px;
    font-size: 16px;
    border-radius: 6px;
    // margin-right: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 600px) {
  .our-obsession {
    padding: 20px;

    &__box {
      width: 100%;
    }

    &__heading {
      font-size: 32px;
    }

    &__text {
      font-size: 16px;
    }

    &__coin {
      width: 30px;

      &--btc {
        left: 0;
        top: 50%;
        transform: rotate(25deg);
      }

      &--t-coin {
        right: 0;
        bottom: 10%;
        transform: rotate(-25deg);
      }
    }
  }
}
</style>
