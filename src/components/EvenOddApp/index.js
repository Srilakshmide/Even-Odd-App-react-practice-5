import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {num: 0}

  onEvenOddNum = () => {
    const random = Math.ceil(Math.random() * 100)
    console.log(random)
    this.setState(prevState => ({num: prevState.num + random}))
    console.log(this.state)
  }

  render() {
    const {num} = this.state
    const EvenText = num % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <div className="even-container">
          <h1 className="heading">Count {num}</h1>
          <p className="description">Count is {EvenText}</p>
          <button type="button" className="button" onClick={this.onEvenOddNum}>
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
