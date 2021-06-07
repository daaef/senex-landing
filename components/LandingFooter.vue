<template>
  <div>
    <div class="footer-con">
      <div class="container">
        <div class="lg:flex">
          <div class="brand-con lg:w-1/3">
            <h1 class="brand-con__title">Buy and sell crypto on Senexpay</h1>
            <span class="btn brand-con__register-btn">Create account</span>
          </div>
          <div class="links-con lg:w-2/3">
            <div class="flex flex-wrap lg:w-3/4 ml-auto">
              <div class="links-and-headers w-1/2 md:w-1/3">
                <h1 class="header">Company</h1>
                <ul>
                  <li><router-link to="/">About</router-link></li>
                  <li><router-link to="/">Press</router-link></li>
                  <li><router-link to="/">Blog</router-link></li>
                  <li><router-link to="/careers">Careers</router-link></li>
                </ul>
              </div>
              <div class="links-and-headers w-1/2 md:w-1/3">
                <h1>Support</h1>
                <ul>
                  <li><router-link to="/">FAQ</router-link></li>
                  <li><router-link to="/">Contact</router-link></li>
                  <li><router-link to="/">Learn</router-link></li>
                </ul>
              </div>
              <div class="links-and-headers w-1/2 md:w-1/3">
                <h1>Legal</h1>
                <ul>
                  <li><router-link to="/">Terms & Privacy</router-link></li>
                  <li><router-link to="/">FAQ</router-link></li>
                  <li><router-link to="/">FAQ</router-link></li>
                </ul>
              </div>
              <div class="links-and-headers w-1/2 md:w-1/3">
                <h1>Knowledge</h1>
                <ul>
                  <li><router-link to="/">Fee & Charges</router-link></li>
                  <li><router-link to="/">Affiliates</router-link></li>
                </ul>
              </div>
              <div class="links-and-headers w-1/2 md:w-1/3">
                <h1>Conglomerates</h1>
                <ul>
                  <li><router-link to="/">Senex Smart Homes</router-link></li>
                  <li><router-link to="/">Senex Autos</router-link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col-reverse lg:flex-row items-end">
          <div class="mr-auto lg:w-1/3">
            <div class="logo-copyright">
              <span class="logo-con"
                ><img src="/img/senexpay-logo-light.png"
              /></span>
              <span class="copyright">Senexpay © 2021</span>
              <div>
                <router-link to="/">Terms of Service | </router-link>
                <router-link to="/">Privacy Policy</router-link>
              </div>
            </div>
          </div>
          <div class="lg:w-2/3 w-full ml-auto">
            <div class="social-con lg:w-3/4 lg:ml-auto">
              <router-link to="/" class="block lg:inline-block"
                >Facebook</router-link
              >
              <router-link to="/" class="block lg:inline-block"
                >Twitter</router-link
              >
              <router-link to="/" class="block lg:inline-block"
                >Instagram</router-link
              >
              <router-link to="/" class="block lg:inline-block"
                >LinkedIn</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
