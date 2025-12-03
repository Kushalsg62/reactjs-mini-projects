import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="app-container">
    <h1 className="heading">Alert Notifications</h1>
    <div className="notifications-container">
      <Notification>
        <AiFillCheckCircle className="icon success-icon" />
        <div className="notification-text">
          <h2 className="notification-heading success-heading">Success</h2>
          <p className="notification-description">
            You can access all the files in the folder
          </p>
        </div>
      </Notification>

      <Notification>
        <RiErrorWarningFill className="icon error-icon" />
        <div className="notification-text">
          <h2 className="notification-heading error-heading">Error</h2>
          <p className="notification-description">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </Notification>

      <Notification>
        <MdWarning className="icon warning-icon" />
        <div className="notification-text">
          <h2 className="notification-heading warning-heading">Warning</h2>
          <p className="notification-description">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </Notification>

      <Notification>
        <MdInfo className="icon info-icon" />
        <div className="notification-text">
          <h2 className="notification-heading info-heading">Info</h2>
          <p className="notification-description">
            Anyone on the internet can view these files
          </p>
        </div>
      </Notification>
    </div>
  </div>
)
export default AlertNotifications
