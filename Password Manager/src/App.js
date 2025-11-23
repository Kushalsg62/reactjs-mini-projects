import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    search: '',
    items: [],
    show: false,
    count: 0,
  }

  onChangeWebsite = e => {
    this.setState({website: e.target.value})
  }

  onChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  onChangeSearch = e => {
    this.setState({search: e.target.value})
  }

  toggleShow = () => {
    this.setState(prev => ({show: !prev.show}))
  }

  addItem = e => {
    e.preventDefault()
    const {website, username, password} = this.state

    if (website.trim() && username.trim() && password.trim()) {
      const randomColor =
        '#' + Math.floor(Math.random() * 16777215).toString(16)

      const newItem = {
        id: Date.now(),
        website,
        username,
        password,
        color: randomColor,
      }

      this.setState(prev => ({
        items: [...prev.items, newItem],
        website: '',
        username: '',
        password: '',
        count: prev.count + 1,
      }))
    }
  }

  deleteItem = id => {
    this.setState(prev => {
      const updated = prev.items.filter(i => i.id !== id)
      return {
        items: updated,
        count: updated.length,
      }
    })
  }

  render() {
    const {website, username, password, search, items, show, count} = this.state

    const filtered = items.filter(i =>
      i.website.toLowerCase().includes(search.toLowerCase()),
    )

    const isEmpty = filtered.length === 0

    return (
      <div className="background-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          width="250"
          alt="app logo"
        />

        <div className="first-container">
          <div className="form-container">
            <form onSubmit={this.addItem}>
              <h1 className="heading">Add New Password</h1>

              <div className="input-wrapper">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-icon"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="input-field"
                  value={website}
                  onChange={this.onChangeWebsite}
                />
              </div>

              <div className="input-wrapper">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-icon"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="input-field"
                  value={username}
                  onChange={this.onChangeUsername}
                />
              </div>

              <div className="input-wrapper">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input-icon"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input-field"
                  value={password}
                  onChange={this.onChangePassword}
                />
              </div>

              <div className="button-container">
                <button type="submit" className="button-add">
                  Add
                </button>
              </div>
            </form>
          </div>

          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              width="500"
            />
          </div>
        </div>

        <div className="first-container">
          <div style={{width: '100%'}}>
            <div className="header-password-list">
              <h1>
                Your Passwords <span className="span">{count}</span>
              </h1>

              <div className="input-wrapper" style={{marginTop: '20px'}}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="input-icon"
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="input-field"
                  value={search}
                  onChange={this.onChangeSearch}
                />
              </div>
            </div>

            <hr />

            <div
              style={{marginTop: '10px'}}
              className="show-password-container"
            >
              <label className="show-password">
                <input
                  type="checkbox"
                  checked={show}
                  onChange={this.toggleShow}
                />
                Show Passwords
              </label>
            </div>

            {isEmpty ? (
              <div style={{textAlign: 'center', marginTop: '20px'}}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  width="500px"
                />
                <p className="result-no-password">No Passwords</p>
              </div>
            ) : (
              <ul
                style={{listStyle: 'none', padding: 0, marginTop: '20px'}}
                className="list-container"
              >
                {filtered.map(item => (
                  <li
                    key={item.id}
                    style={{
                      background: '#5763a5',
                      padding: '15px',
                      marginBottom: '10px',
                      borderRadius: '10px',
                      color: 'white',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div className="list">
                      <div>
                        <h1
                          className="list-profile-img"
                          style={{backgroundColor: item.color}}
                        >
                          {item.website[0]}
                        </h1>
                      </div>
                      <div className="list-text-container">
                        <p className="list-webiste">{item.website}</p>
                        <p className="list-username">{item.username}</p>
                        {show ? (
                          <p className="list-password">{item.password}</p>
                        ) : (
                          <img
                            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                            alt="stars"
                            width="100"
                          />
                        )}
                      </div>
                      <div>
                        <button
                          type="button"
                          data-testid="delete"
                          onClick={() => this.deleteItem(item.id)}
                          style={{background: 'transparent', border: 'none'}}
                        >
                          <img
                            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                            alt="delete"
                            width="30"
                          />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
