import React from 'react'

function firstCase(weap) {
  return weap.charAt(0).toUpperCase() + weap.slice(1)
}

export default function Results({ results, human, computer, arsenal }) {

  if (human.wins === 5) {
    return <h4>You win!</h4>
  } else if (computer.wins === 5) {
    return <h4>{computer.name} wins...</h4>
  } else {
    switch (results) {
      case '0,0':
        return <h4>Tie!!!  Back to the pit!</h4>    
      case '0,3':
        return <h4>{firstCase(arsenal[0])} crushes {arsenal[3]}!</h4>
      case '0,2':
        return <h4>{firstCase(arsenal[0])} crushes {arsenal[2]}!</h4>
      case '1,0':
        return <h4>{firstCase(arsenal[1])} covers {arsenal[0]}!</h4>
      case '1,4':
        return <h4>{firstCase(arsenal[1])} disproves {arsenal[4]}!</h4>
      case '2,1':
        return <h4>{firstCase(arsenal[2])} cuts {arsenal[1]}!</h4>
      case '2,3':
        return <h4>{firstCase(arsenal[2])} decapitates {arsenal[3]}!</h4>
      case '3,4':
        return <h4>{firstCase(arsenal[3])} poisons {arsenal[4]}!</h4>
      case '3,1':
        return <h4>{firstCase(arsenal[3])} eats {arsenal[1]}!</h4>
      case '4,2':
        return <h4>{firstCase(arsenal[4])} smashes {arsenal[2]}!</h4>
      case '4,0':
        return <h4>{firstCase(arsenal[4])} vaporizes {arsenal[0]}!</h4>
      default:
        return <h4>Something has gone terribly wrong...</h4>
    }
  }
}