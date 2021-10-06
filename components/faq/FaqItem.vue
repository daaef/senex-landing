<template>
  <div>
    <div class="container">
      <div
        class="faq-item-con"
        :class="isOpen ? 'faq-item-con--grey' : 'faq-item-con--white'"
        @click="toggleOpen"
      >
        <div class="faq-item-con__title-con">
          <h3 class="title paragraph">{{ title }}</h3>
          <span class="arrow-con" :class="isOpen ? 'rotate-up' : ''"
            ><img src="/img/awesome-arrow-down.svg"
          /></span>
        </div>
        <div
          class="faq-item-con__content paragraph"
          :class="isOpen ? 'block' : 'hidden'"
        >
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
