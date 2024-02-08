if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/JavaScript/sw.js", {
        type: 'module'
    })
}