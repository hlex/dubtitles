import React from 'react'
import _ from 'lodash'

import DiscoverPanel from '../DiscoverPanel'

export default class extends React.Component {
  static defaultProps = {
    groups: [
      {
        label: 'BEST QUOTES<br/>OF ALL TIME',
        subLabel: 'ประโยคยอดนิยมตลอดกาล',
        color: '#ff7547',
        medias: [
          {
            title:
              'Because waiting for you because waiting for you because waiting for you',
            subTitle: 'Notting Hills',
            timing: '0.14 sec',
            img:
              'https://res.cloudinary.com/dghqbnkcb/image/upload/v1525010988/discover%20pic%20/discoverclip-04.png',
            src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
            subtitle: {
              1: 'When I grew up.',
              5: '',
              7: 'I am a stupid one.'
            }
          }
        ]
      }
    ],
    favList: {},
    canFav: true,
    onClick: () => null,
    onClickFav: () => null
  }
  render() {
    const { groups, favList, canFav, onClick, onClickFav } = this.props
    return (
      <div className='mediaSliderPanel'>
        {_.map(groups, (group, index) => (
          <div key={index} className='panelHolder'>
            <DiscoverPanel
              key={group.label}
              favList={favList}
              canFav={canFav}
              onClickFav={onClickFav}
              onClick={onClick}
              data={group}
            />
          </div>
        ))}
      </div>
    )
  }
}
