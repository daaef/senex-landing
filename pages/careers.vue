<template>
  <div>
    <div>
      <core-values></core-values>
      <impactful-work></impactful-work>
      <senex-job></senex-job>
      <blue-sect></blue-sect>
      <landing-footer></landing-footer>
    </div>
  </div>
</template>

<script>
import CoreValues from '~/components/careers/CoreValues.vue'
import ImpactfulWork from '~/components/careers/ImpactfulWork.vue'
import SenexJob from '~/components/careers/SenexJob.vue'
import BlueSect from '~/components/careers/BlueSect.vue'
import LandingFooter from '~/components/LandingFooter.vue'
export default {
  components: { CoreValues, ImpactfulWork, SenexJob, BlueSect, LandingFooter },
  layout: 'about'
}
</script>

<style></style>
