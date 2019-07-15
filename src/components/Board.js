import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PlayerCard from './PlayerCard'
import ScoreBoard from './ScoreBoard'
import ComputerCard from './ComputerCard'

export default function Board({ human, computer }) {
  console.log('Board human', human);
  console.log('Board computer', computer);

  return (
    <Container id="board-container">
      <Row>
        <Col>
          <PlayerCard
            human={human}
          />
        </Col>
        <Col>
          <ScoreBoard />
        </Col>
        <Col>
          <ComputerCard
            computer={computer}
          />
        </Col>
      </Row>
    </Container>
  )
}