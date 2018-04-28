import React from 'react'
import PropTypes from 'prop-types'

export default class LessonCard extends React.Component {
  static propTypes = {
    thumbnail: PropTypes.string,
    name: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    time: PropTypes.number,
    subLesson: PropTypes.number
  }
  static defaultProps = {
    thumbnail: 'http://via.placeholder.com/380x240',
    name: 'ENGLISH FOR MUGGLES',
    subtitle: 'British Accent Training',
    description: 'You will learn grammar and also British accent with the top hit scenes from Harry Potter season 1-7',
    time: 30,
    subLesson: 7
  }
  render () {
    const {
      thumbnail,
      name,
      subtitle,
      description,
      time,
      subLesson
    } = this.props
    return (
      <div className='lessonCard'>
        <img src={thumbnail} alt='' />
        <div className='title'>
          <h2 className='name'>{name}</h2>
          <span className='recommendTag' />
        </div>
        <h4 className='subtitle'>{subtitle}</h4>
        <h5 className='description italic'>{description}</h5>
        <h4 className='etc'><span>{`${time} mins`}</span><span className='dot'>.</span><span>{`${subLesson} lessons`}</span></h4>
      </div>
    )
  }
}
