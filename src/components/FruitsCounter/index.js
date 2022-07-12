import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoesCount: 0,
    bananasCount: 0,
  }

  onMangoClicked = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  onBananaClicked = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state

    return (
      <div className="bg-container">
        <div className="fruit-container">
          <h1 className="heading">
            Bob ate <span className="span-element">{mangoesCount}</span> mangoes{' '}
            <span className="span-element">{bananasCount}</span> bananas
          </h1>
          <div className="fruit-card">
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <button
                type="button"
                className="button"
                onClick={this.onMangoClicked}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />
              <button
                type="button"
                className="button"
                onClick={this.onBananaClicked}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
