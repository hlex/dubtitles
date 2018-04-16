import React from 'react'
// ======================================================
// Components
// ======================================================
import { Button } from '../../components'
// ======================================================
// Containers
// ======================================================
import Header from '../Header'
import Footer from '../Footer'
// ======================================================
// Hoc
// ======================================================
import { withRedux } from '../../hocs'
import { openModal } from '../../hocs/connectModal'

// ======================================================
// Action
// ======================================================
// ======================================================
// Asset
// ======================================================
import youGetSpeak from '../../images/speaking.svg'
import youGetListeing from '../../images/listening.svg'
import youGetVocab from '../../images/vocab.svg'

import graphicTape from '../../images/discover.svg'
import stepListen from '../../images/listen.svg'
import stepSpeak from '../../images/speak.svg'
import stepShare from '../../images/popcorn.svg'

const mapStateToProps = state => {
  return {}
}

const actionToProps = {}

@withRedux(mapStateToProps, actionToProps)
export default class extends React.Component {
  handleSignup = () => {
    openModal('authentication')
  }
  render() {
    return (
      <div className='page-home'>
        <section className='top'>
          <Header noBackground />
          <div className='home-container'>
            <div className='hero'>
              <h1>Practicing English</h1>
              <h2>can be as fun as your favorite movie</h2>
              <h3 lang='th'>มาฝึกภาษาอังกฤษผ่านหนังเรื่องโปรดของคุณ</h3>
              <Button onClick={this.handleSignup} classified='tertiary' name='sign up' />
              <img style={{ float: 'right' }} src='http://via.placeholder.com/525x300' />
            </div>
          </div>
          <img id='tape1' src={graphicTape} />
          <img id='tape2' src={graphicTape} />
        </section>
        <section className='bottom'>
          <div className='white-cloud'>
            <img id='tape3' src={graphicTape} />
            <div className='home-container'>
              <div className='tooltip'>
                <h4 lang='th'>
                  “ ใครว่าการฝึกพูดภาษาอังกฤษในชีวิตประจำวัน เป็นเรื่องยาก? ”
                </h4>
              </div>
            </div>
            <div className='home-inner-container'>
              <div className='section-title'>
                <h3>What is</h3>
                <h1>dubtitles ?</h1>
              </div>
              <div className='aboutUs-panel'>
                <ul className='list'>
                  <li className='each-bullet'>
                    <h4>
                      dubtitles
                      เว็บไซต์ฝึกภาษาอังกฤษผ่านประโยคที่คุ้นเคยจากภาพยนตร์เรื่องโปรด
                    </h4>
                  </li>
                  <li>
                    <h4>
                      จากทฤษฎีการเลียนแบบ (The Imitation Theory)
                      เลวิสได้ศึกษาและเชื่อว่า
                    </h4>
                    <h4>“พัฒนาการทางภาษานั้นเกิดจากการเลียนแบบ”</h4>
                  </li>
                  <li>
                    <h4>
                      ดังนั้นการดูภาพยนตร์บ่อยๆ
                      จะทำให้เราได้ทั้งคำศัพท์และทักษะการฟังที่ดี{' '}
                    </h4>
                    <h4>
                      แต่ถ้าเราลองพูดตามไปด้วยหละ แน่นอน
                      เราจะได้ซึมซับสำเนียงจากเจ้าของภาษาอีกด้วย!
                    </h4>
                  </li>
                  <li>
                    <h4>
                      เห็นมั้ย
                      การฝึกพูดภาษาอังกฤษไม่ใช่เรื่องที่ยากหรือไกลตัวอย่างที่คิด
                    </h4>
                    <h4>
                      ฉะนั้นเวลาทุกคนดูหนัง อย่ามัวแต่อ่าน Subtitles แต่มาลอง
                      dubtitles กันเถอะ!
                    </h4>
                  </li>
                </ul>
              </div>
            </div>
            <div className='home-container'>
              <div className='section-title _right'>
                <h3>What do ypu get from</h3>
                <h1>dubtitles ?</h1>
              </div>
            </div>
            <div className='home-inner-container'>
              <div className='whatDoYouGetWrapper'>
                <div className='whatDoYouGet'>
                  <img src={youGetSpeak} />
                  <div className='topic'>
                    <h3>speak</h3>
                    <h3>confidently</h3>
                  </div>
                  <h4>พูดได้อย่างมั่นใจ</h4>
                  <h4>และถูกต้อง</h4>
                  <h4>จากต้นแบบที่ดี</h4>
                </div>
                <div className='whatDoYouGet'>
                  <img src={youGetListeing} />
                  <div className='topic'>
                    <h3>speak</h3>
                    <h3>confidently</h3>
                  </div>
                  <h4>พูดได้อย่างมั่นใจ</h4>
                  <h4>และถูกต้อง</h4>
                  <h4>จากต้นแบบที่ดี</h4>
                </div>
                <div className='whatDoYouGet'>
                  <img src={youGetVocab} />
                  <div className='topic'>
                    <h3>speak</h3>
                    <h3>confidently</h3>
                  </div>
                  <h4>พูดได้อย่างมั่นใจ</h4>
                  <h4>และถูกต้อง</h4>
                  <h4>จากต้นแบบที่ดี</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='section-title steps'>
              <h3>Just 4 steps with</h3>
              <h1>dubtitles ?</h1>
            </div>
            <div className='stepWrapper'>
              <div className='steps discover'>
                <img src={graphicTape} />
                <h1>Discover</h1>
                <div className='_right'>
                  <h4>เลือกประโยคที่จะพูด</h4>
                  <h4>ซึ่งมีสองส่วนหลักๆคือ</h4>
                  <h4>discover หรือ</h4>
                  <h4>จาก lessons </h4>
                </div>
              </div>
              <div className='steps listen'>
                <img src={stepListen} />
                <h1 className='_right'>Listen</h1>
                <div className='_left'>
                  <h4>เลือกประโยคที่จะพูด</h4>
                  <h4>ซึ่งมีสองส่วนหลักๆคือ</h4>
                  <h4>discover หรือ</h4>
                  <h4>จาก lessons </h4>
                </div>
              </div>
              <div className='steps speak'>
                <img src={stepSpeak} />
                <div className='_right'>
                  <h4>เลือกประโยคที่จะพูด</h4>
                  <h4>ซึ่งมีสองส่วนหลักๆคือ</h4>
                  <h4>discover หรือ</h4>
                  <h4>จาก lessons </h4>
                </div>
                <h1>Speak</h1>
              </div>
              <div className='steps share'>
                <img src={stepShare} />
                <h1>Save & Share</h1>
                <div className='_right'>
                  <h4>เลือกประโยคที่จะพูด</h4>
                  <h4>ซึ่งมีสองส่วนหลักๆคือ</h4>
                  <h4>discover หรือ</h4>
                  <h4>จาก lessons </h4>
                </div>
              </div>
            </div>
          </div>
          <div className='ending'>
            <div className='invitation-wrapper'>
              <h3>Wanna try</h3>
              <h1>dubtitles</h1>
            </div>
            <Button full className='_mg0a' classified='primary' name={'Let \'s dub'} />
          </div>
          <Footer />
        </section>
      </div>
    )
  }
}
