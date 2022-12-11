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
.review-holder .uk-slider-items {
  padding-top: 80px;
}
.review-box {
  margin-right: 0;
  height: 100%;
  margin-left: 0 !important;
  position: relative;
  .review-box__profil {
    position: absolute;
    top: 0;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 37.5px;
      transform: translate(-35%, -50%);
      border-radius: 50%;
      height: 70px;
      width: 70px;
      background: #e6edf8;
    }
    .review-box__img {
      transform: translate(50%, -50%);
      height: 70px;
      width: 70px;
      object-fit: contain;
    }
  }
  .review {
    padding: 50px 30px 30px;
    background: #e6edf8;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url('/testimonial-bg.svg');
    background-repeat: no-repeat;
  }
  p,
  span {
    color: #04204a;
  }
  span {
    display: block;
    text-align: right;
    margin-top: 10px;
  }
}
</style>
