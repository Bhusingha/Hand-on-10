import React from 'react'
import ContextCard from './ContextCard'
import useContent from '../hook/useContent'
import classes from './ContextList.module.css'

const ContextList = () => {
  const { datas, loading } = useContent()

  if (loading || !datas) return <h1>Loading...</h1>

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.card}>
          {datas.map((content) => (
            <ContextCard key={content.id} content={content} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContextList
