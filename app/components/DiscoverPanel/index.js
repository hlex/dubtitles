import React from 'react'
import _ from 'lodash'
import MediaCard from '../MediaCard'
import SlickSlider from '../SlickSlider'

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

class DiscoverPanel extends React.Component {
  render () {
    const { label, subLabel, color, medias } = this.props.data
    const settingslider = {
      ...settings,
      slidesToShow: _.clamp(_.size(medias), 1, 4),
      slidesToScroll: _.clamp(_.size(medias), 1, 4)
    }
    return (
      <div className='discover-panel'>
        <div className='panel-header'>
          <div className='label' style={{ backgroundColor: color }} dangerouslySetInnerHTML={{ __html: label }} />
          <div className='subLabel'>: {subLabel}</div>
        </div>
        <div className='content'>
          <SlickSlider
            settings={settingslider}
            showPrevNextButtons
            prevArrow={<div />}
            nextArrowWrapperStyle={{
              position: 'absolute',
              top: 0,
              right: 0,
              zIndex: 1
            }}
          >
            { _.map(medias, (item, index) => (
              <div key={index} style={{ margin: '0px 7px' }}>
                <MediaCard {...item} />
              </div>
            ))}
          </SlickSlider>
        </div>
      </div>
    )
  }
}

export default DiscoverPanel

DiscoverPanel.defaultProps = {
  label: 'HITS<br/>QUOTES',
  subLabel: 'คำคมฮิตติดปาก',
  color: '#ff8747',
  medias: [
    {
      title: 'Because waiting for you because waiting for you because waiting for you',
      subTitle: 'Notting Hills',
      timing: '0.14 sec',
      img: 'https://picsum.photos/246/369/?random'
    },
    {
      title: 'You’re waiting for a train',
      subTitle: 'The Dark Knight',
      timing: '0.14 sec',
      img: 'https://picsum.photos/246/369/?random'
    },
    {
      title: 'You’re waiting for a train',
      subTitle: 'The Dark Knight',
      timing: '0.14 sec',
      img: 'https://picsum.photos/246/369/?random'
    },
    {
      title: 'You’re waiting for a train',
      subTitle: 'The Dark Knight',
      timing: '0.14 sec',
      img: 'https://picsum.photos/246/369/?random'
    },
    {
      title: 'You’re waiting for a train',
      subTitle: 'The Dark Knight',
      timing: '0.14 sec',
      img: 'https://picsum.photos/246/369/?random'
    },
    {
      title: 'You’re waiting for a train',
      subTitle: 'The Dark Knight',
      timing: '0.14 sec',
      img: 'https://picsum.photos/246/369/?random'
    },
    {
      title: 'You’re waiting for a train',
      subTitle: 'The Dark Knight',
      timing: '0.14 sec',
      img: 'https://picsum.photos/246/369/?random'
    }
  ]
}
