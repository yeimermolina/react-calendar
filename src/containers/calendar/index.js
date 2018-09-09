import React, { Component } from 'react'
import DaysHeader from '../../components/calendar/days-header'

class Calendar extends Component {
  render() {
    return (
      <div className='Calendar'>
        <DaysHeader />
      </div>
    )
  }
}

export default Calendar
