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
  static defaultProps = {
    lesson: {
      isRecommended: true,
      thumbnail: 'http://via.placeholder.com/380x240',
      slug: 'english-for-muggles-5',
      name: 'ENGLISH FOR MUGGLES 5',
      subtitle: 'British Accent Training',
      description: 'You will learn grammar and also British accent with the top hit scenes from Harry Potter season 1-7',
      time: 30,
      subLesson: 7,
      subLessons: [
        {
          slug: 'the-philosopher\'s-stone',
          name: 'the Philosopher\'s Stone',
          units: [
            {
              slug: 'vocabulary',
              name: 'vocabulary',
              level: 'easy',
              thumbnail: 'http://via.placeholder.com/380x240',
              video: '',
              translation: {
                '1.5': 'ฉันชื่อรอน',
                '3.0': 'สวัสดีแฮร์รี่'
              },
              tips: [
                'first line',
                'second line',
                'third line'
              ],
              locked: false
            },
            {
              slug: 'conjunction',
              name: 'conjunction',
              level: 'easy',
              thumbnail: 'http://via.placeholder.com/380x240',
              locked: true
            },
            {
              slug: 'conjunction',
              name: 'conjunction',
              level: 'easy',
              thumbnail: 'http://via.placeholder.com/380x240',
              locked: true
            }
          ]
        },
        {
          slug: 'the-philosopher\'s-stone',
          name: 'the Philosopher\'s Stone',
          units: [
            {
              slug: 'vocabulary',
              name: 'vocabulary',
              level: 'easy',
              thumbnail: 'http://via.placeholder.com/380x240',
              locked: false
            },
            {
              slug: 'conjunction',
              name: 'conjunction',
              level: 'easy',
              thumbnail: 'http://via.placeholder.com/380x240',
              locked: true
            },
            {
              slug: 'conjunction',
              name: 'conjunction',
              level: 'easy',
              thumbnail: 'http://via.placeholder.com/380x240',
              locked: true
            }
          ]
        },
        {
          slug: 'the-chamber-of-secrets',
          name: 'the Chamber of Secrets',
          units: [
            {
              slug: 'v-sound',
              name: '/v/ sound',
              level: 'easy',
              thumbnail: 'http://via.placeholder.com/380x240',
              locked: false
            },
            {
              slug: 'conjunction',
              name: 'conjunction',
              level: 'easy',
              thumbnail: 'http://via.placeholder.com/380x240',
              locked: true
            },
            {
              slug: 'conjunction',
              name: 'conjunction',
              level: 'easy',
              thumbnail: 'http://via.placeholder.com/380x240',
              locked: true
            }
          ]
        },
        {
          slug: 'the-prisoner-of-azkaban',
          name: 'the Prisoner of Azkaban',
          units: [
            {
              slug: 'v-sound',
              name: '/v/ sound',
              level: 'easy',
              thumbnail: 'http://via.placeholder.com/380x240',
              locked: false
            },
            {
              slug: 'conjunction',
              name: 'conjunction',
              level: 'easy',
              thumbnail: 'http://via.placeholder.com/380x240',
              locked: true
            },
            {
              slug: 'conjunction',
              name: 'conjunction',
              level: 'easy',
              thumbnail: 'http://via.placeholder.com/380x240',
              locked: true
            }
          ]
        },
        {
          slug: 'the-goblet-of-fire',
          name: 'The Goblet of Fire',
          units: [
            {
              slug: 'v-sound',
              name: '/v/ sound',
              level: 'easy',
              thumbnail: 'http://via.placeholder.com/380x240',
              locked: false
            },
            {
              slug: 'conjunction',
              name: 'conjunction',
              level: 'easy',
              thumbnail: 'http://via.placeholder.com/380x240',
              locked: true
            },
            {
              slug: 'conjunction',
              name: 'conjunction',
              level: 'easy',
              thumbnail: 'http://via.placeholder.com/380x240',
              locked: true
            }
          ]
        },
        {
          slug: 'the-order-of-the-phoenix',
          name: 'the Order of the Phoenix',
          units: [
            {
              slug: 'v-sound',
              name: '/v/ sound',
              level: 'easy',
              thumbnail: 'http://via.placeholder.com/380x240',
              locked: false
            },
            {
              slug: 'conjunction',
              name: 'conjunction',
              level: 'easy',
              thumbnail: 'http://via.placeholder.com/380x240',
              locked: true
            },
            {
              slug: 'conjunction',
              name: 'conjunction',
              level: 'easy',
              thumbnail: 'http://via.placeholder.com/380x240',
              locked: true
            }
          ]
        },{
          slug: 'the-half-blood-prince',
          name: 'the Half-Blood Prince',
          units: [
            {
              slug: 'v-sound',
              name: '/v/ sound',
              level: 'easy',
              thumbnail: 'http://via.placeholder.com/380x240',
              locked: false
            },
            {
              slug: 'conjunction',
              name: 'conjunction',
              level: 'easy',
              thumbnail: 'http://via.placeholder.com/380x240',
              locked: true
            },
            {
              slug: 'conjunction',
              name: 'conjunction',
              level: 'easy',
              thumbnail: 'http://via.placeholder.com/380x240',
              locked: true
            }
          ]
        },
        {
          slug: 'the-deadly-hallows',
          name: 'the Deadly Hallows',
          units: [
            {
              slug: 'v-sound',
              name: '/v/ sound',
              level: 'easy',
              thumbnail: 'http://via.placeholder.com/380x240',
              locked: true
            },
            {
              slug: 'conjunction',
              name: 'conjunction',
              level: 'easy',
              thumbnail: 'http://via.placeholder.com/380x240',
              locked: true
            },
            {
              slug: 'conjunction',
              name: 'conjunction',
              level: 'easy',
              thumbnail: 'http://via.placeholder.com/380x240',
              locked: true
            }
          ]
        }
      ]
    }
  }
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
      lesson
    } = this.props
    console.log('>>>>>', this)
    const {
      isRecommended,
      thumbnail,
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
          <Card className='lessonDetailCard'>
            <div className='header'>
              <LessonDetail
                thumbnail={thumbnail}
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
        </div>
        <Footer />
      </div>
    )
  }
}
