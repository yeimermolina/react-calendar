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

export const handleStartDate = (startDate) => {
  return {
    type: actionTypes.HANDLE_START_DATE,
    payload: startDate
  }
}

export const handleDaysNumber = ({ target }) => {
  return {
    type: actionTypes.HANDLE_NUMBER_DAYS,
    payload: target.value
  }
}

export const handleCountryCode = ({ target }) => {
  return {
    type: actionTypes.HANDLE_COUNTRY_CODE,
    payload: target.value
  }
}

export const generateCalendar = () => {
  return {
    type: actionTypes.GENERATE_CALENDAR
  }
}