window.onNuxtReady(() => {
  window.cookieconsent.initialise({
    palette: {
      popup: {
        background: '#237afc'
      },
      button: {
        background: '#fff',
        text: '#237afc'
      }
    },
    theme: 'classic',
    position: 'bottom-left',
    content: {
      href: 'https://gdpr.eu/cookies/'
    }
  })
})
