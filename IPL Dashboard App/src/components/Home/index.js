import React, {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teams: [], isLoading: true}

  componentDidMount() {
    this.getTeams()
  }

  convertTeam = t => ({
    id: t.id,
    name: t.name,
    teamImageUrl: t.team_image_url,
  })

  getTeams = async () => {
    try {
      this.setState({isLoading: true})
      const response = await fetch('https://apis.ccbp.in/ipl')
      const data = await response.json()
      const updated = data.teams.map(each => this.convertTeam(each))
      this.setState({teams: updated, isLoading: false})
    } catch (error) {
      this.setState({isLoading: false})
      console.error('Failed to fetch teams', error)
    }
  }

  renderTeams = () => {
    const {teams} = this.state
    return (
      <ul className="teams-list">
        {teams.map(team => (
          <li key={team.id} className="team-list-item">
            <Link to={`/team-matches/${team.id}`} className="card-link">
              <TeamCard team={team} />
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="home-wrap">
        <div className="container">
          <div className="home-inner">
            <header className="home-header">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="app-title">IPL Dashboard</h1>
            </header>

            {isLoading && (
              <div data-testid="loader" className="loader-wrap">
                <Loader type="Oval" color="#ffffff" height={50} width={50} />
              </div>
            )}

            {!isLoading && (
              <main className="home-main">{this.renderTeams()}</main>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
