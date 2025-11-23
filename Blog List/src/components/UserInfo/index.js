import './index.css'

const UserInfo = () => (
  <div className="userInfo-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
      width="200px"
      className="userProfile"
      alt="profile"
    />
    <h1 className="userName">Wade Warren</h1>
    <p className="userDesc">Software developer at UK</p>
  </div>
)

export default UserInfo
