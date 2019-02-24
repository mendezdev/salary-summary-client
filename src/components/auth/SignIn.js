import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signIn } from '../../store/actions/authActions'

class SignIn extends Component {
  state = {
    email: '',
    username: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signIn(this.state, this.props.history)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5 className="center">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { signIn })(SignIn)