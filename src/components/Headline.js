import React from 'react'
import Row from 'react-bootstrap/Row'

export default function Headline({ arsenal }) {

  return (
    <Row className="flex-center">
      <h3 className="russo">{arsenal.map(weap => (weap.charAt(0).toUpperCase() + weap.slice(1))).join(', ')}</h3>
    </Row>
  )
}