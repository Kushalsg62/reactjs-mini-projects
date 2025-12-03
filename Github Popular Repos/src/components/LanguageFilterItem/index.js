import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, isActive, setActiveLanguageId} = props
  const {id, language} = languageDetails

  const btnClassName = isActive ? 'language-btn active' : 'language-btn'

  const onClickLanguageFilter = () => {
    setActiveLanguageId(id)
  }

  return (
    <li>
      <button
        type="button"
        className={btnClassName}
        onClick={onClickLanguageFilter}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
