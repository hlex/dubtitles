import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import * as Action from '../actions/action'

import DiscoverPanel from '../components/DiscoverPanel'

function mapStateToProps (state) {
  return {}
}

const actions = {
  goToPage: Action.goToPage
}

function mapDispatchToProps (dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Discover extends React.Component {
  render () {
    const { data } = this.props
    return (
      <div className='discover-layout'>
        {
          _.map(data, (item, index) => (
            <div lkey={index} className='panelHolder'>
              <DiscoverPanel data={item} />
            </div>
          ))
        }
      </div>
    )
  }
}

Discover.defaultProps = {
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

  ] }
