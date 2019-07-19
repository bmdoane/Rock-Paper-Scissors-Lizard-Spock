import React from 'react'
import { FaWpbeginner } from 'react-icons/fa';

function firstCase(weap) {
  return weap.charAt(0).toUpperCase() + weap.slice(1)
}

function winCheck(human, computer, statement) {
  if (human.wins === 5) {
    return `${statement.slice(0,-1)} and you win!`
  } else if (computer.wins === 5) {
    return `${statement.slice(0, -1)} and ${computer.name} wins...`
  } else {
    return statement
  }
}

export default function Results({ results, human, computer, arsenal }) {

  switch (results) {
    case '0,0':
      return <h4>{winCheck(human, computer, 'Tie!!!  Back to the pit!')}</h4>    
    case '0,3':
      return <h4>{winCheck(human, computer, `${firstCase(arsenal[0])} crushes ${arsenal[3]}!`)}</h4>
    case '0,2':
      return <h4>{winCheck(human, computer, `${firstCase(arsenal[0])} crushes ${arsenal[2]}!`)}</h4>
    case '1,0':
      return <h4>{winCheck(human, computer, `${firstCase(arsenal[1])} covers ${arsenal[0]}!`)}</h4>
    case '1,4':
      return <h4>{winCheck(human, computer, `${firstCase(arsenal[1])} disproves ${arsenal[4]}!`)}</h4>
    case '2,1':
      return <h4>{winCheck(human, computer, `${firstCase(arsenal[2])} cuts ${arsenal[1]}!`)}</h4>
    case '2,3':
      return <h4>{winCheck(human, computer, `${firstCase(arsenal[2])} decapitates ${arsenal[3]}!`)}</h4>
    case '3,4':
      return <h4>{winCheck(human, computer, `${firstCase(arsenal[3])} poisons ${arsenal[4]}!`)}</h4>
    case '3,1':
      return <h4>{winCheck(human, computer, `${firstCase(arsenal[3])} eats ${arsenal[1]}!`)}</h4>
    case '4,2':
      return <h4>{winCheck(human, computer, `${firstCase(arsenal[4])} smashes ${arsenal[2]}!`)}</h4>
    case '4,0':
      return <h4>{winCheck(human, computer, `${firstCase(arsenal[4])} vaporizes ${arsenal[0]}!`)}</h4>
    default:
      return <h4>Something has gone terribly wrong...</h4>
  }
}