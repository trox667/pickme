import React, { useState } from 'react'

import Button from '@material-ui/core/Button'

import './app.css'
import Menu from './menu'

function useToggleState(initialState = false) {
  const [state, setState] = useState(initialState)
  const toggleState = () => {
    setState(state => !state)
  }
  return [state, toggleState, setState]
}

function App({ title = 'ShitMyWay' }) {
  const [isMenuVisible, toggleMenu] = useToggleState()

  return isMenuVisible ? (
    <div>
      {' '}
      <Menu />
      <Button variant="contained" color="secondary" onClick={toggleMenu}>
        {title}
      </Button>
    </div>
  ) : (
    <Button variant="contained" color="secondary" onClick={toggleMenu}>
      {title}
    </Button>
  )
}

export default App
