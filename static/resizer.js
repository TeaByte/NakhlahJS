function isMobile() {
  return window.innerWidth <= 768;
}

document.addEventListener("DOMContentLoaded", function () {
  document.body.style.overflow = "hidden";

  if (isMobile()) {
    Split(["#split-0", "#split-1"], {
      sizes: [2, 100],
      gutterAlign: "start",
      minSize: 1,
      gutterSize: 15,
    });
  } else {
    Split(["#split-0", "#split-1"], {
      sizes: [50, 50],
      gutterAlign: "end",
      minSize: 0,
      gutterSize: 13,
    });
  }
});
