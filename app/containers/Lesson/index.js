import React from 'react'
import _ from 'lodash'
// ======================================================
// Component
// ======================================================
import {
  SlickSlider,
  LessonCard
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
  getLessonData,
  goToPage
} from '../../actions'
// ======================================================
// Asset
// ======================================================

const settings = {
  speed: 300,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
        // dots: true
      }
    }
  ]
}

const mapStateToProps = state => {
  return {
    isFetchedLessonData: state.entities.lessons.isFetch,
    isUserLoggedIn: state.user.isLoggedIn,
    lessons: state.entities.lessons.rawData,
    entities: state.entities.lessons.data
  }
}

const actionToProps = {
  getLessonData,
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
  handleSelectLesson = (lessonSlug) => {
    this.props.onSelectLesson(`lessons/${lessonSlug}`)
  }
  render () {
    const {
      lessons
    } = this.props
    const settingslider = {
      ...settings,
      slidesToShow: 3.3,
      slidesToScroll: 1
    }
    return (
      <div className='dubtitlePage page-lessons'>
        <div className='slick-wrapper'>
          <SlickSlider
            infinite={false}
            settings={settingslider}
            showPrevNextButtons={false}
          >
            {
              _.map(lessons, (lesson, index) => (
                <div className='lesson-item' key={index}>
                  <LessonCard onClick={() => this.handleSelectLesson(lesson.slug)} {...lesson} />
                </div>
              ))
            }
            <div className='lesson-item'>
              <div style={{
                minHeight: '550px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff'
              }}>
                <h1 style={{ color: '#e8523e' }}>
                  Coming Soon
                </h1>
              </div>
            </div>
          </SlickSlider>
        </div>
        <Footer />
      </div>
    )
  }
}
