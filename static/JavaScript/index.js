// Theme loader
const storedTheme = localStorage.getItem("selectedTheme");
if (storedTheme) {
  document.documentElement.setAttribute("data-theme", storedTheme);
} else {
  localStorage.setItem("selectedTheme", "nord");
}

// To check if the browser supports oklch ( is new browser ) 
(function supportsOklch() {
  const testElement = document.createElement('div');
  testElement.style.color = 'oklch(var(--b3))';
  document.body.appendChild(testElement);
  const style = window.getComputedStyle(testElement).color;
  document.body.removeChild(testElement);
  return style.indexOf('oklch') !== -1;
})()

// PWA install button
let installPrompt = null;
document.addEventListener('DOMContentLoaded', () => {

  // Check if browser is new 
  if (!supportsOklch()) {
    document.getElementById('old-check').style.display = 'block';
  }

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
