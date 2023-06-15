import React, { useState } from 'react'
import classes from './RegisterWindow.module.css'
import { useAuth } from '../providers/AuthProviders'
import { NavLink, useNavigate } from 'react-router-dom'

const RegisterWindow = () => {
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
    <div>
      <form onSubmit={handleSubmit} className={classes.loginForm}>
        <h1 className={classes.title}>Register</h1>

        <label>Username:</label>
        <input type="text" onChange={(e) => setUsernameInput(e.target.value)} />

        <label>Your Name:</label>
        <input type="text" onChange={(e) => setUsernameInput(e.target.value)} />

        <label>Password:</label>
        <input type="Password" onChange={(e) => setPasswordInput(e.target.value)} />

        <label>Comfirm Password:</label>
        <input type="Password" onChange={(e) => setPasswordInput(e.target.value)} />

        <input type="submit" value="Login" />

        <NavLink to="/register" className={classes.register}>
          Already have an account? Login
        </NavLink>
      </form>
    </div>
  )
}

export default RegisterWindow
