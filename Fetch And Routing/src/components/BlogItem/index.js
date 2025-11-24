import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogData

  return (
    <Link to={`/blogs/${id}`} className="link-item">
      <li className="blog-item">
        <img src={imageUrl} alt={title} className="blog-image" />
        <div className="blog-details">
          <p className="blog-topic">{topic}</p>
          <h1 className="blog-title">{title}</h1>
          <div className="blog-author-info">
            <img src={avatarUrl} alt="avatar" className="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
