import {Component} from 'react'
import NavBar from '../NavBar'
import TabItem from '../TabItem'
import ThumbnailItem from '../ThumbnailItem'
import ScoreCard from '../ScoreCard'
import './index.css'

class MatchGame extends Component {
  state = {
    score: 0,
    timeInSeconds: 60,
    activeTabId: 'FRUIT',
    currentImageId: '',
    isGameOver: false,
  }

  componentDidMount() {
    const {imagesList} = this.props
    this.setState({currentImageId: imagesList[0].id})
    this.startTimer()
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  startTimer = () => {
    this.timerId = setInterval(() => {
      this.setState(prevState => {
        if (prevState.timeInSeconds === 1) {
          clearInterval(this.timerId)
          return {timeInSeconds: 0, isGameOver: true}
        }
        return {timeInSeconds: prevState.timeInSeconds - 1}
      })
    }, 1000)
  }

  onClickTab = tabId => {
    this.setState({activeTabId: tabId})
  }

  getRandomImage = () => {
    const {imagesList} = this.props
    const {currentImageId} = this.state

    let randomImage
    do {
      const randomIndex = Math.floor(Math.random() * imagesList.length)
      randomImage = imagesList[randomIndex]
    } while (randomImage.id === currentImageId)

    return randomImage
  }

  onClickThumbnail = id => {
    const {currentImageId} = this.state

    if (id === currentImageId) {
      const newImage = this.getRandomImage()
      this.setState(prevState => ({
        score: prevState.score + 1,
        currentImageId: newImage.id,
      }))
    } else {
      clearInterval(this.timerId)
      this.setState({isGameOver: true})
    }
  }

  onClickPlayAgain = () => {
    clearInterval(this.timerId)
    const {imagesList} = this.props

    this.setState(
      {
        score: 0,
        timeInSeconds: 60,
        activeTabId: 'FRUIT',
        currentImageId: imagesList[0].id,
        isGameOver: false,
      },
      this.startTimer,
    )
  }

  getCurrentImage = () => {
    const {imagesList} = this.props
    const {currentImageId} = this.state
    return imagesList.find(item => item.id === currentImageId)
  }

  getFilteredImages = () => {
    const {imagesList} = this.props
    const {activeTabId} = this.state
    return imagesList.filter(item => item.category === activeTabId)
  }

  renderGameView = () => {
    const {tabsList} = this.props
    const {score, timeInSeconds, activeTabId} = this.state
    const currentImage = this.getCurrentImage()
    const filteredImages = this.getFilteredImages()

    if (!currentImage) {
      return null
    }

    return (
      <>
        <NavBar score={score} timeInSeconds={timeInSeconds} />
        <div className="game-body">
          <img
            src={currentImage.imageUrl}
            alt="match"
            className="match-image"
          />
          <ul className="tabs-list">
            {tabsList.map(tab => (
              <TabItem
                key={tab.tabId}
                tabDetails={tab}
                isActive={activeTabId === tab.tabId}
                onClickTab={this.onClickTab}
              />
            ))}
          </ul>
          <ul className="thumbnails-list">
            {filteredImages.map(image => (
              <ThumbnailItem
                key={image.id}
                imageDetails={image}
                onClickThumbnail={this.onClickThumbnail}
              />
            ))}
          </ul>
        </div>
      </>
    )
  }

  render() {
    const {isGameOver, score} = this.state

    return (
      <div className="match-game-container">
        {isGameOver ? (
          <ScoreCard score={score} onClickPlayAgain={this.onClickPlayAgain} />
        ) : (
          this.renderGameView()
        )}
      </div>
    )
  }
}

export default MatchGame
