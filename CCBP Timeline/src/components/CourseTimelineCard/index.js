import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="course-card-container">
      <div className="course-header">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-row">
          <AiFillClockCircle className="icon" />
          <p className="duration-text">{duration}</p>
        </div>
      </div>

      <p className="course-description">{description}</p>

      <div className="tags-container">
        {tagsList.map(each => (
          <p key={each.id} className="tag">
            {each.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
