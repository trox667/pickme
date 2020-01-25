import React from 'react'

import Button from '@material-ui/core/Button'

import './app.css'
import Menu from './menu'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.showMenu = this.showMenu.bind(this)
    this.state = { isClicked: false }
  }
  showMenu() {
    this.setState({ isClicked: true })
  }
  render() {
    if (this.state.isClicked) {
      return (
        <div>
          <Menu></Menu>
        </div>
      )
    } else {
      return (
        <div>
          <Button variant="contained" color="secondary" onClick={this.showMenu}>
            ShitMyWay
          </Button>
        </div>
      )
    }
  }
}

export default App