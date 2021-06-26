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
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:w-3/5 ml-auto">
              <div class="links-and-headers">
                <h1 class="header">Company</h1>
                <ul>
                  <li><router-link to="/about">About</router-link></li>
                  <li><router-link to="/press">Press</router-link></li>
                  <li><router-link to="/blog">Blog</router-link></li>
                  <li><router-link to="/careers">Careers</router-link></li>
                </ul>
              </div>
              <div class="links-and-headers">
                <h1 class="header">Support</h1>
                <ul>
                  <li><router-link to="/faq">FAQ</router-link></li>
                  <li><router-link to="/contact">Contact</router-link></li>
                  <li><router-link to="/learn">Learn</router-link></li>
                </ul>
              </div>
              <div class="links-and-headers">
                <h1 class="header">Legal</h1>
                <ul>
                  <li>
                    <router-link to="/privacy">Privacy</router-link>
                    <router-link to="/terms">& Terms</router-link>
                  </li>
                  <li><router-link to="/faq">FAQ</router-link></li>
                  <li><router-link to="/faq">FAQ</router-link></li>
                </ul>
              </div>
              <div class="links-and-headers">
                <h1 class="header">Knowledge</h1>
                <ul>
                  <li>
                    <router-link to="/charges">Fee & Charges</router-link>
                  </li>
                  <li>
                    <router-link to="/affiliates">Affiliates</router-link>
                  </li>
                </ul>
              </div>
              <div class="links-and-headers">
                <h1 class="header">Conglomerates</h1>
                <ul>
                  <li>
                    <router-link to="/smart-homes"
                      >Senex Smart Homes</router-link
                    >
                  </li>
                  <li><router-link to="/autos">Senex Autos</router-link></li>
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
              <div class="terms-link">
                <router-link to="/terms">Terms of Service | </router-link>
                <router-link to="/privacy">Privacy Policy</router-link>
              </div>
            </div>
          </div>
          <div class="lg:w-2/3 lg:flex justify-end w-full ml-auto">
            <div class="lg:w-3/5">
              <div class="lg:flex lg:w-4/5 footer-social-con">
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
  </div>
</template>

<script>
export default {}
</script>

<style></style>
