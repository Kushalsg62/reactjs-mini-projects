import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <Header />
    <div className="not-found-content">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
        className="not-found-image"
      />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-description">
        We are sorry, the page you requested could not be found.
      </p>
    </div>
  </div>
)

export default NotFound
