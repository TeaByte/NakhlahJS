require.config({
  paths: {
    "vs": "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs",
  },
});

// Monaco Editor
require(["vs/editor/editor.main"], () => {
  const isnord = localStorage.getItem("selectedTheme") === "nord";
  const vsTheme = isnord ? "vs-light" : "vs-dark";
  globalThis.editor = monaco.editor.create(document.getElementById("editor"), {
    language: "javascript",
    theme: vsTheme,
    minimap: { enabled: false },
  });
  setInterval(() => {
    editor.layout();
  }, 10);
  document.getElementById("editor-loading").style.display = "none";
});
