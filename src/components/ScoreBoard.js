import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export default function ScoreBoard({ human, computer, ties }) {


  return (
    <Card className="flex-center" border="dark">
      <Card.Body className="h176">
        <Card.Title className="text-center">Score Board</Card.Title>
          <Container className="flex-center">
            <Row>
              <Col>
                <Row className="flex-center scoreboard-text ul">W</Row>
                <Row className="flex-center scoreboard-text">{human.wins}</Row>
              </Col>
              <Col>
                <Row className="flex-center scoreboard-text ul">T</Row>
                <Row className="flex-center scoreboard-text">{ties}</Row>
              </Col>
              <Col>
                <Row className="flex-center scoreboard-text ul">W</Row>
                <Row className="flex-center scoreboard-text">{computer.wins}</Row>
              </Col>
            </Row>
          </Container>
      </Card.Body>
    </Card>
  )
}