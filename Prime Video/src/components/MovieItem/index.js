import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div className="movie-item-container">
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              className="close-button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="player-container">
              <ReactPlayer url={videoUrl} controls width="100%" />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
