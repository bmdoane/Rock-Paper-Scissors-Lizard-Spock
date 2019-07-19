import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PlayerCard from './PlayerCard'
import ScoreBoard from './ScoreBoard'
import ComputerCard from './ComputerCard'

export default function Board({ human, computer, arsenal, ties }) {

  return (
    <Container id="board-container">
      <Row>
        <Col>
          <PlayerCard
            human={human}
            arsenal={arsenal}
          />
        </Col>
        <Col>
          <ScoreBoard
            human={human}
            computer={computer}
            ties={ties}
          />
        </Col>
        <Col>
          <ComputerCard
            computer={computer}
            arsenal={arsenal}
          />
        </Col>
      </Row>
    </Container>
  )
}