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
  subLesson,
  onClick = () => null
}) => {
  return (
    <div className='lessonDetail'>
      <div className='detail'>
        {thumbnailTop && <div className='thumbnail-wrapper'><img src={thumbnail} alt='' /></div>}
        {showRecommenedLabel && (
          <div className='recommendedLabel'>
            <img className='star' src={Star} alt='' />
            <h4 className='text'>Recommended lesson</h4>
          </div>
        )}
        <div className='title' onClick={onClick}>
          <h2 className='name' dangerouslySetInnerHTML={{ __html: name }} />
          {showRecommenedTag && <img className='star' src={Star} alt='' />}
        </div>
        <h4 className='subtitle'>{subtitle}</h4>
        <h4 className='description italic' dangerouslySetInnerHTML={{ __html: description }} />
        <h4 className='etc'>
          <span>{`${time} mins`}</span>
          <span className='dot'>.</span>
          <span>{`${subLesson} lessons`}</span>
        </h4>
      </div>
      {thumbnailRight && <div className='thumbnail-right-wrapper'><img src={thumbnail} alt='' /></div>}
    </div>
  )
}

export default LessonDetail
