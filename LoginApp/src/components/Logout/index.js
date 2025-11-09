import {Component} from 'react'

class Logout extends Component {
  render() {
    const {onLogout} = this.props
    return (
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    )
  }
}

export default Logout
