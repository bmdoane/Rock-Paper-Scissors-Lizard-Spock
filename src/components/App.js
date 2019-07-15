import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import WeaponsSelect from './WeaponsSelect'
import Board from './Board'

class App extends Component {
  state = {
    playerWeapon: null,
    weaponSelected: false
  }

  handleRockSelect = () => {
    this.setState({
      weaponSelected: true,
      playerWeapon: 'rock'
    })
  }

  handleScissorsSelect = () => {
    this.setState({
      weaponSelected: true,
      playerWeapon: 'scissors'
    })
  }

  handlePaperSelect = () => {
    this.setState({
      weaponSelected: true,
      playerWeapon: 'paper'
    })
  }

  handleLizardSelect = () => {
    this.setState({
      weaponSelected: true,
      playerWeapon: 'lizard'
    })
  }

  handleSpockSelect = () => {
    this.setState({
      weaponSelected: true,
      playerWeapon: 'spock'
    })
  }

  render() {
    const { weaponSelected, playerWeapon} = this.state

    return (
      <Container id="top-container">
        <Row>
          <Col></Col>
          <Col xs={8} className="flex-center">
            <Board
              weaponSelected={weaponSelected}
              playerWeapon={playerWeapon}
            />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={6} className="flex-center">
            <WeaponsSelect
              handleRockSelect={this.handleRockSelect}
              handleScissorsSelect={this.handleScissorsSelect}
              handlePaperSelect={this.handlePaperSelect}
              handleLizardSelect={this.handleLizardSelect}
              handleSpockSelect={this.handleSpockSelect}
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    )
  }
}

export default App