<template>
  <div class="container">
    <div class="review-holder u-my-big">
      <h3 class="heading-secondary heading-secondary--weight-md u-my-md">
        What our customers are saying.
      </h3>
      <div class="review-holder__reviews u-mb-md">
        <!-- ref="reviews"  -->
        <!-- <template v-for="(item, idx) in reviews">
          <review-2
            :key="idx"
            :name="item.name"
            :image="item.image"
            :content="item.content"
          ></review-2>
        </template> -->
        <carousel
          :scroll-per-page="false"
          pagination-position="left"
          pagination-color="#B2B2B2"
          pagination-active-aolor="#3E3E41"
          :loop="true"
          :center-mode="true"
          :per-page-custom="[
            [0, 1],
            [760, 1.5],
            [1200, 2.5]
          ]"
        >
          <slide v-for="(item, idx) in reviews" :key="idx">
            <review-2
              :name="item.name"
              :image="item.image"
              :content="item.content"
            ></review-2>
          </slide>
        </carousel>
      </div>
      <!-- <div class="review-holder__dot-box">
        <span
          v-for="i in getPages()"
          :key="i"
          class="review-holder__dot"
          :class="[current == i ? 'review-holder__dot--active' : '']"
          @click="clickDot(i)"
        ></span>
        
      </div> -->
      <!-- <span class="review-holder__dot review-holder__dot--active"></span>
        <span class="review-holder__dot"></span>
        <span class="review-holder__dot"></span> -->
    </div>
  </div>
</template>

<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'
import Review2 from './Review2.vue'
export default {
  components: {
    Review2,
    Carousel,
    Slide
  },
  data() {
    return {
      reviews: [
        {
          name: 'Funmi',
          image: '/img/about/ceo.png',
          content:
            'Senexpay is the most reliable and fastest Bitcoin exchanger I have ever used. It’s so easy I was wondering why I have not been using it since.'
        },
        {
          name: 'Aminat',
          image: '/img/about/ceo.png',
          content:
            'I love the new upgrade. It is much more simpler and faster to use. Keep it up Senexpay!'
        },
        {
          name: 'Ebuka',
          image: '/img/about/ceo.png',
          content:
            'My day one exchanger! You guys rock. Senexpay has never disappointed me before. Awesome people.'
        },
        {
          name: 'Unknown',
          image: '/img/about/ceo.png',
          content: 'None'
        },
        {
          name: 'Unknown',
          image: '/img/about/ceo.png',
          content: 'None'
        }
      ],
      current: 1,
      width: 1
    }
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.width = this.$refs.reviews.clientWidth
    // })
    // setInterval(() => {
    //   const width = this.$refs.reviews.clientWidth
    //   const scrollPoint = this.$refs.reviews.scrollLeft + width * 0.8 + 20
    //   if (this.current < this.getPages()) {
    //     this.$refs.reviews.scrollTo({ left: scrollPoint, behavior: 'smooth' })
    //     this.current += 1
    //   } else {
    //     this.$refs.reviews.scrollTo({
    //       left: 0,
    //       behavior: 'smooth'
    //     })
    //     this.current = 1
    //   }
    // }, 10000)
    // rightScroll() {
    //   const width = this.$refs.gallery.clientWidth
    //   const scrollPoint = this.$refs.gallery.scrollLeft + width / 4
    //   this.$refs.gallery.scrollTo({ left: scrollPoint, behavior: 'smooth' })
    // }
  },
  methods: {
    changeIndex(n) {
      const newIdx = this.current + n
      if (newIdx < this.reviews.length) {
        this.current = newIdx >= 0 ? newIdx : 0
      } else {
        this.current = 0
      }
    },
    // clickDot(i) {
    //   const width = this.$refs.reviews.clientWidth * (i - 1)
    //   const scrollPoint = this.$refs.reviews.scrollLeft + width * 0.8 + 20
    //   if (i !== 1) {
    //     this.$refs.reviews.scrollTo({ left: scrollPoint, behavior: 'smooth' })
    //     this.current = i
    //   } else {
    //     this.$refs.reviews.scrollTo({
    //       left: 0,
    //       behavior: 'smooth'
    //     })
    //     this.current = 1
    //   }
    // },
    getPages() {
      // const w = 600
      // this.$nextTick(function () {
      //   width = this.$refs.reviews.clientWidth
      // })
      // const w = this.width === 1 ? 1 : Math.round(this.width / 600)
      let w = 3
      if (this.width < 960) {
        w = 2
      }
      if (this.width < 600) {
        w = 1
      }
      // console.log('width', w, this.width)
      if (w > 1) {
        return Math.round((this.reviews.length + 1) / w)
      }
      return Math.round(this.reviews.length / w)
      // console.log('width', w, this.width)
      // return Math.ceil(this.reviews.length / w) - 1
    }
  }
}
</script>

<style lang="scss">
.VueCarousel-pagination {
  width: 100%;
  text-align: left !important;
}
.review-holder {
  // display: flex;
  margin: 50px 0;

  &__reviews {
    display: flex;
    // margin-bottom: 50px 0;
    overflow-x: hidden;
  }

  &__dot-box {
    display: flex;
  }

  &__dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 15px;
    background-color: #b2b2b2;
    cursor: pointer;

    &--active {
      background-color: #3e3e41;
    }
  }
}
</style>
