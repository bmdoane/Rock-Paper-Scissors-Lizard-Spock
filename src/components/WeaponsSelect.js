import React from 'react'
import { FaHandRock, FaHandScissors, FaHandPaper, FaHandLizard, FaHandSpock } from 'react-icons/fa'
import { Button, ButtonToolbar } from 'react-bootstrap'

export default function WeaponsSelect({ handleRockSelect, handleScissorsSelect, handlePaperSelect, handleLizardSelect, handleSpockSelect }) {

  return (
    <ButtonToolbar aria-label="Toolbar with buttons">
      <Button type="button" onClick={handleRockSelect} variant="dark" className="mr-2">
        <FaHandRock size={42} fill="#ff0000" />
      </Button>
      <Button type="button" onClick={handlePaperSelect} variant="dark" className="mr-2">
        <FaHandPaper size={42} fill="#ff0000" />
      </Button>
      <Button type="button" onClick={handleScissorsSelect} variant="dark" className="mr-2">
        <FaHandScissors size={42} fill="#ff0000" />
      </Button>
      <Button type="button" onClick={handleLizardSelect} variant="dark" className="mr-2">
        <FaHandLizard size={42} fill="#ff0000" />
      </Button>
      <Button type="button" onClick={handleSpockSelect} variant="dark">
        <FaHandSpock size={42} fill="#ff0000" />
      </Button>
    </ButtonToolbar>
  )
}

