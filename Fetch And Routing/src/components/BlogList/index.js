import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {
    blogsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const formattedData = data.map(blog => ({
      id: blog.id,
      title: blog.title,
      imageUrl: blog.image_url,
      avatarUrl: blog.avatar_url,
      author: blog.author,
      topic: blog.topic,
    }))
    this.setState({blogsList: formattedData, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state

    return (
      <div className="blog-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogsList.map(blog => <BlogItem key={blog.id} blogData={blog} />)
        )}
      </div>
    )
  }
}

export default BlogList
