import React from 'react'
import { FaQuestionCircle } from 'react-icons/fa'
import Card from 'react-bootstrap/Card'
import Weapon from './Weapon'

export default function PlayerCard({ weaponSelected, playerWeapon }) {

  return (
    <Card className="flex-center">
      <Card.Body>
        <Card.Title>PlayerCard</Card.Title>
        {!weaponSelected ? <FaQuestionCircle size={100} fill="#ff0000" /> : <Weapon playerWeapon={playerWeapon} /> }
      </Card.Body>
    </Card>
  )
}