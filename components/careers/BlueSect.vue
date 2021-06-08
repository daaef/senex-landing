<template>
  <div>
    <div class="container">
      <div class="blue-background-bs">
        <button type="button" class="btn register-btn-bs" @click="openModal">
          View open positions
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openModal() {
      this.$emit('open-modal')
    }
  }
}
</script>

<style></style>
