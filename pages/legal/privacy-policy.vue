<template>
  <section class="section">
    <div class="container wrapper">
      <div class="columns">
        <div class="column card is-6 is-offset-3">
          <p class="title has-text-centered has-text-weight-semibold">
            Privacy Policy
          </p><hr>
          <p>
            Please note that SenexPAY is owned and managed by Senex Payment Services
            Limited, Nigeria. The objective of this Privacy Policy is to set out in an accountable
            and transparent way the process in which SenexPAY collects and uses your Personal Information.
          </p>
          <ol>
            <li>
              <span class="subtitle">Collecting Personal Information</span>
              <p>
                If you wish to transact on and use the Site, SenexPAY will obtain information
                about you, including Personal Information. The Personal Information most
                often collected and maintained in a customer file includes, but not limited to,
                name, an address for service, government identification, and banking
                information.
              </p>
              <p>Personal Information collected is usually to:</p>
              <ul>
                <li>Establish and maintain a responsible commercial relationship with you;</li>
                <li>Understand your needs and your eligibility for products and services;</li>
                <li>Provide information to you about developments and new products, including changes and enhancements to the Site;</li>
                <li>Develop, enhance, and market products and services, and provide products and services to you;</li>
                <li>Process billing and collection of any fees;</li>
                <li>Conduct surveys and get feedback from you;</li>
                <li>Provide you with news and other matters of general interest to you as a SenexPAY customer; and,</li>
                <li>To meet SenexPAY’s legal and regulatory requirements.</li>
              </ul>
            </li><br>
            <li>
              <span class="subtitle">Using Personal Information</span>
              <p>
                SenexPAY is committed to protecting your privacy. Internally,
                only employees with a business need to know Personal Information,
                or whose duties reasonably require access to it, are granted access
                to customers’ Personal Information. The Site’s systems and data are
                reviewed continuously to ensure that you are getting the best possible
                service and that leading security features are in place.
              </p>
              <p>
                We must reserve the right to retain and share specific Personal Information
                to meet our regulatory requirements and further to our contractual agreements
                with partners and third parties.
              </p>
              <p>
                SenexPAY reserves the right to block access for any user accessing the
                Site via a proxy service intending to conceal originating identity, and
                this includes access via the Tor anonymity network.
              </p>
              <p>
                Personal Information and other data may get exported outside of the
                jurisdiction in which you reside. Your Personal Information may be processed
                and stored in a foreign country or countries. Under those circumstances, the
                governments, courts, law enforcement, or regulatory agencies of that country
                or those countries may be able to obtain access to your Personal Information
                through foreign laws. You need to be aware that the privacy standards of those
                countries may be lower than those of the jurisdiction in which you reside.
              </p>
            </li><br>
            <li>
              <span class="subtitle">Protecting Your Personal Information</span>
              <p>
                This Privacy Policy and the use of your Personal Information only applies to
                the information you provide. Please note that if you disclose Personal Information
                or personally sensitive data using the Internet, such as through chat rooms,
                communities, bulletin boards, or other public online forums, this information may
                be collected and used by other persons or companies over which SenexPAY has no
                control. It is your responsibility to review the privacy statements, policies,
                terms, and conditions of any person or company to whom you choose to link or with
                whom you wish to contract. SenexPAY is not responsible for the privacy statements,
                policies, terms, conditions, or other content of any website not owned or managed
                by SenexPAY.
              </p>
              <p>
                SenexPAY does its best to protect and safeguard Personal Information, but there
                are protective measures you should take, as well. Please do not share your Personal
                Information with others unless you understand the purpose of their request for it and
                you know with whom you are dealing. Do not keep sensitive Personal Information in your
                e-mail inbox or on Webmail. If you are asked to assign passwords to connect you to
                your Personal Information, you should use a secure password and always use
                two-factor authentication (2FA), where available. It would be best if you changed
                your password regularly.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'simple',
  head() {
    return {
      title: 'Privacy Policy - SenexPAY',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'This is to set out in an accountable and transparent way the process in which SenexPAY collects and uses your Personal Information.'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://senexpay.com/legal/privacy-policy'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/fonts.scss';

div.wrapper {
  margin-bottom: 2.2em;
  margin-top: 1.5rem;
  font-family: $font-avenir;
  .title {
    font-size: 1.7em;
    color: #1b70cf;
  }
}
.card {
  padding: 2rem 1.5rem;
}
</style>
