<template>
  <div class="bg">
    <video
      id="bgvid"
      class=""
      poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg"
      playsinline
      autoplay
      muted
      loop
    >
      <source src="http://thenewcode.com/assets/videos/polina.webm" type="video/webm">
      <source src="http://thenewcode.com/assets/videos/polina.mp4" type="video/mp4">
    </video>
    <div class="main">
      <navbar theme="blue" logo-variant="blue" />
      <div class="content" style="margin-bottom: 0;">
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
  // background: url('~assets/bg/bg-13.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
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
.main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: rgba(228, 255, 255, 0.8);
  .content {
    flex: 1;
  }
}
/*
@media screen and (max-width: 900px) {
  .bg {
    background: url('~assets/bg/bg-13.jpg');
  }
}
*/
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
</style>
