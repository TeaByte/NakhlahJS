// Theme loader
const storedTheme = localStorage.getItem("selectedTheme");
if (storedTheme) {
  document.documentElement.setAttribute("data-theme", storedTheme);
} else {
  localStorage.setItem("selectedTheme", "nord");
}

// PWA install button
let installPrompt = null;
document.addEventListener('DOMContentLoaded', () => {
  if ('serviceWorker' in navigator && 'PushManager' in globalThis) {
    globalThis.addEventListener('beforeinstallprompt', (e) => {
      console.log('beforeinstallprompt fired');
      const installButton = document.getElementById('install-pwa');
      if (!installButton) {
        console.log('install button not found');
        return;
      }
      e.preventDefault();
      installPrompt = e;
      installButton.style.display = 'block';
      installButton.addEventListener('click', () => {
        installPrompt.prompt();
        installPrompt.userChoice.then(choiceResult => {
          if (choiceResult.outcome === 'accepted') {
            console.log('App installed');
          } else {
            console.log('App installation declined');
          }
          disableInAppInstallPrompt()
        });
      });
    });
  }

  function disableInAppInstallPrompt() {
    installPrompt = null;
    document.getElementById('install-pwa').style.display = 'none';
  }
})

// Google analytics
globalThis.dataLayer = globalThis.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-TDHJL7ZT23');
