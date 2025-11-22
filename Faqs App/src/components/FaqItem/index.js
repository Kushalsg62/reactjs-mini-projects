import './index.css'

const FaqItem = props => {
  const {value, isOpen, onToggle} = props
  const {id, questionText, answerText} = value

  return (
    <li className="list">
      <div className="question">
        <h1 className="question-text">{questionText}</h1>

        <button className="button" type="button" onClick={() => onToggle(id)}>
          {isOpen ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
              width="20px"
              alt="minus"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
              width="20px"
              alt="plus"
            />
          )}
        </button>
      </div>

      {isOpen && (
        <div>
          <hr />
          <p className="answer">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
