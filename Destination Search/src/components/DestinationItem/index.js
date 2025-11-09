import './index.css'

const DestinationItem = props => {
  const {abc} = props
  const {name, imgUrl} = abc

  return (
    <li className="destination-item">
      <img src={imgUrl} alt={name} className="destination-img" />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
