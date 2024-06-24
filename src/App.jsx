import { useState } from 'react'
import './App.css'
import Squares from './Components/Squares'

function App() {

  const [squareArray, setSquareArray] = useState(Array(9).fill(null));
  const [currTurn, setCurrTurn] = useState("X");
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);

  console.log(squareArray);

  const checkWinner = (squareArray) => {
    const winCondition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < winCondition.length; i++) {

      const [a, b, c] = winCondition[i];

      if (squareArray[a] !== null && squareArray[a] === squareArray[b] && squareArray[b] === squareArray[c]) {
        return true;
      }
    }
    return false;

  }

  const handleClick = (index) => {
    const cpySquareArray = [...squareArray];

    if (cpySquareArray[index] !== null) return;
    cpySquareArray[index] = currTurn;

    setSquareArray(cpySquareArray);

    const win = checkWinner(cpySquareArray);

    if (win) {
      alert(`${currTurn} won the game.`)
      if (currTurn === 'X') {
        setScoreX(scoreX + 1);
      }
      else if (currTurn === 'O') {
        setScoreO(scoreO + 1);
      }
      setSquareArray(Array(9).fill(null));
    }
    else {
      setCurrTurn(currTurn === 'X' ? 'O' : 'X');
    }

  }


  const resetGame = () => {
    setSquareArray(Array(9).fill(null));
    setScoreX(0);
    setScoreO(0);
    setCurrTurn("X");
  }


  return (
    <div className='app-container'>

      <div className='scores'>

        <div className="player-x">
          <label htmlFor="player-x-score">Player X Score</label>
          <span id='player-x-score'>{scoreX}</span>
        </div>


        <div className="player-o">
          <label htmlFor="player-0-score">Player O Score</label>
          <span id='player-o-score'>{scoreO}</span>
        </div>

      </div>

      <main className='board'>

        {
          squareArray.map((square, index) => (
            <Squares onClick={() => handleClick(index)} value={squareArray[index]} />
          ))
        }

      </main>

        <div className='options'>
        <button className='reset-button' onClick={resetGame}>Reset Game</button>
        </div>

    </div>
  )
}

export default App
