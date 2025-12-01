import './index.css'

const EventItem = props => {
  const {eventDetails, onClickEvent, isActive} = props
  const {imageUrl, name, location, id} = eventDetails

  const onClickEventItem = () => {
    onClickEvent(id)
  }

  const eventItemClassName = isActive
    ? 'event-item active-event-item'
    : 'event-item'

  return (
    <li className={eventItemClassName}>
      <button type="button" className="event-button" onClick={onClickEventItem}>
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
