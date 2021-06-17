<template>
  <div class="side-nav-div">
    <div>
      <div class="container">
        <div class="job-modal-con__header">
          <span class="arrow-down" @click="closeModal"
            ><img src="/img/awesome-chevron-circle-down.svg"
          /></span>
          <h3>OPEN POSITIONS</h3>
        </div>
      </div>
      <div>
        <job-position></job-position>
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
