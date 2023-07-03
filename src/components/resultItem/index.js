import './index.css'

const ResultItem = props => {
  const {result, userScore, playAgain} = props

  const resetGame = () => {
    playAgain()
  }
  return (
    result && (
      <div className="result-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy"
        />
        <p>YOUR SCORE</p>
        <p>{userScore}</p>
        <button type="button" onClick={resetGame} className="play-again-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    )
  )
}

export default ResultItem
