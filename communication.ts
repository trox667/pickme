import { v1 as uuidv1 } from "uuid";

declare const chrome

export const PORT_UI = 'lmw-ui'

export interface Message {
  action: string
  id: string
  data: any
}

export const connectToBg = (portName: string) => chrome.runtime.connect({ name: portName })

export const onConnect = (listener: (port: any) => void) => {
  chrome.runtime.onConnect.addListener(listener)
}

export const sendMessage = (port: any, message: Message) => {
  port.postMessage(message)
}

export const onMessage = (port: any, listener: (message: Message) => void) => {
  port.onMessage.addListener(listener)
}
