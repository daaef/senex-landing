<template>
  <div>
    <foreword></foreword>
    <mission-vision></mission-vision>
  </div>
</template>

<script>
import Foreword from '~/components/about/Foreword.vue'
import MissionVision from '~/components/about/MissionVision.vue'
export default {
  components: { Foreword, MissionVision },
  layout: 'about'
}
</script>

<style></style>
