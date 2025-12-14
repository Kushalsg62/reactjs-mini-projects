import './index.css'

const ScoreCard = props => {
  const {score, onClickPlayAgain} = props

  return (
    <div className="scorecard-bg-container">
      <div className="scorecard-content-container">
        <div className="trophy-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt="trophy"
            className="trophy-image"
          />
        </div>
        <p className="your-score-text">YOUR SCORE</p>
        <h1 className="score-number">{score}</h1>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="reset-icon"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default ScoreCard
