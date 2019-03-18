<template>
  <trader step="user_info">
    <template slot="title">
      Personal Information
    </template>
    <template slot="content">
      <div class="field">
        <label for="" class="label">First Name</label>
        <div class="control">
          <input name="firstName" type="text" class="input" placeholder="Bruce">
        </div>
      </div>

      <div class="field">
        <label for="" class="label">Last Name</label>
        <div class="control">
          <input type="text" class="input" placeholder="Wayne">
        </div>
      </div>

      <div class="field">
        <label for="" class="label">Email</label>
        <div class="control">
          <input type="text" class="input" placeholder="batman@brucewayne.com">
        </div>
      </div>

      <div class="field">
        <label for="" class="label">Mobile Number</label>
        <div class="control">
          <input type="text" class="input" placeholder="+2340000000000">
        </div>
      </div>
    </template>
    <template slot="button">
      <button class="button">
        Continue
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
