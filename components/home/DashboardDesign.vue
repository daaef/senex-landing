<template>
  <section class="dashboard--design">
    <div class="container">
      <div class="" data-aos="fade-down" data-aos-once="true">
        <h2>A Powerful Dashboard <br />Designed with You in Mind</h2>
        <p>
          Get a full bird's-eye view of all your crypto activities on the
          dashboard.
        </p>
        <div class="text-center">
          <a :href="appLink + '/'" target="_blank" class="dash--btn">
            Get Started</a
          >
        </div>
      </div>
      <div class="dash--img-holder" data-aos="fade-up" data-aos-once="true">
        <img src="~/assets/img/dash.png" alt="Dashboard--img" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DashboardDesign',
  data() {
    return {
      appLink: ''
    }
  },
  mounted() {
    this.appLink = this.$config.appLink
  }
}
</script>

<style lang="scss">
.dashboard--design {
  background: #064ebe;
  min-height: 900px;
  position: relative;
  width: 100%;
  padding: 100px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media only screen and (max-width: 1024px) {
    min-height: unset;
    .dash--img-holder {
      margin-top: 40px;
      height: unset !important;
    }
  }
  &:before {
    content: '';
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 50%;
    position: absolute;
    background: url(/dashboard--shape.png) no-repeat center top;
    background-size: contain;
  }
  h2 {
    background: transparent linear-gradient(100deg, #ffffff 5%, #00ffff 95%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 5rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 30px;
    line-height: 1.2em;
    @media (max-width: 767px) {
      font-size: 3.5rem;
    }
    @media (max-width: 400px) {
      font-size: 4rem;
    }
  }
  p {
    font-size: 1.8rem;
    color: #fafafa;
    text-align: center;
    @media (max-width: 450px) {
      font-size: 2.2rem;
    }
  }
  .dash--img-holder {
    margin-top: 40px;
    height: 500px;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      object-position: bottom;
    }
  }
  a.dash--btn {
    color: #064ebe;
    background: #fafafa;
    &:hover {
      background: #e3e3e3;
    }
  }
}
a.dash--btn {
  color: #ffffff;
  transition: all 0.3s ease-in-out;
  background: #064ebe;
  padding: 12px 18px;
  border-radius: 8px;
  font-size: 1.8rem;
  text-align: center;
  display: inline-block;
  margin-top: 30px;
  align-self: flex-start;
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
</style>
