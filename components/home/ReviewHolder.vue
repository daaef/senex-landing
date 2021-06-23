<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      reviews: [],
      current: 0
    }
  },
  methods: {
    changeIndex(n) {
      const newIdx = this.current + n
      if (newIdx < this.reviews.length) {
        this.current = newIdx >= 0 ? newIdx : 0
      } else {
        this.current = 0
      }
    }
  }
}
</script>

<style></style>
