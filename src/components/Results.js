import React from 'react'

function firstCase(statement) {
  return <h4>{statement.charAt(0).toUpperCase() + statement.slice(1)}</h4>
}

function winCheck(human, computer, statement, winGameTotal) {
  function winnerText() {
    if (human.wins === winGameTotal) {
      return `${statement.slice(0, -1)} and you win!`
    } else if (computer.wins === winGameTotal) {
      return `${statement.slice(0, -1)} and ${computer.name} wins...`
    } else {
      return statement
    }
  }
  const winnerResult = winnerText()
  return firstCase(winnerResult)
}

export default function Results({ results, human, computer, arsenal, winGameTotal }) {
  function caseText() {
    switch (results) {
      case '0,0':
        return 'Tie!!!  Back to the pit!'
      case '0,3':
        return `${arsenal[0]} crushes ${arsenal[3]}!`
      case '0,2':
        return `${arsenal[0]} crushes ${arsenal[2]}!`
      case '1,0':
        return `${arsenal[1]} covers ${arsenal[0]}!`
      case '1,4':
        return `${arsenal[1]} disproves ${arsenal[4]}!`
      case '2,1':
        return `${arsenal[2]} cuts ${arsenal[1]}!`
      case '2,3':
        return `${arsenal[2]} decapitates ${arsenal[3]}!`
      case '3,4':
        return `${arsenal[3]} poisons ${arsenal[4]}!`
      case '3,1':
        return `${arsenal[3]} eats ${arsenal[1]}!`
      case '4,2':
        return `${arsenal[4]} smashes ${arsenal[2]}!`
      case '4,0':
        return `${arsenal[4]} vaporizes ${arsenal[0]}!`
      default:
        return 'Something has gone terribly wrong...'
    }
  }
  const resultText = caseText()
  return winCheck(human, computer, resultText, winGameTotal)
}