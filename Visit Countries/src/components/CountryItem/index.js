import './index.css'

const CountryItem = props => {
  const {countryDetails, toggleVisitStatus} = props
  const {id, name, isVisited} = countryDetails

  const onClickVisit = () => {
    toggleVisitStatus(id)
  }

  return (
    <li className="country-item">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited-text">Visited</p>
      ) : (
        <button onClick={onClickVisit} type="button" className="visit-button">
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryItem
