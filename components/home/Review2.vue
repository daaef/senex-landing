<template>
  <div class="review-box">
    <div class="review-box__profile">
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

<style lang="scss" scoped>
.review-box {
  background-color: #f5f5fd;
  padding: 20px;
  flex: 30% 0 0;
  border-radius: 12px;
  margin-right: 50px;
  color: #3e3e41;
  transition: all 0.5s;
  min-height: 200px;

  &:hover {
    transform: translateX(10px);
  }

  @media screen and (max-width: 1200px) {
    flex: 40% 0 0 !important;
    margin: 50px 20px !important;
  }

  @media screen and (max-width: 600px) {
    flex: 80% 0 0 !important;
    margin: 50px 20px !important;
  }

  &__profile {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  &__img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }

  &__name {
    font-weight: 700;
  }
}
</style>
