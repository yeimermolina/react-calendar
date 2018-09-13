import React, { Component } from 'react'
import { connect } from 'react-redux'
import DatePicker from '../../components/ui/date-picker'
import Input from '../../components/ui/input'
import Button from '../../components/ui/button'
import * as actionCreator from '../../store/actions/calendar'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.handleStart = this.handleStart.bind(this)
  }

  handleStart() {
    this.props.generateCalendar()
    this.props.history.push('/calendar')
  }

  render() {
    const { startDate, handleStartDate, numberDays, countryCode, handleDaysNumber, handleCountryCode } = this.props
    return (
      <div className='Menu'>
        <DatePicker 
          selectedDate={startDate}
          handleChange={handleStartDate}
          label={'Start Date'}
        />
        <Input
          handleChange={handleDaysNumber}
          value={numberDays}
          name='numberDays'
          type={'number'}
          label='Number of days'
        />
        <Input 
          handleChange={handleCountryCode}
          value={countryCode}
          name='countryCode'
          label='Country Code'
        />
        <Button 
          onClick={this.handleStart}
          content='START'
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
      generateCalendar: (event) => dispatch(actionCreator.generateCalendar(event)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
