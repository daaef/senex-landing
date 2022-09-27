export default {
  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'SenexPay',
      alternateName: 'Senex',
      url: 'https://www.senexpay.com',
      logo: 'https://www.senexpay.com/img/senexpay-logo-light.svg',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lagos, Nigeria',
        streetAddress:
          'Number One Lagos, 1, Akin Adesola Street, Victoria Island.'
      },
      email: 'hello@senexpay.com',
      telephone: '+234-916-259-8206',
      description:
        "SenexPay is the easiest and most reliable platform to exchange cryptocurrency. We are building Africa's biggest cross-border payments infrastructure. Pay seamlessly with Senex today!",
      sameAs: [
        'https://web.facebook.com/senexpay/',
        'https://twitter.com/senexpay/',
        'https://www.youtube.com/channel/UCf-zuXt2vynE1TFeiY1sw1Q',
        'https://www.instagram.com/senexpay/',
        'https://linkedin.com/company/senexpay/'
      ],
      potentialAction: {
        '@type': 'ViewAction',
        target: [
          'https://www.senexpay.com',
          {
            '@type': 'EntryPoint',
            urlTemplate: 'https://senexpay.com',
            contentType: 'application/json+ld'
          },
          'android-app://com.senexpay.mobile',
          {
            '@type': 'EntryPoint',
            urlTemplate: 'com.senexpay.mobile',
            application: {
              '@type': 'SoftwareApplication',
              '@id': '5MPM3W735H',
              name: 'Senexpay iPhone and iPad App',
              operatingSystem: 'iOS'
            }
          }
        ]
      }
    }
  }
}
