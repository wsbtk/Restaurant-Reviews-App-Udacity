
// Google Developer site was used to create the Service Worker
// https://developers.google.com/web/fundamentals/codelabs/offline/

if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('../sw.js')
           .then(function() { console.log("Service Worker Registered"); });
}
