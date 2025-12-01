import './index.css'

const registrationStatus = {
  YET_TO_REGISTER: 'YET_TO_REGISTER',
  REGISTERED: 'REGISTERED',
  REGISTRATIONS_CLOSED: 'REGISTRATIONS_CLOSED',
  INITIAL: 'INITIAL',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderNoActiveEventView = () => (
    <div className="no-active-event-container">
      <p className="no-active-event-text">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="registration-status-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="registration-image"
      />
      <p className="registration-status-text">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="registration-status-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registration-image"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationsClosedView = () => (
    <div className="registration-status-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registration-image"
      />
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  switch (activeEventRegistrationStatus) {
    case registrationStatus.YET_TO_REGISTER:
      return renderYetToRegisterView()
    case registrationStatus.REGISTERED:
      return renderRegisteredView()
    case registrationStatus.REGISTRATIONS_CLOSED:
      return renderRegistrationsClosedView()
    default:
      return renderNoActiveEventView()
  }
}

export default ActiveEventRegistrationDetails
