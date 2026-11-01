// Helyx no celular: liga o "servidor" do aparelho (service worker) e depois abre as telas.
window.HELYX_MOBILE = true;
(function () {
  var BASE = "/helyx-celular";
  function start() { import(BASE + '/js/app.js'); }
  if (!('serviceWorker' in navigator)) {
    document.querySelector('.boot').textContent = 'Este navegador não consegue rodar o Helyx. Use o Safari (iPhone) ou o Chrome (Android).';
    return;
  }
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist();
  navigator.serviceWorker.register(BASE + '/sw.js', { scope: BASE + '/' });
  if (navigator.serviceWorker.controller) start();
  else navigator.serviceWorker.addEventListener('controllerchange', function () { start(); }, { once: true });
})();
