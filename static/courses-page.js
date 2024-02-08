function isMobile() {
  return globalThis.innerWidth <= 699;
}

// Icons
const copyIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copy" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>`
const copyiedIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copy-check" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /><path d="M11 14l2 2l4 -4" /></svg>`

document.addEventListener("DOMContentLoaded", function () {
  // The split resizer init
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

  // The small screen button config
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

  // The small screen button auto adustment 
  setInterval(() => {
    if (markdownSplit.offsetWidth === 0) {
      isRight = false;
      pElement.textContent = "فتح الدرس";
    } else if (editorSplit.offsetWidth === 0) {
      isRight = true;
      pElement.textContent = "فتح المحرر";
    }
  }, 100);

  // The loading screen before content get loadded
  const loadingDiv = document.getElementById("loading");
  setTimeout(function () {
    loadingDiv.style.opacity = "0";
    setTimeout(function () {
      loadingDiv.style.display = "none";
    }, 200);
  }, 200);

  // The copy pre js code example function
  function addCopyButton(preElement) {
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.innerHTML = copyIcon;
    copyButton.addEventListener('click', () => {
      const contentNodes = preElement.childNodes;
      if (contentNodes.length > 0) {
        const codeContent = Array.from(contentNodes).map(node => {
          if (node.nodeType === 1 && node.classList.contains('token')) {
            return node.textContent;
          } else if (node.nodeType === 3) {
            return node.textContent;
          }
          return '';
        }).join('');
        navigator.clipboard.writeText(codeContent.trim()).then(() => {
          copyButton.innerHTML = copyiedIcon;
          setTimeout(() => {
            copyButton.innerHTML = copyIcon;
          }, 2000);
        }).catch((error) => {
          console.error('Unable to copy to clipboard', error);
        });
      } else {
        console.error('No content found within pre element');
      }
    });
    preElement.parentElement.appendChild(copyButton);
  }
  const markdownBody = document.querySelector('.markdown-body');
  const highlightDivs = markdownBody.querySelectorAll('.highlight');
  highlightDivs.forEach((highlightDiv) => {
    const preElement = highlightDiv.querySelector('pre');
    if (preElement) {
      addCopyButton(preElement);
    }
  });

  // The pass test effect added to window object
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
