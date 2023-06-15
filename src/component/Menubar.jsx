import React from 'react'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'
import classes from './Menubar.module.css'
import { useAuth } from '../providers/AuthProviders'

const Menubar = () => {
  const { isLoggedIn, logout } = useAuth()
  return (
    <div className={classes.bar}>
      <div className={classes.menu}>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>
      <div className={classes.menu}>
        {!isLoggedIn ? (
          <>
            <NavLink to="/login" className={(arg) => (arg.isActive ? classes.active : undefined)}>
              Login
            </NavLink>
            <NavLink to="/register" className={(arg) => (arg.isActive ? classes.active : undefined)}>
              Register
            </NavLink>
          </>
        ) : (
          <button onClick={logout} className={classes.active}>
            Logout
          </button>
        )}
      </div>
    </div>
  )
}

export default Menubar
