import {
  DUBTITLE_SET_SOURCE
} from '../../actions/actionTypes'
// import _ from 'lodash/fp'

const getInitialState = () => ({
  src: ''
})

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case DUBTITLE_SET_SOURCE:
      return {
        ...state,
        src: action.src
      }
    default: {
      return state
    }
  }
}
