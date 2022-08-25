<template>
  <section class="getting--crypto">
    <img class="curves" src="/img/green-semi-circles-up.png" alt="" />
    <div class="container flex flex-wrap items-center">
      <div class="left--info" data-aos="fade-right" data-aos-once="true">
        <div class="tag--badge uppercase">Virtual Event</div>
        <h3>Getting into Crypto</h3>
        <p>
          Do you need guidance on how to start investing and earning in
          cryptocurrency? Worry no more! Join other crypto newbies in the weekly
          session with our Crypto experts.
        </p>
        <a :href="appLink + '/create-account'" class="dash--btn">
          Register for free</a
        >
      </div>
      <div class="right--card" data-aos="zoom-in" data-aos-once="true">
        <div class="event--card">
          <div class="card--top">
            <h4>Talk to a <br /><span>Crypto Advisor</span></h4>
          </div>
          <div class="card--base">
            <div class="host-1">
              <img src="/img/host2.png" alt="" />
            </div>
            <div class="host-2">
              <img src="/img/host1.png" alt="" />
            </div>
            <span class="event--time">Every Friday 8:00-9:00 PM </span>
            <h1>Teaching you the inner <br />windings of the Crypto market.</h1>
            <img class="event--coin" src="/img/bit3d.png" alt="bitcoin 3d" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GettingCrypto',
  data() {
    return {
      appLink: ''
    }
  },
  computed: {
    appLinkSync() {
      return this.appLink
    }
  },
  mounted() {
    this.appLink = process.env.APP_URL
  }
}
</script>

<style lang="scss">
.getting--crypto {
  background: transparent
    linear-gradient(296deg, #1265fb 0%, #cadbfa 0%, #dfebff 40%, #ffffff 100%);
  width: 100%;
  position: relative;
  padding: 100px 0;
  .curves {
    height: 250px;
    position: absolute;
    top: 0;
    width: 500px;
    left: 50%;
    filter: saturate(10%);
  }
  .left--info {
    width: 50%;
    padding-right: 40px;

    h3 {
      font-size: 4.5rem;
      font-weight: 500;
      margin: 10px 0;
    }
    p {
      font-size: 1.9rem;
      @media (max-width: 450px) {
        font-size: 2.2rem;
      }
    }

    a.dash--btn {
      color: #ffffff;
      transition: all 0.3s ease-in-out;
      background: #1265fb;
      padding: 15px 50px;
      border-radius: 8px;
      font-size: 1.8rem;
      text-align: center;
      display: inline-block;
      margin-top: 30px;
      @media (max-width: 450px) {
        font-size: 2.2rem;
        padding: 10px 35px;
      }
      &:hover {
        -webkit-background-clip: unset;
        -webkit-text-fill-color: unset;
        background: #104cbe;
      }
    }
    .dash--img-holder {
      margin-top: 40px;
      height: 70vh;
      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }
  }
  .right--card {
    display: flex;
    justify-content: right;
    width: 50%;
    padding-left: 40px;
    .event--card {
      border-radius: 25px;
      box-shadow: 1px 1px 20px rgba(128, 128, 128, 0.57);
      background: #ffffff;
      min-height: 400px;
      width: 500px;
      position: relative;
      .card--top {
        position: relative;
        padding: 40px;
        height: 200px;
        overflow: hidden;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        width: 100%;
        h4 {
          color: #ffffff;
          font-size: 3rem;
          span {
            font-size: 3.5rem;
            font-weight: 700;
            line-height: 0.2;
          }
        }
        & > * {
          position: relative;
        }
        &:before {
          content: '';
          position: absolute;
          top: 0;
          left: -55px;
          transform-origin: bottom left;
          transform: rotate(-10deg);
          height: 100%;
          width: 180%;
        }

        &:before {
          background: transparent
            linear-gradient(296deg, #1265fb 0%, #5237e0 100%);
        }
      }
      .card--base {
        position: relative;
        padding: 60px 40px 40px;

        .host-1,
        .host-2 {
          position: absolute;
          top: -10px;
          transform: translateY(-50%);
          transition: 0.3s ease-in-out;
          img {
            height: 60px;
          }
          z-index: 2;
          &:hover {
            z-index: 3;
            transform: translateY(-50%) scale(1.02);
          }
        }
        .host-2 {
          z-index: 1;
          transform: translateY(-50%) translateX(70%);
          &:hover {
            transform: translateY(-50%) translateX(70%) scale(1.02);
          }
        }
        .event--time {
          color: #0f58fb;
          font-size: 1.8rem;
          font-weight: bold;
        }
        h1 {
          font-size: 2.7rem;
          font-weight: bold;
          line-height: 1;
          @media (min-width: 1500px) {
            font-size: 2rem;
          }
        }
        .event--coin {
          position: absolute;
          right: 0;
          top: -70px;
          height: 200px;
        }
      }
    }
  }
  @media only screen and (max-width: 64em) {
    .left--info,
    .right--card {
      width: 100%;
      padding: 0;
    }
    .right--card {
      margin-top: 50px;
    }
    .right--card .event--card .card--base .event--coin {
      height: 120px;
    }
  }
}
.tag--badge {
  background: #4f39e1;
  color: #fafafa;
  font-size: 1.4rem;
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: bold;
  display: inline-block;
}
</style>
