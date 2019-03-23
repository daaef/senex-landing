<template>
  <div style="width: 100%; text-align: center;">
    <spring-spinner
      :animation-duration="3000"
      :size="size"
      color="#0c5db2"
    />
  </div>
</template>

<script>
import { SpringSpinner } from 'epic-spinners'

export default {
  components: {
    SpringSpinner
  },
  props: {
    size: {
      type: Number,
      default: 55
    }
  }
}
</script>
