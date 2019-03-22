<template>
  <section class="section">
    <div class="container wrapper">
      <p class="title has-text-centered has-text-weight-semibold">
        FAQ
      </p>
      <div class="columns">
        <div class="column is-6 is-offset-3 q-wrapper">
          <div v-if="items.length === 0">
            <p class="has-text-centered">
              There are no frequently asked questions yet.
            </p>
          </div>
          <div v-for="item in items" :id="`qa-${i}`" :key="item.id" class="q-item">
            <p class="q" @click="toggleQuestionView(`qa-${i}`)">
              {{ item.question }}
              <span class="icon is-pulled-right icon-expand">
                <i class="fas fa-fw fa-chevron-right" />
              </span>
              <span class="icon is-pulled-right icon-hide">
                <i class="fas fa-fw fa-chevron-down" />
              </span>
            </p>
            <p class="a">
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'blue',
  data() {},

  head() {
    return {
      title: 'Frequently asked question - SenexPay'
    }
  },

  asyncData({ $axios }) {
    return $axios.get('/faqs/').then(resp => ({
      items: resp.data
    }))
  },

  methods: {
    toggleQuestionView(qaElementId) {
      const element = document.getElementById(qaElementId)
      if (element) {
        element.classList.toggle('expanded')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/fonts.scss';

div.wrapper {
  margin-bottom: 3em;
  min-height: 100vh;
  font-family: $font-avenir;
  .title {
    font-size: 1.7em;
    color: #1b70cf;
  }
  .q-wrapper {
    .q-item {
      padding: 0;
      margin: 0;
      background: #fbfbfb;
      margin-bottom: 0.15em;
      &.expanded {
        .a {
          display: block;
        }
        .icon-expand {
          display: none;
        }

        .icon-hide {
          display: inherit;
        }
      }
      .icon-hide {
        display: none;
      }
      .q {
        padding: 0.8em 1.5em;
        background-color: #0c5db2;
        color: #fff;
        line-height: normal;
        border-radius: 2px;
        font-size: 1.2em;
        &:hover {
          cursor: pointer;
        }
      }
      .a {
        padding: 1em 1.5em;
        border: 1px solid rgba(0, 0, 0, 0.161);
        border-top: 0;
        border-radius: 2px;
        color: #000000;
        line-height: normal;
        display: none;
      }
    }
  }
}
</style>
