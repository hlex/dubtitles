import React from 'react'
import _ from 'lodash'

import DiscoverPanel from '../DiscoverPanel'

export default class extends React.Component {
  static defaultProps = {
    data: [
      {
        label: 'BEST QUOTES<br/>OF ALL TIME',
        subLabel: 'ประโยคยอดนิยมตลอดกาล',
        color: '#ff7547',
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
          }
        ]
      }
    ]
  }
  render() {
    const { data, onClick } = this.props
    return (
      <div className='mediaSliderPanel'>
        {_.map(data, (item, index) => (
          <div key={index} className='panelHolder'>
            <DiscoverPanel onClick={onClick} id={index} data={item} />
          </div>
        ))}
      </div>
    )
  }
}
