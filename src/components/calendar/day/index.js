import React from 'react'

const Day = (props) => {
  console.log(props)
  return (
    <div className='Day'>
      {props.day.format('D')}
      {props.active && 'si'}
    </div>
  )
}

export default Day
