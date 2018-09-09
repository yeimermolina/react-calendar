import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreator from '../../store/actions/calendar'
import DaysHeader from '../../components/calendar/days-header'
import MonthHeader from '../../components/calendar/month-header'

class Calendar extends Component {
  render() {
    const { currentMonth, currentYear, onNextMonth, onPreviousMonth } = this.props
    return (
      <div className='Calendar'>
        <MonthHeader 
          year={currentYear}
          month={currentMonth}
          next={onNextMonth}
          prev={onPreviousMonth}
        />
        <DaysHeader />
      </div>
    )
  }
}

const mapStateToProps = ({ calendar }) => {
  return {
    currentYear: calendar.currentYear,
    currentMonth: calendar.currentMonth
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onNextMonth: () => dispatch(actionCreator.incrementMonth()),
      onPreviousMonth: () => dispatch(actionCreator.decrementMonth())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
