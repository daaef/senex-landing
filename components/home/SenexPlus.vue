<template>
  <section class="senex--plus">
    <div class="container">
      <div class="senex--side" data-uk-scrollspy="cls: uk-animation-scale-up;">
        <img src="/senex-side.png" alt="Senex everywhere image" />
      </div>
      <div
        class="senexplus--info"
        data-uk-scrollspy="cls: uk-animation-slide-right;"
      >
        <div class="logo">
          <img src="/senex-plus.png" alt="senexplus logo" />
        </div>
        <div class="text-content">
          <h4>Higher trade volumes from anywhere</h4>
          <p>
            Perform your remittance, stocks and investment transactions securely
            and exclusively anywhere at anytime
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SenexPlus'
}
</script>

<style lang="scss">
.senex--plus {
  padding: 80px 0;
  background: #dedff9;
  .container {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    grid-gap: 40px;
    .senex--side {
      padding: 40px 0;
    }
    @media (max-width: 1140px) {
      grid-template-columns: 1fr;
      .senex--side {
        order: 2;
        display: flex;
        justify-content: center;
        padding: 20px;
      }
      .text-content {
        text-align: center;
        justify-content: center;
        width: 100%;
        max-width: 400px;
      }
    }
    .senexplus--info {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 100px 0 60px;

      .logo {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: flex-end;
        width: 100%;
        padding-bottom: 10px;
        img {
          height: 30px;
        }
      }
      .text-content {
        h4 {
          font-size: 4rem;
          font-weight: 600;
          line-height: 1;
          margin-bottom: 20px;
          @media (min-width: 1360px) {
            font-size: 4rem;
          }
        }
        p {
          font-size: 2rem;
        }
      }
    }
  }
}
</style>
