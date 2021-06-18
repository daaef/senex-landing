<template>
  <div
    ref="app-modal"
    class="app-modal"
    :class="[initialClassState, vModal ? 'flex ' + finalClassState : '']"
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
    initialClassState: {
      type: String,
      default: ''
    },
    finalClassState: {
      type: String,
      default: ''
    }
  },
  watch: {
    vModal(val) {
      this.showOrClose(val)
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
  methods: {
    showModal() {
      const scrollY =
        document.documentElement.style.getPropertyValue('--scroll-y')
      const body = document.body
      body.style.position = 'fixed'
      body.style.top = `-${scrollY}`
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
        this.showModal()
        this.open = true
      } else {
        this.closeModal()
        this.open = false
      }
    },
    close() {
      this.$emit('close-modal')
    }
  }
}
</script>

<style></style>
