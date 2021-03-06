import {
  ENTITIES_LESSON_RECEIVED
} from '../../actions/actionTypes'
import _ from 'lodash/fp'

const getInitialState = () => ({
  isFetched: false,
  isError: false,
  data: {},
  rawData: {}
})

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case ENTITIES_LESSON_RECEIVED:
      return {
        ...state,
        isFetched: true,
        data: action.data,
        rawData: action.rawData
      }
    default: {
      return state
    }
  }
}
