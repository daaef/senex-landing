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
          Founded in 2016, SenexPAY (initially known as solely Senex) started as a traditional (over-the-counter) bitcoin to naira exchange service and has upgraded to become the most user-friendly, fast, secure and fully-automated platform in Africa. The company is fully registered with the Corporate Affairs Commission of Nigeria and backed by some prestigious financial investors across Africa.
        </div>
      </div>

      <div class="columns is-centered extended-info">
        <div class="column is-3 item">
          <div class="image-wrapper">
            <img src="~/assets/card-ai.png" alt="">
          </div>
          <p class="item-text">
            SenexPAY ushers-in a revolutionary, AI integrated technology which ensures customer's ease of use, security and reliability of its network. The platform also offers a third-party API endpoint for interested businesses to easily integrate our service as a bitcoin payment processor for their company.
          </p>
        </div>

        <div
          class="column is-3 item"
          :style="!$device.isMobile ? {'margin-left': '1rem'} : ''"
        >
          <div class="image-wrapper">
            <img src="~/assets/card-user.png" alt="">
          </div>
          <p class="item-text">
            SenexPAY remains trusted by thousands of customers across the world and can boast of the fastest and most secure service delivery in this venture. The platform is consistently seeking improvements to guarantee exceptional digital asset exchange experience.
          </p>
        </div>
      </div>
      <div class="core-values-wrapper">
        <p class="_title has-text-centered">
          Core Values
        </p>
        <div class="columns is-centered content">
          <div class="column value-item">
            <p class="image-wrappa">
              <img src="~/assets/value-fast.png" alt="">
            </p>
            <p class="text">
              FAST
            </p>
          </div>
          <div class="column value-item">
            <p class="image-wrappa">
              <img src="~/assets/value-reliable.png" alt="">
            </p>
            <p class="text">
              RELIABLE
            </p>
          </div>
          <div class="column value-item">
            <p class="image-wrappa">
              <img src="~/assets/value-secure.png" alt="">
            </p>
            <p class="text">
              SECURE
            </p>
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
                  <!-- <a href="https://flutterwave.com" target="_blank">
                    <img src="~assets/flutterwave.png" alt="" class="Flutterwave partner">
                  </a> -->
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
      title: 'About Us - SenexPAY',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'SenexPAY is a multi-fiat to bitcoin exchange platform which is owned and managed by Senex Payment Services Limited in Lekki, Nigeria.'
        }
      ],
      link: [{ rel: 'canonical', href: 'https://senexpay.com/about' }]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/fonts.scss';

div.wrapper {
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
      color: #000000;
      font-weight: normal;
      font-style: normal;
      line-height: 1.5;
      font-size: 1rem;
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
    margin: auto;
    margin-top: 3rem;
    margin-bottom: 3rem;
    width: 50%;
    ._title {
      font-size: 1.4rem;
      color: #1c70c8;
      font-weight: 500;
      margin-bottom: 1rem;
    }
    .content {
      margin-top: 1.5rem;
      .value-item {
        text-align: center;
        width: 100%;
        margin: 0 auto;
        .image-wrappa {
          width: 72px;
          height: 72px;
          margin: 0 auto;
          vertical-align: center;
          image {
            max-width: 100%;
            height: auto;
          }
        }

        .text {
          margin-top: 2rem;
          color: #1c70c8;
          font-weight: 500;
        }
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
      height: 350px;
      position: relative;
      box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      line-height: 1.5;
      margin-top: 3rem;
      z-index: -9999;
      .image-wrapper {
        position: absolute;
        top: -10%;
        left: 35%;
        box-shadow: 2px 6px 6px rgba(0, 0, 0, 0.25);
        border-radius: 50%;
        width: 74px;
        height: 74px;
        padding: 1rem;
        z-index: 2000;
        image {
          max-width: auto;
          height: auto;
        }
      }
      .item-text {
        color: #1c70c8;
        padding: 3rem 1.5rem;
        font-size: 0.95rem;
        display: flex;
        text-align: center;
        align-items: center;
      }
    }
  }
}
</style>
