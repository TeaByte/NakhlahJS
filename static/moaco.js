require.config({
  paths: {
    "vs": "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs",
  },
});
require(["vs/editor/editor.main"], () => {
  monaco.editor.create(document.getElementById("editor"), {
    language: "javascript",
    theme: "vs-dark",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Ensure the DOM is fully loaded before initializing Split.js
  var splitInstance = Split(["#document", "#editor"]);

  // You can now use splitInstance to access Split.js methods
  // Example: splitInstance.setSizes([50, 50]);
});
