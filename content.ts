import { connectToBg, PORT_UI } from "./communication"

const el = document.createElement("div")
el.textContent = "Hello Content"
document.body.appendChild(el)


let port = connectToBg(PORT_UI)