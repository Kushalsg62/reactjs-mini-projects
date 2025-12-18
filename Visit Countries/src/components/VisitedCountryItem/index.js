import './index.css'

const VisitedCountryItem = props => {
  const {countryDetails, toggleVisitStatus} = props
  const {id, name, imageUrl} = countryDetails

  const onClickRemove = () => {
    toggleVisitStatus(id)
  }

  return (
    <li className="visited-country-item">
      <img src={imageUrl} alt="thumbnail" className="country-image" />
      <div className="country-info">
        <p className="visited-country-name">{name}</p>
        <button onClick={onClickRemove} type="button" className="remove-button">
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountryItem
