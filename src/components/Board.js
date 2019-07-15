import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PlayerCard from './PlayerCard'
import ScoreBoard from './ScoreBoard'
import ComputerCard from './ComputerCard'

export default function Board({ human, computer, arsenal }) {
  console.log('Board human', human);
  console.log('Board computer', computer);

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
          <ScoreBoard />
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