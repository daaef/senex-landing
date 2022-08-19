<template>
  <section class="earn--passive">
    <div class="container flex flex-wrap items-center">
      <div class="earn--group" data-aos="fade-down">
        <img src="/img/earn-group.png" alt="" />
      </div>
      <div class="earn--info" data-aos="fade-up">
        <div class="tag--badge uppercase success">new</div>
        <h2>Earn Passive Income</h2>
        <p>
          Earn 10 USDT each time you invite a friend to register and perform a
          transaction on SenexPay. There is no limit to what you can earn!
        </p>
        <a :href="appLink + '/create-account'" class="dash--btn">
          Get Started</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EarnPassive'
}
</script>

<style lang="scss">
.earn--passive {
  background: #041d45;
  padding: 100px 0;
  .earn--group,
  .earn--info {
    width: 50%;
  }
  .earn--group {
    padding-right: 40px;
    img {
      width: 100%;
    }
  }
  .earn--info {
    padding-left: 40px;
    .tag--badge {
      &.success {
        background: #05ba44;
      }
    }
    h2 {
      font-size: 5.8rem;
      font-weight: 500;
      margin: 10px 0;
      color: #ffffff;
    }
    p {
      font-size: 2.7rem;
      color: #ffffff;
    }
  }
  @media only screen and (max-width: 64em) {
    .earn--group,
    .earn--info {
      width: 100%;
      padding: 0;
    }
    .earn--info {
      margin-top: 100px;
    }
  }
}
</style>
