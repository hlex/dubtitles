import React from 'react'
import _ from 'lodash'
import IconLock from 'react-icons/lib/fa/lock'
import IconCheck from 'react-icons/lib/fa/check'
// ======================================================
// Component
// ======================================================
import {
  Card,
  LessonDetail
} from '../../components'
// ======================================================
// Container
// ======================================================
import Footer from '../Footer'
// ======================================================
// Hoc
// ======================================================
import { withRedux } from '../../hocs'
// ======================================================
// Action
// ======================================================
import {
  handleSelectVideoToDub,
  getLessonData,
  goToPage
} from '../../actions'
// ======================================================
// Asset
// ======================================================
// import lock from '../../images/'

const mapStateToProps = (state, ownProps) => {
  console.log('ownProps', ownProps)
  const lessonSlug = ownProps.match.params.slug
  const lessons = state.entities.lessons.rawData
  const lesson = _.find(lessons, lesson => lesson.slug === lessonSlug)
  return {
    lesson,
    entities: state.entities.lessons.data
  }
}

const actionToProps = {
  getLessonData,
  onClickVideo: handleSelectVideoToDub,
  onSelectLesson: goToPage
}

@withRedux(mapStateToProps, actionToProps)
export default class extends React.Component {
  componentDidMount = () => {
    const { isFetchedLessonData, getLessonData } = this.props
    if (!isFetchedLessonData) {
      getLessonData()
    }
  }
  handleClickUnit = ({ slug }) => {
    this.props.onClickVideo({ data: this.props.entities[slug] })
  }
  render () {
    const {
      lesson = {}
    } = this.props
    const {
      isRecommended,
      posterSrc,
      name,
      subtitle,
      description,
      time,
      subLesson,
      subLessons
    } = lesson
    return (
      <div className='dubtitlePage page-lessons-detail'>
        <div className='container'>
          {
            lesson &&
            <Card className='lessonDetailCard'>
              <div className='header'>
                <LessonDetail
                  thumbnail={posterSrc}
                  thumbnailTop={false}
                  thumbnailRight
                  showRecommenedTag={false}
                  showRecommenedLabel={isRecommended}
                  name={name}
                  subtitle={subtitle}
                  description={description}
                  time={time}
                  subLesson={subLesson}
                />
              </div>
              <hr />
              {
                _.map(subLessons, (subLessonItem, index) => {
                  return (
                    <div className='subLessonItem'>
                      <div className='header'>
                        <span className='text-in-circle'>{index + 1}</span>
                        <h2>{subLessonItem.name}</h2>
                      </div>
                      <div className='unitList'>
                        {
                          _.map(subLessonItem.units, (unit) => {
                            return (
                              <div onClick={() => !unit.locked && this.handleClickUnit({ slug: unit.slug })} className={`unitItem ${unit.locked ? 'locked' : 'pass'}`}>
                                <div className='iconStatus'>
                                  {unit.locked ? <IconLock /> : <IconCheck />}
                                </div>
                                <img src={unit.posterSrc} alt='' />
                                <div className='unitLevel'>
                                  <h5>{unit.name}</h5>
                                  <p className='small'>{unit.level.toUpperCase()}</p>
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  )
                })
              }
            </Card>
          }
          {
            !lesson && <div>Loading...</div>
          }
        </div>
        <Footer />
      </div>
    )
  }
}
