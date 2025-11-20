import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem/index'
import './index.css'

class Appointments extends Component {
  state = {title: '', date: '', appointmentList: [], showStarred: false}

  onChangingTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangingDate = event => {
    this.setState({date: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()

    const {title, date} = this.state

    if (date === '') {
      return
    }

    const formattedDate = new Date(date)

    const day = formattedDate.getDate()
    const month = formattedDate.toLocaleString('en-GB', {month: 'long'})
    const year = formattedDate.getFullYear()
    const weekday = formattedDate.toLocaleString('en-GB', {weekday: 'long'})

    const finalDate = `${day} ${month} ${year}, ${weekday}`

    const newAppointmentList = {
      id: uuidv4(),
      title,
      date: finalDate,
      isStared: false,
    }

    this.setState(prevState => ({
      title: '',
      date: '',
      appointmentList: [...prevState.appointmentList, newAppointmentList],
    }))
  }

  onToggleStar = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(each => {
        if (each.id === id) {
          return {...each, isStared: !each.isStared}
        }
        return each
      }),
    }))
  }

  onToggleShowStarred = () => {
    this.setState(prevState => ({
      showStarred: !prevState.showStarred,
    }))
  }

  render() {
    const {title, date, appointmentList, showStarred} = this.state

    const filteredList = showStarred
      ? appointmentList.filter(each => each.isStared === true)
      : appointmentList

    return (
      <div className="background-container">
        <div className="card-container">
          <div className="first-container">
            <div className="form-container">
              <h1 className="heading">Add Appointment</h1>

              <form onSubmit={this.onSubmit}>
                <label htmlFor="text" className="text-label">
                  TITLE
                </label>
                <input
                  type="text"
                  id="text"
                  className="text-input"
                  placeholder="Title"
                  value={title}
                  onChange={this.onChangingTitle}
                />

                <label htmlFor="date" className="date-label">
                  DATE
                </label>
                <input
                  type="date"
                  id="date"
                  className="date-input"
                  value={date}
                  onChange={this.onChangingDate}
                />

                <button type="submit" className="button">
                  Add
                </button>
              </form>
            </div>

            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                width="500px"
              />
            </div>
          </div>

          <hr />

          <div className="second-container">
            <div className="header-container">
              <h1>Appointments</h1>

              <button
                type="button"
                className={
                  showStarred ? 'unStarred-button active' : 'unStarred-button'
                }
                onClick={this.onToggleShowStarred}
              >
                Starred
              </button>
            </div>

            <div>
              <ul className="appointment-container">
                {filteredList.map(each => (
                  <li key={each.id} className="list">
                    <AppointmentItem
                      appointmentDetails={each}
                      onToggleStar={this.onToggleStar}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
