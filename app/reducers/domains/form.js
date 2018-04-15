import {
  FORM_CHANGE,
  FORM_CLEAR,
  FORM_BATCH_CHANGE,
  FORM_SET_EDITING_SLUG
} from '../../actions/actionTypes'
import _ from 'lodash/fp'

const getInitialState = () => ({
  email: '',
  password: ''
})

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case FORM_CHANGE:
      return _.set(action.key, action.value, state)
    case FORM_CLEAR:
      return getInitialState()
    case FORM_BATCH_CHANGE:
      return {
        ...state,
        ...action.batch
      }
    case FORM_SET_EDITING_SLUG:
      return {
        ...state,
        editingSlug: action.slug
      }
    default: {
      return state
    }
  }
}
