<template>
  <section class="earn--passive">
    <div class="container flex flex-wrap items-center justify-center">
      <input id="toggleExpand" hidden type="checkbox" checked />
      <div class="earn--group" data-aos="fade-down" data-aos-once="true">
        <label for="toggleExpand" class="cursor-pointer">
          <img src="/img/earn-group.png" alt="" />
        </label>
      </div>
      <div class="earn--info" data-aos="fade-up" data-aos-once="true">
        <div class="tag--badge uppercase success">new</div>
        <h2>Earn Passive Income</h2>
        <p>
          Earn up to 5 USD each time you invite a friend to register and perform
          a transaction on SenexPay. There is no limit to what you can earn!
        </p>
        <a :href="appLink + '/create-account'" class="dash--btn">
          Get Started
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EarnPassive',
  data() {
    return {
      appLink: '',
      expandedAni: true
    }
  },
  mounted() {
    this.appLink = process.env.APP_URL
  }
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
  #toggleExpand:checked {
    & ~ .earn--group {
      &:before {
        content: '';
        height: 50%;
        transform: scale(1);
        width: 70%;
        background: #00fec3;
        border-top-right-radius: 50px;
        position: absolute;
        right: 33px;
        top: -7px;
        display: block;
        @media (max-width: 1023px) {
          right: -7px;
          border-top-right-radius: 65px;
        }
        @media (max-width: 767px) {
          border-top-right-radius: 40px;
        }
        @media (max-width: 435px) {
          border-top-right-radius: 30px;
        }
      }

      &:after {
        content: '';
        height: 50%;
        width: 70%;
        background: #e1fe00;
        border-bottom-left-radius: 50px;
        position: absolute;
        left: -7px;
        bottom: -7px;
        display: block;
        @media (max-width: 1023px) {
          right: -7px;
          border-bottom-left-radius: 65px;
        }
        @media (max-width: 767px) {
          border-bottom-left-radius: 40px;
        }
        @media (max-width: 435px) {
          border-bottom-left-radius: 30px;
        }
      }
    }
  }
  .earn--group {
    display: block;
    padding-right: 40px;
    position: relative;
    max-width: 550px;
    @media (max-width: 767px) {
      max-width: 400px;
      margin: 0 auto;
    }
    @media (max-width: 435px) {
      //max-width: 270px;
      margin: 0 auto;
      &:before {
        transition: 0.3s ease-in-out;
        content: '';
        height: 50%;
        width: 70%;
        background: #00fec3;
        border-top-right-radius: 35px;
        position: absolute;
        right: -7px;
        top: -7px;
        display: block;
      }
      &:after {
        transition: 0.3s ease-in-out;
        content: '';
        height: 50%;
        width: 70%;
        background: #e1fe00;
        border-bottom-left-radius: 30px;
        position: absolute;
        left: -7px;
        bottom: -7px;
        display: block;
      }
    }
    &:before,
    &:after {
      content: '';
      transition: 0.3s ease-in-out;
      height: 50%;
      width: 70%;
      position: absolute;
    }
    &:before {
      right: 40px;
      top: 0;
      border-top-right-radius: 50px;
      background: #00fec3;

      @media (max-width: 1023px) {
        right: 0;
      }
    }
    &:after {
      left: 0;
      bottom: 0;
      border-bottom-left-radius: 50px;
    }
    &:hover {
      &:before {
        content: '';
        height: 50%;
        transform: scale(1);
        width: 70%;
        background: #00fec3;
        border-top-right-radius: 50px;
        position: absolute;
        right: 33px;
        top: -7px;
        display: block;
        @media (max-width: 1023px) {
          right: -7px;
          border-top-right-radius: 65px;
        }
        @media (max-width: 767px) {
          border-top-right-radius: 40px;
          top: 0;
          right: 0;
        }
        @media (max-width: 435px) {
          border-top-right-radius: 30px;
        }
      }

      &:after {
        content: '';
        height: 50%;
        width: 70%;
        background: #e1fe00;
        border-bottom-left-radius: 50px;
        position: absolute;
        left: -7px;
        bottom: -7px;
        display: block;
        @media (max-width: 1023px) {
          left: -7px;
          border-bottom-left-radius: 65px;
        }
        @media (max-width: 767px) {
          border-bottom-left-radius: 40px;
          bottom: 0;
          left: 0;
        }
        @media (max-width: 435px) {
          border-bottom-left-radius: 30px;
        }
      }
    }
    img {
      position: relative;
      width: 100%;
      z-index: 2;
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
      font-size: 5rem;
      font-weight: 500;
      margin: 10px 0;
      color: #ffffff;
    }
    p {
      font-size: 1.9rem;
      color: #ffffff;
      @media (max-width: 450px) {
        font-size: 2.2rem;
      }
    }
  }
  @media only screen and (max-width: 64em) {
    .earn--group,
    .earn--info {
      width: 100%;
      padding: 0;
    }
    .earn--info {
      margin-top: 50px;
    }
  }
}
</style>
