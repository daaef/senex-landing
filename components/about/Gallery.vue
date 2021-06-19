<template>
  <div>
    <div class="relative">
      <div ref="gallery" class="carousel-con flex">
        <div class="carousel-1">
          <img src="img/about/carousel-3.png" alt="group-pic" />
        </div>
        <div class="flex-grow carousel-1 mx-auto">
          <img src="img/about/carousel-1.png" alt="group-pic" />
        </div>
        <div class="carousel-1">
          <img src="img/about/carousel-2.png" alt="group-pic" />
        </div>
        <span class="btn scroll-btn left" @click="leftScroll"
          ><img src="/img/about/caret-left.svg"
        /></span>
        <span class="btn scroll-btn right" @click="rightScroll"
          ><img src="/img/about/caret-right.svg"
        /></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const width = this.$refs.gallery.clientWidth
    this.$nextTick(() => this.$refs.gallery.scrollTo(width / 4, 0))
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
      const scrollPoint = this.$refs.gallery.scrollLeft + width / 4
      this.$refs.gallery.scrollTo({ left: scrollPoint, behavior: 'smooth' })
    },
    leftScroll() {
      const width = this.$refs.gallery.clientWidth
      const scrollPoint = this.$refs.gallery.scrollLeft - width / 4
      this.$refs.gallery.scrollTo({ left: scrollPoint, behavior: 'smooth' })
    }
  }
}
</script>

<style></style>
