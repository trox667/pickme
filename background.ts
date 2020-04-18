declare const browser

browser.runtime.onConnect.addListener((port) => {
  console.log('someone connected', port)
})