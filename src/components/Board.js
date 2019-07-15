import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PlayerCard from './PlayerCard'
import ScoreBoard from './ScoreBoard'

export default function Board({ weaponSelected, playerWeapon }) {
  return (
    <Container id="board-container">
      <Row>
        <Col>
          <PlayerCard
            weaponSelected={weaponSelected}
            playerWeapon={playerWeapon}
          />
        </Col>
        <Col>
          <ScoreBoard />
        </Col>
        <Col>
          <PlayerCard
            weaponSelected={weaponSelected}
            playerWeapon={playerWeapon}
          />
        </Col>
      </Row>
    </Container>

  )
}