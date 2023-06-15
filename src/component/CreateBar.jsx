import React from 'react'
import { useAuth } from '../providers/AuthProviders'
import { Link } from 'react-router-dom'
import classes from './CreateBar.module.css'

const CreateBar = () => {
  const { isLoggedIn } = useAuth()
  return (
    <div>
      {isLoggedIn && (
        <div className={classes}>
          <Link to="/create" className={classes}>
            Create New Content
          </Link>
        </div>
      )}
    </div>
  )
}

export default CreateBar
