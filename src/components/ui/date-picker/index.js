import React from 'react'
import Picker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const DatePicker = ({ selectedDate, handleChange }) => (
  <div className='DatePicker'>
    <Picker
      selected={selectedDate}
      onChange={handleChange}
    />
  </div>
)

export default DatePicker
