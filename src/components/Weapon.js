import React from 'react'
import { FaQuestionCircle, FaHandRock, FaHandScissors, FaHandPaper, FaHandLizard, FaHandSpock } from 'react-icons/fa'

export default function Weapon({ playerWeapon, arsenal }) {

  switch (playerWeapon) {
    case arsenal[0]:
      return <FaHandRock size={100} fill="#ff0000" />
    case arsenal[1]:
      return <FaHandPaper size={100} fill="#ff0000" />
    case arsenal[2]:
      return <FaHandScissors size={100} fill="#ff0000" />
    case arsenal[3]:
      return <FaHandLizard size={100} fill="#ff0000" />
    case arsenal[4]:
      return <FaHandSpock size={100} fill="#ff0000" />
    default:
      return <FaQuestionCircle size={100} fill="#ff0000" />
  }
}