import React, {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamData: null, isLoading: true}

  componentDidMount() {
    this.getTeamMatches()
  }

  convertMatch = m => ({
    umpires: m.umpires,
    result: m.result,
    manOfTheMatch: m.man_of_the_match,
    id: m.id,
    date: m.date,
    venue: m.venue,
    competingTeam: m.competing_team,
    competingTeamLogo: m.competing_team_logo,
    firstInnings: m.first_innings,
    secondInnings: m.second_innings,
    matchStatus: m.match_status,
  })

  getTeamMatches = async () => {
    try {
      this.setState({isLoading: true})
      const {
        match: {params},
      } = this.props
      const {id} = params

      const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
      const data = await response.json()

      const teamBannerUrl = data.team_banner_url
      const latestMatchDetails = this.convertMatch(data.latest_match_details)
      const recentMatches = data.recent_matches.map(each =>
        this.convertMatch(each),
      )

      this.setState({
        teamData: {
          teamBannerUrl,
          latestMatchDetails,
          recentMatches,
          teamId: id,
        },
        isLoading: false,
      })
    } catch (error) {
      console.error('Failed to fetch team matches', error)
      this.setState({isLoading: false})
    }
  }

  gradientClass = id => {
    const map = {
      RCB: 'gradient-rcb',
      KKR: 'gradient-kkr',
      MI: 'gradient-mi',
      CSK: 'gradient-csk',
      SH: 'gradient-srh',
      RR: 'gradient-rr',
      KXP: 'gradient-kxip',
      DC: 'gradient-dc',
    }
    return map[id] || 'gradient-default'
  }

  render() {
    const {teamData, isLoading} = this.state
    const teamId = teamData && teamData.teamId
    const bgClass = this.gradientClass(teamId)

    return (
      <div className={`team-matches-page ${bgClass}`}>
        <div className="container">
          {isLoading && (
            <div data-testid="loader" className="loader-wrap">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          )}

          {!isLoading && teamData && (
            <div className="team-content">
              <img
                src={teamData.teamBannerUrl}
                alt="team banner"
                className="team-banner"
              />

              <div className="latest-section">
                <h2 className="section-title">Latest Matches</h2>
                <LatestMatch latestMatch={teamData.latestMatchDetails} />
              </div>

              <ul className="recent-list">
                {teamData.recentMatches.map(match => (
                  <li key={match.id} className="recent-item">
                    <MatchCard match={match} />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!isLoading && !teamData && (
            <div className="empty-state">No data available</div>
          )}
        </div>
      </div>
    )
  }
}

export default TeamMatches
