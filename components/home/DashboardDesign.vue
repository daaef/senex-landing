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
          <a :href="appLink + '/create-account'" class="dash--btn">
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
    this.appLink = process.env.APP_URL
  }
}
</script>

<style lang="scss">
.dashboard--design {
  background: #041d45;
  min-height: 100vh;
  width: 100%;
  padding: 100px 0 0;
  @media only screen and (max-width: 64em) {
    min-height: unset;
  }

  h2 {
    background: transparent linear-gradient(100deg, #1265fb 5%, #00ffff 95%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 5rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 30px;
    line-height: 1.2em;
  }
  p {
    font-size: 1.8rem;
    color: #fafafa;
    text-align: center;
  }
  .dash--img-holder {
    margin-top: 40px;
    height: 70vh;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      object-position: bottom;
    }
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
  &:hover {
    -webkit-background-clip: unset;
    -webkit-text-fill-color: unset;
    background: #104cbe;
  }
}
</style>
