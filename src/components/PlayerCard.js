import React from 'react'
import { FaQuestionCircle } from 'react-icons/fa'
import Card from 'react-bootstrap/Card'
import Weapon from './Weapon'

export default function PlayerCard({ human, arsenal }) {
  const { name, weaponSelected, playerWeapon} = human
  return (
    <Card className="flex-center">
      <Card.Body>
        <Card.Title className="flex-center">{name}</Card.Title>
          {!weaponSelected ? 
            <FaQuestionCircle size={100} fill="#ff0000" /> :
            <Weapon
              playerWeapon={playerWeapon}
              arsenal={arsenal}
            />
          }
      </Card.Body>
    </Card>
  )
}