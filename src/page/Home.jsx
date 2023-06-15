import React from 'react'
import Banner from '../component/Banner'
import CreateBar from '../component/CreateBar'
import ContextList from '../component/ContextList'
import classes from './Home.module.css'

const Home = () => {
  return (
    <div className={classes.home}>
      <Banner />
      <CreateBar />
      <ContextList />
    </div>
  )
}

export default Home
