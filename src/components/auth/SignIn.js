import React, { Component } from 'react'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('state:', this.state)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
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

export default SignIn