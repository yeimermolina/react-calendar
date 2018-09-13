import React from 'react'
import Picker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const DatePicker = ({ selectedDate, handleChange, label }) => (
  <div className='DatePicker'>
    <label>{label}:</label>
    <Picker
      selected={selectedDate}
      onChange={handleChange}
      dateFormat="DD-MM-YYYY"
    />
  </div>
)

export default DatePicker
