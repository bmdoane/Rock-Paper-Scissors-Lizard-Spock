import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export default function ScoreBoard({ human, computer, ties }) {


  return (
    <Card className="flex-center" border="dark">
      <Card.Body>
        <Card.Title className="text-center">Score Board</Card.Title>
        <Container className="flex-center">
          <Row>
              <Col>
                <Row>W</Row>
                <Row>{human.wins}</Row>
              </Col>
              <Col>
                <Row>T</Row>
                <Row>{ties}</Row>
              </Col>
              <Col>
                <Row>W</Row>
                <Row>{computer.wins}</Row>
              </Col>
            </Row>
          </Container>
      </Card.Body>
    </Card>
  )
}