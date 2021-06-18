<template>
  <div>
    <div class="container">
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
  }
}
</script>

<style></style>
