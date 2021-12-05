<template>
  <div>
    <div class="relative">
      <div ref="gallery" class="carousel-con flex">
        <!-- <carousel
          :scroll-per-page="false"
          pagination-position="left"
          pagination-color="#B2B2B2"
          pagination-active-color="#3E3E41"
          :loop="true"
          :center-mode="true"
          :per-page-custom="[
            [0, 1],
            [760, 1.5],
            [1200, 2.7]
          ]"
        >
          <slide class="carousel-1">
            <img
              src="https://res.cloudinary.com/senexpay/image/upload/h_400/v1638381989/assets/Photo_of_senexpay_staff_discussing_g9argy.png"
              alt="group-pic"
              loading="lazy"
            />
          </slide>
          <slide class="carousel-1">
            <img
              src="https://res.cloudinary.com/senexpay/image/upload/v1638381989/assets/photo_of_senexpay_staff_in_a_group_picture_zyl8c2.png"
              alt="group-pic"
              loading="lazy"
            />
          </slide>
          <slide class="carousel-1">
            <img
              src="https://res.cloudinary.com/senexpay/image/upload/h_400/v1638381989/assets/Photo_of_senexpay_staff_working_vune8c.png"
              alt="group-pic"
              loading="lazy"
            />
          </slide>
        </carousel> -->
        <!-- <div class="carousel-1">
          <img
            src="https://res.cloudinary.com/senexpay/image/upload/h_400/v1638381989/assets/Photo_of_senexpay_staff_discussing_g9argy.png"
            alt="group-pic"
            loading="lazy"
          />
        </div> -->
        <!-- <div class="flex-grow carousel-1 mx-auto">
          <img
            src="https://res.cloudinary.com/senexpay/image/upload/v1638381989/assets/photo_of_senexpay_staff_in_a_group_picture_zyl8c2.png"
            alt="group-pic"
            loading="lazy"
          />
        </div>
        <div class="carousel-1">
          <img
            src="https://res.cloudinary.com/senexpay/image/upload/h_400/v1638381989/assets/Photo_of_senexpay_staff_working_vune8c.png"
            alt="group-pic"
            loading="lazy"
          />
        </div> -->
        <!-- <span class="btn scroll-btn left" @click="leftScroll"
          ><img src="/img/about/caret-left.svg" alt="left arrow"
        /></span>
        <span class="btn scroll-btn right" @click="rightScroll"
          ><img src="/img/about/caret-right.svg" alt="right arrow"
        /></span> -->
      </div>
      <div class="gallery-carousel">
        <VueSlickCarousel v-bind="settings">
          <div class="courousel-item">
            <img
              src="https://res.cloudinary.com/senexpay/image/upload/q_auto,h_520/v1638381989/assets/Photo_of_senexpay_staff_discussing_g9argy.png"
              alt="group-pic"
              loading="lazy"
            />
          </div>
          <div class="courousel-item courousel-item--2">
            <img
              src="https://res.cloudinary.com/senexpay/image/upload/q_auto,h_520/v1638381989/assets/photo_of_senexpay_staff_in_a_group_picture_zyl8c2.png"
              alt="group-pic"
              loading="lazy"
            />
          </div>
          <div class="courousel-item">
            <img
              src="https://res.cloudinary.com/senexpay/image/upload/q_auto,h_520/v1638381989/assets/Photo_of_senexpay_staff_working_vune8c.png"
              alt="group-pic"
              loading="lazy"
            />
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
// import Carousel from 'vue-carousel/src/Carousel.vue'
// import Slide from 'vue-carousel/src/Slide.vue'
export default {
  components: {
    // Carousel,
    // Slide,
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        dots: true,
        // infinite: false,
        // speed: 500,
        centerMode: true,
        // centerPadding: '20px',
        slidesToShow: 1.65,
        slidesToScroll: 1,
        initialSlide: 1,
        swipeToSlide: true,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [
          // {
          //   breakpoint: 1240,
          //   settings: {
          //     slidesToShow: 2,
          //     dots: true,
          //     centerMode: true,
          //     variableWidth: false,
          //     adaptiveHeight: false
          //   }
          // },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              dots: true,
              centerMode: false,
              variableWidth: false,
              adaptiveHeight: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              // initialSlide: 2,
              dots: true,
              centerMode: false,
              variableWidth: false,
              adaptiveHeight: false
            }
          }
        ]
      }
    }
  },
  mounted() {
    // const width = this.$refs.gallery.clientWidth
    // this.$nextTick(() => this.$refs.gallery.scrollTo(width / 4, 0))
    // this.$nextTick(() =>
    //   this.$refs.gallery.scrollIntoView({
    //     inline: 'center',
    //     behavior: 'auto'
    //   })
    // )
  },
  methods: {
    rightScroll() {
      const width = this.$refs.gallery.clientWidth
      let scrollPoint = this.$refs.gallery.scrollLeft + width / 3
      if (width <= 600) {
        scrollPoint = this.$refs.gallery.scrollLeft + width + 25
      }
      this.$refs.gallery.scrollTo({ left: scrollPoint, behavior: 'smooth' })
    },
    leftScroll() {
      const width = this.$refs.gallery.clientWidth
      let scrollPoint = this.$refs.gallery.scrollLeft - width / 3
      if (width <= 600) {
        scrollPoint = this.$refs.gallery.scrollLeft - width - 25
      }
      this.$refs.gallery.scrollTo({ left: scrollPoint, behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss"></style>
