<template>
  <div class="main-verify-email-div">
    <div class="holder">
      <LogoImage />
      <div class="card-holder">
        <span class="c-header"><strong>EMAIL VERIFICATION</strong></span>
        <div class="img-wrapper">
          <img class="image" src="/img/email-verif.svg" alt="email" />
        </div>
        <span class="sent-email"
          >We just sent a verification email to
          <strong>{{ email }}</strong></span
        >
        <span class="prom-folder"
          >Check in your promotions folder if you don’t see it in your
          inbox.</span
        >
      </div>
    </div>
  </div>
</template>
<script>
// import CardTitle from '@/components/Base/Card/CardTitle'

export default {
  components: {
    // CardTitle
  },
  layout: 'blank',
  props: {
    email: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.main-verify-email-div {
  background-color: #162f55;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 0 18px;
}

.holder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 460px;
  margin: auto;
}

.card-holder {
  width: 100%;
  padding: 20px 50px;
  background-color: white;
  border-radius: 6px;
}

.icon {
  margin: auto;
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

#logo {
  height: 40px;
}

.c-header {
  display: inline-block;
  width: 100%;
  text-align: center;
  margin: 20px 0;
  font-size: 20px;
  font-weight: 500;
}

.img-wrapper {
  width: 100px;
  margin: auto;
}

.image {
  width: 100%;
  height: auto;
}

.sent-email {
  display: block;
  width: 70%;
  margin: 10px auto 20px auto;
  text-align: center;
}

.prom-folder {
  display: block;
  width: 100%;
  margin: 10px auto 20px auto;
  text-align: center;
  color: #707070;
}
.submit-btn-holder {
  width: 100%;
  margin: auto;
  height: 40px;
  margin-bottom: 20px;
}

.submit-btn {
  background-color: #0b913a;
  color: #ffffff;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid;
  cursor: pointer;
}

@media screen and (min-width: 450px) {
  .card-holder {
    padding: 40px;
  }
}
</style>
