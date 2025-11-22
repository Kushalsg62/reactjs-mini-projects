import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {openId: null}

  onToggle = id => {
    this.setState(prev => ({
      openId: prev.openId === id ? null : id,
    }))
  }

  render() {
    const {faqsList} = this.props
    const {openId} = this.state

    return (
      <div className="background-container">
        <div className="card-container">
          <h1 className="heading">FAQs</h1>
          <ul>
            {faqsList.map(item => (
              <FaqItem
                key={item.id}
                value={item}
                isOpen={openId === item.id}
                onToggle={this.onToggle}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
