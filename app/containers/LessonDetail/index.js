import React from 'react'
import _ from 'lodash'
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
  goToPage
} from '../../actions'
// ======================================================
// Asset
// ======================================================

const mapStateToProps = state => {
  return {}
}

const actionToProps = {
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
  render () {
    const {
      lesson
    } = this.props
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
      <div className='page-lessons-detail'>
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
                            <div className={`unitItem ${unit.locked ? 'locked' : ''}`}>
                              <img src={unit.thumbnail} alt='' />
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
