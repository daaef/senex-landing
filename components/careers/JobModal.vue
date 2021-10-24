<template>
  <div class="job-modal-holder">
    <div>
      <div class="container">
        <div class="job-modal-con__header">
          <span class="arrow-down" @click="closeModal"
            ><img src="/img/awesome-chevron-circle-down.svg"
          /></span>
          <h3 v-if="jobs.length > 0">OPEN POSITIONS</h3>
        </div>
      </div>
      <div v-if="jobs.length > 0" class="job-position-holder">
        <job-position
          v-for="(job, idx) in jobs"
          :key="idx"
          :title="job.title"
          :description="job.description"
          :department="job.department"
          :job-type="job.jobType"
          :is-remote="job.isRemote"
          :application-url="job.applicationUrl"
          :created="job.created"
        ></job-position>
      </div>
      <div v-else class="container job-position-holder--empty u-text-center">
        <h3 class="heading-tertiary heading-tertiary--600 u-mb-md">
          We currently do not have any open positions
        </h3>
        <p class="paragraph paragraph--700">Please check back soon.</p>
      </div>
    </div>
  </div>
</template>

<script>
import JobPosition from './JobPosition.vue'
export default {
  components: { JobPosition },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    jobs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      // jobs: []
    }
  },
  methods: {
    closeModal() {
      this.$emit('close-modal')
    }
  }
}
</script>

<style></style>
