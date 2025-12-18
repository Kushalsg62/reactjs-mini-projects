import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    coursesList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getCourses()
  }

  getCourses = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = 'https://apis.ccbp.in/te/courses'
    const response = await fetch(apiUrl)
    if (response.ok) {
      const data = await response.json()
      const formattedData = data.courses.map(course => ({
        id: course.id,
        name: course.name,
        logoUrl: course.logo_url,
      }))
      this.setState({
        coursesList: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderFailure = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
        className="failure-image"
      />
      <h1 className="failure-heading">Oops! Something Went Wrong</h1>
      <p className="failure-description">
        We cannot seem to find the page you are looking for.
      </p>
      <button type="button" onClick={this.getCourses} className="retry-button">
        Retry
      </button>
    </div>
  )

  renderCourses = () => {
    const {coursesList} = this.state

    return (
      <div className="courses-container">
        <h1 className="courses-heading">Courses</h1>
        <ul className="courses-list">
          {coursesList.map(course => (
            <li key={course.id} className="course-item">
              <Link to={`/courses/${course.id}`} className="course-link">
                <img
                  src={course.logoUrl}
                  alt={course.name}
                  className="course-logo"
                />
                <p className="course-name">{course.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderContent = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderCourses()
      case apiStatusConstants.failure:
        return this.renderFailure()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="home-container">
        <Header />
        {this.renderContent()}
      </div>
    )
  }
}

export default Home
