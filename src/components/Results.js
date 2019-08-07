import React from 'react'

function firstCase(weap) {
  return weap.charAt(0).toUpperCase() + weap.slice(1)
}

function winCheck(human, computer, statement) {
  if (human.wins === 5) {
    return <h4>{`${statement.slice(0, -1)} and you win!`}</h4>
  } else if (computer.wins === 5) {
    return <h4>{`${statement.slice(0, -1)} and ${computer.name} wins...`}</h4>
  } else {
    return <h4>{statement}</h4>
  }
}

export default function Results({ results, human, computer, arsenal }) {
  function caseText() {
    switch (results) {
      case '0,0':
        return 'Tie!!!  Back to the pit!'
      case '0,3':
        return `${firstCase(arsenal[0])} crushes ${arsenal[3]}!`
      case '0,2':
        return `${firstCase(arsenal[0])} crushes ${arsenal[2]}!`
      case '1,0':
        return `${firstCase(arsenal[1])} covers ${arsenal[0]}!`
      case '1,4':
        return `${firstCase(arsenal[1])} disproves ${arsenal[4]}!`
      case '2,1':
        return `${firstCase(arsenal[2])} cuts ${arsenal[1]}!`
      case '2,3':
        return `${firstCase(arsenal[2])} decapitates ${arsenal[3]}!`
      case '3,4':
        return `${firstCase(arsenal[3])} poisons ${arsenal[4]}!`
      case '3,1':
        return `${firstCase(arsenal[3])} eats ${arsenal[1]}!`
      case '4,2':
        return `${firstCase(arsenal[4])} smashes ${arsenal[2]}!`
      case '4,0':
        return `${firstCase(arsenal[4])} vaporizes ${arsenal[0]}!`
      default:
        return 'Something has gone terribly wrong...'
    }
  }
  const resultText = caseText()
  return winCheck(human, computer, resultText)
}