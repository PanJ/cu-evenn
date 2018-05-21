import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import moment from 'moment'
import Input from './Input'
import {
  setEmail,
  setTicketType,
  setAgreeTerms,
  setAddFood,
  setCountdown,
  submit
} from './redux'
import { connect } from 'react-redux'
const targetTime = moment('2018-05-21 17:00:00')
class App extends Component {
  componentDidMount() {
    const updateCountdown = () => {
      const millis = targetTime.diff(moment())
      const duration = moment.duration(millis)
      // this.props.setCountdown(
      //   `${Math.floor(
      //     duration.asHours()
      //   )} hours ${duration.minutes()} minutes ${duration.seconds()} seconds`
      // )
    }
    this.interval = setInterval(updateCountdown, 1000)
    updateCountdown()
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    const {
      email,
      ticketType,
      agreeTerms,
      addFood,
      countdown,
      loading,
      data
    } = this.props
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Evenn Registration Form</h1>
          <p>Registration will be closed in {countdown}</p>
          <Input
            title="Email"
            placeholder="Email input"
            icon="fa-envelope"
            value={email}
            onChange={value => this.props.setEmail(value)}
            error="This email is invalid"
          />
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-danger"
                type="email"
                placeholder="Email input"
                value={email}
                onChange={e => this.props.setEmail(e.target.value)}
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
                  onChange={e => this.props.setTicketType(e.target.value)}
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
                  onClick={e => this.props.setAgreeTerms(e.target.checked)}
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
                  onChange={() => this.props.setAddFood(true)}
                  checked={addFood}
                />{' '}
                Yes (+50 THB)
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="question"
                  onChange={() => this.props.setAddFood(false)}
                  checked={!addFood}
                />{' '}
                No
              </label>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button
                disabled={loading}
                className="button is-link"
                onClick={() => this.props.submit()}
              >
                Submit
              </button>
            </div>
            <div className="control">
              <button className="button is-text">Cancel</button>
            </div>
          </div>
          <p>{data}</p>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  email: state.email,
  ticketType: state.ticketType,
  agreeTerms: state.agreeTerms,
  addFood: state.addFood,
  countdown: state.countdown,
  loading: state.loading,
  data: state.data
})
// const mapDispatchToProps = dispatch => ({
//   setEmail: value => dispatch(setEmail(value))
// })
const mapDispatchToProps = {
  setEmail,
  setTicketType,
  setAddFood,
  setAgreeTerms,
  setCountdown,
  submit
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
