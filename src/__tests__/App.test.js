import React from 'react'
import App from '../components/App'

describe('First React component test with Enzyme', () => {
  it('Renders without crashing', () => {
    shallow(<App />)
  })
})
