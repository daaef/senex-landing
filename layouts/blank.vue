<template>
  <main>
    <client-only>
      <notifications
        classes="my-notification"
        width="280px"
        :ignore-duplicates="true"
      >
        <template slot="body" slot-scope="props">
          <div
            class="my-notification"
            :class="[props.item.type === 'error' ? 'error' : '']"
          >
            <a class="title noti-title">
              {{ props.item.title }}
            </a>
            <a class="close close-span" @click="props.close">
              <img src="/img/cancel-icon.svg" class="close-icon" />
            </a>
            <div v-html="props.item.text"></div>
          </div>
        </template>
      </notifications>
    </client-only>
    <nuxt />
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss">
.my-notification {
  margin: 10px;
  padding: 10px;
  padding-right: 20px;
  font-size: 14px;
  color: #ffffff;
  background: #06a84b;
  border-radius: 6px;
  border: 0;

  // style for title line
  .notification-title {
    font-size: 16px;
  }

  // style for content
  .notification-content {
    font-size: 14px;
  }

  .noti-title {
    color: white;
    font-size: 16px;
    font-weight: 800;
    width: 100%;
  }

  .close-span {
    width: 10px;
    height: 10px;
    display: inline-block;
  }

  .close-icon {
    width: 100%;
    height: auto;
    margin-left: 5px;
  }

  // additional styling hook when using`type` parameter, i.e. this.$notify({ type: 'success', message: 'Yay!' })
  &.error {
    background: #eb4545;
  }
}
</style>
