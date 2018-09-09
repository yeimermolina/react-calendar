import * as actionTypes from './actionTypes'

export const incrementMonth = () => {
  return {
    type: actionTypes.INCREMENT_MONTH
  }
}

export const decrementMonth = () => {
  return {
    type: actionTypes.DECREMENT_MONTH
  }
}