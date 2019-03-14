<template>
  <footer class="footer2">
    <div class="container">
      <div class="level is-size-6">
        <div class="level-left">
          <div class="level-item">
            <span>&copy; 2019 - SenexPAY</span>
          </div>
        </div>

        <div class="level-right">
          <p class="level-item">
            <a href="#">Terms &amp; conditions</a>
          </p>
          <p class="level-item">
            |
          </p>
          <p class="level-item">
            <a href="#">Privacy Policy</a>
          </p>
          <p class="level-item">
            |
          </p>
          <p class="level-item">
            <a href="#">Disclaimer</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/fonts.scss';

.footer2 {
  background: #ffffff;
  color: $blue;
  font-family: $font-avenir;
  box-shadow: 2px -2px 4px rgba(0, 0, 0, 0.25);
  padding: 1em 0;
  width: 100%;
  font-size: 0.6em;
}

.item-with-sep {
  &:after {
    content: ' \00b7';
  }
}
</style>
