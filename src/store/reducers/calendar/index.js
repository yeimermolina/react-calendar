import _ from 'lodash'
import moment from 'moment'
import * as actionTypes from '../../actions/actionTypes'

const initialState = {
  currentYear: 2018,
  currentMonth: 7,
  currentDay: 2,
  days: 10
}

const reducer = (state = initialState, action) => {
  const { currentYear, currentMonth } = state
  switch (action.type) {
    case actionTypes.INCREMENT_MONTH:
      return {
        ...state,
        currentYear: currentMonth === 12 ? currentYear + 1 : currentYear,
        currentMonth: currentMonth === 12 ? 1 : currentMonth + 1
      }
    case actionTypes.DECREMENT_MONTH:
      return {
        ...state,
        currentYear: currentMonth === 1 ? currentYear - 1 : currentYear,
        currentMonth: currentMonth === 1 ? 12 : currentMonth - 1
      }
    default:
      return state
  }
}

export default reducer