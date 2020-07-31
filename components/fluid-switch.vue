<template>
  <div class="rappa has-text-centered">
    <div class="options">
      <div ref="option1" class="option option-1">
        <span>{{ labelLeft }}</span>
      </div>
      <div ref="option2" class="option option-2">
        <span>{{ labelRight }}</span>
      </div>
      <div ref="slider" class="slider" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    labelLeft: {
      type: String,
      required: true
    },
    labelRight: {
      type: String,
      required: true
    }
  },

  mounted() {
    const slider = window.document.querySelector('.slider')
    const options = window.document.querySelectorAll('.option')

    const self = this
    const clickHandler = e => {
      if (e.currentTarget === options[0]) {
        slider.style.left = '0'
        options[1].style.color = '#626567'
        options[0].style.color = '#fff'
        self.$emit('switched', { label: self.labelLeft })
      } else {
        slider.style.left = `${slider.offsetWidth}px`
        options[0].style.color = '#626567'
        options[1].style.color = '#fff'
        self.$emit('switched', { label: self.labelRight })
      }
    }
    options.forEach(option => {
      option.addEventListener('click', clickHandler)
    })
  },

  methods: {
    handleSwitch(ev) {
      if (ev.currentTarget === this.$refs.option1) {
        this.$refs.option2.style.color = '#254882'
        this.$refs.option1.style.color = '#fff'
      } else {
        this.$refs.slider.left = `${this.$refs.slider.offsetWidth}px`
        this.$refs.option1.style.color = '#254882'
        this.$refs.option2.style.color = '#fff'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/fonts.scss';

.rappa {
  font-family: $font-inter;
  // font-weight: bold;
}

.options {
  position: relative;
  height: 40px;
  width: 100%;
  border-radius: 4px;
  background: #fff;
  text-align: center;
  display: flex;
  border: 1px solid #254882;
}

.option {
  display: flex;
  justify-content: center;
  flex: 1 1 auto;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 2;
  cursor: pointer;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.option-1 {
  color: #fff;
}

.slider {
  position: absolute;
  left: 0px;
  height: 100%;
  width: 50%;
  background: #254882;
  z-index: 1;
  border-radius: 4px;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
</style>
