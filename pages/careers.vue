<template>
  <div>
    <div :class="modalOpen ? 'lock-scroll' : ''">
      <core-values @open-modal="openModal"></core-values>
      <impactful-work></impactful-work>
      <senex-job></senex-job>
      <blue-sect @open-modal="openModal"></blue-sect>
      <!-- <job-position></job-position> -->
      <job-modal :is-open="modalOpen" @close-modal="closeModal"></job-modal>
      <landing-footer></landing-footer>
    </div>
  </div>
</template>

<script>
import CoreValues from '~/components/careers/CoreValues.vue'
import ImpactfulWork from '~/components/careers/ImpactfulWork.vue'
import SenexJob from '~/components/careers/SenexJob.vue'
import BlueSect from '~/components/careers/BlueSect.vue'
// import JobPosition from '~/components/careers/JobPosition.vue'
import LandingFooter from '~/components/LandingFooter.vue'
import JobModal from '~/components/careers/JobModal.vue'
export default {
  components: {
    CoreValues,
    ImpactfulWork,
    SenexJob,
    BlueSect,
    // JobPosition,
    LandingFooter,
    JobModal
  },
  layout: 'about',
  data() {
    return {
      modalOpen: false
    }
  },
  methods: {
    closeModal() {
      this.modalOpen = false
    },
    openModal() {
      this.modalOpen = true
    }
  }
}
</script>

<style></style>
