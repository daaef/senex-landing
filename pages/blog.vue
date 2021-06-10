<template>
  <div>
    <news-blog></news-blog>
    <our-blog></our-blog>
    <landing-footer></landing-footer>
  </div>
</template>

<script>
import NewsBlog from '~/components/blog/NewsBlog.vue'
import OurBlog from '~/components/blog/OurBlog.vue'
import LandingFooter from '~/components/LandingFooter.vue'
export default {
  components: { NewsBlog, OurBlog, LandingFooter },
  layout: 'about'
}
</script>

<style></style>
