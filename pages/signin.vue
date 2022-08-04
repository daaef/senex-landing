<template>
  <div></div>
</template>

<script>
export default {
  created() {
    if (process.browser) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.location.href = 'https://app.senexpay.com/signin'
    }
  }
}
</script>
