<template>
  <div>
    <div>
      <core-values></core-values>
      <impactful-work></impactful-work>
      <senex-job></senex-job>
      <blue-sect></blue-sect>
      <job-position></job-position>
      <landing-footer></landing-footer>
    </div>
  </div>
</template>

<script>
import CoreValues from '~/components/careers/CoreValues.vue'
import ImpactfulWork from '~/components/careers/ImpactfulWork.vue'
import SenexJob from '~/components/careers/SenexJob.vue'
import BlueSect from '~/components/careers/BlueSect.vue'
import JobPosition from '~/components/careers/JobPosition.vue'
import LandingFooter from '~/components/LandingFooter.vue'
export default {
  components: {
    CoreValues,
    ImpactfulWork,
    SenexJob,
    BlueSect,
    JobPosition,
    LandingFooter
  },
  layout: 'about'
}
</script>

<style></style>
