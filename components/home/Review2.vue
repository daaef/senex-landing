<template>
  <div class="review-box">
    <!-- <div class="review-box__profile"> -->
    <div class="review-box__profil">
      <img :src="image" alt="Reviewer" class="review-box__img" />
      <span class="review-box__name paragraph">{{ name }}</span>
    </div>
    <p class="review-box__text paragraph">{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
