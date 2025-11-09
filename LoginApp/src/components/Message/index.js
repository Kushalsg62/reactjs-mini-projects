import {Component} from 'react'

class Message extends Component {
  render() {
    const {isLoggedIn} = this.props
    return <h1>{isLoggedIn ? 'Welcome User' : 'Please Login'}</h1>
  }
}

export default Message
