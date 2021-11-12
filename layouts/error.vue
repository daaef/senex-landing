<template>
  <div class="main-not-found">
    <div v-if="error.statusCode === 404" class="holder">
      <span class="not-found-img-span"
        ><img
          class="not-found-img"
          src="/img/not-found-icon.svg"
          alt="not found"
      /></span>
      <div class="lost-holder">
        <span class="paragraph">
          No sign of crypto here. You seem to be outta the world!</span
        >
      </div>
      <div class="input-sub-holder">
        <ButtonSpinner
          :is-loading="processing"
          :is-in-active="buttonDisabled"
          value="Let’s take you back home"
          :on-submit="toDashboard"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonSpinner from '~/components/custom/ButtonSpinner.vue'
export default {
  components: { ButtonSpinner },
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      processing: false,
      buttonDisabled: false
    }
  },
  methods: {
    toDashboard() {
      // this.$router.push('/dashboard')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.main-not-found {
  background-color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 0 18px;
}

.holder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 460px;
  width: 100%;
  margin: auto;
  color: #000000;
}

.not-found-img-span {
  width: 100%;
  max-width: 250px;
  display: inline-block;
}

.not-found-img {
  width: 100%;
  height: auto;
}

.input-sub-holder {
  width: 100%;
  padding: 0 5px;
}

.lost-holder {
  margin: 10px 0;
  text-align: center;
}
</style>
