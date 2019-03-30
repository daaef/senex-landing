<template>
  <modal
    name="contact"
    width="300px"
    height="auto"
    classes="contact-form"
  >
    <div class="contact-form">
      <div class="title-area has-text-centered">
        <span>SenexPay Support</span>
        <img
          src="~/assets/contact-support.png"
          alt="contact support image"
          style="width: 28px; height: 28px; vertical-align: middle;"
        >
        <a
          class="closer"
          style="display: inline-block; float: right;"
          @click.prevent="$modal.hide('contact')"
        >
          x </a>
      </div>
      <form>
        <div class="field">
          <label for="" class="label">Email</label>
          <div class="control">
            <input
              v-model="email"
              v-validate="'required|email'"
              name="email"
              type="text"
              class="input"
              :class="{ 'is-danger': errors.has('email') }"
              placeholder="bruce@wayne.com"
            >
          </div>
          <p v-show="errors.has('email')" class="help is-danger">
            {{ errors.first('email') }}
          </p>
        </div>
        <div class="field">
          <label for="" class="label">Subject</label>
          <div class="control">
            <input
              v-model="subject"
              v-validate="'required'"
              name="subject"
              placeholder="What's your issue?"
              type="text"
              class="input"
              :class="{ 'is-danger': errors.has('subject') }"
            >
          </div>
          <p v-show="errors.has('subject')" class="help is-danger">
            {{ errors.first('subject') }}
          </p>
        </div>
        <div class="field">
          <label for="label">Message</label>
          <div class="control">
            <textarea
              v-model="message"
              class="textarea"
              placeholder="Type your message"
            />
          </div>
        </div>

        <div class="field send-btn-container">
          <button class="button">
            Send message
          </button>
        </div>
      </form>
    </div>
  </modal>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      subject: '',
      message: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-form {
  height: auto;
  background: #fbfbfb;
  border-radius: 20px;
  padding: 0.4rem 0.9rem 1.2rem 0.9rem;
  font-size: 0.75rem;
  label {
    font-weight: normal;
    font-size: 0.9rem;
    color: #1b70cf;
    font-weight: 500;
  }
  .title-area {
    color: #1b70cf;
    font-weight: 500;
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  .send-btn-container {
    text-align: center;
    button {
      background: #1b70cf;
      color: #ffffff;
    }
  }
}
</style>
