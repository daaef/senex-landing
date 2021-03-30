<template>
  <div>
    <privacy-policy></privacy-policy>
    <landing-footer></landing-footer>
  </div>
</template>

<script>
import LandingFooter from '~/components/LandingFooter.vue'
import PrivacyPolicy from '~/components/privacy/PrivacyPolicy.vue'
export default {
  components: { PrivacyPolicy, LandingFooter },
  layout: 'about'
}
</script>

<style></style>
