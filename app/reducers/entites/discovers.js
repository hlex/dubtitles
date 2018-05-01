import {

} from '../../actions/actionTypes'
import _ from 'lodash/fp'

const getInitialState = () => ({})

export default (state = getInitialState(), action) => {
  switch (action.type) {
    default: {
      return state
    }
  }
}
