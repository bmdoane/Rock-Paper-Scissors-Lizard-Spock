import React from 'react'
import { FaHandRock, FaHandScissors, FaHandPaper, FaHandLizard, FaHandSpock } from 'react-icons/fa'
import { Button, ButtonToolbar } from 'react-bootstrap'

export default function WeaponsSelect({ handleSelect }) {

  return (
    <ButtonToolbar aria-label="Toolbar with buttons">
      <Button type="button" onClick={() => handleSelect('rock')} variant="dark" className="mr-2">
        <FaHandRock size={42} fill="#ff0000" />
      </Button>
      <Button type="button" onClick={() => handleSelect('paper')} variant="dark" className="mr-2">
        <FaHandPaper size={42} fill="#ff0000" />
      </Button>
      <Button type="button" onClick={() => handleSelect('scissors')} variant="dark" className="mr-2">
        <FaHandScissors size={42} fill="#ff0000" />
      </Button>
      <Button type="button" onClick={() => handleSelect('lizard')} variant="dark" className="mr-2">
        <FaHandLizard size={42} fill="#ff0000" />
      </Button>
      <Button type="button" onClick={() => handleSelect('spock')} variant="dark">
        <FaHandSpock size={42} fill="#ff0000" />
      </Button>
    </ButtonToolbar>
  )
}


