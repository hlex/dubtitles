import React from 'react'
import Star from '../../images/star.svg'

const LessonDetail = ({
  showRecommenedTag = false,
  showRecommenedLabel = false,
  thumbnailTop = false,
  thumbnailRight = false,
  thumbnail,
  name,
  subtitle,
  description,
  time,
  subLesson
}) => {
  console.log(
    showRecommenedTag,
    showRecommenedLabel,
    thumbnailTop,
    thumbnailRight,
    thumbnail,
    name,
    subtitle,
    description,
    time,
    subLesson
  )
  return (
    <div className='lessonDetail'>
      <div className='detail'>
        {thumbnailTop && <img src={thumbnail} alt='' />}
        {showRecommenedLabel && (
          <div className='recommendedLabel'>
            <img className='star' src={Star} alt='' />
            <h4 className='text'>Recommended lesson</h4>
          </div>
        )}
        <div className='title'>
          <h2 className='name'>{name}</h2>
          {showRecommenedTag && <img className='star' src={Star} alt='' />}
        </div>
        <h4 className='subtitle'>{subtitle}</h4>
        <h5 className='description italic'>{description}</h5>
        <h4 className='etc'>
          <span>{`${time} mins`}</span>
          <span className='dot'>.</span>
          <span>{`${subLesson} lessons`}</span>
        </h4>
      </div>
      {thumbnailRight && <img src={thumbnail} alt='' />}
    </div>
  )
}

export default LessonDetail
