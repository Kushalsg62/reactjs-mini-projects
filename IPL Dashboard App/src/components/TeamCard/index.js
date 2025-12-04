import React, {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  render() {
    const {team} = this.props
    const {name, teamImageUrl} = team

    return (
      <div className="team-card">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </div>
    )
  }
}

export default TeamCard
