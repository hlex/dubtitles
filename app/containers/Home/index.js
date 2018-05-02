import React from 'react'
import { Player, ControlBar } from 'video-react'
// ======================================================
// Components
// ======================================================
import { Button, Corn } from '../../components'
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
import favoriteMovie from '../../images/favoritemovies.svg'
import wave from '../../images/wave.svg'
import popcornBag from '../../images/popcorn_bag.svg'

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
              <h3>Practice English</h3>
              <h3>can be as fun as your</h3>
              <img className='favoriteMovie'src={favoriteMovie} />
              <p lang='th'>"มาฝึกภาษาอังกฤษผ่านหนังเรื่องโปรดของคุณ"</p>
              <Button onClick={this.handleSignup} classified='tertiary' name='sign up' />
            </div>
          </div>
          <img id='popcornBag1' src={popcornBag} />
          <Corn absolute style={{ width: '64px' }} />
          <Corn absolute style={{ width: '24px' }} />
        </section>
        <div className=''>
          <img src={wave} />
        </div>
        <section className='bottom'>
          <div className='white-cloud'>
            <img id='tape3' src={graphicTape} />
            <div className='home-container'>
              <div className='intro'>
                <div className='text'>
                  <h1>JUST SAY IT,</h1>
                  <h1>ENGLISH FOR FUN.</h1>
                  <Button classified='primary' name={'let\'s dub'} />
                </div>
                <div className='intro-video'>
                  <Player
                    ref='player'
                    poster={'http://via.placeholder.com/640x360'}
                    preload='metadata'
                  >
                    <source src={'https://res.cloudinary.com/dtornrp4k/video/upload/v1525124268/harry/prove_yourself.mp4'} />
                    <ControlBar autoHide disableDefaultControls />
                  </Player>
                </div>
              </div>
            </div>
            <div className='home-inner-container'>
              <div className='tooltip'>
                <h4 lang='th'>
                  “ ใครว่าการฝึกพูดภาษาอังกฤษในชีวิตประจำวัน เป็นเรื่องยาก? ”
                </h4>
              </div>
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
            <div className='home-inner-container'>
              <div className='whatDoYouGetBlock'>
                <div className='section-title _center'>
                  <h3>What do you get from</h3>
                  <h1>dubtitles ?</h1>
                </div>
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
                      <h3>listen</h3>
                      <h3>carefully</h3>
                    </div>
                    <h4>การฟังเพื่อเลียนแบบ</h4>
                    <h4>จะช่วยสร้างการเรียนรู้</h4>
                    <h4>ได้อย่างรวดเร็วยิ่งขึ้น</h4>
                  </div>
                  <div className='whatDoYouGet'>
                    <img src={youGetVocab} />
                    <div className='topic'>
                      <h3>vocabulary</h3>
                      <h3>for daily life</h3>
                    </div>
                    <h4>ไม่ใช่แค่ศัพท์ในพจนานุกรม</h4>
                    <h4>แต่เป็นศัพท์ที่ใช้จริง</h4>
                    <h4>ในประจำวัน</h4>
                  </div>
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
                <h1>discover</h1>
                <div className='_right'>
                  <h4>เลือกประโยคที่จะพูด</h4>
                  <h4>ซึ่งมีสองส่วนหลักๆคือ</h4>
                  <h4>discover หรือ</h4>
                  <h4>จาก lessons </h4>
                </div>
              </div>
              <div className='steps listen'>
                <img src={stepListen} />
                <h1 className='_right'>listen</h1>
                <div className='_left'>
                  <h4>ตั้งใจฟังและอ่านตามคำ</h4>
                  <h4>ที่ตัวละครพูด และอย่าลืม</h4>
                  <h4>ที่จะลองพูดตามพร้อม</h4>
                  <h4>ออกสำเนียงอย่างมั่นใจ</h4>
                </div>
              </div>
              <div className='steps speak'>
                <img src={stepSpeak} />
                <div className='_right'>
                  <h4>จากนั้นกดอัดเสียง </h4>
                  <h4>โดยครั้งนี้เสียงของเราจะ</h4>
                  <h4>แทนที่เสียงของตัวละคร</h4>
                </div>
                <h1>speak</h1>
              </div>
              <div className='steps share'>
                <img src={stepShare} />
                <h1>save & share</h1>
                <div className='_right'>
                  <h4>กดบันทึกคลิป และแชร์</h4>
                  <h4>ให้เพืื่อนๆได้เห็นว่าเรา</h4>
                  <h4>พูดได้เทพสุดๆ และชวน</h4>
                  <h4>ทุกคนมาพูดไปด้วยกัน</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='ending'>
            <div className='invitation-wrapper'>
              <h3>Wanna try</h3>
              <h1>dubtitles</h1>
            </div>
            <Button full className='_mg0a' classified='primary' name={'let \'s dub'} />
          </div>
          <Footer />
        </section>
      </div>
    )
  }
}
