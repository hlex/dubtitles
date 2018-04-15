import React from 'react'

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
            title: '“I’m also just a girl…”',
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
    ]
  }
  render() {
    const { data } = this.props
    return (
      <div className='mediaSliderPanel'>
        {_.map(data, (item, index) => (
          <div key={index} className='panelHolder'>
            <DiscoverPanel data={item} />
          </div>
        ))}
      </div>
    )
  }
}
