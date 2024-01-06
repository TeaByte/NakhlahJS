require.config({
  paths: {
    "vs": "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs",
  },
});

require(["vs/editor/editor.main"], () => {
  var editor = monaco.editor.create(document.getElementById("editor"), {
    language: "javascript",
    theme: "vs-dark",
  });

  setInterval(() => {
    editor.layout();
  }, 500);
});
