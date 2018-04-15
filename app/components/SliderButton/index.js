import React from 'react'
import MdNavigateNext from 'react-icons/lib/md/navigate-next'
import MdNavigateBefore from 'react-icons/lib/md/navigate-before'

export default class SliderButton extends React.Component {
  render () {
    const { type } = this.props
    return (
      <button className=' slider-button' {...this.props}>
        <div className='icon'>
          { type === 'next' && <MdNavigateNext color='#fff' /> }
          { type === 'prev' && <MdNavigateBefore color='#fff' /> }
        </div>
      </button>
    )
  }
}

SliderButton.defaultProps = {
  title: 'Because waiting for you because waiting for you because waiting for you',
  subTitle: 'Notting Hills',
  timing: '0.14 sec',
  img: 'https://picsum.photos/246/369/?random'
}
