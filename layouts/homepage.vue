<template>
  <div class="bg">
    <!-- <video
      id="bgvid"
      class=""
      playsinline
      autoplay
      muted
      loop
    >
      <source src="http://thenewcode.com/assets/videos/polina.webm" type="video/webm">
      <source src="~assets/bg/senex-getty.mp4" type="video/mp4">
    </video> -->
    <div class="main">
      <navbar theme="white" logo-variant="white" />
      <div class="content" style="">
        <nuxt />
      </div>
      <footer-comp />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/footer.vue'

export default {
  components: {
    Navbar,
    FooterComp: Footer
  }
}
</script>

<style lang="scss" scoped>
.bg {
  background: url('~assets/bg/1.jpg');
  // background: url('~assets/bg/bg-13.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(10, 44, 95, 0.93); // rgb(24, 40, 125)
  background-blend-mode: multiply;
}
/*
video {
  position: fixed;
  object-fit: cover;
  top: 50%;
  left: 50%;
  z-index: -100;
  transform: translateX(-50%) translateY(-50%);
  background: url('~assets/bg/bg-13.jpg') no-repeat;
  background-size: cover;
  transition: 1s opacity;
}
*/
.main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  // background-color: rgba(228, 255, 255, 0.8);
  .content {
    flex: 1;
    margin-bottom: 0;
    display: flex;
    align-items: center;
  }
}
@media (min-aspect-ratio: 16/9) {
  video {
    width: 100%;
    height: auto;
  }
}
@media (max-aspect-ratio: 16/9) {
  video {
    width: auto;
    height: 100%;
  }
}

@media screen and (max-width: 768px) {
  .bg {
    background: url('~assets/bg/mob2.jpg');
    // background: url('~assets/bg/bg-13-mobile.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(10, 44, 95, 0.93); // rgb(24, 40, 125)
    background-blend-mode: multiply;
  }
}
</style>
