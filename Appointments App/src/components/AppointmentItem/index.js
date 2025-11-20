import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, onToggleStar} = props
  const {id, title, date, isStared} = appointmentDetails

  const likeImg = isStared
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <div className="Item-container">
      <div className="Item-header">
        <h1 className="Item-heading">{title}</h1>
        <button
          className="Item-star-button"
          onClick={() => onToggleStar(id)}
          type="button"
        >
          <img src={likeImg} width="20px" alt="star" />
        </button>
      </div>
      <p>Date: {date}</p>
    </div>
  )
}

export default AppointmentItem
