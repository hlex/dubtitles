import React from 'react'
import PropTypes from 'prop-types'

import Card from '../Card'
import LessonDetail from '../LessonDetail'

export default class LessonCard extends React.Component {
  static propTypes = {
    isRecommended: PropTypes.bool,
    thumbnail: PropTypes.string,
    name: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    time: PropTypes.number,
    subLesson: PropTypes.number
  }
  static defaultProps = {
    isRecommended: false,
    thumbnail: 'http://via.placeholder.com/380x240',
    name: 'ENGLISH FOR MUGGLES',
    subtitle: 'British Accent Training',
    description: 'You will learn grammar and also British accent with the top hit scenes from Harry Potter season 1-7',
    time: 30,
    subLesson: 7
  }
  render () {
    const {
      isRecommended,
      thumbnail,
      name,
      subtitle,
      description,
      time,
      subLesson,
      onClick
    } = this.props
    return (
      <Card className='lessonCard'>
        <div className='thumbnail-wrapper'>
          <img onClick={onClick} src={thumbnail} alt='' />
        </div>
        <LessonDetail
          onClick={onClick}
          showRecommenedTag={isRecommended}
          name={name}
          subtitle={subtitle}
          description={description}
          time={time}
          subLesson={subLesson}
        />
      </Card>
    )
  }
}
