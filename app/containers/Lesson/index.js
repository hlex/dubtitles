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
        slidesToShow: 3,
        slidesToScroll: 3
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
  return {}
}

const actionToProps = {
  onSelectLesson: goToPage
}

@withRedux(mapStateToProps, actionToProps)
export default class extends React.Component {
  static defaultProps = {
    lessons: [
      {
        isRecommended: true,
        thumbnail: 'http://via.placeholder.com/380x240',
        slug: 'english-for-muggles-1',
        name: 'ENGLISH FOR MUGGLES 1',
        subtitle: 'British Accent Training',
        description: 'You will learn grammar and also British accent with the top hit scenes from Harry Potter season 1-7',
        time: 30,
        subLesson: 7
      },
      {
        isRecommended: false,
        thumbnail: 'http://via.placeholder.com/380x240',
        slug: 'english-for-muggles-2',
        name: 'ENGLISH FOR MUGGLES 2',
        subtitle: 'British Accent Training',
        description: 'You will learn grammar and also British accent with the top hit scenes from Harry Potter season 1-7',
        time: 30,
        subLesson: 7
      },
      {
        isRecommended: false,
        thumbnail: 'http://via.placeholder.com/380x240',
        slug: 'english-for-muggles-3',
        name: 'ENGLISH FOR MUGGLES 3',
        subtitle: 'British Accent Training',
        description: 'You will learn grammar and also British accent with the top hit scenes from Harry Potter season 1-7',
        time: 30,
        subLesson: 7
      },
      {
        isRecommended: false,
        thumbnail: 'http://via.placeholder.com/380x240',
        slug: 'english-for-muggles-4',
        name: 'ENGLISH FOR MUGGLES 4',
        subtitle: 'British Accent Training',
        description: 'You will learn grammar and also British accent with the top hit scenes from Harry Potter season 1-7',
        time: 30,
        subLesson: 7
      },
      {
        isRecommended: false,
        thumbnail: 'http://via.placeholder.com/380x240',
        slug: 'english-for-muggles-5',
        name: 'ENGLISH FOR MUGGLES 5',
        subtitle: 'British Accent Training',
        description: 'You will learn grammar and also British accent with the top hit scenes from Harry Potter season 1-7',
        time: 30,
        subLesson: 7
      }
    ]
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
      <div className='page-lessons'>
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
          </SlickSlider>
        </div>
        <Footer />
      </div>
    )
  }
}
