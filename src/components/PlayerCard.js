import React from 'react'
import { FaHandRock, FaHandScissors, FaHandPaper, FaHandLizard, FaHandSpock } from 'react-icons/fa'
import { Card } from 'react-bootstrap'

export default function PlayerCard() {
  return (
    <Card className="flex-center">
      <Card.Body>
        <Card.Title>PlayerCard</Card.Title>
        <FaHandRock size={100} className="red" />
      </Card.Body>
    </Card>
  )
}