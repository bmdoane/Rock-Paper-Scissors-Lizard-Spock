import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export default function ScoreBoard({ human, computer, ties }) {

  return (
    <Card className="flex-center" border="dark">
      <Card.Body style={{ width: '165px', padding: '0' }}>
        <Card.Title className="text-center russo" style={{ padding: '20px 0 16px 0' }}>Score Board</Card.Title>
          <Container className="flex-center">
            <Row>
              <Col>
                <Row className="flex-center scoreboard-text ul russo">W</Row>
                <Row className="flex-center scoreboard-text">{human.wins}</Row>
              </Col>
              <Col>
                <Row className="flex-center scoreboard-text ul russo">T</Row>
                <Row className="flex-center scoreboard-text">{ties}</Row>
              </Col>
              <Col>
                <Row className="flex-center scoreboard-text ul russo">W</Row>
                <Row className="flex-center scoreboard-text">{computer.wins}</Row>
              </Col>
            </Row>
          </Container>
      </Card.Body>
    </Card>
  )
}