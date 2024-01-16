require.config({
  paths: {
    "vs": "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs",
  },
});

require(["vs/editor/editor.main"], () => {
  const isNord = localStorage.getItem("selectedTheme") === "nord";
  const vsTheme = isNord ? "vs-light" : "vs-dark";
  window.editor = monaco.editor.create(document.getElementById("editor"), {
    language: "javascript",
    theme: vsTheme,
    minimap: { enabled: false },
  });
  setInterval(() => {
    editor.layout();
  }, 10);
  document.getElementById("editor-loading").style.display = "none";
});
