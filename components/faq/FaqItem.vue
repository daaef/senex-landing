<template>
  <div>
    <div class="container">
      <div class="faq-item-con">
        <div class="faq-item-con__title-con" @click="toggleOpen">
          <h3 class="title">{{ title }}</h3>
          <span class="arrow-con"
            ><img src="/img/awesome-arrow-down.svg"
          /></span>
        </div>
        <div class="faq-item-con__content" :class="isOpen ? 'block' : 'hidden'">
          {{ content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style></style>
