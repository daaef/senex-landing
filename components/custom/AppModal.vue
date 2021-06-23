<template>
  <div
    class="app-modal"
    :class="[
      initialClass,
      vModal ? 'flex ' + finalClassOpen : 'flex ' + finalClassClose
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    vModal: {
      type: Boolean,
      default: false
    },
    scrollReset: {
      type: Boolean,
      default: false
    },
    initialClass: {
      type: String,
      default: ''
    },
    finalClassOpen: {
      type: String,
      default: ''
    },
    finalClassClose: {
      type: String,
      default: ''
    }
  },
  watch: {
    vModal(val) {
      this.showOrClose(val)
    },
    scrollReset(val) {
      if (val) {
        this.resetScroll()
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      document.documentElement.style.setProperty(
        '--scroll-y',
        `${window.scrollY}px`
      )
    })
  },
  beforeDestroy() {
    // window.removeEventListener('scroll')
  },
  methods: {
    showModal() {
      const scrollY =
        document.documentElement.style.getPropertyValue('--scroll-y')
      const body = document.body
      body.style.position = 'fixed'
      body.style.top = `-${scrollY}`
      body.style.maxWidth = '100vw'
    },
    closeModal() {
      const body = document.body
      const scrollY = body.style.top
      body.style.position = ''
      body.style.top = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    },
    showOrClose(val) {
      if (val) {
        this.open = true
        this.showModal()
      } else {
        this.open = false
        this.closeModal()
      }
    },
    resetScroll() {
      window.scrollTo(0, 0)
    },
    close() {
      this.$emit('close-modal')
    }
  }
}
</script>

<style></style>
