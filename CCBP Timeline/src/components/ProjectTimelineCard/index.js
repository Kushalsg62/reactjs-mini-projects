import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} =
    projectDetails

  return (
    <div className="project-card-container">
      <img src={imageUrl} alt={projectTitle} className="project-image" />

      <div className="header">
        <h1 className="project-title">{projectTitle}</h1>

        <div className="duration-row">
          <AiFillCalendar className="icon" />
          <p className="duration-text">{duration}</p>
        </div>
      </div>

      <p className="project-description">{description}</p>

      <a
        className="visit-link"
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
