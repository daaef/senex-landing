<template>
  <div class="container wrapper">
    <div class="columns">
      <div class="column has-text-centered about">
        <p class="title">
          About Us
        </p>
        <p>
          At SenexPay, we believe conversion of currency should be as easy and quicky as possible.
          We’ve been in the business for over 9 years.
          so yeah, we know it should be easy and quick to make exchanges.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'fullblue'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/fonts.scss';

div.wrapper {
  min-height: 480px;
  div.about {
    color: #ffffff;
    font-family: $font-avenir;
    p.title {
      font-weight: bold;
      margin-bottom: 1em;
      font-size: 1.5em;
      color: #ffffff;
    }
  }
}
</style>
