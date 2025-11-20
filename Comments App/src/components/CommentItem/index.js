import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, onDeleteComment, onToggleLike} = props
  const {id, name, comment, date, colorClass, isLiked} = commentDetails

  const time = formatDistanceToNow(new Date(date))

  const likeImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <div className="comment-container">
      <div className="comment-header">
        <div className={`initial-circle ${colorClass}`}>
          <p className="initial">{name[0]}</p>
        </div>

        <h1 className="comment-name">{name}</h1>
        <p className="comment-time">{time} ago</p>
      </div>

      <p className="comment-text">{comment}</p>

      <div className="actions">
        <button
          className="like-section"
          onClick={() => onToggleLike(id)}
          type="button"
        >
          <img src={likeImg} alt="like" className="like-icon" />
          <p className="like-text">Like</p>
        </button>

        <button
          className="delete-section"
          onClick={() => onDeleteComment(id)}
          data-testid="delete"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            width="20"
            alt="delete"
          />
        </button>
      </div>
    </div>
  )
}

export default CommentItem
