<template>
  <div>
    <div class="footer-con">
      <div class="container">
        <div class="lg:flex">
          <div class="mr-auto lg:w-1/3">
            <div class="logo-copyright">
              <span class="logo-con" @click="toHome()"
                ><img src="/img/senexpay-logo-light.svg" alt="logo"
              /></span>
              <span class="copyright">SenexPay © 2021</span>
              <!-- <div class="terms-link">
                <router-link to="/terms">Terms of Service | </router-link>
                <router-link to="/privacy">Privacy Policy</router-link>
              </div> -->
            </div>
          </div>
          <div class="links-con lg:w-2/3">
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:w-3/5 ml-auto">
              <div class="links-and-headers">
                <h1 class="header">Company</h1>
                <ul>
                  <li><router-link to="/about">About</router-link></li>
                  <!-- <li><router-link to="/press">Press</router-link></li> -->
                  <!-- <li><router-link to="/blog">Blog</router-link></li> -->
                  <li><router-link to="/careers">Careers</router-link></li>
                </ul>
              </div>
              <div class="links-and-headers">
                <h1 class="header">Support</h1>
                <ul>
                  <li><router-link to="/faqs">FAQs</router-link></li>
                  <li><router-link to="/contact">Contact Us</router-link></li>
                  <!-- <li><router-link to="/learn">Learn</router-link></li> -->
                </ul>
              </div>
              <div class="links-and-headers">
                <h1 class="header">Legal</h1>
                <ul>
                  <li>
                    <router-link to="/terms">Terms of Service</router-link>
                  </li>
                  <li>
                    <router-link to="/privacy">Privacy Policy</router-link>
                  </li>
                  <!-- <li>
                    <router-link to="/cookie-policy"
                      >Cookies Policy</router-link
                    >
                  </li> -->
                </ul>
              </div>
              <!-- <div class="links-and-headers">
                <h1 class="header">Knowledge</h1>
                <ul>
                  <li>
                    <router-link to="/charges">Fee & Charges</router-link>
                  </li>
                  <li>
                    <router-link to="/affiliates">Affiliates</router-link>
                  </li>
                </ul>
              </div> -->
              <!-- <div class="links-and-headers">
                <h1 class="header">Conglomerates</h1>
                <ul>
                  <li>
                    <router-link to="/smart-homes"
                      >Senex Smart Homes</router-link
                    >
                  </li>
                  <li><router-link to="/autos">Senex Autos</router-link></li>
                </ul>
              </div> -->
            </div>
          </div>
        </div>
        <div class="flex flex-col-reverse lg:flex-row items-end">
          <div class="mr-auto lg:w-1/3">
            <!-- <div class="logo-copyright">
              <span class="logo-con"
                ><img src="/img/senexpay-logo-light.svg"
              /></span>
              <span class="copyright">SenexPay © 2021</span>
              <div class="terms-link">
                <router-link to="/terms">Terms of Service | </router-link>
                <router-link to="/privacy">Privacy Policy</router-link>
              </div>
            </div> -->
          </div>
          <div class="lg:w-2/3 lg:flex justify-end w-full ml-auto">
            <div class="lg:w-3/5">
              <div class="lg:flex lg:w-4/5 footer-social-con">
                <a
                  href="https://www.instagram.com/senexpay/"
                  class="block lg:inline-block"
                  target="_blank"
                  rel="noopener"
                  >Instagram</a
                >
                <a
                  href="https://web.facebook.com/senexpay/"
                  class="block lg:inline-block"
                  target="_blank"
                  rel="noopener"
                  >Facebook</a
                >
                <a
                  href="https://twitter.com/senexng/"
                  class="block lg:inline-block"
                  target="_blank"
                  rel="noopener"
                  >Twitter</a
                >
                <a
                  href="https://linkedin.com/company/senexpay/"
                  class="block lg:inline-block"
                  target="_blank"
                  rel="noopener"
                  >LinkedIn</a
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
export default {
  methods: {
    toHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style></style>
