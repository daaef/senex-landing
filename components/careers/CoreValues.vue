<template>
  <div>
    <div class="container">
      <div class="lg:flex foreword-holder-car">
        <div class="foreword-con-car lg:w-2/5 2xl:w-1/2">
          <div class="words-car">
            <div class="img-word-car">
              <div class="car-star">
                <img src="/img/careers/careers-star.svg" alt="star" />
              </div>
              <h3 class="heading-tertiary--sm">Careers at SenexPay</h3>
            </div>
            <h2 class="heading-primary u-text-left">
              Together, let’s make digital finance better.
            </h2>
            <div class="btn register-btn-car" @click="openModal">
              <span v-if="!processing">View open positions</span>
              <span v-else class="btn-loader__box">
                <span class="btn-loader__dot btn-loader__dot--1"></span>
                <span class="btn-loader__dot btn-loader__dot--2"></span>
                <span class="btn-loader__dot btn-loader__dot--3"></span>
              </span>
            </div>
          </div>
        </div>
        <div class="foreword-img-car lg:w-3/5 2xl:w-1/2">
          <div class="lg:w-4/5 2xl:w-full forward-img-con-car m-auto lg:mr-0">
            <div class="top-left">
              <img
                src="/img/careers/career-boy-1.png"
                alt="Combination of four pictures of showing young people in working mode with laptops one."
                loading="lazy"
              />
            </div>
            <div class="top-right">
              <img
                src="/img/careers/career-girl-1.png"
                alt="Combination of four pictures of showing young people in working mode with laptops two."
                loading="lazy"
              />
            </div>
            <div class="bottom-left">
              <img
                src="/img/careers/career-boy-2.png"
                alt="Combination of four pictures of showing young people in working mode with laptops three."
                loading="lazy"
              />
            </div>
            <div class="bottom-right">
              <img
                src="https://res.cloudinary.com/senexpay/image/upload/w_500/v1636463130/assets/career-girl-2_yeqcxb.png"
                loading="lazy"
                alt="Combination of four pictures of showing young people in working mode with laptops four."
              />
            </div>
          </div>
        </div>
        <!-- <div class="foreword-img-car lg:w-3/5 2xl:w-1/2">
          <div class="lg:w-4/5 2xl:w-full forward-img-con-car ml-auto">
            <div class="dotted-img-car">
              <img src="/img/dotted-grid.png" alt="img-design" />
            </div>
            <div class="ceo-img-car">
              <img src="/img/careers/dollar-boy.png" alt="Dollar boy" />
            </div>
          </div>
        </div> -->
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
