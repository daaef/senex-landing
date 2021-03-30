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
  layout: 'about'
}
</script>

<style></style>
