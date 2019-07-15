import React from 'react'
import { FaQuestionCircle, FaHandRock, FaHandScissors, FaHandPaper, FaHandLizard, FaHandSpock } from 'react-icons/fa'

export default function Weapon({ playerWeapon }) {
  switch (playerWeapon) {
    case 'rock':
      return <FaHandRock size={100} fill="#ff0000" />
    case 'paper':
      return <FaHandPaper size={100} fill="#ff0000" />
    case 'scissors':
      return <FaHandScissors size={100} fill="#ff0000" />
    case 'lizard':
      return <FaHandLizard size={100} fill="#ff0000" />
    case 'spock':
      return <FaHandSpock size={100} fill="#ff0000" />
    default:
      return <FaQuestionCircle size={100} fill="#ff0000" />
  }
}