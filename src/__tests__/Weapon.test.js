import React from 'react'
import Weapon from '../components/Weapon'

describe('Testing component render', () => {
  it('Renders', () => {
    shallow(<Weapon />)
  })
})