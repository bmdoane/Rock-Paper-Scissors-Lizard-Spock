import React from 'react'
import { FaHandRock, FaHandScissors, FaHandPaper, FaHandLizard, FaHandSpock } from 'react-icons/fa'
import { Button, ButtonToolbar } from 'react-bootstrap'

export default function WeaponsSelect({ handleSelect, winner }) {

  return (
    <ButtonToolbar aria-label="Toolbar with buttons">
      <Button type="button" onClick={() => handleSelect('rock')} disabled={winner}variant="dark" className="mr-2">
        <FaHandRock size={42} fill="#ff0000" />
      </Button>
      <Button type="button" onClick={() => handleSelect('paper')} disabled={winner} variant="dark" className="mr-2">
        <FaHandPaper size={42} fill="#ff0000" />
      </Button>
      <Button type="button" onClick={() => handleSelect('scissors')} disabled={winner} variant="dark" className="mr-2">
        <FaHandScissors size={42} fill="#ff0000" />
      </Button>
      <Button type="button" onClick={() => handleSelect('lizard')} disabled={winner} variant="dark" className="mr-2">
        <FaHandLizard size={42} fill="#ff0000" />
      </Button>
      <Button type="button" onClick={() => handleSelect('spock')} disabled={winner} variant="dark">
        <FaHandSpock size={42} fill="#ff0000" />
      </Button>
    </ButtonToolbar>
  )
}


