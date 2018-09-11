import React, { Component } from 'react'
import { connect } from 'react-redux'
import DatePicker from '../../components/ui/date-picker'
import Input from '../../components/ui/input'
import Input from '../../components/ui/button'
import * as actionCreator from '../../store/actions/calendar'

class Menu extends Component {
  render() {
    const { startDate, handleStartDate, numberDays, countryCode, handleDaysNumber, handleCountryCode } = this.props
    return (
      <div className='Menu'>
        <DatePicker 
          selectedDate={startDate}
          handleChange={handleStartDate}
        />
        <Input
          handleChange={handleDaysNumber}
          value={numberDays}
          name='numberDays'
          type={'number'}
        />
        <Input 
          handleChange={handleCountryCode}
          value={countryCode}
          name='countryCode'
        />
      </div>
    )
  }
}

const mapStateToProps = ({ calendar }) => {
  return {
    startDate: calendar.startDate,
    numberDays: calendar.numberDays,
    countryCode: calendar.countryCode
  }
}

const mapDispatchToProps = dispatch => {
  return {
      handleStartDate: (date) => dispatch(actionCreator.handleStartDate(date)),
      handleDaysNumber: (event) => dispatch(actionCreator.handleDaysNumber(event)),
      handleCountryCode: (event) => dispatch(actionCreator.handleCountryCode(event)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
