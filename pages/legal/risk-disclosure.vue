<template>
  <section class="section">
    <div class="container wrapper">
      <div class="columns">
        <div class="column card is-6 is-offset-3">
          <p class="title has-text-centered has-text-weight-semibold">
            Risk Disclosure
          </p><hr>
          <p>
            Dealing with cryptocurrencies, in general, entails specific risks. This risk disclosure
            statement cannot and does not disclose all risks and other aspects involved in
            engaging in financing or financed transactions in cryptocurrencies. Risks include, but
            are not limited to, the following:
          </p>
          <ol>
            <li>
              <span class="subtitle">Market Risk</span>
              <p>
                The market for cryptocurrencies is still new and uncertain. No-one should have
                funds invested in cryptocurrencies or speculate in cryptocurrencies that he or
                she is not prepared to lose entirely. Whether the market for one or more
                cryptocurrencies will move up or down, or whether a cryptocurrency will lose
                all or substantially all its value, is unknown and this applies to all users. Users
                should be cautious about holding cryptocurrencies.
              </p>
            </li><br>
            <li>
              <span class="subtitle">Liquidity Risk</span>
              <p>
                Markets for cryptocurrencies have varying degrees of liquidity. Some are quite
                liquid while others may be thinner. Thin markets can amplify volatility. There is
                never a guarantee that there will be an active market for one to buy and sell
                cryptocurrencies derived from them. SenexPAY makes no representations or
                warranties about whether a cryptocurrency or fiat may remain traded on the
                Site at any point in the future, if at all. While SenexPAY remains a bitcoin-based
                platform, any new cryptocurrency (in the future) is subject to delisting without
                notice or consent.
              </p>
            </li><br>
            <li>
              <span class="subtitle">Legal Risk</span>
              <p>
                The legal status of most cryptocurrencies may be uncertain, and this can mean
                that the legality of holding or transacting with them is not always clear.
                Whether and how a cryptocurrency constitute property, or assets, or rights of
                any kind may also seem unclear. Users are responsible for knowing and
                understanding how cryptocurrencies will become addressed, regulated, and
                taxed under applicable law.
              </p>
            </li><br>
            <li>
              <span class="subtitle">Transaction Risk</span>
              <p>
                In addition to liquidity risks, values in any cryptocurrency marketplace are
                volatile and can shift quickly. Users in any cryptocurrency market are at this
                moment warned that they should pay close attention to their positions, and
                how they may become impacted by sudden and adverse shifts in market prices
                and activities. SenexPAY possesses absolutely no control over price volatility
                and therefore takes no responsibility in such instance.
              </p>
            </li><br>
            <li>
              <span class="subtitle">Risks Associated with Financing Activities</span>
              <p>
                When you finance a purchase or sale of cryptocurrency on a peer-to-peer basis,
                you run the risk of losing your provided financing. Similarly, when you accept
                funding to enter a transaction agreement, you also take the chance of not being
                able to repay that financing (e.g., if the market price of the cryptocurrency you
                purchased with the funding falls).
                Participants should know all the terms of any transaction they enter and how
                other market and risk factors can affect their financing obligations.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'simple',
  head() {
    return {
      title: 'Risk Disclosure - SenexPAY',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Dealing with cryptocurrencies, in general, entails specific risks. This risk disclosure statement cannot and does not disclose all risks and other aspects ...'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://www.senexpay.com/legal/risk-disclosure'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/fonts.scss';

div.wrapper {
  margin-bottom: 2.2em;
  margin-top: 1.5rem;
  font-family: $font-avenir;
  .title {
    font-size: 1.7em;
    color: #1b70cf;
  }
}
.card {
  padding: 2rem 1.5rem;
}
</style>
