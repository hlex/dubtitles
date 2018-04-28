import React from 'react'
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
// ======================================================
// Asset
// ======================================================

const settings = {
  speed: 1500,
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

const actionToProps = {}

@withRedux(mapStateToProps, actionToProps)
export default class extends React.Component {
  static defaultProps = {
    lessons: [
      {
        thumbnail: 'http://via.placeholder.com/380x240',
        name: 'ENGLISH FOR MUGGLES',
        subtitle: 'British Accent Training',
        description: 'You will learn grammar and also British accent with the top hit scenes from Harry Potter season 1-7',
        time: 30,
        subLesson: 7
      },
      {
        thumbnail: 'http://via.placeholder.com/380x240',
        name: 'ENGLISH FOR MUGGLES',
        subtitle: 'British Accent Training',
        description: 'You will learn grammar and also British accent with the top hit scenes from Harry Potter season 1-7',
        time: 30,
        subLesson: 7
      },
      {
        thumbnail: 'http://via.placeholder.com/380x240',
        name: 'ENGLISH FOR MUGGLES',
        subtitle: 'British Accent Training',
        description: 'You will learn grammar and also British accent with the top hit scenes from Harry Potter season 1-7',
        time: 30,
        subLesson: 7
      },
      {
        thumbnail: 'http://via.placeholder.com/380x240',
        name: 'ENGLISH FOR MUGGLES',
        subtitle: 'British Accent Training',
        description: 'You will learn grammar and also British accent with the top hit scenes from Harry Potter season 1-7',
        time: 30,
        subLesson: 7
      },
      {
        thumbnail: 'http://via.placeholder.com/380x240',
        name: 'ENGLISH FOR MUGGLES',
        subtitle: 'British Accent Training',
        description: 'You will learn grammar and also British accent with the top hit scenes from Harry Potter season 1-7',
        time: 30,
        subLesson: 7
      }
    ]
  }
  render () {
    const {
      lessons
    } = this.props
    const settingslider = {
      ...settings,
      slidesToShow: 3,
      slidesToScroll: 1
    }
    return (
      <div className='page-lessons'>
        <div className='container'>
          <SlickSlider
            settings={settingslider}
            showPrevNextButtons={false}
          >
            {
              _.map(lessons, (lesson, index) => (
                <div key={index} style={{ margin: '0px 7px' }}>
                  <LessonCard {...lesson} />
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
