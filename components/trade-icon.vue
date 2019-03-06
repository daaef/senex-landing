<template>
  <div>
    <img :src="computedIconSrc" :alt="name">
  </div>
</template>

<script>
const ICONS_ROOT_DIR = '~assets/icons/'

export default {
  name: 'TradeIcon',
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false
    },
    name: {
      type: String,
      required: true
    }
  },

  computed: {
    computedIconSrc() {
      return this.$props.active
        ? `${ICONS_ROOT_DIR}${this.$props.name}-active.png`
        : `${ICONS_ROOT_DIR}${this.props.name}.png`
    }
  }
}
</script>
