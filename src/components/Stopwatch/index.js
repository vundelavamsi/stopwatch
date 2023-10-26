// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timerInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({timerInSeconds: 0, isTimerRunning: false})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    const {timerInSeconds} = this.state
    console.log(timerInSeconds)
    this.setState(prevState => ({
      timerInSeconds: prevState.timerInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  renderMinutes = () => {
    const {timerInSeconds} = this.state
    const minutes = Math.floor(timerInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timerInSeconds} = this.state
    const seconds = Math.floor(timerInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="app-container">
        <h1>Stopwatch</h1>
        <div className="timer-container">
          <div className="timer-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-logo"
            />
            <h1 className="timer-heading">Timer</h1>
          </div>
          <h1 className="timer">{time}</h1>
          <div className="timer-controls-container">
            <button
              type="button"
              className="button start-button"
              onClick={this.onStartTimer}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              type="button"
              className="button stop-button"
              onClick={this.onStopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="button reset-button"
              onClick={this.onResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
