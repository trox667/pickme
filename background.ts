import { onConnect, onMessage } from './communication'

onConnect((port) => {
  console.log('someone connected', port)
  onMessage(port, (message) => {
    console.log(message)
  })
})
