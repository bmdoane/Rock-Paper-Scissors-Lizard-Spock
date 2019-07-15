import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import WeaponsSelect from './WeaponsSelect'
import Board from './Board'

export default class App extends Component {
  state = {
    human: {
      name: 'This is you',
      playerWeapon: null,
      weaponSelected: false
    },
    computer: {
      name: 'Sheldon',
      playerWeapon: null,
      weaponSelected: false
    }
  }

  componentDidUpdate() {

  }

  randomWeapon() {
    const arsenal = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    const result = arsenal[Math.floor(Math.random() * arsenal.length)]
    return result
  }

  // Example to setState on nested obj props
  // Would like to DRY these up
  handleRockSelect = () => {
    this.setState(prevState => ({
      human: {
        ...prevState.human,
        weaponSelected: true,
        playerWeapon: 'rock'
      },
      computer: {
        ...prevState.computer,
        weaponSelected: true,
        playerWeapon: this.randomWeapon()
      }
    }))
  }

  handleScissorsSelect = () => {
    this.setState(prevState => ({
      human: {
        ...prevState.human,
        weaponSelected: true,
        playerWeapon: 'scissors'
      },
      computer: {
        ...prevState.computer,
        weaponSelected: true,
        playerWeapon: this.randomWeapon()
      }
    }))
  }

  handlePaperSelect = () => {
    this.setState(prevState => ({
      human: {
        ...prevState.human,
        weaponSelected: true,
        playerWeapon: 'paper'
      },
      computer: {
        ...prevState.computer,
        weaponSelected: true,
        playerWeapon: this.randomWeapon()
      }
    }))
  }

  handleLizardSelect = () => {
    this.setState(prevState => ({
      human: {
        ...prevState.human,
        weaponSelected: true,
        playerWeapon: 'lizard'
      },
      computer: {
        ...prevState.computer,
        weaponSelected: true,
        playerWeapon: this.randomWeapon()
      }
    }))
  }

  handleSpockSelect = () => {
    this.setState(prevState => ({
      human: {
        ...prevState.human,
        weaponSelected: true,
        playerWeapon: 'spock'
      },
      computer: {
        ...prevState.computer,
        weaponSelected: true,
        playerWeapon: this.randomWeapon()
      }
    }))
  }

  render() {
    const { human, computer } = this.state

    return (
      <Container id="top-container">
        <Row>
          <Col></Col>
          <Col xs={8} className="flex-center">
            <Board
              human={human}
              computer={computer}
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