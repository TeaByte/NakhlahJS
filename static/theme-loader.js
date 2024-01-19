const storedTheme = localStorage.getItem("selectedTheme");
if (storedTheme) {
  document.documentElement.setAttribute("data-theme", storedTheme);
} else {
  localStorage.setItem("selectedTheme", "dracula");
}
