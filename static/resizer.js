function isMobile() {
  return globalThis.innerWidth <= 699;
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

  const loadingDiv = document.getElementById("loading");
  setTimeout(function () {
    loadingDiv.style.opacity = "0";
    setTimeout(function () {
      loadingDiv.style.display = "none";
    }, 200);
  }, 200);

  globalThis.testPassedEffect = function () {
    const duration = 15 * 200,
      animationEnd = Date.now() + duration,
      defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 999 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        }),
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        }),
      );
    }, 250);
  };
});
