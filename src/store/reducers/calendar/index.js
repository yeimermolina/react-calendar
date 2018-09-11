import * as actionTypes from '../../actions/actionTypes'
import { generateWeeks } from '../../../utils/generateCalendar'

const initialState = {
  currentYear: 2018,
  currentMonth: 7,
  initialYear: 2018,
  initialMonth: 7,
  initialDay: 2,
  weeks: generateWeeks(7, 2018, 2, 7, 2018, 30, 'US'),
  days: 10
}

const reducer = (state = initialState, action) => {
  const { currentYear, currentMonth } = state
  let year, month
  switch (action.type) {
    case actionTypes.INCREMENT_MONTH:
      year = currentMonth === 12 ? currentYear + 1 : currentYear,
      month = currentMonth === 12 ? 1 : currentMonth + 1
      return {
        ...state,
        currentYear: year,
        currentMonth: month,
        weeks: generateWeeks(month, year, 2, 7, 2018, 30, 'US'),
      }
    case actionTypes.DECREMENT_MONTH:
      year = currentMonth === 1 ? currentYear - 1 : currentYear,
      month = currentMonth === 1 ? 12 : currentMonth - 1
      return {
        ...state,
        currentYear: year,
        currentMonth: month,
        weeks: generateWeeks(month, year, 2, 7, 2018, 30, 'US'),
      }
    default:
      return state
  }
}

export default reducer