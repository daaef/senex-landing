<template>
  <div>
    <foreword></foreword>
    <mission-vision></mission-vision>
    <div class="container u-mb-md">
      <h1 class="heading-primary heading-primary--wt-500 u-mb-mini-md">
        Our core values
      </h1>
      <p class="paragraph u-text-center text-black u-mb-md">
        These are the shining lights that guide everything we do inside
        SenexPay.
      </p>
      <div class="our-core-box">
        <div class="our-core-box__item">
          <h3
            class="heading-tertiary--sm heading-tertiary--wt-500 our-core-box__title u-mb-10"
          >
            Financial Inclusion
          </h3>
          <p class="paragraph">
            Millions of Africans are still left out in the modern fin-tech
            revolution, we want to bridge the gap for everyone.
          </p>
        </div>
        <div class="our-core-box__item">
          <h3
            class="heading-tertiary--sm heading-tertiary--wt-500 our-core-box__title u-mb-10"
          >
            Empowerment
          </h3>
          <p class="paragraph">
            We are using financial literacy as a tool to empower people, to make
            the best money decisions.
          </p>
        </div>
        <div class="our-core-box__item">
          <h3
            class="heading-tertiary--sm heading-tertiary--wt-500 our-core-box__title u-mb-10"
          >
            Client Obssesion
          </h3>
          <p class="paragraph">
            Behind every great product lies ears that listens to customers. We
            work to keep our customers happy always.
          </p>
        </div>
      </div>
    </div>
    <senex-info></senex-info>
    <gallery></gallery>
    <!-- <join-learn></join-learn> -->
    <reimagine-crypto></reimagine-crypto>
    <download-app />
    <landing-footer></landing-footer>
  </div>
</template>

<script>
import Foreword from '~/components/about/Foreword.vue'
import MissionVision from '~/components/about/MissionVision.vue'
import SenexInfo from '~/components/about/SenexInfo.vue'
import Gallery from '~/components/about/Gallery.vue'
// import JoinLearn from '~/components/about/JoinLearn.vue'
// import CryptoBuddy from '~/components/about/CryptoBuddy.vue'
import LandingFooter from '~/components/LandingFooter.vue'
import ReimagineCrypto from '~/components/about/ReimagineCrypto.vue'
import DownloadApp from '~/components/home/DownloadApp'
// import AppModal from '~/components/custom/AppModal.vue'
export default {
  components: {
    DownloadApp,
    Foreword,
    MissionVision,
    SenexInfo,
    Gallery,
    // JoinLearn,
    LandingFooter,
    ReimagineCrypto
    // AppModal
  },
  layout: 'about',
  data() {
    return {
      open: false
    }
  },
  head() {
    return {
      title: 'Our mission, vision and core values | SenexPay',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Our easy and secure platform got everyone falling in love with Crypto. Our vision is to make financial services accessible to every person on the African continent.'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.senexpay.com/about'
        }
      ],
      link: [{ rel: 'canonical', href: 'https://www.senexpay.com/about' }]
    }
  },
  mounted() {
    this.$store.commit('toggleSideBar', false)
  }
}
</script>

<style lang="scss">
.show-btn {
  background-color: red;
  widows: 15px;
}

.text-black {
  color: #000;
}
</style>
