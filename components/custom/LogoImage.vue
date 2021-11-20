<template>
  <span class="icon-span"
    ><router-link to="/">
      <img id="logo-img" src="/img/senexpay-logo-light.svg" alt="senexpay"
    /></router-link>
  </span>
</template>

<script>
export default {
  data() {
    return {
      url: ''
    }
  },
  mounted() {
    // this.url = process.env.SENEX_MAIN_SITE_URL
  }
}
</script>

<style>
.icon-span {
  margin: auto;
  display: flex;
  justify-content: center;
  margin: -40px 0 20px 0;
}

#logo-img {
  height: 40px;
}
</style>
