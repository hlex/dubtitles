import {
  DUBTITLE_SET_MEDIA
} from '../../actions/actionTypes'
// import _ from 'lodash/fp'

const getInitialState = () => ({
  title: '',
  movieName: '',
  timing: '',
  posterSrc: 'https://res.cloudinary.com/dghqbnkcb/image/upload/v1525011999/discoverposter/Untitled-4-06.png',
  videoSrc: 'https://res.cloudinary.com/dghqbnkcb/video/upload/v1525029691/discoverposter/ugh.as_if.mp4',
  subtitle: {
    '0.0': 'Ew! Get off of me!',
    '2.3': '',
    '2.8': 'ugh! as if'
  }
})

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case DUBTITLE_SET_MEDIA:
      return {
        ...state,
        ...action.data
      }
    default: {
      return state
    }
  }
}
