<template>
  <div>
    <div
      class="submit-btn"
      :class="[
        isInActive ? 'disabled-color pointer-off' : 'active-color',
        isLoading ? 'hide' : 'show-flex'
      ]"
      @click="submit"
    >
      {{ value }}
    </div>
    <div class="btn-style" :class="[isLoading ? 'show' : 'hide']">
      <img src="/img/loading.svg" class="rotate spinner" alt="loading" />
    </div>
    <input style="display: none" class="hidden" type="submit" />
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    isInActive: {
      type: Boolean,
      default: false
    },
    onSubmit: {
      type: Function,
      default: () => {
        // console.log('Empty onclick.')
      }
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    submit() {
      if (this.isInActive) {
        return
      }
      this.onSubmit()
    }
  }
}
</script>

<style scoped>
.show {
  display: block;
}

.show-flex {
  display: flex;
}

.btn-style {
  height: 50px;
  background-color: #0b913a;
  border-radius: 6px;
  /* opacity: 0.6; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.hide {
  display: none;
}

.spinner {
  width: 25px;
  height: 25px;
}

.active-color {
  opacity: 1;
  cursor: pointer;
}

.disabled-color {
  opacity: 0.5;
  cursor: default;
}

.pointer-on {
  cursor: pointer;
}

.pointer-off {
  cursor: default;
}

.submit-btn {
  background-color: #0b913a;
  color: #ffffff;
  width: 100%;
  height: 50px !important;
  border-radius: 6px;
  font-size: 20px;
  border: 1px solid;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.rotate {
  animation: rotate 1.5s linear infinite;
}
@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>
