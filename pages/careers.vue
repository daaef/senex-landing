<template>
  <div>
    <div>
      <core-values :processing="processing" @open-modal="getJobs">
      </core-values>
      <impactful-work></impactful-work>
      <senex-job></senex-job>
      <blue-sect :processing="processing" @open-modal="getJobs"></blue-sect>
      <!-- <job-position></job-position> -->
      <app-modal
        :v-modal="modalOpen"
        initial-class="job-modal-con"
        final-class-open="job-modal-show"
      >
        <job-modal :jobs="jobs" @close-modal="closeModal"></job-modal>
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
      jobs: [],
      processing: false
    }
  },
  head() {
    return {
      title: 'We are Hiring | SenexPay',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Our team is made up of very talented and innovative people who enjoy building solutions. Wanna join us? Let’s make digital finance better together. Explore our open positions at SenexPay.'
        }
      ],
      link: [{ rel: 'canonical', href: 'https://www.senexpay.com/careers' }]
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
      this.processing = true
      this.$axios
        .get('/jobs/')
        .then((res) => {
          this.jobs = res.data
          this.modalOpen = true
          this.processing = false
        })
        .catch((e) => {
          this.processing = false
        })
    }
  }
}
</script>

<style></style>
