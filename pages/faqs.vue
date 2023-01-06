<template>
  <div>
    <div class="container u-mb-big">
      <div class="faq-search-con">
        <h3 class="heading-primary u-mb-md">Frequently Asked Questions.</h3>
        <div ref="faqSearchDiv" class="search-con">
          <span class="search-icon">
            <img src="/img/map-search.svg" alt="search" />
          </span>
          <input v-model="search" :placeholder="searchPlaceholder" />
        </div>
      </div>
    </div>
    <div class="faq-list-con">
      <!-- FAQ List -->
      <div v-if="searchedFAQs().length != 0" class="faq-list">
        <div
          class="faq-sector relative container"
          uk-filter="target: .js-filter; animation: delayed-fade"
        >
          <ul class="grid faq-filter sticky top-0 gap-4">
            <li class="uk-active w-full" uk-filter-control>
              <a class="w-full" href="#">All</a>
            </li>
            <li
              v-for="(cat, i) in categories"
              :key="i"
              class="w-full block"
              :uk-filter-control="`[data-color=${cat.filter}]`"
            >
              <a class="w-full" href="#">{{ cat.name }}</a>
            </li>
          </ul>

          <div class="js-filter faqs flex-1">
            <faq-item
              v-for="faq in searchedFAQs()"
              :key="faq.id"
              :title="faq.question"
              :content="faq.answer"
              :data-color="getFilter(faq.category)"
            ></faq-item>
          </div>
        </div>
      </div>
      <!-- Check Help Center -->
      <div class="container">
        <span class="faq-help paragraph"
          >Can’t find it here? Check our our
          <router-link to="/contact">Help Centre</router-link>.</span
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
      windowWidth: 0,
      search: '',
      faqs: [
        // {
        //   id: 0,
        //   number: 0,
        //   question: '',
        //   answer: ''
        // }
      ],
      categories: [
        {
          name: 'General',
          ids: 1,
          filter: 'general'
        },
        {
          name: 'Security / KYC',
          ids: 2,
          filter: 'kyc'
        },
        {
          name: 'Rewards / Referrals',
          ids: 3,
          filter: 'rewards'
        }
      ]
    }
  },
  head() {
    return {
      title: 'Frequently Asked Questions | SenexPay',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Check out our FAQs and get some of your questions answered quickly. How secure is SenexPay? SenexPay is very secure, we put security at the forefront of our operations.'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.senexpay.com/faqs'
        }
      ],
      link: [{ rel: 'canonical', href: 'https://www.senexpay.com/faqs' }]
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
  async mounted() {
    this.$store.commit('toggleSideBar', false)
    await this.getFAQs()
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
    getFilter(id) {
      console.log('id is', id)
      return this.categories.find((cat) => {
        return cat.ids === id
      })?.filter
    },
    onResize() {
      this.windowWidth = window.innerWidth
    },
    getFAQs() {
      this.$axios.get('/faqs/').then((res) => {
        this.faqs = res.data.sort((a, b) => a.category - b.category)
      })
      // .catch((err) => {
      //   // const {
      //   //   response: { data }
      //   // } = err
      //   // console.log(data)
      // })
    },
    searchedFAQs() {
      if (this.search === '') {
        return this.faqs
      }

      return this.faqs.filter(
        (x) =>
          x.question.toLowerCase().includes(this.search.toLowerCase()) ||
          x.answer.toLowerCase().includes(this.search.toLowerCase())
      )
    }
    // getPlaceHolder() {}
  }
}
</script>

<style lang="scss"></style>
