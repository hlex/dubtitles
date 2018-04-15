import React from 'react'

import { Button } from '../../components'

export default class extends React.Component {
  render() {
    return (
      <div className='storybook-wrapper'>
        <div className='story'>
          <span>Primary Button</span>
          <Button full classified='primary' name='dub' />
          <span>Secondary Button</span>
          <Button full classified='secondary' name='start lesson' />
          <span>Log in Button</span>
          <Button full classified='secondary' name='log in' />
          <span>Sign up Button</span>
          <Button full classified='tertiary' name='sign up' />
        </div>
        <div className='story'>
          <h1>h1 : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, dolorem.</h1>
          <h2>h2 : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, itaque?</h2>
          <h3>h3 : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, quibusdam!</h3>
          <h4>h4 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ullam sequi possimus cumque dolorum aperiam praesentium omnis alias eligendi!</h4>
          <h5>h5 : Lorem ipsum dolor sit amet consectetur adipisicing elit. In, inventore.</h5>
          <p>p : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, dolorum?</p>
        </div>
        <div className='story'>
          <h1 lang='th'>h1 : กุ้งหมีกั้งโดนัท</h1>
          <h2 lang='th'>h2 : กุ้งหมีกั้งโดนัท</h2>
          <h3 lang='th'>h3 : กุ้งหมีกั้งโดนัท</h3>
          <h4 lang='th'>h4 : กุ้งหมีกั้งโดนัท</h4>
          <h5 lang='th'>h5 : กุ้งหมีกั้งโดนัท</h5>
          <p lang='th'>p : กุ้งหมีกั้งโดนัท</p>
        </div>
      </div>
    )
  }
}
