import React, {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    if (!latestMatch) return null

    const {
      competingTeam,
      competingTeamLogo,
      date,
      venue,
      firstInnings,
      secondInnings,
      manOfTheMatch,
      umpires,
      result,
    } = latestMatch

    return (
      <div className="latest-match-card">
        <div className="latest-match-top">
          <div className="latest-match-info">
            <p className="competing-team-name">{competingTeam}</p>
            <p className="match-date">{date}</p>
            <p className="match-venue">{venue}</p>
            <p className="match-result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-team-logo"
          />
        </div>

        <hr className="separator" />

        <div className="latest-match-stats">
          <div className="stat-row">
            <p className="stat-label">First Innings</p>
            <p className="stat-value">{firstInnings}</p>
          </div>
          <div className="stat-row">
            <p className="stat-label">Second Innings</p>
            <p className="stat-value">{secondInnings}</p>
          </div>
          <div className="stat-row">
            <p className="stat-label">Man Of The Match</p>
            <p className="stat-value">{manOfTheMatch}</p>
          </div>
          <div className="stat-row">
            <p className="stat-label">Umpires</p>
            <p className="stat-value">{umpires}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
