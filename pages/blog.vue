<template>
  <div>
    <div class="blog-page-con">
      <div class="container header">
        <h1 class="title">News and Blogs</h1>
        <h6 class="subtitle">
          Get a scoop of our thoughts, insights and happenings in our company
        </h6>
      </div>
      <div class="top-stories">
        <h3 class="container">Top stories In the news</h3>
        <div class="lg:flex">
          <news-blog></news-blog>
          <news-blog></news-blog>
          <news-blog></news-blog>
        </div>
      </div>
      <div class="on-our-blog">
        <h3 class="container on-our-blog__header">On our blog</h3>
        <div>
          <our-blog></our-blog>
          <our-blog></our-blog>
          <our-blog></our-blog>
        </div>
      </div>
    </div>
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
