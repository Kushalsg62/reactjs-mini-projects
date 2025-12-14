import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onClickTab} = props
  const {tabId, displayText} = tabDetails

  const activeClass = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-button ${activeClass}`}
        onClick={() => onClickTab(tabId)}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
