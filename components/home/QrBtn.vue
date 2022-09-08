<template>
  <div class="qr--content">
    <a class="qr-code--btn" href="#0">
      <qr-code class="qr-img" :text="qr"></qr-code>
    </a>
    <span class="qr--code-text">
      <span class="font-bold heading-1 text-2xl">Scan the QR Code</span><br />
      <span class="paragraph">to download directly <br />on your phone.</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'QrBtn',
  data() {
    return {
      qr: `https://onelink.to/xd462s`
    }
  }
}
</script>

<style scoped></style>
