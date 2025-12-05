import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const items = timelineItemsList.map(each => ({
    title: each.title,
  }))

  const renderItem = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard courseDetails={item} />
    }
    return <ProjectTimelineCard projectDetails={item} />
  }

  return (
    <div className="timeline-main-container">
      <div className="heading-container">
        <h1 className="journey-text">
          MY JOURNEY OF <br /> <span>CCBP 4.0</span>
        </h1>
      </div>

      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: '#0967d2',
          secondary: '#ffffff',
          cardBgColor: '#ffffff',
          titleColor: '#0967d2',
          titleColorActive: '#0967d2',
        }}
      >
        {timelineItemsList.map(each => (
          <div key={each.id}>{renderItem(each)}</div>
        ))}
      </Chrono>
    </div>
  )
}

export default TimelineView
