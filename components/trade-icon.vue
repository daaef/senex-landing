<template>
  <div :class="{'ico-container': !$device.isMobile, 'ico-container-sm': $device.isMobile}">
    <img :src="computedIconSrc" :alt="name">
  </div>
</template>

<script>
export default {
  name: 'TradeIcon',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    }
  },

  computed: {
    computedIconSrc() {
      if (this.active) {
        return require(`@/assets/icons/${this.name}-active.png`)
      } else {
        return require(`@/assets/icons/${this.name}.png`)
      }
    }
  }
}
</script>

<style scoped>
.ico-container {
  width: 70px;
  height: 70px;
  text-align: center;
}

.ico-container-sm {
  width: 45px;
  height: 45px;
  text-align: center;
}
</style>
