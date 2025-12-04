import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class NotFound extends Component {
  render() {
    return (
      <div className="not-found-container">
        <div className="not-found-content">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="not-found-logo"
          />
          <h1 className="not-found-heading">Page Not Found</h1>
          <p className="not-found-description">
            We are sorry, the page you requested could not be found
          </p>
          <Link to="/" className="home-button">
            Go to Home
          </Link>
        </div>
      </div>
    )
  }
}

export default NotFound
