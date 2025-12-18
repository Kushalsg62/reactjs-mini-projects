import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CourseItemDetails extends Component {
  state = {
    courseDetails: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getCourseDetails()
  }

  getCourseDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/te/courses/${id}`
    const response = await fetch(apiUrl)
    if (response.ok) {
      const data = await response.json()
      const formattedData = {
        id: data.course_details.id,
        name: data.course_details.name,
        imageUrl: data.course_details.image_url,
        description: data.course_details.description,
      }
      this.setState({
        courseDetails: formattedData,
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
      <button
        type="button"
        onClick={this.getCourseDetails}
        className="retry-button"
      >
        Retry
      </button>
    </div>
  )

  renderCourseDetails = () => {
    const {courseDetails} = this.state

    return (
      <div className="course-details-container">
        <div className="course-details-card">
          <img
            src={courseDetails.imageUrl}
            alt={courseDetails.name}
            className="course-image"
          />
          <div className="course-info">
            <h1 className="course-title">{courseDetails.name}</h1>
            <p className="course-description">{courseDetails.description}</p>
          </div>
        </div>
      </div>
    )
  }

  renderContent = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderCourseDetails()
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
      <div className="course-item-details-container">
        <Header />
        {this.renderContent()}
      </div>
    )
  }
}

export default CourseItemDetails
