import React from 'react'
import { FaQuestionCircle } from 'react-icons/fa'
import Card from 'react-bootstrap/Card'
import Weapon from './Weapon'

export default function ComputerCard({ computer, arsenal }) {
  const { name, weaponSelected, playerWeapon } = computer
  return (
    <Card className="text-center" border="dark">
      <Card.Body>
        <Card.Title className="russo">{name}</Card.Title>
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