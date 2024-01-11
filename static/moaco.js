require.config({
  paths: {
    "vs": "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs",
  },
});

require(["vs/editor/editor.main"], () => {
  document.getElementById("editor-loading").style.display = "none";
  window.editor = monaco.editor.create(document.getElementById("editor"), {
    language: "javascript",
    theme: "vs-dark",
    minimap: { enabled: false },
  });
  setInterval(() => {
    editor.layout();
  }, 10);
});
