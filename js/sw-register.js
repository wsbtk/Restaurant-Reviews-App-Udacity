
// Google Developer site was used to create the Service Worker
// https://developers.google.com/web/fundamentals/codelabs/offline/

if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/js/sw.js')
           .then(function() { console.log("Service Worker Registered"); });
}
