<template>
  <div>
    <div class="overflow-hidden">
      <div class="why-blue-border"></div>
      <div class="why-light-triangle"></div>
    </div>
    <div class="why-senex">
      <img
        src="/img/green-semi-circles.svg"
        alt="Circles"
        class="why-senex-circle"
      />
      <div class="container">
        <p class="why heading-tertiary--v-sm">Why people love Senexpay</p>
        <h2 class="heading-secondary u-text-left">
          We just wanna to make crypto exchange stress-free.
        </h2>
        <div class="lg:flex reason-con" data-aos="slide-up">
          <div class="reason">
            <span class="icon up-anim"><img src="/img/why-senex-1.png" /></span>
            <p class="paragraph paragraph--700 u-my-10">Simple to use</p>
            <span class="paragraph"
              >Set up your account in minutes and start trading your crypto in
              the smoothest way possible.</span
            >
          </div>
          <div class="reason">
            <span class="icon up-anim"><img src="/img/why-senex-2.png" /></span>
            <p class="paragraph paragraph--700 u-my-10">Quick Payouts</p>
            <span class="paragraph"
              >Senexpay pays directly to your account swiftly - no stories. Come
              in, cash out, easy!</span
            >
          </div>
          <div class="reason">
            <span class="icon up-anim"><img src="/img/why-senex-3.png" /></span>
            <p class="paragraph paragraph--700 u-my-10">Safe and protected</p>
            <span class="paragraph"
              >Our portal is highly secure end-to- end, with the highest
              security protocols possible.</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.why-senex-circle {
  position: absolute;
  top: calc(50% - 50px);
  // top: 50%;
  right: 0;
  transform: translateY(-50%);
  height: 400px;
}
</style>
