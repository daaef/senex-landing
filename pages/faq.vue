<template>
  <div>
    <div class="container">
      <div class="faq-search-con">
        <h3>Frequently Asked Questions.</h3>
        <div ref="faqSearchDiv" class="search-con">
          <span class="search-icon"><img src="/img/map-search.svg" /></span>
          <input :placeholder="searchPlaceholder" />
        </div>
      </div>
    </div>
    <div class="faq-list-con">
      <!-- FAQ List -->
      <div class="faq-list">
        <faq-item
          title="Do I need to sign up to use Senex?"
          content="Send professional invoices, track them in real time, and accept payments online—all from one place."
        ></faq-item>
      </div>
      <!-- Check Help Center -->
      <div class="container">
        <span class="faq-help"
          >Can’t find it here? Check our our
          <router-link to="/help">Help Centre</router-link>.</span
        >
      </div>
    </div>
    <landing-footer></landing-footer>
  </div>
</template>

<script>
import FaqItem from '~/components/faq/FaqItem.vue'
import LandingFooter from '~/components/LandingFooter.vue'
export default {
  components: { FaqItem, LandingFooter },
  layout: 'about',
  data() {
    return {
      searchPlaceholder: 'Search',
      windowWidth: 0
    }
  },
  watch: {
    windowWidth(val) {
      if (val >= 640) {
        this.searchPlaceholder = 'Search for what you are looking for'
      } else {
        this.searchPlaceholder = 'Search'
      }
    }
  },
  mounted() {
    if (window.innerWidth >= 640) {
      this.searchPlaceholder = 'Search for what you are looking for'
    } else {
      this.searchPlaceholder = 'Search'
    }

    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
    }
    // getPlaceHolder() {}
  }
}
</script>

<style></style>
