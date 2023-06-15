import React, { useState } from 'react'
import { useAuth } from '../providers/AuthProviders'
import { NavLink, useNavigate } from 'react-router-dom'
import classes from './LoginWindow.module.css'

const LoginWindow = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(usernameInput, passwordInput)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <form onSubmit={handleSubmit} className={classes.loginForm}>
      <h1 className={classes.title}>Login</h1>

      <label>Username:</label>
      <input type="text" onChange={(e) => setUsernameInput(e.target.value)} />

      <label>Password:</label>
      <input type="Password" onChange={(e) => setPasswordInput(e.target.value)} />

      <input type="submit" value="Login" />

      <NavLink to="/register" className={classes.register}>
        Dont have an account? Register
      </NavLink>
    </form>
  )
}

export default LoginWindow
