import React from 'react'
import classes from './ContextCard.module.css'
import { Link } from 'react-router-dom'

const ContextCard = (props) => {
  const { content } = props

  return (
    <div>
      <Link to={`/content/${content.id}`} className={classes.card}>
        <img className={classes.thumbnail} src={content.thumbnailUrl} alt={`${content.videoTitle} video thumbnail`} />
        <div>
          <div>
            <div>
              <h4 className={classes.title}>{content.videoTitle}</h4>
              <h5 className={classes.subtitle}>{content.creatorName}</h5>
              <h5 className={classes.comment}>{content.comment}</h5>
            </div>
            <span className={classes.box}>
              <p>{content.postedBy.name}</p>
              <span className={classes.rating}>
                {[...Array(content.rating).keys()].map((star) => (
                  <img key={star} className={classes.star} src="/star.svg" alt="Rating Star" />
                ))}
              </span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ContextCard
