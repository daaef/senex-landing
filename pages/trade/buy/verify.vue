<template>
  <trader step="user_verify">
    <template slot="title">
      Verification
    </template>
    <template slot="content" class="user-verify">
      <div>Upload ID</div>
      <div class="id-section">
        <img src="~assets/images/id-placeholder.png" alt="" class="upload-id">
        <div class="widget-grp">
          <button class="button select-file-btn">
            Choose File
          </button>
          <button class="button upload-file-btn">
            Upload
          </button>
        </div>
      </div>

      <p>Upload Selfie</p>
      <div class="selfie-section">
        <img src="~assets/images/selfie-placeholder.png" alt="" class="upload-selfie">
        <div class="widget-grp">
          <button class="button select-file-btn">
            Choose File
          </button>
          <button class="button upload-file-btn">
            Upload
          </button>
        </div>
      </div>
    </template>
    <template slot="button">
      <button class="button">
        Complete Trade
      </button>
    </template>
  </trader>
</template>

<script>
import Trader from '~/components/trade/trader.vue'

export default {
  layout: 'simple',

  components: {
    Trader
  }
}
</script>
