<template>
  <div>
    <div class="background-jp">
      <div class="container">
        <div class="lg:flex android-developer-jp">
          <div class="ad-jp lg:w-1/2">
            <h3 class="heading-tertiary u-text-left">{{ title }}</h3>
          </div>
          <div class="ad-content-jp lg:w-1/2">
            <!-- <p class="bold-paragraph-jp paragraph">
              About the {{ title }} role
            </p> -->
            <div class="paragraph" v-html="description">
              <!-- {{ description }} -->
            </div>
            <!-- <p class="paragraph">
              As the Android Developer, you will be responsible for developing
              applications for devices powered by the Android operating system
              as well as the development of Android applications and their
              integration with back-end services.
            </p>
            <p class="bold-para-jp paragraph">
              What Your Day to Day Activities Will Be Like
            </p>
            <ul class="paragraph">
              <li>
                Design and development of professional business applications for
                the Android platform.
              </li>
              <li>
                Collaborate with cross-functional teams to define, design, and
                ship new features in a dynamic work environment.
              </li>
              <li>
                Work with external data sources/ APIs, unit-test code for
                robustness, including edge cases, usability, and general
                reliability.
              </li>
              <li>
                Work on fixing bugs and improving application responsiveness,
                quality and performance.
              </li>
              <li>
                Continuously discover, evaluate, and implement new technologies
                to improve development efficiency.
              </li>
            </ul> -->
            <a :href="applicationUrl" target="_blank">
              <button type="button" class="btn register-btn-jp">
                Apply now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    department: {
      type: String,
      default: ''
    },
    jobType: {
      type: String,
      default: ''
    },
    isRemote: {
      type: String,
      default: ''
    },
    applicationUrl: {
      type: String,
      default: ''
    },
    created: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>
