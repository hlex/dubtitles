import React from 'react'

import { Button } from '../../components'

export default class extends React.Component {
  render() {
    return (
      <div className='storybook-wrapper'>
        <Button classified='primary' name='dub' />
        <Button classified='secondary' name='start lesson' />
        <Button primary classified='secondary' name='log in' />
        <Button classified='tertiary' name='sign up' />
      </div>
    )
  }
}
