<template>
  <div>
    <foreword></foreword>
    <mission-vision></mission-vision>
    <senex-info></senex-info>
    <gallery></gallery>
    <join-learn></join-learn>
    <landing-footer></landing-footer>
  </div>
</template>

<script>
import Foreword from '~/components/about/Foreword.vue'
import MissionVision from '~/components/about/MissionVision.vue'
import SenexInfo from '~/components/about/SenexInfo.vue'
import gallery from '~/components/about/Gallery.vue'
import JoinLearn from '~/components/about/JoinLearn.vue'
import LandingFooter from '~/components/LandingFooter.vue'
export default {
  components: {
    Foreword,
    MissionVision,
    SenexInfo,
    gallery,
    JoinLearn,
    LandingFooter
  },
  layout: 'about'
}
</script>

<style></style>
