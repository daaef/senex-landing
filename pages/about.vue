<template>
  <div>
    <foreword></foreword>
    <mission-vision></mission-vision>
    <senex-info></senex-info>
    <gallery></gallery>
    <join-learn></join-learn>
    <crypto-buddy></crypto-buddy>
    <landing-footer></landing-footer>
  </div>
</template>

<script>
import Foreword from '~/components/about/Foreword.vue'
import MissionVision from '~/components/about/MissionVision.vue'
import SenexInfo from '~/components/about/SenexInfo.vue'
import Gallery from '~/components/about/Gallery.vue'
import JoinLearn from '~/components/about/JoinLearn.vue'
import CryptoBuddy from '~/components/about/CryptoBuddy.vue'
import LandingFooter from '~/components/LandingFooter.vue'
// import AppModal from '~/components/custom/AppModal.vue'
export default {
  components: {
    Foreword,
    MissionVision,
    SenexInfo,
    Gallery,
    JoinLearn,
    CryptoBuddy,
    LandingFooter
    // AppModal
  },
  layout: 'about',
  data() {
    return {
      open: false
    }
  }
}
</script>

<style>
.show-btn {
  background-color: red;
  widows: 15px;
}
</style>
