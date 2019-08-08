import React from 'react'
import Row from 'react-bootstrap/Row'
import Results from './Results'

export default function Guide({ start, results, human, computer, arsenal, winGameTotal }) {
  const { name } = computer

  return (
    <Row className="flex-center" style={{ paddingBottom: '17px' }}>
      { start ?
        <h4>Choose your weapon below to engage {name}!</h4> :
        <Results
          results={results}
          human={human}
          computer={computer}
          arsenal={arsenal}
          winGameTotal={winGameTotal}
        />
      }
    </Row>
  )
}