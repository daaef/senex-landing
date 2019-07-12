window.$OneSignal = window.OneSignal = window.OneSignal || [];

OneSignal.push(['init', {
  "appId": "e8e15880-b1f2-4969-b161-7ecc0c504f8a",
  "allowLocalhostAsSecureOrigin": true,
  "welcomeNotification": {
    "disable": true
  }
}]);

export default function (ctx, inject) {
  inject('OneSignal', OneSignal)
}
