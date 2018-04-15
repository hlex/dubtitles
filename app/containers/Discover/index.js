import React from 'react'
// ======================================================
// Containers
// ======================================================
import Footer from '../Footer'
// ======================================================
// Components
// ======================================================
import {
  DiscoverPanel
} from '../../components'
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

const mapStateToProps = state => {
  return {}
}

const actionToProps = {}

@withRedux(mapStateToProps, actionToProps)
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
      <div className='page-discover'>
        <h1>Discover Page</h1>
        <div className='discover-layout'>
          {_.map(data, (item, index) => (
            <div key={index} className='panelHolder'>
              <DiscoverPanel data={item} />
            </div>
          ))}
        </div>
        <Footer />
      </div>
    )
  }
}
