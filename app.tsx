import React, { useState, useEffect } from 'react'


import './app.css'

function useToggleState(initialState = false) {
  const [state, setState] = useState(initialState)
  const toggleState = () => {
    setState(state => !state)
  }
  return [state, toggleState, setState]
}

function App() {

  const [port, setPort] = useState(null)

  useEffect(() => {
    let port = browser.runtime.connect({name: 'ui'})
    setPort(port)
    return () => {
      port.disconnect()
    }
  }, [])

  const send = () => {

  }

  return (
    <button id="click" onClick={() => console.log('btn clicked')}>Click Me!</button>
  )
}

export default App
