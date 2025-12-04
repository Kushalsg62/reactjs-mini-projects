import React, {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {match} = this.props
    const {competingTeam, competingTeamLogo, result, matchStatus} = match

    const statusClass = matchStatus === 'Won' ? 'status-won' : 'status-lost'

    return (
      <div className="match-card">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="match-team-logo"
        />
        <p className="match-team-name">{competingTeam}</p>
        <p className="match-result-text">{result}</p>
        <p className={`match-status ${statusClass}`}>{matchStatus}</p>
      </div>
    )
  }
}

export default MatchCard
