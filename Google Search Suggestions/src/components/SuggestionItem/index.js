import './index.css'

const SuggestionItem = props => {
  const {value, onClickArrow} = props
  const {suggestion} = value

  const handleClick = () => {
    onClickArrow(value)
  }

  return (
    <li className="list">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        width="15px"
        onClick={handleClick}
      />
    </li>
  )
}

export default SuggestionItem
