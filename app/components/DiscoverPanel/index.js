import React from 'react'
import _ from 'lodash'
import MediaCard from '../MediaCard'
import SlickSlider from '../SlickSlider'

const settings = {
  speed: 500,
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
    const { data, favList, canFav, onClick, onClickFav } = this.props
    const { label, canDownload, subLabel, color, medias } = data
    const settingslider = {
      ...settings,
      slidesToShow: _.clamp(_.size(medias), 1, 3.3),
      slidesToScroll: _.clamp(_.size(medias), 1, 1)
    }
    return (
      <div className='discover-panel'>
        <div className='panel-header'>
          <div className='label' style={{ backgroundColor: color }} dangerouslySetInnerHTML={{ __html: label }} />
          <div className='subLabel _hidden'>: {subLabel}</div>
        </div>
        <div className='content'>
          <SlickSlider
            settings={settingslider}
            showPrevNextButtons
            nextArrowWrapperStyle={{
              position: 'absolute',
              top: 0,
              right: 0,
              zIndex: 1
            }}
            prevArrowWrapperStyle={{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1
            }}
          >
            { _.map(medias, (item, index) => (
              <div key={index} style={{ margin: '0px 7px' }}>
                <MediaCard
                  videoID={`${item.slug}-${index}`}
                  title={item.title}
                  subtitle={item.source}
                  timing={item.timing}
                  posterSrc={item.posterSrc}
                  videoSrc={item.videoSrc}
                  isFav={_.has(favList, item.slug)}
                  canFav={canFav}
                  canDownload={canDownload}
                  onClick={() => onClick({ slug: item.slug })}
                  onClickFav={(nextFavState) => onClickFav({ slug: item.slug, isFav: nextFavState })}
                />
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
  canDownload: false,
  canFav: true,
  data: {
    label: 'HITS<br/>QUOTES',
    subLabel: 'คำคมฮิตติดปาก',
    color: '#ff8747',
    medias: [
      {
        title: 'Because waiting for you because waiting for you because waiting for you',
        subTitle: 'Notting Hills',
        timing: '0.14 sec',
        img: 'https://picsum.photos/308/205/?random',
        src: 'http://media.w3.org/2010/05/bunny/trailer.mp4'
      },
      {
        title: 'You’re waiting for a train',
        subTitle: 'The Dark Knight',
        timing: '0.14 sec',
        img: 'https://picsum.photos/308/205/?random',
        src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
      },
      {
        title: 'You’re waiting for a train',
        subTitle: 'Notting Hills',
        timing: '0.14 sec',
        img: 'https://picsum.photos/308/205/?random',
        src: 'http://media.w3.org/2010/05/bunny/trailer.mp4'
      },
      {
        title: 'You’re waiting for a train',
        subTitle: 'The Dark Knight',
        timing: '0.14 sec',
        img: 'https://picsum.photos/308/205/?random',
        src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
      },
      {
        title: 'You’re waiting for a train',
        subTitle: 'Notting Hills',
        timing: '0.14 sec',
        img: 'https://picsum.photos/308/205/?random',
        src: 'http://media.w3.org/2010/05/bunny/trailer.mp4'
      },
      {
        title: 'You’re waiting for a train',
        subTitle: 'The Dark Knight',
        timing: '0.14 sec',
        img: 'https://picsum.photos/308/205/?random',
        src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
      },
      {
        title: 'You’re waiting for a train',
        subTitle: 'Notting Hills',
        timing: '0.14 sec',
        img: 'https://picsum.photos/308/205/?random',
        src: 'http://media.w3.org/2010/05/bunny/trailer.mp4'
      }
    ]
  }
}
