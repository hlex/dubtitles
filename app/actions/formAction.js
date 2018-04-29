import {
  FORM_CHANGE,
  FORM_CLEAR,
  FORM_BATCH_CHANGE,
  FORM_SET_EDITING_SLUG
} from './actionTypes'

export const updateForm = (key, value, actionType = FORM_CHANGE) => ({
  type: actionType,
  key,
  value
})

export const clearForm = () => ({
  type: FORM_CLEAR
})

export const batchUpdateForm = ({
  actionType = FORM_BATCH_CHANGE,
  data = {}
}) => ({
  type: actionType,
  batch: data
})

export const setEditingSlug = slug => ({
  type: FORM_SET_EDITING_SLUG,
  slug
})

export const initForm = entityKey => {
  return (dispatch, getState) => {
    // const targetData = BaseSelector.getEditingData(entityKey)(getState())
    // if (targetData) {
    // dispatch(batchUpdateForm({ data: targetData }))
    // } else {
    dispatch(clearForm())
    // }
  }
}
