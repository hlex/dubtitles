import React from 'react'
// ======================================================
// Components
// ======================================================
import {
  Button
} from '../../components'
// ======================================================
// Containers
// ======================================================
import Header from '../Header'
import Footer from '../Footer'
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
  render() {
    return (
      <div className='page-home'>
        <Header noBackground />
        <div className='container'>
          <div className='hero'>
            <h1>" Practicing English</h1>
            <h2>can be as fun as your favorite movie "</h2>
            <h3 lang='th'>มาฝึกภาษาอังกฤษผ่านหนังเรื่องโปรดของคุณ</h3>
            <Button classified='tertiary' name='sign up' />
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}
