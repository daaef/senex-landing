<template>
  <section class="about">
    <div class="has-text-centered section-one">
      <h1 class="title">
        About Us
      </h1>
      <p class="bod">
        Bitcoin - Naira instant exchange
      </p>
    </div>
    <div class="section-two wrapper">
      <div class="container">
        <h3 class="title">
          The Company
        </h3>
        <div class="">
          <!-- <div>
            <img src="~assets/about-senexpay.jpg" alt="" srcset="">
          </div> -->
          <div class="company-text">
            <p>
              Senex Payment Services Limited is a company that offers digital 
              currency exchange and payment solutions. Its pioneering product 
              is the SenexPAY – an online bitcoin to naira instant exchange platform. 
              This company is in business to contribute to bridging the gap in digital 
              trust, offering easy, fast, and secure means to exchange bitcoins to naira 
              for the least knowledgeable individual and new users.
              <br><br>
              Senex Payment Services Limited was founded in December 2016 by Mr Okeoghene 
              Orhosere and is headquartered in Lekki, Lagos State. The company is registered 
              and incorporated in 2018 with the Cooperate Affairs Commission and is backed 
              by some investors in Africa. Formerly known solely as Senex in 2016, the 
              company has risen to a multi-departmental company which now serves thousands 
              of clients globally.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-three wrapper">
      <div class="container">
        <!-- <h1>_</h1> -->
        <div class="mission">
          <h3 class="title">
            Our Mission
          </h3>
          <h5>
            Our mission is to establish a fully automated, fast, easy, 
            decentralized, and secure digital payment infrastructure and 
            solutions across Africa. The company’s mission is also to become 
            unrivaled in the cryptocurrency exchange service business in 
            Africa and at per with other major similar global organizations.
          </h5>
        </div>
        <h1>_</h1>
        <div class="vision">
          <h3 class="title">
            Our vision
          </h3>
          <h5>It is our vision to be at the forefront of the next financial revolution</h5>
        </div>
      </div>
    </div>
    <div class="section-four wrapper">
      <div class="container">
        <!-- <h3 class="title">
          Our values
        </h3> -->
        <div class="is-flex cta">
          <h4>Buy/Sell your bitcoins today!</h4>
          <nuxt-link to="/">
            Start
            <i aria-hidden="true" class="is-hidden-mobile fas fa-long-arrow-alt-right" />
          </nuxt-link>
        </div>

        <div class="follow">
          <p>Let's connect!</p>
          <p class="socials is-size-3">
            <span><a :href="socialLinks.facebookUrl" aria-label="Facebook" target="_blank" rel="noreferrer noopener"><i class="fab fa-facebook-f" /></a></span>
            <span><a :href="socialLinks.instagramUrl" aria-label="Instagram" target="_blank" rel="noreferrer noopener"><i class="fab fa-instagram" /></a></span>
            <span><a :href="socialLinks.twitterUrl" aria-label="Twitter" target="_blank" rel="noreferrer noopener"><i class="fab fa-twitter" /></a></span>
            <span><a :href="socialLinks.whatsappUrl" aria-label="Whatsapp" target="_blank" rel="noreferrer noopener"><i class="fab fa-whatsapp" /></a></span>
          </p>
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
      link: [{ rel: 'canonical', href: 'https://www.senexpay.com/about' }]
    }
  },
  data() {
    return {
      socialLinks: {
        facebookUrl: process.env.FACEBOOK_URL,
        instagramUrl: process.env.INSTAGRAM_URL,
        twitterUrl: process.env.TWITTER_URL,
        whatsappUrl: `https://api.whatsapp.com/send?phone=+${
          process.env.WHATSAPP_ID
        }&text=Hello%21%20I%20want%20to%20buy/sell%20Bitcoin`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/fonts.scss';
.about {
  font-family: $font-inter;
  font-size: 18px;
  color: #000000;

  .wrapper {
    padding: 40px 10px;
  }

  .wrapper:last-child {
    padding: 40px 10px 0px;
  }

  .title {
    margin-bottom: 1rem;
    color: #162e55;
    text-align: center;
  }

  .section-one {
    padding: 60px 20px;
    color: #ffffff;
    background: #162e55;
    .title {
      margin-bottom: 1rem;
      color: #ffffff;
    }

    .bod {
      max-width: 700px;
      margin: 0 auto;
    }
  }

  .section-two {
    .company-text {
      padding: 15px;
      max-width: 800px;
      text-align: center;
      margin: 0 auto;
    }
  }

  .section-three {
    background: #efefef;
    text-align: center;

    h1 {
      margin-top: 0;
    }

    h5 {
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.7;
    }
  }

  .section-four {
    .cta {
      background: #162e55;
      color: #ffffff;
      border-radius: 10px;
      padding: 30px;
      justify-content: space-between;
      align-items: center;
      max-width: 800px;
      margin: 0 auto;

      h4 {
        margin: 0;
        line-height: 1.5;
        color: #ffffff;
      }

      a {
        // color: #162e55;
        color: #ffffff;
        border: 1px solid #ffffff;
        padding: 8px 22px;
        border-radius: 6px;
        display: inline;
      }
    }

    .follow {
      text-align: center;
      padding: 30px 10px;
      color: #5f5f5f;

      p {
        margin: 0;
      }

      i {
        color: #162e55;
        margin: 10px;
      }
    }
  }
}
</style>
