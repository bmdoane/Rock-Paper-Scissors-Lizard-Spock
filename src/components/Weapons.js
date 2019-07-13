import React from 'react'
import { FaHandRock, FaHandScissors, FaHandPaper, FaHandLizard, FaHandSpock } from 'react-icons/fa'


export default function Weapons() {
  return (
    <div className="row">
      <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with buttons">
        <button type="button" className="btn btn-dark mr-2">
          <FaHandRock size={42} className="red" />
        </button>
        <button type="button" className="btn btn-dark mr-2">
          <FaHandScissors size={42} className="red" />
        </button>
        <button type="button" className="btn btn-dark mr-2">
          <FaHandPaper size={42} className="red" />
        </button>
        <button type="button" className="btn btn-dark mr-2">
          <FaHandLizard size={42} className="red" />
        </button>
        <button type="button" className="btn btn-dark">
          <FaHandSpock size={42} className="red" />
        </button>
      </div>
    </div>
  )
}