function isMobile() {
  return window.innerWidth <= 699;
}

document.addEventListener("DOMContentLoaded", function () {
  let splitInstance;
  if (isMobile()) {
    splitInstance = Split(["#split-0", "#split-1"], {
      sizes: [0, 100],
      gutterAlign: "end",
      minSize: 0,
      gutterSize: 19,
    });
  } else {
    splitInstance = Split(["#split-0", "#split-1"], {
      sizes: [50, 50],
      gutterAlign: "end",
      minSize: 0,
      gutterSize: 19,
    });
  }

  let isRight = true;
  const markdownSplit = document.getElementById("split-1");
  const editorSplit = document.getElementById("split-0");
  const openEditorButton = document.querySelector("#open-editor");
  const pElement = openEditorButton.querySelector("p");
  openEditorButton.addEventListener("click", function () {
    if (isRight) {
      splitInstance.setSizes([100, 0]);
      isRight = false;
      pElement.textContent = "فتح الدرس";
    } else {
      splitInstance.setSizes([0, 100]);
      isRight = true;
      pElement.textContent = "فتح المحرر";
    }
  });

  setInterval(() => {
    if (markdownSplit.offsetWidth === 0) {
      isRight = false;
      pElement.textContent = "فتح الدرس";
    } else if (editorSplit.offsetWidth === 0) {
      isRight = true;
      pElement.textContent = "فتح المحرر";
    }
  }, 100);
});
