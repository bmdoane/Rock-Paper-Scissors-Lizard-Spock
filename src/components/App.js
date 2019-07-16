import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import WeaponsSelect from './WeaponsSelect'
import Board from './Board'

export default class App extends Component {
  state = {
    human: {
      name: 'This is you',
      playerWeapon: null,
      weaponSelected: false,
      wins: 0
    },
    computer: {
      name: 'Sheldon',
      playerWeapon: null,
      weaponSelected: false,
      wins: 0
    },
    ties: 0,
    arsenal: ['rock', 'paper', 'scissors', 'lizard', 'spock'],
    catchPhrase: null
  }

  randomWeapon() {
    const result = this.state.arsenal[Math.floor(Math.random() * this.state.arsenal.length)]
    return result
  }

  tieTally() {
    this.setState({ ties: this.state.ties + 1 })
  }

  humanWinTally() {
    this.setState(prevState => ({
      human: {
        ...prevState.human,
        wins: this.state.human.wins + 1
      }
    }))
  }

  computerWinTally() {
    this.setState(prevState => ({
      computer: {
        ...prevState.computer,
        wins: this.state.computer.wins + 1
      }
    }))
  }

  headToHead(playerWeap, computerWeap) {
    const playerWin = [[2, 3], [0, 4], [1, 3], [1, 4], [0, 2]]
    const playerIndex = this.state.arsenal.indexOf(playerWeap)
    const computerIndex = this.state.arsenal.indexOf(computerWeap)
    if (playerIndex === computerIndex) {
      console.log('tie')
      this.tieTally()
    } else if (playerWin[playerIndex].includes(computerIndex)) {
      console.log('You win')
      this.humanWinTally()
    } else {
      console.log('Sheldon wins')
      this.computerWinTally()
    }
  }

  // Example to setState on nested obj props
  handleSelect = (weapon) => {
    this.setState(prevState => ({
      human: {
        ...prevState.human,
        weaponSelected: true,
        playerWeapon: weapon
      },
      computer: {
        ...prevState.computer,
        weaponSelected: true,
        playerWeapon: this.randomWeapon()
      }
    }), () => this.headToHead(this.state.human.playerWeapon, this.state.computer.playerWeapon))
  }

  render() {
    const { human, computer, arsenal, ties } = this.state

    return (
      <Container id="top-container">
        <Row>
          <Col></Col>
          <Col xs={8} className="flex-center">
            <Board
              human={human}
              computer={computer}
              arsenal={arsenal}
              ties={ties}
            />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={6} className="flex-center">
            <WeaponsSelect
              handleSelect={this.handleSelect}
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    )
  }
}