import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {id} = match.params
    const url = `https://apis.ccbp.in/blogs/${id}`

    const response = await fetch(url)
    const data = await response.json()

    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
    }

    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state

    return (
      <div className="blog-item-details-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <>
            <h1 className="blog-details-title">{blogData.title}</h1>

            <div className="blog-details-author-section">
              <img
                src={blogData.avatarUrl}
                alt={blogData.author}
                className="blog-details-avatar"
              />
              <p className="blog-details-author">{blogData.author}</p>
            </div>

            <img
              src={blogData.imageUrl}
              alt={blogData.title}
              className="blog-details-image"
            />

            <p className="blog-details-content">{blogData.content}</p>
          </>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
