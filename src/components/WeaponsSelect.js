import React from 'react'
import { FaHandRock, FaHandScissors, FaHandPaper, FaHandLizard, FaHandSpock } from 'react-icons/fa'
import { Row, Button, ButtonToolbar } from 'react-bootstrap'

export default function WeaponsSelect({ handleSelect, winner, arsenal }) {

  return (
    <Row className="flex-center">
      <ButtonToolbar aria-label="Toolbar with buttons">
        <Button type="button" onClick={() => handleSelect(arsenal[0])} disabled={winner}variant="dark" className="mr-2">
          <FaHandRock size={42} fill="#ff0000" />
        </Button>
        <Button type="button" onClick={() => handleSelect(arsenal[1])} disabled={winner} variant="dark" className="mr-2">
          <FaHandPaper size={42} fill="#ff0000" />
        </Button>
        <Button type="button" onClick={() => handleSelect(arsenal[2])} disabled={winner} variant="dark" className="mr-2">
          <FaHandScissors size={42} fill="#ff0000" />
        </Button>
        <Button type="button" onClick={() => handleSelect(arsenal[3])} disabled={winner} variant="dark" className="mr-2">
          <FaHandLizard size={42} fill="#ff0000" />
        </Button>
        <Button type="button" onClick={() => handleSelect(arsenal[4])} disabled={winner} variant="dark">
          <FaHandSpock size={42} fill="#ff0000" />
        </Button>
      </ButtonToolbar>
    </Row>
  )
}


