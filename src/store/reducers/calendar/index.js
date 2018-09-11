import * as actionTypes from '../../actions/actionTypes'
import { generateWeeks } from '../../../utils/generateCalendar'
import moment from 'moment';

const initialState = {
  currentYear: 2018,
  currentMonth: 7,
  initialYear: 2018,
  initialMonth: 7,
  initialDay: 2,
  weeks: [],
  numberDays: 10,
  startDate: moment(),
  countryCode: 'US'
}

const reducer = (state = initialState, action) => {
  const { currentYear, currentMonth, startDate, numberDays, countryCode } = state
  const initialYear = startDate.year()
  const initialMonth = startDate.month() + 1
  const initialDay = startDate.date()
  let year, month
  switch (action.type) {
    case actionTypes.INCREMENT_MONTH:
      year = currentMonth === 12 ? currentYear + 1 : currentYear,
      month = currentMonth === 12 ? 1 : currentMonth + 1
      return {
        ...state,
        currentYear: year,
        currentMonth: month,
        weeks: generateWeeks(month, year, initialDay, initialMonth, initialYear, numberDays, countryCode),
      }
    case actionTypes.DECREMENT_MONTH:
      year = currentMonth === 1 ? currentYear - 1 : currentYear,
      month = currentMonth === 1 ? 12 : currentMonth - 1
      return {
        ...state,
        currentYear: year,
        currentMonth: month,
        weeks: generateWeeks(month, year, initialDay, initialMonth, initialYear, numberDays, countryCode),
      }
    case actionTypes.HANDLE_START_DATE:
      return {
        ...state,
        startDate: action.payload
      }
    case actionTypes.HANDLE_NUMBER_DAYS:
      return {
        ...state,
        numberDays: action.payload
      }
    case actionTypes.HANDLE_COUNTRY_CODE:
      return {
        ...state,
        countryCode: action.payload
      }
    case actionTypes.GENERATE_CALENDAR:
      
      return {
        ...state,
        initialYear,
        initialMonth,
        initialDay,
        currentMonth: initialMonth,
        currentYear: initialYear,
        weeks: generateWeeks(initialMonth, initialYear, initialDay, initialMonth, initialYear, numberDays, countryCode),
      }
    default:
      return state
  }
}

export default reducer