<template>
  <div class="container referral">
    <div class="referral__header u-my-sm">
      <div class="referral__default_img u-mb-mini-md">T</div>
      <p
        class="
          referral__invite-text
          heading-tertiary heading-tertiary--line-height-1
          u-wt-600 u-mb-mini-md
        "
      >
        Invite your pals and get up to $100 worth of Bitcoin.
      </p>
      <p class="paragraph">
        Introduce your friends to the easiest way to buy and sell Bitcoin and
        USDT.
      </p>
    </div>
    <div class="referral__footer">
      <div class="referral__footer-body">
        <div class="referral__footer-email-form">
          <div class="referral__footer-email-box">
            <input
              type="email"
              placeholder="Enter email(s)"
              class="referral__footer-email-input"
            />
            <p class="paragraph paragraph--sm">Separate emails with commas</p>
          </div>
          <div class="referral__footer-send-box">
            <button class="referral__footer-send-btn">Send</button>
            <p class="paragraph paragraph--sm u-link-color">Preview email</p>
          </div>
        </div>
        <div class="referral__footer-link-content u-mt-mini-md">
          <div class="referral__footer-invite-box">
            <p class="paragraph u-wt-500 u-mb-10">Your Invite Link</p>
            <div class="referral__footer-invite-input-box">
              <input type="text" class="referral__footer-invite-input" />
              <button class="referral__footer-invite-copy">Copy</button>
            </div>
          </div>
          <div class="referral__footer-socials">
            <p class="paragraph u-wt-500 u-mb-10">Share via Social</p>
            <div class="referral__footer-social-img-box">
              <a
                href="https://www.instagram.com/senexpay/"
                target="_blank"
                rel="noopener"
                ><img src="/img/blue-instagram.svg" alt="instagram"
              /></a>
              <a
                href="https://web.facebook.com/senexpay/"
                target="_blank"
                rel="noopener"
                ><img src="/img/blue-facebook.svg" alt="facebook"
              /></a>
              <a
                href="https://twitter.com/senexng/"
                target="_blank"
                rel="noopener"
                ><img src="/img/blue-twitter.svg" alt="twitter"
              /></a>
              <a
                href="https://linkedin.com/company/senexpay/"
                target="_blank"
                rel="noopener"
                ><img src="/img/blue-linkedin.svg" alt="linkedin"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'about'
}
</script>

<style></style>
