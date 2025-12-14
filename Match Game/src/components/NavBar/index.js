import './index.css'

const NavBar = props => {
  const {score, timeInSeconds} = props

  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </div>
      <ul className="nav-items-list">
        <li className="nav-item">
          <p className="score-text">
            Score: <span className="score-value">{score}</span>
          </p>
        </li>
        <li className="nav-item timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-icon"
          />
          <p className="timer-text">{timeInSeconds} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
