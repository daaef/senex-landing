<template>
  <div>
    <div>
      <core-values @open-modal="openModal"></core-values>
      <impactful-work></impactful-work>
      <senex-job></senex-job>
      <blue-sect @open-modal="openModal"></blue-sect>
      <!-- <job-position></job-position> -->
      <app-modal
        :v-modal="modalOpen"
        initial-class="job-modal-con"
        final-class-open="job-modal-show"
      >
        <job-modal @close-modal="closeModal"></job-modal>
      </app-modal>
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
import AppModal from '~/components/custom/AppModal.vue'
export default {
  components: {
    CoreValues,
    ImpactfulWork,
    SenexJob,
    BlueSect,
    // JobPosition,
    LandingFooter,
    JobModal,
    AppModal
  },
  layout: 'about',
  data() {
    return {
      modalOpen: false,
      jobs: []
    }
  },
  head() {
    return {
      title: 'Careers',
      meta: [
        {
          hid: 'SenexPay Careers',
          name: 'Careers - SenexPay',
          content: 'SenexPay'
        }
      ]
    }
  },
  mounted() {
    // this.getJobs()
  },
  methods: {
    closeModal() {
      this.modalOpen = false
    },
    openModal() {
      this.modalOpen = true
    },
    getJobs() {
      this.$axios.get('/jobs/').then((res) => {
        this.jobs = res.data
      })
    }
  }
}
</script>

<style></style>
