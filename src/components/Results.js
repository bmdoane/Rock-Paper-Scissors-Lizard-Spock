import React from 'react'

export default function Results({ results, human, computer }) {

  switch (results) {
    case '0,0':
      return <h4>Tie!!!  Back to the pit!</h4>    
    case '0,3':
      return <h4>Rock crushes lizard!</h4>
    case '0,2':
      return <h4>Rock crushes scissors!</h4>
    case '1,0':
      return <h4>Paper covers rock!</h4>
    case '1,4':
      return <h4>Paper disproves Spock!</h4>
    case '2,1':
      return <h4>Scissors cuts paper!</h4>
    case '2,3':
      return <h4>Scissors decapitates lizard!</h4>
    case '3,4':
      return <h4>Lizard poisons Spock!</h4>
    case '3,1':
      return <h4>Lizard eats paper!</h4>
    case '4,2':
      return <h4>Spock smashes scissors!</h4>
    case '4,0':
      return <h4>Spock vaporizes rock!</h4>
    default:
      return <h4>Something has gone terribly wrong...</h4>
  }
}