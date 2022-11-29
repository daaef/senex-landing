<template>
  <div class="review-box">
    <!-- <div class="review-box__profile"> -->
    <div class="review-box__profil">
      <img :src="image" alt="Reviewer" class="review-box__img" />
    </div>
    <div class="review">
      <p class="review-box__text paragraph">{{ content }}</p>
      <span class="review-box__name paragraph">{{ name }}</span>
    </div>
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

<style lang="scss" scoped>
.review-box {
  margin-right: 0;
  height: 100%;
  margin-left: 0 !important;
  .review {
    background: #041d45;
    padding: 30px;
  }
  @media (max-width: 798px) {
    padding: 40px;
  }
  p,
  span {
    color: #fafafa;
  }
}
</style>
