import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Weapons from './Weapons'
import PlayerCard from './PlayerCard'

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6} className="flex-center">
            <PlayerCard />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={6} className="flex-center">
            <Weapons />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    )
  }
}

export default App