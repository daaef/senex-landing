<template>
  <div class="">
    <div class="landing-nav">
      <div class="nav-holder container">
        <router-link to="/" class="logo-con"
          ><img src="/img/senexpay-logo-light.png" class="logo"
        /></router-link>
        <div class="nav-con">
          <nav class="hidden lg:flex nav">
            <div class="link-con">
              <router-link class="link" to="/about">About</router-link>
              <router-link class="link" to="/learn">Learn</router-link>
              <router-link class="link" to="/faq">FAQ</router-link>
              <router-link class="link" to="/support">Support</router-link>
            </div>
            <div class="register-con">
              <router-link to="/login" class="log-in link">Log in</router-link>
              <router-link to="/register" class="btn register-btn"
                >Create your account</router-link
              >
            </div>
          </nav>
        </div>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: 'SFPro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
