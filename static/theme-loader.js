const storedTheme = localStorage.getItem("selectedTheme");
if (storedTheme) {
  document.documentElement.setAttribute("data-theme", storedTheme);
}
