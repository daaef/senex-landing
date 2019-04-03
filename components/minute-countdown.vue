<template>
  <span>
    {{ m|padZeros }}:{{ s|padZeros }}
  </span>
</template>

<script>
export default {
  filters: {
    padZeros(val) {
      return ('' + val).padStart(2, '0')
    }
  },

  props: {
    minutes: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      m: this.$props.minutes,
      s: 0,
      active: true
    }
  },

  mounted() {
    this.start()
  },

  methods: {
    start() {
      if (!this.active) {
        return
      }

      let m = this.m
      const s = this.checkSeconds(this.s - 1)
      if (s === 59) {
        m -= 1
      }

      if (m < 0 && this.active) {
        this.$emit('timer-elapsed')
      } else {
        this.m = m
        this.s = s
        setTimeout(this.start.bind(this), 1000)
      }
    },

    checkSeconds(sec) {
      if (sec < 0) {
        sec = 59
      }
      return sec
    },

    stop() {
      this.active = false
    }
  }
}
</script>
