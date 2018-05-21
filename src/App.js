import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import moment from 'moment'
const targetTime = moment('2018-05-21 17:00:00')
class App extends Component {
  state = {
    email: '',
    ticketType: '',
    agreeTerms: false,
    addFood: false,
    countdown: ''
  }
  componentDidMount() {
    const updateCountdown = () => {
      const millis = targetTime.diff(moment())
      const duration = moment.duration(millis)
      this.setState({
        countdown: `${Math.floor(
          duration.asHours()
        )} hours ${duration.minutes()} minutes ${duration.seconds()} seconds`
      })
    }
    this.interval = setInterval(updateCountdown, 1000)
    updateCountdown()
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    const { email, ticketType, agreeTerms, addFood, countdown } = this.state
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Evenn Registration Form</h1>
          <p>Registration will be closed in {countdown}</p>
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-danger"
                type="email"
                placeholder="Email input"
                value={email}
                onChange={e => this.setState({ email: e.target.value })}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle" />
              </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>

          <div className="field">
            <label className="label">Ticket Type</label>
            <div className="control">
              <div className="select">
                <select
                  value={ticketType}
                  onChange={e => this.setState({ ticketType: e.target.value })}
                >
                  <option value="">Select dropdown</option>
                  <option value="regular">Regular (150 THB)</option>
                  <option value="premium">Premium (300 THB)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onClick={e => this.setState({ agreeTerms: e.target.checked })}
                />{' '}
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>

          <div className="field">
            <label className="label">Add food</label>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  name="question"
                  onChange={() => this.setState({ addFood: true })}
                  checked={addFood}
                />{' '}
                Yes (+50 THB)
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="question"
                  onChange={() => this.setState({ addFood: false })}
                  checked={!addFood}
                />{' '}
                No
              </label>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
            <div className="control">
              <button className="button is-text">Cancel</button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default App
