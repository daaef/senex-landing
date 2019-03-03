<template>
  <div class="container wrapper">
    <div class="columns">
      <div class="column is-6 is-offset-3 has-text-centered about">
        <p class="title">
          About Us
        </p>
        <p>
          At SenexPay, we believe conversion of currency should be as easy and quicky as possible.
          We’ve been in the business for over 9 years.
          so yeah, we know it should be easy and quick to make exchanges.
        </p>
      </div>
    </div>

    <div class="columns vision-wrapper">
      <div class="column is-5">
        <div class="is-pulled-right image-vision" />
      </div>
      <div class="column is-1" />
      <div class="column is-4 text">
        <p class="_title">
          Our Vision
        </p>
        <p class="content">
          At SenexPay, we believe conversion of currency should be as easy and quicky as possible.
          We’ve been in the
        </p>
      </div>
    </div>

    <div class="core-values-wrapper">
      <p class="_title has-text-centered">
        Core Values
      </p>
      <div class="columns">
        <div class="column is-6 is-offset-3">
          <div class="columns">
            <div class="column is-3 has-text-centered">
              <div class="value-wrapper">
                <p class="image-container" />
                <p class="value">
                  FAST
                </p>
              </div>
            </div>
            <div class="column is-3 has-text-centered">
              <div class="value-wrapper">
                <p class="image-container" />
                <p class="value">
                  FAST
                </p>
              </div>
            </div>
            <div class="column is-3 has-text-centered">
              <div class="value-wrapper">
                <p class="image-container" />
                <p class="value">
                  FAST
                </p>
              </div>
            </div>
            <div class="column is-3 has-text-centered">
              <div class="value-wrapper">
                <p class="image-container" />
                <p class="value">
                  FAST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="partners-wrapper">
      <p class="_title has-text-centered">
        Our partners
      </p>
      <div class="columns has-text-centered">
        <div class="column is-6 is-offset-3">
          <div class="columns">
            <div class="column has-text-centered">
              <div class="column partner-img-container">
                <img src="~assets/flutterwave.png" alt="" class="Flutterwave partner">
              </div>
            </div>
            <div class="column has-text-centered">
              <div class="column partner-img-container">
                <img src="~assets/flutterwave.png" alt="" class="Flutterwave partner">
              </div>
            </div>
            <div class="column has-text-centered">
              <div class="column partner-img-container">
                <img src="~assets/flutterwave.png" alt="" class="Flutterwave partner">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'fullblue'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/fonts.scss';

div.wrapper {
  min-height: 480px;
  font-family: $font-avenir;
  .about {
    margin-top: 15px;
    color: #ffffff;
    font-family: $font-avenir;
    .title {
      font-weight: bold;
      margin-bottom: 1em;
      font-size: 1.5em;
      color: #ffffff;
    }
  }
  .vision-wrapper {
    margin-top: 4em;
    margin-bottom: 1.5em;
    .image-vision {
      max-width: 95%;
      max-height: auto;
      width: 403px;
      height: 191px;
      background-color: #c4c4c4;
      border-radius: 10px;
    }
    .text {
      font-family: $font-roboto;
      color: #b9b9b9;
      font-weight: normal;
      font-style: normal;
      line-height: normal;
      font-size: 1.3em;
      ._title {
        font-family: $font-avenir;
        font-size: 1.2em;
        color: #1c70c8;
        margin-bottom: 1em;
        font-weight: 500;
      }
    }
  }
  .core-values-wrapper {
    margin: 2.5em 0;
    ._title {
      font-size: 1.4em;
      color: #1c70c8;
      font-weight: 500;
      margin-bottom: 1em;
    }
    .value-wrapper {
      text-align: center;
      width: 70px;
      .image-container {
        width: 70px;
        height: 70px;
        background: #c4c4c4;
        border-radius: 10px;
        margin-bottom: 1em;
      }
      .value {
        color: #b9b9b9;
        font-size: 1.2em;
      }
    }
  }

  div.partners-wrapper {
    margin: 2.5em 0;
    margin-bottom: 3em;
    ._title {
      font-size: 1.4em;
      color: #1c70c8;
      font-weight: 500;
    }
  }
}
</style>
