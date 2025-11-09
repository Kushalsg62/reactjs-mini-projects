import {Component} from 'react'

class Login extends Component {
  render() {
    const {onLogin} = this.props
    return (
      <button type="button" onClick={onLogin}>
        Login
      </button>
    )
  }
}

export default Login
