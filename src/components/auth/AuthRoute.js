import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import decode from 'jwt-decode'

const checkAuth = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return false;
  }
  
  try {
    const { exp } = decode(token);

    if (exp < new Date().getTime() / 1000) {
      return false
    }
  } catch (e) {
    return false;
  }

  return true
}

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    checkAuth() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/signin' }} />
    )
  )} />
)

export default AuthRoute