const storedTheme = localStorage.getItem("selectedTheme");
if (storedTheme) {
  document.documentElement.setAttribute("data-theme", storedTheme);
} else {
  localStorage.setItem("selectedTheme", "dim");
}

window.dataLayer = globalThis.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-TDHJL7ZT23');
