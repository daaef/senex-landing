<template>
  <div>
    <foreword></foreword>
    <mission-vision></mission-vision>
    <senex-info></senex-info>
    <landing-footer></landing-footer>
  </div>
</template>

<script>
import Foreword from '~/components/about/Foreword.vue'
import MissionVision from '~/components/about/MissionVision.vue'
import SenexInfo from '~/components/about/SenexInfo.vue'
import LandingFooter from '~/components/LandingFooter.vue'
export default {
  components: { Foreword, MissionVision, SenexInfo, LandingFooter },
  layout: 'about'
}
</script>

<style></style>
