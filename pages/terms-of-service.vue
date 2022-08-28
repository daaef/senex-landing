<template>
  <div>
    <terms-of-use></terms-of-use>
    <landing-footer></landing-footer>
  </div>
</template>

<script>
import LandingFooter from '~/components/LandingFooter.vue'
import TermsOfUse from '~/components/terms/TermsOfUse.vue'
export default {
  components: { TermsOfUse, LandingFooter },
  layout: 'about',
  head() {
    return {
      title: 'Terms of Service | SenexPay',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Welcome to SenexPay’s Terms of Use! We are truly excited to have you aboard. Thank you for choosing to use our services.'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.senexpay.com/terms-of-service'
        }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.senexpay.com/terms-of-service' }
      ]
    }
  },
  mounted() {
    this.$store.commit('toggleSideBar', false)
  }
}
</script>

<style></style>
