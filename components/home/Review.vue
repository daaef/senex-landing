<template>
  <div>
    <div class="container lnd-rvw-con hidden md:block">
      <div class="lnd-review md:flex">
        <transition name="slide-fade" mode="out-in">
          <span :key="current" class="img-con w-full md:w-1/3"
            ><img :src="reviews[current].image"
          /></span>
        </transition>
        <div class="rvw-con md:w-2/3">
          <transition name="slide-fade" mode="out-in">
            <div :key="current" class="rvw-text-con">
              <span class="rvw-text">{{ reviews[current].text }}</span>
              <h3 class="rvw-writer">{{ reviews[current].writer }}</h3>
            </div>
          </transition>
          <span class="rvw-con__arrow-con md:w-1/6 md:ml-auto"
            ><img
              src="/img/awesome-arrow-left.svg"
              class="left-anim"
              @click="changeIndex(-1)"
            />
            <img
              src="/img/awesome-arrow-right.svg"
              class="right-img right-anim"
              @click="changeIndex(1)"
            />
          </span>
        </div>
      </div>
    </div>
    <div class="container lnd-rvw-con rvw-carousel-con flex md:hidden">
      <div v-for="(rvw, i) in reviews" :key="i" class="rvw-carousel">
        <div class="lnd-review md:flex">
          <transition name="slide-fade" mode="out-in">
            <span class="img-con w-full md:w-1/3"
              ><img :src="rvw.image"
            /></span>
          </transition>
          <div class="rvw-con md:w-2/3">
            <transition name="slide-fade" mode="out-in">
              <div class="rvw-text-con">
                <span class="rvw-text">{{ rvw.text }}</span>
                <h3 class="rvw-writer">{{ rvw.writer }}</h3>
              </div>
            </transition>
            <!-- <span class="rvw-con__arrow-con md:w-1/6 md:ml-auto"
              ><img
                src="/img/awesome-arrow-left.svg"
                class="left-anim"
                @click="changeIndex(-1)"
              />
              <img
                src="/img/awesome-arrow-right.svg"
                class="right-img right-anim"
                @click="changeIndex(1)"
              />
            </span> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviews: [
        {
          image: '/img/landing-page-review.png',
          text: 'SenexPay is the most reliable and fastest Bitcoin exchanger I have ever used. It’s so easy I was wondering why I have not been using it since.',
          writer: 'Akinosho, from Lagos'
        },
        {
          image: '/img/about/ceo.png',
          text: 'SenexPay is the most reliable and fastest.',
          writer: 'CEO, from Lagos'
        }
      ],
      current: 0
    }
  },
  methods: {
    changeIndex(n) {
      const newIdx = this.current + n
      // this.current = newIdx
      if (newIdx < this.reviews.length && newIdx >= 0) {
        this.current = newIdx
      } else if (newIdx < 0) {
        this.current = this.reviews.length - 1
      } else {
        this.current = 0
      }
    }
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
