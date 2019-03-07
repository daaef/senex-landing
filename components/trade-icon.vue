<template>
  <div style="width: 70px; height: 70px; text-align: center;">
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
