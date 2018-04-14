import React from 'react'
import PT from 'prop-types'
import _ from 'lodash'
import stylePropType from 'react-style-proptype'
import SlickSlide from 'react-slick'
import './slick.css'
import SliderButton from '../../components/SliderButton'
// import { DotButton, SliderButton } from '../Button';

const styled = {
  position: 'relative',
  display: 'block'
}

const defaultSetting = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  variableWidth: false
}

const defaultRenderDotButton = i => <button key={`btn-${i}`} />

class Slider extends React.Component {
  static propTypes = {
    // settings: PT.shape({
    //   speed: PT.number,
    // }),
    children: PT.node,
    style: stylePropType,
    sliderStyle: stylePropType,
    initialSlide: PT.number,
    swipe: PT.bool,

    // Dots Button
    showDotButtons: PT.bool,
    dotsClass: PT.string,
    dotsJustifyContent: PT.oneOf(['flex-start', 'center', 'flex-end', 'space-around', 'space-between']),
    dotsDirection: PT.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
    renderDotButton: PT.func,

    // Prev, Next Button
    showPrevNextButtons: PT.bool,
    prevArrowWrapperStyle: stylePropType,
    nextArrowWrapperStyle: stylePropType,
    nextArrow: PT.element,
    prevArrow: PT.element,

    infinite: PT.bool,
    centerMode: PT.bool,
    variableWidth: PT.bool,

    afterChange: PT.func,
    goPrev: PT.func,
    goNext: PT.func

  }

  static defaultProps = {
    // Dots
    showDotButtons: false,
    dotsClass: 'slick-dots',
    dotsJustifyContent: 'flex-start',
    dotsDirection: 'row',
    renderDotButton: undefined,

    showPrevNextButtons: true,
    prevArrowWrapperStyle: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: 0,
      zIndex: 1
    },
    nextArrowWrapperStyle: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      right: 0,
      zIndex: 1
    },
    nextArrow: <SliderButton type='next' />,
    prevArrow: <SliderButton type='prev' />,
    infinite: true,
    centerMode: false,
    variableWidth: false,
    children: null,
    initialSlide: 0,
    swipe: true,
    style: {},
    sliderStyle: {},
    settings: {},
    afterChange: () => null
  }

  componentDidMount() {
    // console.log('innerSlider 1', this.slider.innerSlider.state);
    setTimeout(() => {
      // console.log('state', this.slider.innerSlider.state);
    }, 2000)
  }

  goPrev = () => {
    // setTimeout(() => {
    //   this.slider.slickPrev();
    // }, 1000);
    this.slider.slickPrev()
  }

  goNext = () => {
    // setTimeout(() => {
    //   this.slider.slickNext();
    // }, 1000);
    this.slider.slickNext()
  }

  afterChange = (index) => {
    this.props.afterChange(index)
  }

  render() {
    const {
      style,
      sliderStyle,
      showDotButtons,
      dotsClass,
      dotsJustifyContent,
      dotsDirection,
      renderDotButton,
      showPrevNextButtons,
      prevArrowWrapperStyle,
      nextArrowWrapperStyle,
      prevArrow,
      nextArrow,
      children,
      settings,
      infinite,
      centerMode,
      variableWidth,
      initialSlide,
      swipe
    } = this.props

    const combinedSettings = { ...defaultSetting, ...settings }

    // infinite
    combinedSettings.infinite = infinite

    // Center Mode
    combinedSettings.centerMode = centerMode

    // Variable Width
    combinedSettings.variableWidth = variableWidth

    // Initial Slider
    combinedSettings.initialSlide = initialSlide

    // Initial Slider
    combinedSettings.swipe = swipe

    // Dots
    combinedSettings.dots = showDotButtons
    if (showDotButtons) {
      combinedSettings.customPaging = renderDotButton || defaultRenderDotButton
      combinedSettings.dotsClass = _.trim(`slick-dots-essential ${dotsClass} ${dotsJustifyContent} ${dotsDirection}`)
    }
    const comStyle = { ...styled, ...style }
    return (
      <div style={comStyle}>
        <div style={sliderStyle} className={centerMode ? 'center' : ''}>

          {showPrevNextButtons && prevArrow &&
            <div style={prevArrowWrapperStyle}>{React.cloneElement(prevArrow, { onClick: this.goPrev })}</div>
          }
          <SlickSlide
            ref={(c) => { this.slider = c }}
            {...combinedSettings}
            afterChange={this.afterChange}
            goPrev={this.slickPrev}
            goNext={this.slickNext}
          >
            {React.Children.map(children, child => (<div>{React.cloneElement(child)}</div>))}
          </SlickSlide>
          {showPrevNextButtons && nextArrow &&
            <div style={nextArrowWrapperStyle}>{React.cloneElement(nextArrow, { onClick: this.goNext })}</div>
          }
        </div>
      </div>
    )
  }
}

export default Slider
