import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {inSearch: ''}

  searchValue = event => {
    this.setState({inSearch: event.target.value})
  }

  update = suggestionObj => {
    this.setState({inSearch: suggestionObj.suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {inSearch} = this.state

    const filterValue = suggestionsList.filter(i =>
      i.suggestion.toLowerCase().includes(inSearch.toLowerCase()),
    )

    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="img"
        />
        <div className="search-card">
          <div className="search-engine-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              width="25px"
              className="search-img"
            />
            <input
              value={inSearch}
              type="Search"
              onChange={this.searchValue}
              className="search-bar"
              placeholder="Search Google"
            />
          </div>
          <ul>
            {filterValue.map(i => (
              <SuggestionItem key={i.id} value={i} onClickArrow={this.update} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
