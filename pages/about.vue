<template>
  <section class="section">
    <div class="container wrapper">
      <div class="columns">
        <div class="column is-6 is-offset-3 has-text-centered about">
          <p class="title has-text-weight-semibold">
            About Us
          </p>
          <p>
            SenexPAY is a multi-fiat to bitcoin exchange platform which is owned and managed by Senex Payment Services Limited in Lekki, Nigeria.
          </p>
        </div>
      </div>

      <div class="columns vision-wrapper is-centered">
        <div class="column is-7 text">
          Founded in 2016, SenexPAY (initially known as solely Senex) started as a traditional (over-the-counter) bitcoin to naira exchange service and has upgraded to become the most user-friendly, fasted, secure and fully-automated platform in Africa. The company is fully registered with the Corporate Affairs Commission of Nigeria and backed by some prestigious financial investors across Africa.
        </div>
      </div>

      <div class="columns is-centered extended-info">
        <div class="column is-3 item" style="margin-right: 1.2rem;">
          SenexPAY ushers-in a revolutionary, AI integrated technology which ensures customer's ease of use, security and reliability of its network. The platform also offers a third-party API endpoint for interested businesses to easily integrate our service as a bitcoin payment processor for their company.
        </div>
        <div class="column is-3 item">
          SenexPAY remains trusted by thousands of customers across the world and can boast of the fastest and most secure service delivery in this venture. The platform is consistently seeking improvements to guarantee exceptional digital asset exchange experience.
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
  </section>
</template>

<script>
export default {
  layout: 'fullblue',
  head() {
    return {
      title: 'About SenexPay'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/fonts.scss';

div.wrapper {
  min-height: 100vh;
  font-family: $font-avenir;
  .about {
    margin-top: 7px;
    color: #ffffff;
    font-family: $font-avenir;
    .title {
      margin-bottom: 1rem;
      font-size: 1.7rem;
      color: #ffffff;
    }
  }
  .vision-wrapper {
    margin-top: 5em;
    margin-bottom: 2em;
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
      line-height: 1.5;
      font-size: 1.1em;
      margin-top: 1.2rem;
      text-align: center;
      ._title {
        font-family: $font-avenir;
        font-size: 1.2em;
        color: #1c70c8;
        margin-bottom: 1rem;
        font-weight: 500;
      }
    }
  }
  .core-values-wrapper {
    margin: 2rem 0;
    ._title {
      font-size: 1.4rem;
      color: #1c70c8;
      font-weight: 500;
      margin-bottom: 1rem;
    }
    .value-wrapper {
      text-align: center;
      width: 70px;
      .image-container {
        width: 70px;
        height: 70px;
        background: #c4c4c4;
        border-radius: 10px;
        margin-bottom: 1rem;
      }
      .value {
        color: #b9b9b9;
        font-size: 1.2rem;
      }
    }
  }

  div.partners-wrapper {
    margin: 2.5rem 0;
    margin-bottom: 3rem;
    ._title {
      font-size: 1.4rem;
      color: #1c70c8;
      font-weight: 500;
    }
  }

  div.extended-info {
    margin: 2.5rem 0;
    .item {
      height: 320px;
      padding: 3rem 1.5rem;
      position: relative;
      box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      display: flex;
      align-items: center;
      text-align: center;
      font-size: 1rem;
      color: #1c70c8;
      line-height: 1.5;
    }
  }
}
</style>
