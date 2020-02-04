;(function() {
  const options = {
    whatsapp: '+2348184899239', // WhatsApp number
    call_to_action: 'Message us', // Call to action
    position: 'right' // Position may be 'right' or 'left'
  }
  const proto = document.location.protocol
  const host = 'whatshelp.io'
  const url = proto + '//static.' + host
  const s = document.createElement('script')
  s.type = 'text/javascript'
  s.async = true
  s.src = url + '/widget-send-button/js/init.js'
  s.onload = function() {
    // eslint-disable-next-line no-undef
    WhWidgetSendButton.init(host, proto, options)
  }
  const x = document.getElementsByTagName('script')[0]
  x.parentNode.insertBefore(s, x)
})()
