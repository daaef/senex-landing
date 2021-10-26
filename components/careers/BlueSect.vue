<template>
  <div>
    <div class="container">
      <div class="blue-background-bs">
        <div class="btn register-btn-bs" @click="openModal">
          <span v-if="!processing">View open positions</span>
          <span v-else class="btn-loader__box">
            <span class="btn-loader__dot btn-loader__dot--1"></span>
            <span class="btn-loader__dot btn-loader__dot--2"></span>
            <span class="btn-loader__dot btn-loader__dot--3"></span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    processing: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    openModal() {
      this.$emit('open-modal')
    }
  }
}
</script>

<style></style>
