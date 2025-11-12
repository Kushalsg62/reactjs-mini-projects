import './index.css'

const ThumbnailItem = props => {
  const {imageList, onThumbnailClick} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageList

  const changeImage = () => {
    onThumbnailClick(id)
  }

  return (
    <li className="list">
      <button type="button" onClick={changeImage} className="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
