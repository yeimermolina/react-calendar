import React, { Fragment } from 'react'

const Day = ({ day, active, isHoliday, isWeekend}) => {
  const styles = {
    backgroundColor: active 
      ? 
        isHoliday
          ? '#F6511D'
          : isWeekend
            ? '#FFB400' 
            : '#7FB800' 
      : '#4e4e3c6b'
  }
  return (
    <div className='Day' style={styles}>
      {
        active && (
          <Fragment>
            <div className='Day-number'>{day.format('D')}</div>
            {isHoliday && <div className='Day-holiday'>{isHoliday.name}</div>}
          </Fragment>
        )
      }
    </div>
  )
}

export default Day
