<template>
  <section class="contact">
    <div class="has-text-centered section-one">
      <h1 class="title">
        Contact Us
      </h1>
      <p class="bod">
        Get in touch with us.
      </p>
      <p class="loc">
        Nigeria | Ghana | South Africa
      </p>
    </div>
    <div class="section-two wrapper">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-content">
                <div class="ico">
                  <i aria-hidden="true" class="fas fa-map-marker-alt" />
                </div>
                <h4>
                  Our Office
                </h4>
                <p>
                  Lekki, Lagos, Nigeria.
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-content">
                <div class="ico">
                  <i aria-hidden="true" class="fas fa-at" />
                </div>
                <h4>
                  Email Us
                </h4>
                <p>
                  info@senexpay.com
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-content">
                <div class="ico">
                  <i aria-hidden="true" class="fas fa-phone" />
                </div>
                <h4>
                  Call Us
                </h4>
                <p>
                  +234 705 274 4444
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-three wrapper">
      <div class="container">
        <h3>Send Us A Message!</h3>
        <p>We would love to hear from you!</p>
        <form class="form" @submit.prevent="sendMessage">
          <div class="field">
            <div class="control">
              <input
                v-model="formMessage.name"
                v-validate="'required|alpha_spaces|min:5|max:20'"
                name="name"
                type="text"
                class="input is-medium"
                :class="{ 'is-danger': errors.has('name') }"
                placeholder="Your Name"
              >
            </div>
            <p v-show="errors.has('name')" class="help is-danger">
              {{ errors.first('name') }}
            </p>
          </div>
          <div class="field">
            <div class="control">
              <input
                v-model="formMessage.email"
                v-validate="'required'"
                name="email"
                type="email"
                class="input is-medium"
                :class="{ 'is-danger': errors.has('email') }"
                placeholder="Your Email"
              >
            </div>
            <p v-show="errors.has('email')" class="help is-danger">
              {{ errors.first('email') }}
            </p>
          </div>
          <div class="field">
            <div class="control">
              <input
                v-model="formMessage.subject"
                v-validate="'required|min:10|max:50'"
                name="subject"
                type="text"
                class="input is-medium"
                :class="{ 'is-danger': errors.has('subject') }"
                placeholder="Subject"
              >
            </div>
            <p v-show="errors.has('subject')" class="help is-danger">
              {{ errors.first('subject') }}
            </p>
          </div>
          <div class="field">
            <textarea
              v-model="formMessage.body"
              v-validate="'required|min:20'"
              name="message"
              class="textarea is-medium"
              :class="{ 'is-danger': errors.has('message') }"
              placeholder="This is my message"
            />
            <p v-show="errors.has('message')" class="help is-danger">
              {{ errors.first('message') }}
            </p>
          </div>
          <button
            class="button is-fullwidth is-medium"
            :class="{ 'is-loading': loading }"
            :disabled="errors.any()"
            style="font-weight: 700; padding-top: 9px; background: #162e55; color: #fff;"
            @click="sendMessage"
          >
            Send
          </button>
        </form>
      </div>
    </div>
    <div class="section-four wrapper">
      <div class="container">
        <div class="live">
          <h5 class="title">
            Talk to a live agent
          </h5>
          <div @click.prevent="openLiveChat()">
            <i aria-hidden="true" class="fas fa-headset fa-2x" />
          </div>
        </div>
        <div class="follow">
          <p>Let's connect!</p>
          <p class="socials is-size-3">
            <span><a :href="socialLinks.facebookUrl" aria-label="Facebook" target="_blank" rel="noreferrer noopener"><i class="fab fa-facebook-f" /></a></span>
            <span><a :href="socialLinks.instagramUrl" aria-label="Instagram" target="_blank" rel="noreferrer noopener"><i class="fab fa-instagram" /></a></span>
            <span><a :href="socialLinks.twitterUrl" aria-label="Twitter" target="_blank" rel="noreferrer noopener"><i class="fab fa-twitter" /></a></span>
            <span><a :href="socialLinks.whatsappUrl" aria-label="Whatsapp" target="_blank" rel="noreferrer noopener"><i class="fab fa-whatsapp" /></a></span>
          </p>
        </div>

        <div class="is-flex cta">
          <h4>Buy/Sell your Bitcoins today!</h4>
          <nuxt-link to="/">
            Start
            <i aria-hidden="true" class="is-hidden-mobile fas fa-long-arrow-alt-right" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'fullblue',
  head() {
    return {
      title: 'Contact Us - SenexPAY',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Get in touch with us. We would love to hear from you!'
        }
      ],
      link: [{ rel: 'canonical', href: 'https://www.senexpay.com/contact' }]
    }
  },
  data() {
    return {
      socialLinks: {
        facebookUrl: process.env.FACEBOOK_URL,
        instagramUrl: process.env.INSTAGRAM_URL,
        twitterUrl: process.env.TWITTER_URL,
        whatsappUrl: `https://api.whatsapp.com/send?phone=+${
          process.env.WHATSAPP_ID
        }&text=Hello%21%20I%20want%20to%20buy/sell%20Bitcoin`
      },
      loading: false,
      formMessage: {
        name: '',
        email: '',
        subject: '',
        body: ''
      }
    }
  },
  computed: {
    canSend() {
      const poer = this.formMessage
      return poer.email && poer.subject && poer.body
    }
  },
  methods: {
    sendMessage() {
      this.$validator.validate().then(valid => {
        if (valid) {
          this.loading = true
          const payload = this.formMessage

          this.$axios
            .post('/contact/', payload)
            .then(resp => {
              this.loading = false
              this.formMessage = {
                name: '',
                email: '',
                subject: '',
                body: ''
              }
              this.errors.clear()
              this.$swal({
                title: 'Success!',
                type: 'success',
                position: 'top-end',
                text: resp.message,
                timer: 5 * 1000,
                toast: true,
                showConfirmButton: false
              })
            })
            .catch(() => {
              this.loading = false
              this.$swal({
                title: '',
                type: 'error',
                position: 'top-end',
                text: 'Message sending failed, Try again later!',
                timer: 5 * 1000,
                toast: true,
                showConfirmButton: false
              })
            })
        }
      })
    },
    openLiveChat() {
      window.Tawk_API.maximize()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/fonts.scss';
.contact {
  font-family: $font-inter;
  font-size: 18px;
  color: #000000;

  .wrapper {
    padding: 40px 10px;
  }

  .wrapper:last-child {
    padding: 40px 10px 0px;
  }

  .title {
    margin-bottom: 1rem;
    color: #162e55;
    text-align: center;
  }

  .section-one {
    padding: 40px 10px 25px;
    color: #ffffff;
    background: #162e55;
    .title {
      margin-bottom: 1rem;
      color: #ffffff;
    }

    .bod {
      max-width: 800px;
      margin: 0 auto;
    }

    .loc {
      font-size: 0.85rem;
      padding: 10px;
    }
  }

  .section-two {
    background: url('~assets/free-abstract-pattern-vector.jpg');
    background-position: center center;
    background-repeat: repeat;
    background-size: 300px;
    background-color: rgba(255, 255, 255, 0.92);
    background-blend-mode: lighten;

    .container {
      margin-bottom: 2rem;
      max-width: 1050px;
      margin: 0 auto;
    }

    .card {
      text-align: left;
      border-radius: 8px;
      box-shadow: 0px 32px 80px -40px rgba(0, 0, 0, 0.24);
      color: #000000;

      h4 {
        margin-bottom: 7px;
      }

      .ico {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
        width: 55px;
        height: 55px;
        fill: #1f64d6;
        color: #1f64d6;
        border: 1px solid #f5f6dd;
        border-radius: 50%;
        background-color: rgba(59, 79, 228, 0.12);

        i {
          font-size: 1.4rem;
        }
      }
    }
  }

  .section-three {
    background: #efefef;
    text-align: center;

    h3 {
      margin-bottom: 7px;
    }

    .form {
      margin: 0 auto;
      text-align: left;
      max-width: 500px;
      padding: 5px 10px;
    }
  }

  .section-four {
    .live {
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
        width: 95px;
        height: 95px;
        fill: #1f64d6;
        color: #1f64d6;
        border: 1px solid #f5f6dd;
        border-radius: 50%;
        background-color: rgba(59, 79, 228, 0.12);
        cursor: pointer;
        margin: 0 auto;
      }
    }

    .cta {
      background: #162e55;
      color: #ffffff;
      border-radius: 10px;
      padding: 30px;
      justify-content: space-between;
      align-items: center;
      max-width: 800px;
      margin: 0 auto;

      h4 {
        margin: 0;
        line-height: 1.5;
        color: #ffffff;
      }

      a {
        // color: #162e55;
        color: #ffffff;
        border: 1px solid #ffffff;
        padding: 8px 22px;
        border-radius: 28px;
        display: inline;
      }
    }

    .follow {
      text-align: center;
      padding: 30px 10px;
      color: #5f5f5f;

      p {
        margin: 0;
      }

      i {
        color: #162e55;
        margin: 10px;
      }
    }
  }
}
</style>
