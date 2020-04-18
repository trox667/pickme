const el = document.createElement("div")
el.textContent = "Hello Content"
document.body.appendChild(el)


let port = browser.runtime.connect({name: 'content'})