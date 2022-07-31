import {Component} from 'react'
import './index.css'

class Clock extends Component {
  state = {date: new Date()}
  //  console.log('constructor method')

  componentDidMount() {
    console.log('component did mount called')
    this.uniqueid = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.uniqueid)
    console.log('componentWillUnmount called')
  }

  tick = () => this.setState({date: new Date()})

  render() {
    // console.log('render method called')
    const {date} = this.state
    // console.log(date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
