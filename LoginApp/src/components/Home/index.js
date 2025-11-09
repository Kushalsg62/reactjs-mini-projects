import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  handleLogin = () => {
    this.setState({isLoggedIn: true})
  }

  handleLogout = () => {
    this.setState({isLoggedIn: false})
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="background">
        <Message isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (
          <Logout onLogout={this.handleLogout} />
        ) : (
          <Login onLogin={this.handleLogin} />
        )}
      </div>
    )
  }
}

export default Home
