import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { FaHandRock, FaHandScissors, FaHandPaper, FaHandLizard, FaHandSpock } from 'react-icons/fa'

class App extends Component {
  render() {
    return (
      <h3>Rock<FaHandRock />, Scissors<FaHandScissors />, Paper<FaHandPaper />, Lizard<FaHandLizard />, Spock <FaHandSpock /></h3>
    )
  }
}

ReactDOM.render (
  <App / >,
  document.getElementById('root')
)