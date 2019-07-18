import React from 'react'
import ScoreBoard from '../components/ScoreBoard'

describe('Testing component render', () => {
  it('Renders', () => {
    shallow(<ScoreBoard />)
  })
})