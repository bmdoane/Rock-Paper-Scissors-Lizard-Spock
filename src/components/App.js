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

  componentDidUpdate() {
  }

  randomWeapon() {
    const result = this.state.arsenal[Math.floor(Math.random() * this.state.arsenal.length)]
    return result
  }

  // tieTally() {
  //   this.setState({ tie: this.state.tie + 1 })
  // }

  // humanWinTally() {
  //   this.setState(prevState => ({
  //     human: {
  //       ...prevState.human,
  //       wins: this.state.wins + 1
  //     }
  //   }))
  // }

  // computerWinTally() {
  //   this.setState(prevState => ({
  //     computer: {
  //       ...prevState.computer,
  //       wins: this.state.wins + 1
  //     }
  //   }))
  // }

  headToHead(player, computer) {
    const playerWin = [[2, 3], [0, 4], [1, 3], [1, 4], [0, 2]]
    player = this.state.arsenal.indexOf(player)
    computer = this.state.arsenal.indexOf(computer)
    if (player === computer) {
      console.log('Tie')

    } else if (playerWin[player].includes(computer)) {
      console.log('Player wins');

    } else {
      console.log('Sheldon wins');

    }
  }

  // Example to setState on nested obj props
  // Would like to DRY these up
  handleRockSelect = () => {
    this.setState(prevState => ({
      human: {
        ...prevState.human,
        weaponSelected: true,
        playerWeapon: this.state.arsenal[0]
      },
      computer: {
        ...prevState.computer,
        weaponSelected: true,
        playerWeapon: this.randomWeapon()
      }
    }), () => this.headToHead(this.state.human.playerWeapon, this.state.computer.playerWeapon))
    // Want to call head to head with callback in last parans
  }

  handlePaperSelect = () => {
    this.setState(prevState => ({
      human: {
        ...prevState.human,
        weaponSelected: true,
        playerWeapon: this.state.arsenal[1]
      },
      computer: {
        ...prevState.computer,
        weaponSelected: true,
        playerWeapon: this.randomWeapon()
      }
    }), () => this.headToHead(this.state.human.playerWeapon, this.state.computer.playerWeapon))
  }

  handleScissorsSelect = () => {
    this.setState(prevState => ({
      human: {
        ...prevState.human,
        weaponSelected: true,
        playerWeapon: this.state.arsenal[2]
      },
      computer: {
        ...prevState.computer,
        weaponSelected: true,
        playerWeapon: this.randomWeapon()
      }
    }), () => this.headToHead(this.state.human.playerWeapon, this.state.computer.playerWeapon))
  }

  handleLizardSelect = () => {
    this.setState(prevState => ({
      human: {
        ...prevState.human,
        weaponSelected: true,
        playerWeapon: this.state.arsenal[3]
      },
      computer: {
        ...prevState.computer,
        weaponSelected: true,
        playerWeapon: this.randomWeapon()
      }
    }), () => this.headToHead(this.state.human.playerWeapon, this.state.computer.playerWeapon))
  }

  handleSpockSelect = () => {
    this.setState(prevState => ({
      human: {
        ...prevState.human,
        weaponSelected: true,
        playerWeapon: this.state.arsenal[4]
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